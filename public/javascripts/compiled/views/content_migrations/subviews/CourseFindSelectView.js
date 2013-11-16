(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jst/content_migrations/subviews/CourseFindSelect'], function(Backbone, _, template) {
    var CourseFindSelectView, _ref;

    return CourseFindSelectView = (function(_super) {
      __extends(CourseFindSelectView, _super);

      function CourseFindSelectView() {
        this.updateSearch = __bind(this.updateSearch, this);
        this.updateSelect = __bind(this.updateSelect, this);        _ref = CourseFindSelectView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseFindSelectView.optionProperty('courses');

      CourseFindSelectView.prototype.template = template;

      CourseFindSelectView.prototype.els = {
        '#courseSearchField': '$courseSearchField',
        '#courseSelect': '$courseSelect'
      };

      CourseFindSelectView.prototype.events = {
        'change #courseSelect': 'updateSearch'
      };

      CourseFindSelectView.prototype.afterRender = function() {
        return this.$courseSearchField.autocomplete({
          source: this.autocompleteCourses(),
          select: this.updateSelect
        });
      };

      CourseFindSelectView.prototype.toJSON = function() {
        var json;

        json = CourseFindSelectView.__super__.toJSON.apply(this, arguments);
        json.courses = this.courses;
        return json;
      };

      CourseFindSelectView.prototype.autocompleteCourses = function() {
        return _.map(this.courses, function(_arg) {
          var course;

          course = _arg.course;
          return {
            label: course.name,
            id: course.id,
            value: course.name
          };
        });
      };

      CourseFindSelectView.prototype.updateSelect = function(event, ui) {
        this.setSourceCourseId(ui.item.id);
        return this.$courseSelect.val(ui.item.id);
      };

      CourseFindSelectView.prototype.updateSearch = function(event) {
        var courseObj, courses, value,
          _this = this;

        value = parseInt(event.target.value, 10);
        this.setSourceCourseId(value);
        courses = this.autocompleteCourses();
        courseObj = _.find(courses, function(course) {
          return course.id === value;
        });
        return this.$courseSearchField.val(courseObj != null ? courseObj.value : void 0);
      };

      CourseFindSelectView.prototype.setSourceCourseId = function(id) {
        return this.model.set('settings', {
          source_course_id: id
        });
      };

      CourseFindSelectView.prototype.validations = function() {
        var errors, settings;

        errors = {};
        settings = this.model.get('settings');
        if (!(settings != null ? settings.source_course_id : void 0)) {
          errors.courseSearchField = [
            {
              type: "required",
              message: "You must select a course to copy content from"
            }
          ];
        }
        return errors;
      };

      return CourseFindSelectView;

    })(Backbone.View);
  });

}).call(this);
