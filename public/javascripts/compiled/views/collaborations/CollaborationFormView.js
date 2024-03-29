(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!collaborations', 'Backbone', 'compiled/views/collaborations/CollaboratorPickerView'], function(I18n, _arg, CollaboratorPickerView) {
    var CollaborationFormView, View, _ref;

    View = _arg.View;
    return CollaborationFormView = (function(_super) {
      __extends(CollaborationFormView, _super);

      function CollaborationFormView() {
        _ref = CollaborationFormView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CollaborationFormView.prototype.translations = {
        errors: {
          noName: I18n.t('errors.no_name', 'Please enter a name for this collaboration.'),
          titleTooLong: I18n.t('errors.title_too_long', "Please use %{maxLength} characters or less for the name. Use the description for additional content.", {
            maxLength: ENV.TITLE_MAX_LEN
          })
        }
      };

      CollaborationFormView.prototype.events = {
        'submit': 'onSubmit',
        'click .cancel_button': 'onCancel'
      };

      CollaborationFormView.prototype.initialize = function() {
        this.cacheElements();
        this.picker = new CollaboratorPickerView({
          el: this.$collaborators
        });
        return this.titleMaxLength = ENV.TITLE_MAX_LEN;
      };

      CollaborationFormView.prototype.cacheElements = function() {
        this.$titleInput = this.$el.find('#collaboration_title');
        return this.$collaborators = this.$el.find('.collaborator_list');
      };

      CollaborationFormView.prototype.render = function(focus) {
        if (focus == null) {
          focus = true;
        }
        this.$el.show();
        if (focus) {
          this.$el.find('h2').focus();
        }
        if (this.$collaborators.is(':empty')) {
          this.picker.render();
        }
        return this;
      };

      CollaborationFormView.prototype.onSubmit = function(e) {
        var data;

        data = this.$el.getFormData();
        if (!data['collaboration[title]']) {
          e.preventDefault();
          e.stopPropagation();
          return this.raiseTitleError();
        }
        if (this.titleMaxLength && data['collaboration[title]'].length > this.titleMaxLength) {
          e.preventDefault();
          e.stopPropagation();
          return this.raiseTitleLengthError();
        }
        return setTimeout(function() {
          return window.location = window.location.pathname;
        }, 2500);
      };

      CollaborationFormView.prototype.onCancel = function(e) {
        e.preventDefault();
        this.$el.hide();
        return this.trigger('hide');
      };

      CollaborationFormView.prototype.raiseTitleError = function() {
        this.trigger('error', this.$titleInput, this.translations.errors.noName);
        return false;
      };

      CollaborationFormView.prototype.raiseTitleLengthError = function() {
        this.trigger('error', this.$titleInput, this.translations.errors.titleTooLong);
        return false;
      };

      return CollaborationFormView;

    })(View);
  });

}).call(this);
