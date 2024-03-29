(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'i18n!registration', 'compiled/registration/registrationErrors', 'jquery.instructure_forms', 'jquery.ajaxJSON'], function($, _, Backbone, I18n, registrationErrors) {
    var SelfEnrollmentForm, _ref;

    return SelfEnrollmentForm = (function(_super) {
      __extends(SelfEnrollmentForm, _super);

      function SelfEnrollmentForm() {
        this.logOutAndRefresh = __bind(this.logOutAndRefresh, this);
        this.logOut = __bind(this.logOut, this);
        this.enroll = __bind(this.enroll, this);
        this.enrollErrors = __bind(this.enrollErrors, this);
        this.errorFormatter = __bind(this.errorFormatter, this);
        this.normalizeData = __bind(this.normalizeData, this);
        this.success = __bind(this.success, this);
        this.beforeSubmit = __bind(this.beforeSubmit, this);
        this.changeAction = __bind(this.changeAction, this);        _ref = SelfEnrollmentForm.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelfEnrollmentForm.prototype.events = {
        'change input[name=initial_action]': 'changeAction',
        'click #logout_link': 'logOutAndRefresh'
      };

      SelfEnrollmentForm.prototype.initialize = function(options) {
        this.options = options != null ? options : {};
        this.enrollUrl = this.$el.attr('action');
        this.action = this.initialAction = this.$el.find('input[type=hidden][name=initial_action]').val();
        return this.$el.formSubmit({
          beforeSubmit: this.beforeSubmit,
          success: this.success,
          errorFormatter: this.errorFormatter,
          disableWhileLoading: 'spin_on_success'
        });
      };

      SelfEnrollmentForm.prototype.changeAction = function(e) {
        this.action = $(e.target).val();
        this.$el.find('.user_info').hide();
        this.$el.find("#" + this.action + "_user_info").show();
        return this.$el.find("#submit_button").css({
          visibility: 'visible'
        });
      };

      SelfEnrollmentForm.prototype.beforeSubmit = function(data) {
        if (!this.action) {
          return false;
        }
        if (this.options.confirmEnrollmentUrl && this.action === 'enroll') {
          window.location = this.options.confirmEnrollmentUrl;
          return false;
        }
        this.normalizeData(data);
        return this.$el.attr('action', (function() {
          switch (this.action) {
            case 'create':
              return '/users';
            case 'log_in':
              return '/login';
            case 'enroll':
              return this.enrollUrl;
          }
        }).call(this));
      };

      SelfEnrollmentForm.prototype.success = function(data) {
        var q;

        if (this.action === 'enroll') {
          q = window.location.search;
          q = (q ? "" + q + "&" : "?");
          q += "enrolled=1";
          if (this.initialAction === 'create') {
            q += '&just_created=1';
          }
          return window.location.search = q;
        } else {
          return this.enroll();
        }
      };

      SelfEnrollmentForm.prototype.normalizeData = function(data) {
        var _ref1, _ref2;

        if (this.action === 'log_in') {
          data['pseudonym_session[unique_id]'] = (_ref1 = data['pseudonym[unique_id]']) != null ? _ref1 : '';
          data['pseudonym_session[password]'] = (_ref2 = data['pseudonym[password]']) != null ? _ref2 : '';
        }
        return data;
      };

      SelfEnrollmentForm.prototype.errorFormatter = function(errors) {
        var ret;

        ret = (function() {
          switch (this.action) {
            case 'create':
              return registrationErrors(errors);
            case 'log_in':
              return this.loginErrors(errors);
            case 'enroll':
              return this.enrollErrors(registrationErrors(errors));
          }
        }).call(this);
        return ret;
      };

      SelfEnrollmentForm.prototype.loginErrors = function(errors) {
        var error;

        errors = errors.base;
        error = errors[errors.length - 1].message;
        return {
          'pseudonym[password]': error
        };
      };

      SelfEnrollmentForm.prototype.enrollErrors = function(errors) {
        var _ref1;

        if (errors['user[self_enrollment_code]']) {
          if ((_ref1 = errors['pseudonym[unique_id]']) == null) {
            errors['pseudonym[unique_id]'] = [];
          }
          errors['pseudonym[unique_id]'].push(errors['user[self_enrollment_code]'][0]);
          delete errors['user[self_enrollment_code]'];
        }
        this.action = this.initialAction;
        this.logOut();
        return errors;
      };

      SelfEnrollmentForm.prototype.enroll = function() {
        this.action = 'enroll';
        return this.$el.submit();
      };

      SelfEnrollmentForm.prototype.logOut = function(refresh) {
        if (refresh == null) {
          refresh = false;
        }
        return $.ajaxJSON('/logout', 'POST', {}, function() {
          if (refresh) {
            return location.reload(true);
          }
        });
      };

      SelfEnrollmentForm.prototype.logOutAndRefresh = function(e) {
        e.preventDefault();
        return this.logOut(true);
      };

      return SelfEnrollmentForm;

    })(Backbone.View);
  });

}).call(this);
