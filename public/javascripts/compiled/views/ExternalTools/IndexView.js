(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'i18n!external_tools', 'str/htmlEscape', 'jst/ExternalTools/IndexView', 'compiled/views/ExternalTools/AddAppView', 'compiled/views/ExternalTools/EditView', 'compiled/views/ExternalTools/AppFullView', 'compiled/models/ExternalTool'], function($, I18n, htmlEscape, template, AddAppView, EditView, AppFullView, ExternalTool) {
    var IndexView, _ref;

    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        this.filterApps = __bind(this.filterApps, this);
        this.onToolSync = __bind(this.onToolSync, this);
        this.showAppCenterView = __bind(this.showAppCenterView, this);
        this.showExternalToolsView = __bind(this.showExternalToolsView, this);
        this.hideAppCenterView = __bind(this.hideAppCenterView, this);
        this.hideExternalToolsView = __bind(this.hideExternalToolsView, this);        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.child('appCenterView', '[data-view=appCenter]');

      IndexView.child('externalToolsView', '[data-view=externalTools]');

      IndexView.prototype.template = template;

      IndexView.prototype.els = {
        '.view_tools_link': '$viewToolsLink',
        '.view_app_center_link': '$viewAppCenterLink',
        '.add_tool_link': '$addToolLink',
        '#app_center_filter': '$appCenterFilter',
        '[data-view=appFull]': '$appFull'
      };

      IndexView.prototype.events = {
        'click .view_tools_link': 'showExternalToolsView',
        'click .view_app_center_link': 'showAppCenterView',
        'click .app': 'showAppFullView',
        'click .add_tool_link': 'addTool',
        'click [data-edit-external-tool]': 'editTool',
        'click [data-delete-external-tool]': 'deleteTool',
        'change #app_center_filter': 'filterApps',
        'keyup #app_center_filter': 'filterApps'
      };

      IndexView.prototype.currentAppCenterPosition = 0;

      IndexView.prototype.afterRender = function() {
        if (this.options.appCenterEnabled) {
          this.appCenterView.collection.fetch();
          return this.showAppCenterView();
        } else {
          return this.showExternalToolsView();
        }
      };

      IndexView.prototype.hideExternalToolsView = function() {
        this.externalToolsView.hide();
        this.$viewToolsLink.show();
        return this.$addToolLink.hide();
      };

      IndexView.prototype.hideAppCenterView = function() {
        this.currentAppCenterPosition = $(document).scrollTop();
        this.appCenterView.hide();
        this.$appCenterFilter.hide();
        if (this.options.appCenterEnabled) {
          return this.$viewAppCenterLink.show();
        }
      };

      IndexView.prototype.removeAppFullView = function() {
        if (this.appFullView) {
          return this.appFullView.remove();
        }
      };

      IndexView.prototype.showExternalToolsView = function() {
        this.removeAppFullView();
        this.hideAppCenterView();
        if (!this.options.appCenterEnabled) {
          this.$viewAppCenterLink.hide();
        }
        this.$viewToolsLink.hide();
        this.$addToolLink.show();
        this.externalToolsView.collection.fetch();
        return this.externalToolsView.show();
      };

      IndexView.prototype.showAppCenterView = function() {
        this.removeAppFullView();
        this.hideExternalToolsView();
        this.$viewAppCenterLink.hide();
        this.appCenterView.show();
        this.$appCenterFilter.show();
        return $(document).scrollTop(this.currentAppCenterPosition);
      };

      IndexView.prototype.showAppFullView = function(event) {
        var view;

        this.hideExternalToolsView();
        this.hideAppCenterView();
        view = this.$(event.currentTarget).data('view');
        this.appFullView = new AppFullView({
          model: view.model
        });
        this.appFullView.on('cancel', this.showAppCenterView, this);
        this.appFullView.on('addApp', this.addApp, this);
        this.appFullView.render();
        return this.$appFull.append(this.appFullView.$el);
      };

      IndexView.prototype.addApp = function() {
        var newTool;

        newTool = new ExternalTool;
        newTool.on('sync', this.onToolSync);
        return this.addAppView = new AddAppView({
          app: this.appFullView.model,
          model: newTool
        }).render();
      };

      IndexView.prototype.addTool = function() {
        var newTool;

        newTool = new ExternalTool;
        newTool.on('sync', this.onToolSync);
        return this.editView = new EditView({
          model: newTool
        }).render();
      };

      IndexView.prototype.editTool = function(event) {
        var tool, view;

        view = this.$(event.currentTarget).closest('.external_tool_item').data('view');
        tool = view.model;
        tool.on('sync', this.onToolSync);
        return this.editView = new EditView({
          model: tool
        }).render();
      };

      IndexView.prototype.onToolSync = function(model) {
        if (this.addAppView) {
          this.addAppView.remove();
        }
        if (this.editView) {
          this.editView.remove();
        }
        this.showExternalToolsView();
        return $.flashMessage(htmlEscape(I18n.t('app_saved_message', "%{app} saved successfully!", {
          app: model.get('name')
        })));
      };

      IndexView.prototype.filterApps = function(event) {
        this.appCenterView.filterText = this.$appCenterFilter.val();
        return this.appCenterView.render();
      };

      IndexView.prototype.deleteTool = function(event) {
        var dialog, msg, tool, view,
          _this = this;

        view = this.$(event.currentTarget).closest('.external_tool_item').data('view');
        tool = view.model;
        msg = I18n.t('remove_tool', "Are you sure you want to remove this tool?");
        return dialog = $("<div>" + msg + "</div>").dialog({
          modal: true,
          resizable: false,
          title: I18n.t('delete', 'Delete') + ' ' + tool.get('name') + '?',
          buttons: [
            {
              text: I18n.t('buttons.cancel', 'Cancel'),
              click: function() {
                return dialog.dialog('close');
              }
            }, {
              text: I18n.t('buttons.delete', 'Delete'),
              click: function() {
                tool.destroy();
                _this.externalToolsView.collection.fetch();
                return dialog.dialog('close');
              }
            }
          ]
        });
      };

      return IndexView;

    })(Backbone.View);
  });

}).call(this);
