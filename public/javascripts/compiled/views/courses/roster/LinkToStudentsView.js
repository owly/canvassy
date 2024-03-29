(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!course_settings', 'jquery', 'underscore', 'compiled/views/DialogBaseView', 'compiled/views/courses/roster/RosterDialogMixin', 'jst/courses/roster/LinkToStudentsView', 'compiled/jquery.whenAll', 'jquery.disableWhileLoading'], function(I18n, $, _, DialogBaseView, RosterDialogMixin, linkToStudentsViewTemplate) {
    var LinkToStudentsView, _ref;

    return LinkToStudentsView = (function(_super) {
      __extends(LinkToStudentsView, _super);

      function LinkToStudentsView() {
        this.update = __bind(this.update, this);        _ref = LinkToStudentsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LinkToStudentsView.mixin(RosterDialogMixin);

      LinkToStudentsView.prototype.dialogOptions = {
        id: 'link_students',
        title: I18n.t('titles.link_to_students', 'Link to Students')
      };

      LinkToStudentsView.prototype.render = function() {
        var data, e, input, _i, _len, _ref1,
          _this = this;

        data = this.model.toJSON();
        data.studentsUrl = ENV.SEARCH_URL;
        this.$el.html(linkToStudentsViewTemplate(data));
        this.students = [];
        this.$('#student_input').contextSearch({
          contexts: ENV.CONTEXTS,
          placeholder: I18n.t('link_students_placeholder', 'Enter a student name'),
          change: function(tokens) {
            return _this.students = _.map(tokens, function(id) {
              return parseInt(id);
            });
          },
          selector: {
            baseData: {
              type: 'user',
              context: "course_" + ENV.course.id + "_students",
              exclude: [this.model.get('id')],
              skip_visibility_checks: true
            },
            noExpand: true,
            browser: {
              data: {
                per_page: 100,
                type: 'user'
              }
            }
          }
        });
        input = this.$('#student_input').data('token_input');
        input.$fakeInput.css('width', '100%');
        _ref1 = this.model.allEnrollmentsByType('ObserverEnrollment');
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          e = _ref1[_i];
          if (e.observed_user && _.any(e.observed_user.enrollments)) {
            input.addToken({
              value: e.observed_user.id,
              text: e.observed_user.name,
              data: e.observed_user
            });
          }
        }
        return this;
      };

      LinkToStudentsView.prototype.getUserData = function(id) {
        return $.get("/api/v1/courses/" + ENV.course.id + "/users/" + id, {
          include: ['enrollments']
        });
      };

      LinkToStudentsView.prototype.update = function(e) {
        var currentLinks, dfds, dfdsDone, en, enrollment, enrollments, enrollmentsToRemove, id, newDfd, newEnrollments, newLinks, removeLinks, unlinkedEnrolls, url, _i, _j, _len, _len1,
          _this = this;

        e.preventDefault();
        dfds = [];
        enrollments = this.model.allEnrollmentsByType('ObserverEnrollment');
        enrollment = enrollments[0];
        unlinkedEnrolls = _.filter(enrollments, function(en) {
          return !en.associated_user_id;
        });
        currentLinks = _.compact(_.pluck(enrollments, 'associated_user_id'));
        newLinks = _.difference(this.students, currentLinks);
        removeLinks = _.difference(currentLinks, this.students);
        newEnrollments = [];
        if (newLinks.length) {
          newDfd = $.Deferred();
          dfds.push(newDfd.promise());
          dfdsDone = 0;
        }
        for (_i = 0, _len = newLinks.length; _i < _len; _i++) {
          id = newLinks[_i];
          this.getUserData(id).done(function(user) {
            var data, sId, sections, udfds, url, _j, _len1;

            udfds = [];
            sections = _.map(user.enrollments, function(en) {
              return en.course_section_id;
            });
            for (_j = 0, _len1 = sections.length; _j < _len1; _j++) {
              sId = sections[_j];
              url = "/api/v1/sections/" + sId + "/enrollments";
              data = {
                enrollment: {
                  user_id: _this.model.get('id'),
                  associated_user_id: user.id,
                  type: enrollment.type,
                  limit_privileges_to_course_section: enrollment.limit_priveleges_to_course_section
                }
              };
              if (enrollment.role !== enrollment.type) {
                data.enrollment.role = enrollment.role;
              }
              udfds.push($.ajaxJSON(url, 'POST', data, function(newEnrollment) {
                newEnrollment.observed_user = user;
                return newEnrollments.push(newEnrollment);
              }));
            }
            return $.when.apply($, udfds).done(function() {
              dfdsDone += 1;
              if (dfdsDone === newLinks.length) {
                return newDfd.resolve();
              }
            });
          });
        }
        enrollmentsToRemove = _.filter(enrollments, function(en) {
          return _.include(removeLinks, en.associated_user_id);
        });
        for (_j = 0, _len1 = enrollmentsToRemove.length; _j < _len1; _j++) {
          en = enrollmentsToRemove[_j];
          url = "" + ENV.COURSE_ROOT_URL + "/unenroll/" + en.id;
          dfds.push($.ajaxJSON(url, 'DELETE'));
        }
        return this.disable($.when.apply($, dfds).done(function() {
          _this.updateEnrollments(newEnrollments, enrollmentsToRemove);
          return $.flashMessage(I18n.t('flash.links', 'Student links successfully updated'));
        }).fail(function() {
          return $.flashError(I18n.t('flash.linkError', "Something went wrong updating the user's student links. Please try again later."));
        }).always(function() {
          return _this.close();
        }));
      };

      return LinkToStudentsView;

    })(DialogBaseView);
  });

}).call(this);
