(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!course_settings', 'jquery', 'underscore', 'compiled/views/DialogBaseView', 'compiled/views/courses/roster/RosterDialogMixin', 'jst/courses/roster/EditSectionsView', 'jst/courses/roster/section', 'compiled/widget/ContextSearch', 'str/htmlEscape', 'compiled/jquery.rails_flash_notifications', 'jquery.disableWhileLoading'], function(I18n, $, _, DialogBaseView, RosterDialogMixin, editSectionsViewTemplate, sectionTemplate, ContextSearch, h) {
    var EditSectionsView, _ref;

    return EditSectionsView = (function(_super) {
      __extends(EditSectionsView, _super);

      function EditSectionsView() {
        this.update = __bind(this.update, this);        _ref = EditSectionsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditSectionsView.mixin(RosterDialogMixin);

      EditSectionsView.prototype.events = {
        'click #user_sections li a': 'removeSection'
      };

      EditSectionsView.prototype.dialogOptions = {
        id: 'edit_sections',
        title: I18n.t('titles.section_enrollments', 'Section Enrollments')
      };

      EditSectionsView.prototype.render = function() {
        this.$el.html(editSectionsViewTemplate({
          sectionsUrl: ENV.SEARCH_URL
        }));
        this.setupContextSearch();
        return this;
      };

      EditSectionsView.prototype.setupContextSearch = function() {
        var $sections, e, input, section, _i, _len, _ref1, _results,
          _this = this;

        this.$('#section_input').contextSearch({
          contexts: ENV.CONTEXTS,
          placeholder: I18n.t('edit_sections_placeholder', 'Enter a section name'),
          added: function(data, $token, newToken) {
            return _this.$('#user_sections').append($token);
          },
          selector: {
            baseData: {
              type: 'section',
              context: "course_" + ENV.course.id + "_sections",
              exclude: _.map(this.model.sectionEditableEnrollments(), function(e) {
                return "section_" + e.course_section_id;
              })
            },
            noExpand: true,
            browser: {
              data: {
                per_page: 100,
                type: 'section',
                search_all_contexts: true
              }
            }
          }
        });
        input = this.$('#section_input').data('token_input');
        input.$fakeInput.css('width', '100%');
        input.tokenValues = function() {
          var _i, _len, _ref1, _results;

          _ref1 = _this.$('#user_sections input');
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            input = _ref1[_i];
            _results.push(input.value);
          }
          return _results;
        };
        $sections = this.$('#user_sections');
        _ref1 = this.model.sectionEditableEnrollments();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          e = _ref1[_i];
          if (section = ENV.CONTEXTS['sections'][e.course_section_id]) {
            _results.push($sections.append(sectionTemplate({
              id: section.id,
              name: section.name,
              role: e.role
            })));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      EditSectionsView.prototype.update = function(e) {
        var currentIds, data, deferreds, en, enrollment, enrollmentsToRemove, id, newEnrollments, newSections, sectionIds, sectionsToRemove, url, _i, _j, _len, _len1,
          _this = this;

        e.preventDefault();
        enrollment = this.model.findEnrollmentByRole(this.model.currentRole);
        currentIds = _.map(this.model.sectionEditableEnrollments(), function(en) {
          return en.course_section_id;
        });
        sectionIds = _.map($('#user_sections').find('input'), function(i) {
          return parseInt($(i).val().split('_')[1]);
        });
        newSections = _.reject(sectionIds, function(i) {
          return _.include(currentIds, i);
        });
        newEnrollments = [];
        deferreds = [];
        for (_i = 0, _len = newSections.length; _i < _len; _i++) {
          id = newSections[_i];
          url = "/api/v1/sections/" + id + "/enrollments";
          data = {
            enrollment: {
              user_id: this.model.get('id'),
              type: enrollment.type,
              limit_privileges_to_course_section: enrollment.limit_priveleges_to_course_section
            }
          };
          if (enrollment.role !== enrollment.type) {
            data.enrollment.role = enrollment.role;
          }
          deferreds.push($.ajaxJSON(url, 'POST', data, function(newEnrollment) {
            return newEnrollments.push(newEnrollment);
          }));
        }
        sectionsToRemove = _.difference(currentIds, sectionIds);
        enrollmentsToRemove = _.filter(this.model.sectionEditableEnrollments(), function(en) {
          return _.include(sectionsToRemove, en.course_section_id);
        });
        for (_j = 0, _len1 = enrollmentsToRemove.length; _j < _len1; _j++) {
          en = enrollmentsToRemove[_j];
          url = "" + ENV.COURSE_ROOT_URL + "/unenroll/" + en.id;
          deferreds.push($.ajaxJSON(url, 'DELETE'));
        }
        return this.disable($.when.apply($, deferreds).done(function() {
          _this.updateEnrollments(newEnrollments, enrollmentsToRemove);
          return $.flashMessage(I18n.t('flash.sections', 'Section enrollments successfully updated'));
        }).fail(function() {
          return $.flashError(I18n.t('flash.sectionError', "Something went wrong updating the user's sections. Please try again later."));
        }).always(function() {
          return _this.close();
        }));
      };

      EditSectionsView.prototype.removeSection = function(e) {
        var $token;

        $token = $(e.currentTarget).closest('li');
        if ($token.closest('ul').children().length > 1) {
          return $token.remove();
        }
      };

      return EditSectionsView;

    })(DialogBaseView);
  });

}).call(this);
