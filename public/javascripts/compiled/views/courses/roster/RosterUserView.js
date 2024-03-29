(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!roster', 'jquery', 'underscore', 'Backbone', 'jst/courses/roster/rosterUser', 'compiled/views/courses/roster/EditSectionsView', 'compiled/views/courses/roster/InvitationsView', 'compiled/views/courses/roster/LinkToStudentsView', 'compiled/str/underscore', 'str/htmlEscape', 'compiled/jquery.kylemenu'], function(I18n, $, _, Backbone, template, EditSectionsView, InvitationsView, LinkToStudentsView, toUnderscore, h) {
    var RosterUserView, editSectionsDialog, invitationDialog, linkToStudentsDialog, _ref;

    editSectionsDialog = null;
    linkToStudentsDialog = null;
    invitationDialog = null;
    return RosterUserView = (function(_super) {
      __extends(RosterUserView, _super);

      function RosterUserView() {
        this.blur = __bind(this.blur, this);
        this.focus = __bind(this.focus, this);
        this.handleMenuEvent = __bind(this.handleMenuEvent, this);        _ref = RosterUserView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RosterUserView.prototype.tagName = 'tr';

      RosterUserView.prototype.className = 'rosterUser al-hover-container';

      RosterUserView.prototype.template = template;

      RosterUserView.prototype.events = {
        'click .admin-links [data-event]': 'handleMenuEvent',
        'focus *': 'focus',
        'blur *': 'blur'
      };

      RosterUserView.prototype.attach = function() {
        return this.model.on('change', this.render, this);
      };

      RosterUserView.prototype.initialize = function(options) {
        var e, _i, _len, _ref1, _ref2, _results;

        RosterUserView.__super__.initialize.apply(this, arguments);
        this.model.currentRole = (_ref1 = this.model.get('enrollments')[0]) != null ? _ref1.role : void 0;
        this.$el.attr('id', "user_" + (options.model.get('id')));
        _ref2 = this.model.get('enrollments');
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          e = _ref2[_i];
          _results.push(this.$el.addClass(e.role));
        }
        return _results;
      };

      RosterUserView.prototype.toJSON = function() {
        var json;

        json = RosterUserView.__super__.toJSON.apply(this, arguments);
        this.permissionsJSON(json);
        this.observerJSON(json);
        return json;
      };

      RosterUserView.prototype.permissionsJSON = function(json) {
        var _this = this;

        json.url = "" + ENV.COURSE_ROOT_URL + "/users/" + (this.model.get('id'));
        json.isObserver = this.model.hasEnrollmentType('ObserverEnrollment');
        json.isPending = this.model.pending(this.model.currentRole);
        json.canEditSections = !_.isEmpty(this.model.sectionEditableEnrollments());
        json.canViewLoginIdColumn = ENV.permissions.manage_admin_users || ENV.permissions.manage_students;
        return json.canViewLoginId = json.canManage = _.any(['TeacherEnrollment', 'DesignerEnrollment', 'TaEnrollment'], function(et) {
          return _this.model.hasEnrollmentType(et);
        }) ? ENV.permissions.manage_admin_users : ENV.permissions.manage_students;
      };

      RosterUserView.prototype.observerJSON = function(json) {
        var en, id, ob, observerEnrollments, user, users, _i, _len, _name, _results;

        if (json.isObserver) {
          observerEnrollments = _.filter(json.enrollments, function(en) {
            return en.type === 'ObserverEnrollment';
          });
          json.enrollments = _.reject(json.enrollments, function(en) {
            return en.type === 'ObserverEnrollment';
          });
          json.sections = _.map(json.enrollments, function(en) {
            return ENV.CONTEXTS['sections'][en.course_section_id];
          });
          users = {};
          if (observerEnrollments.length === 1 && !observerEnrollments[0].observed_user) {
            users[''] = {
              name: I18n.t('nobody', 'nobody')
            };
          } else {
            for (_i = 0, _len = observerEnrollments.length; _i < _len; _i++) {
              en = observerEnrollments[_i];
              if (!en.observed_user) {
                continue;
              }
              user = en.observed_user;
              users[_name = user.id] || (users[_name] = user);
            }
          }
          _results = [];
          for (id in users) {
            user = users[id];
            ob = {
              role: I18n.t('observing_user', 'Observing: %{user_name}', {
                user_name: user.name
              })
            };
            _results.push(json.enrollments.push(ob));
          }
          return _results;
        }
      };

      RosterUserView.prototype.resendInvitation = function(e) {
        invitationDialog || (invitationDialog = new InvitationsView);
        invitationDialog.model = this.model;
        return invitationDialog.render().show();
      };

      RosterUserView.prototype.editSections = function(e) {
        editSectionsDialog || (editSectionsDialog = new EditSectionsView);
        editSectionsDialog.model = this.model;
        return editSectionsDialog.render().show();
      };

      RosterUserView.prototype.linkToStudents = function(e) {
        linkToStudentsDialog || (linkToStudentsDialog = new LinkToStudentsView);
        linkToStudentsDialog.model = this.model;
        return linkToStudentsDialog.render().show();
      };

      RosterUserView.prototype.removeFromCourse = function(e) {
        var deferreds, failure, success,
          _this = this;

        if (!confirm(I18n.t('delete_confirm', 'Are you sure you want to remove this user?'))) {
          return;
        }
        this.$el.hide();
        success = function() {
          return $.flashMessage(I18n.t('flash.removed', 'User successfully removed.'));
        };
        failure = function() {
          _this.$el.show();
          return $.flashError(I18n.t('flash.removeError', 'Unable to remove the user. Please try again later.'));
        };
        deferreds = _.map(this.model.allEnrollmentsByRole(this.model.currentRole), function(e) {
          return $.ajaxJSON("" + ENV.COURSE_ROOT_URL + "/unenroll/" + e.id, 'DELETE');
        });
        return $.when.apply($, deferreds).then(success, failure);
      };

      RosterUserView.prototype.handleMenuEvent = function(e) {
        var method;

        this.blur();
        e.preventDefault();
        method = $(e.currentTarget).data('event');
        return this[method].call(this, e);
      };

      RosterUserView.prototype.focus = function() {
        return this.$el.addClass('al-hover-container-active table-hover-row');
      };

      RosterUserView.prototype.blur = function() {
        return this.$el.removeClass('al-hover-container-active table-hover-row');
      };

      return RosterUserView;

    })(Backbone.View);
  });

}).call(this);
