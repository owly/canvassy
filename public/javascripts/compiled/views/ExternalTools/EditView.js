(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!external_tools', 'jst/ExternalTools/EditView', 'compiled/views/ValidatedFormView', 'compiled/jquery/fixDialogButtons'], function(I18n, template, ValidatedFormView) {
    var EditView, _ref;

    return EditView = (function(_super) {
      __extends(EditView, _super);

      function EditView() {
        this.onSaveFail = __bind(this.onSaveFail, this);        _ref = EditView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditView.prototype.template = template;

      EditView.prototype.tagName = 'form';

      EditView.prototype.id = 'external_tool_form';

      EditView.prototype.className = 'validated-form-view form-horizontal bootstrap-form';

      EditView.prototype.events = {
        'change #external_tool_config_type': 'onConfigTypeChange'
      };

      EditView.prototype.afterRender = function() {
        var _this = this;

        this.$el.dialog({
          title: I18n.t('dialog_title_edit_tool', 'Edit External Tool'),
          width: 520,
          height: "auto",
          resizable: true,
          close: function() {
            return _this.$el.remove();
          },
          buttons: [
            {
              "class": "btn-primary",
              text: I18n.t('submit', 'Submit'),
              'data-text-while-loading': I18n.t('saving', 'Saving...'),
              click: function() {
                return _this.submit();
              }
            }
          ]
        });
        this.onConfigTypeChange();
        this.$el.submit(function(e) {
          _this.submit();
          return false;
        });
        return this;
      };

      EditView.prototype.submit = function() {
        this.$el.parent().find('.btn-primary').removeClass('ui-state-hover');
        return EditView.__super__.submit.apply(this, arguments);
      };

      EditView.prototype.onConfigTypeChange = function() {
        var configType;

        configType = this.$('#external_tool_config_type').val();
        this.$('.config_type').hide().attr('aria-expanded', false);
        return this.$(".config_type." + configType).show().attr('aria-expanded', true);
      };

      EditView.prototype.showErrors = function(errors) {
        var $input, field, fieldName, html, message, _results;

        this.removeErrors();
        _results = [];
        for (fieldName in errors) {
          field = errors[fieldName];
          $input = this.findField(fieldName);
          html = ((function() {
            var _i, _len, _results1;

            _results1 = [];
            for (_i = 0, _len = field.length; _i < _len; _i++) {
              message = field[_i].message;
              _results1.push(this.translations[message] || message);
            }
            return _results1;
          }).call(this)).join('</p><p>');
          _results.push(this.addError($input, html));
        }
        return _results;
      };

      EditView.prototype.removeErrors = function() {
        this.$('.error .help-inline').remove();
        this.$('.control-group').removeClass('error');
        return this.$('.alert.alert-error').remove();
      };

      EditView.prototype.addError = function(input, message) {
        input = $(input);
        input.parents('.control-group').addClass('error');
        input.after("<span class='help-inline'>" + message + "</span>");
        return input.one('keypress', function() {
          $(this).parents('.control-group').removeClass('error');
          return $(this).parents('.control-group').find('.help-inline').remove();
        });
      };

      EditView.prototype.onSaveFail = function(xhr) {
        var message;

        EditView.__super__.onSaveFail.apply(this, arguments);
        message = I18n.t('generic_error', 'There was an error in processing your request');
        return this.$el.prepend("<div class='alert alert-error'>" + message + "</span>");
      };

      return EditView;

    })(ValidatedFormView);
  });

}).call(this);
