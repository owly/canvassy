(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'i18n!notifications_search', 'jst/accounts/admin_tools/commMessagesSearchForm', 'compiled/collections/CommMessageCollection', 'compiled/views/ValidatedMixin', 'jquery.ajaxJSON'], function(Backbone, $, I18n, template, CommMessageCollection, ValidatedMixin) {
    var CommMessagesSearchFormView, _ref;

    return CommMessagesSearchFormView = (function(_super) {
      __extends(CommMessagesSearchFormView, _super);

      function CommMessagesSearchFormView() {
        _ref = CommMessagesSearchFormView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommMessagesSearchFormView.mixin(ValidatedMixin);

      CommMessagesSearchFormView.prototype.tagName = 'form';

      CommMessagesSearchFormView.prototype.template = template;

      CommMessagesSearchFormView.prototype.events = {
        'submit': 'submit'
      };

      CommMessagesSearchFormView.prototype.els = {
        '#userIdSearchField': '$userIdSearchField',
        '#dateStartSearchField': '$dateStartSearchField',
        '#dateEndSearchField': '$dateEndSearchField'
      };

      CommMessagesSearchFormView.prototype.afterRender = function() {
        this.$dateStartSearchField.datetime_field();
        return this.$dateEndSearchField.datetime_field();
      };

      CommMessagesSearchFormView.prototype.validityCheck = function() {
        var errors, json, valid;

        json = this.$el.toJSON();
        valid = true;
        errors = {};
        if (!json.user_id) {
          valid = false;
          errors['user_id'] = [
            {
              type: 'required',
              message: I18n.t('cant_be_blank', "Canvas User ID can't be blank")
            }
          ];
        }
        if (json.start_time && json.end_time && (json.start_time > json.end_time)) {
          valid = false;
          errors['end_time'] = [
            {
              type: 'invalid',
              message: I18n.t('cant_come_before_from', "'To Date' can't come before 'From Date'")
            }
          ];
        }
        this.showErrors(errors);
        return valid;
      };

      CommMessagesSearchFormView.prototype.submit = function(event) {
        event.preventDefault();
        if (this.validityCheck()) {
          return this.updateCollection();
        }
      };

      CommMessagesSearchFormView.prototype.updateCollection = function() {
        var json;

        json = this.$el.toJSON();
        if (!json.start_time) {
          json.start_time = '';
        }
        if (!json.end_time) {
          json.end_time = '';
        }
        return this.collection.setParams(json);
      };

      return CommMessagesSearchFormView;

    })(Backbone.View);
  });

}).call(this);
