(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['Backbone', 'compiled/views/ValidatedMixin', 'jquery', 'underscore', 'compiled/fn/preventDefault', 'i18n!errors', 'jquery.toJSON', 'jquery.disableWhileLoading', 'jquery.instructure_forms'], function(Backbone, ValidatedMixin, $, _, preventDefault, I18n) {
    var ValidatedFormView, _ref;

    return ValidatedFormView = (function(_super) {
      __extends(ValidatedFormView, _super);

      function ValidatedFormView() {
        this.onSaveFail = __bind(this.onSaveFail, this);
        this.onSaveSuccess = __bind(this.onSaveSuccess, this);        _ref = ValidatedFormView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ValidatedFormView.mixin(ValidatedMixin);

      ValidatedFormView.prototype.tagName = 'form';

      ValidatedFormView.prototype.className = 'validated-form-view';

      ValidatedFormView.prototype.events = {
        submit: 'submit'
      };

      ValidatedFormView.prototype.submit = function(event) {
        var data, disablingDfd, errors, saveDfd;

        if (event != null) {
          event.preventDefault();
        }
        this.hideErrors();
        data = this.getFormData();
        errors = this.validateBeforeSave(data, {});
        if (_.keys(errors).length === 0) {
          disablingDfd = new $.Deferred();
          saveDfd = this.saveFormData(data);
          saveDfd.then(this.onSaveSuccess, this.onSaveFail);
          saveDfd.fail(function() {
            return disablingDfd.reject();
          });
          if (!this.dontRenableAfterSaveSuccess) {
            saveDfd.done(function() {
              return disablingDfd.resolve();
            });
          }
          this.$el.disableWhileLoading(disablingDfd);
          this.trigger('submit');
          return saveDfd;
        } else {
          this.showErrors(errors);
          return null;
        }
      };

      ValidatedFormView.prototype.getFormData = function() {
        return this.$el.toJSON();
      };

      ValidatedFormView.prototype.saveFormData = function(data) {
        var model, saveOpts;

        if (data == null) {
          data = null;
        }
        model = this.model;
        data || (data = this.getFormData());
        saveOpts = this.saveOpts;
        return model.save(data, saveOpts);
      };

      ValidatedFormView.prototype.validate = function(opts) {
        var data, errors;

        if (opts == null) {
          opts = {};
        }
        opts || (opts = {});
        data = opts['data'] || this.getFormData();
        errors = this.validateFormData(data, {});
        this.hideErrors();
        this.showErrors(errors);
        return errors.length === 0;
      };

      ValidatedFormView.prototype.validateFormData = function(data) {
        return {};
      };

      ValidatedFormView.prototype.validateBeforeSave = function(data) {
        return this.validateFormData(data);
      };

      ValidatedFormView.prototype.hideErrors = function() {
        return this.$el.hideErrors();
      };

      ValidatedFormView.prototype.onSaveSuccess = function() {
        return this.trigger.apply(this, ['success'].concat(__slice.call(arguments)));
      };

      ValidatedFormView.prototype.onSaveFail = function(xhr) {
        var errors;

        errors = this.parseErrorResponse(xhr);
        errors || (errors = {});
        this.showErrors(errors);
        return this.trigger.apply(this, ['fail', errors].concat(__slice.call(arguments)));
      };

      ValidatedFormView.prototype.parseErrorResponse = function(response) {
        var error;

        if (response.status === 422) {
          return {
            authenticity_token: "invalid"
          };
        } else {
          try {
            return $.parseJSON(response.responseText).errors;
          } catch (_error) {
            error = _error;
            return {};
          }
        }
      };

      ValidatedFormView.prototype.translations = {
        required: I18n.t("required", "Required"),
        blank: I18n.t("blank", "Required")
      };

      ValidatedFormView.prototype.fieldSelectors = null;

      ValidatedFormView.prototype.findField = function(field) {
        var $el, selector, _ref1;

        selector = ((_ref1 = this.fieldSelectors) != null ? _ref1[field] : void 0) || ("[name='" + field + "']");
        $el = this.$(selector);
        if ($el.data('rich_text')) {
          $el = $el.next('.mceEditor').find(".mceIframeContainer");
        }
        return $el;
      };

      return ValidatedFormView;

    })(Backbone.View);
  });

}).call(this);
