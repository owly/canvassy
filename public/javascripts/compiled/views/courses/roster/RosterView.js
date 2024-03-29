(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!roster', 'Backbone', 'jst/courses/roster/index', 'compiled/views/ValidatedMixin'], function(I18n, Backbone, template, ValidatedMixin) {
    var RosterView, _ref;

    return RosterView = (function(_super) {
      __extends(RosterView, _super);

      function RosterView() {
        this.onFail = __bind(this.onFail, this);
        this.fetch = __bind(this.fetch, this);
        this.fetchOnCreateUsersClose = __bind(this.fetchOnCreateUsersClose, this);        _ref = RosterView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RosterView.mixin(ValidatedMixin);

      RosterView.child('usersView', '[data-view=users]');

      RosterView.child('inputFilterView', '[data-view=inputFilter]');

      RosterView.child('roleSelectView', '[data-view=roleSelect]');

      RosterView.child('createUsersView', '[data-view=createUsers]');

      RosterView.child('resendInvitationsView', '[data-view=resendInvitations]');

      RosterView.optionProperty('roles');

      RosterView.optionProperty('permissions');

      RosterView.optionProperty('course');

      RosterView.prototype.template = template;

      RosterView.prototype.els = {
        '#addUsers': '$addUsersButton'
      };

      RosterView.prototype.afterRender = function() {
        this.createUsersView.hide();
        return this.createUsersView.setTrigger(this.$addUsersButton);
      };

      RosterView.prototype.attach = function() {
        this.collection.on('setParam deleteParam', this.fetch);
        return this.createUsersView.on('close', this.fetchOnCreateUsersClose);
      };

      RosterView.prototype.fetchOnCreateUsersClose = function() {
        if (this.createUsersView.hasUsers()) {
          return this.collection.fetch();
        }
      };

      RosterView.prototype.fetch = function() {
        var _ref1;

        if ((_ref1 = this.lastRequest) != null) {
          _ref1.abort();
        }
        return this.lastRequest = this.collection.fetch().fail(this.onFail);
      };

      RosterView.prototype.toJSON = function() {
        return this;
      };

      RosterView.prototype.onFail = function(xhr) {
        var message, parsed;

        if (xhr.statusText === 'abort') {
          return;
        }
        parsed = $.parseJSON(xhr.responseText);
        message = (parsed != null ? parsed.message : void 0) === "search_term of 3 or more characters is required" ? I18n.t('greater_than_three', 'Please enter a search term with three or more characters') : I18n.t('unknown_error', 'Something went wrong with your search, please try again.');
        return this.showErrors({
          search_term: [
            {
              message: message
            }
          ]
        });
      };

      return RosterView;

    })(Backbone.View);
  });

}).call(this);
