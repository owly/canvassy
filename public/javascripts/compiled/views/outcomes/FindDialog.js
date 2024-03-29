(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'jquery', 'underscore', 'compiled/models/OutcomeGroup', 'compiled/views/DialogBaseView', 'compiled/views/outcomes/SidebarView', 'compiled/views/outcomes/ContentView', 'jst/outcomes/browser', 'jst/outcomes/findInstructions', 'compiled/jquery.rails_flash_notifications', 'jquery.disableWhileLoading'], function(I18n, $, _, OutcomeGroup, DialogBaseView, SidebarView, ContentView, browserTemplate, instructionsTemplate) {
    var FindDialog, _ref;

    return FindDialog = (function(_super) {
      __extends(FindDialog, _super);

      function FindDialog() {
        this.showOrHideImport = __bind(this.showOrHideImport, this);
        this["import"] = __bind(this["import"], this);        _ref = FindDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FindDialog.prototype.dialogOptions = function() {
        return {
          id: 'import_dialog',
          title: this.title,
          width: 1000,
          resizable: true,
          close: function() {
            return $('.find_outcome').focus();
          },
          buttons: [
            {
              text: I18n.t('#buttons.cancel', 'Cancel'),
              click: this.cancel
            }, {
              text: I18n.t('#buttons.import', 'Import'),
              'class': 'btn-primary',
              click: this["import"]
            }
          ]
        };
      };

      FindDialog.prototype.initialize = function(opts) {
        this.selectedGroup = opts.selectedGroup;
        this.title = opts.title;
        this.shouldImport = opts.shouldImport === false ? false : true;
        this.disableGroupImport = opts.disableGroupImport;
        FindDialog.__super__.initialize.call(this);
        this.render();
        this.dialog.parent().find('.ui-dialog-buttonpane').css('margin-top', 0);
        this.sidebar = new SidebarView({
          el: this.$el.find('.outcomes-sidebar .wrapper'),
          directoryView: opts.directoryView,
          rootOutcomeGroup: opts.rootOutcomeGroup,
          readOnly: true
        });
        this.content = new ContentView({
          el: this.$el.find('.outcomes-content'),
          instructionsTemplate: instructionsTemplate,
          readOnly: true,
          setQuizMastery: opts.setQuizMastery,
          useForScoring: opts.useForScoring
        });
        this.sidebar.on('select', this.content.show);
        this.sidebar.on('select', this.showOrHideImport);
        return this.showOrHideImport();
      };

      FindDialog.prototype["import"] = function(e) {
        var dfd, model, url,
          _this = this;

        e.preventDefault();
        model = this.sidebar.selectedModel();
        if (this.content.setQuizMastery) {
          model.quizMasteryLevel = parseFloat(this.$el.find('#outcome_mastery_at').val()) || 0;
        }
        if (this.content.useForScoring) {
          model.useForScoring = this.$el.find('#outcome_use_for_scoring').prop('checked');
        }
        if (model.get('dontImport')) {
          return alert(I18n.t('dont_import', 'This group cannot be imported.'));
        }
        if (confirm(this.confirmText(model))) {
          if (!this.shouldImport) {
            this.trigger('import', model);
            this.close();
            return;
          }
          if (model instanceof OutcomeGroup) {
            url = this.selectedGroup.get('import_url');
            dfd = $.ajaxJSON(url, 'POST', {
              source_outcome_group_id: model.get('id')
            });
          } else {
            url = this.selectedGroup.get('outcomes_url');
            dfd = $.ajaxJSON(url, 'POST', {
              outcome_id: model.get('id')
            });
          }
          this.$el.disableWhileLoading(dfd);
          return $.when(dfd).done(function(response, status, deferred) {
            var importedModel;

            importedModel = model.clone();
            if (importedModel instanceof OutcomeGroup) {
              importedModel.set(response);
            } else {
              importedModel.outcomeLink = _.extend({}, model.outcomeLink);
              importedModel.outcomeGroup = response.outcome_group;
              importedModel.outcomeLink.url = response.url;
              importedModel.set({
                context_id: response.context_id,
                context_type: response.context_type
              });
            }
            _this.trigger('import', importedModel);
            _this.close();
            return $.flashMessage(I18n.t('flash.importSuccess', 'Import successful'));
          }).fail(function() {
            return $.flashError(I18n.t('flash.importError', "An error occurred while importing. Please try again later."));
          });
        }
      };

      FindDialog.prototype.render = function() {
        this.$el.html(browserTemplate({
          skipToolbar: true
        }));
        return this;
      };

      FindDialog.prototype.showOrHideImport = function() {
        var canShow, model;

        model = this.sidebar.selectedModel();
        canShow = true;
        if (!model || model.get('dontImport')) {
          canShow = false;
        } else if (model && model instanceof OutcomeGroup && this.disableGroupImport) {
          canShow = false;
        }
        return $('.ui-dialog-buttonpane .btn-primary').toggle(canShow);
      };

      FindDialog.prototype.confirmText = function(model) {
        var target;

        target = this.selectedGroup.get('title') || I18n.t('top_level', "%{context} Top Level", {
          context: this.selectedGroup.get('context_type')
        });
        if (model instanceof OutcomeGroup) {
          return I18n.t('confirm.import_group', 'Import group "%{group}" to group "%{target}"?', {
            group: model.get('title'),
            target: target
          });
        } else {
          return I18n.t('confirm.import_outcome', 'Import outcome "%{outcome}" to group "%{target}"?', {
            outcome: model.get('title'),
            target: target
          });
        }
      };

      return FindDialog;

    })(DialogBaseView);
  });

}).call(this);
