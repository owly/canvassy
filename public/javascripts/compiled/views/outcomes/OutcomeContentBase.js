(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'jquery', 'underscore', 'compiled/views/ValidatedFormView', 'tinymce.editor_box', 'compiled/jquery.rails_flash_notifications', 'jquery.disableWhileLoading', 'compiled/tinymce'], function(I18n, $, _, ValidatedFormView) {
    var OutcomeContentBase, _ref;

    return OutcomeContentBase = (function(_super) {
      __extends(OutcomeContentBase, _super);

      function OutcomeContentBase() {
        this.updateTitle = __bind(this.updateTitle, this);
        this["delete"] = __bind(this["delete"], this);
        this.edit = __bind(this.edit, this);
        this.cancel = __bind(this.cancel, this);
        this.submit = __bind(this.submit, this);
        this._cleanUpTiny = __bind(this._cleanUpTiny, this);        _ref = OutcomeContentBase.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeContentBase.prototype.tagName = 'div';

      OutcomeContentBase.prototype.className = 'wrapper';

      OutcomeContentBase.prototype.events = _.extend({
        'click .edit_button': 'edit',
        'click .cancel_button': 'cancel',
        'click .delete_button': 'delete',
        'keyup input.outcome_title': 'updateTitle'
      }, ValidatedFormView.prototype.events);

      OutcomeContentBase.prototype.validations = {
        title: function(data) {
          if (_.isEmpty(data.title)) {
            return I18n.t('blank_error', 'Cannot be blank');
          }
        }
      };

      OutcomeContentBase.prototype.isValid = function() {
        var data, errorMessage, fieldName, validation, _ref1;

        this.errors = {};
        data = this.getFormData();
        _ref1 = this.validations;
        for (fieldName in _ref1) {
          validation = _ref1[fieldName];
          if (errorMessage = validation(data)) {
            this.errors[fieldName] = [
              {
                message: errorMessage
              }
            ];
          }
        }
        return _.isEmpty(this.errors);
      };

      OutcomeContentBase.prototype.initialize = function(opts) {
        var _this = this;

        this.state = opts.state;
        this._readOnly = opts.readOnly;
        this.on('success', this.success, this);
        this.on('fail', this.fail, this);
        this.setModelUrl();
        if (this.model.isAbbreviated() && this.state !== 'add') {
          this.state = 'loading';
          this.$el.disableWhileLoading(this.model.fetch({
            success: function() {
              _this.state = opts.state;
              return _this.render();
            }
          }));
        }
        return OutcomeContentBase.__super__.initialize.call(this);
      };

      OutcomeContentBase.prototype._cleanUpTiny = function() {
        return this.$el.find('[name="description"]').editorBox('destroy');
      };

      OutcomeContentBase.prototype.submit = function(e) {
        e.preventDefault();
        this.setModelUrl();
        this.getTinyMceCode();
        if (this.isValid()) {
          OutcomeContentBase.__super__.submit.call(this, e);
          this._cleanUpTiny();
          return $('.edit_button').focus();
        } else {
          return this.showErrors(this.errors);
        }
      };

      OutcomeContentBase.prototype.success = function() {
        if (this.state === 'add') {
          this.trigger('addSuccess', this.model);
          $.flashMessage(I18n.t('flash.addSuccess', 'Creation successful'));
        } else {
          $.flashMessage(I18n.t('flash.updateSuccess', 'Update successful'));
        }
        this.state = 'show';
        this.render();
        $('.edit_button').focus();
        return this;
      };

      OutcomeContentBase.prototype.fail = function() {
        return $.flashError(I18n.t('flash.error', "An error occurred. Please refresh the page and try again."));
      };

      OutcomeContentBase.prototype.getTinyMceCode = function() {
        var textarea;

        textarea = this.$('textarea');
        return textarea.val(textarea.editorBox('get_code'));
      };

      OutcomeContentBase.prototype.setModelUrl = function() {
        return this.model.setUrlTo((function() {
          switch (this.state) {
            case 'add':
              return 'add';
            case 'delete':
              return 'delete';
            default:
              return 'edit';
          }
        }).call(this));
      };

      OutcomeContentBase.prototype.getFormData = function() {
        return this.$('form').toJSON();
      };

      OutcomeContentBase.prototype.remove = function() {
        this.$el.hideErrors();
        if (this.state === 'add' && this.model.isNew()) {
          this.model.destroy();
        }
        return OutcomeContentBase.__super__.remove.apply(this, arguments);
      };

      OutcomeContentBase.prototype.cancel = function(e) {
        e.preventDefault();
        this.resetModel();
        this._cleanUpTiny();
        this.$el.hideErrors();
        if (this.state === 'add') {
          this.$el.empty();
          this.model.destroy();
          this.state = 'show';
          $('.add_outcome_link').focus();
        } else {
          this.state = 'show';
          this.render();
          $('.edit_button').focus();
        }
        return this;
      };

      OutcomeContentBase.prototype.edit = function(e) {
        e.preventDefault();
        this.state = 'edit';
        this._modelAttributes = this.model.toJSON();
        return this.render();
      };

      OutcomeContentBase.prototype["delete"] = function(e) {
        var _this = this;

        e.preventDefault();
        if (!confirm(I18n.t('confirm.delete', 'Are you sure you want to delete?'))) {
          return;
        }
        this.state = 'delete';
        this.setModelUrl();
        return this.$el.disableWhileLoading(this.model.destroy({
          success: function() {
            $.flashMessage(I18n.t('flash.deleteSuccess', 'Deletion successful'));
            _this.trigger('deleteSuccess');
            _this.remove();
            return $('.add_outcome_link').focus();
          },
          error: function() {
            return $.flashError(I18n.t('flash.deleteError', 'Something went wrong. Unable to delete at this time.'));
          }
        }));
      };

      OutcomeContentBase.prototype.resetModel = function() {
        return this.model.set(this._modelAttributes);
      };

      OutcomeContentBase.prototype.readyForm = function() {
        var _this = this;

        return setTimeout(function() {
          _this.$('textarea').editorBox();
          return _this.$('input:first').focus();
        });
      };

      OutcomeContentBase.prototype.readOnly = function() {
        return this._readOnly || !this.model.get('can_edit');
      };

      OutcomeContentBase.prototype.updateTitle = function(e) {
        return this.model.set('title', e.currentTarget.value);
      };

      return OutcomeContentBase;

    })(ValidatedFormView);
  });

}).call(this);
