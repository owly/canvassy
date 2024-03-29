(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!calendar', 'compiled/calendar/CommonEvent', 'jquery.instructure_date_and_time', 'jquery.instructure_misc_helpers'], function(I18n, CommonEvent) {
    var AssignmentOverride, deleteConfirmation;

    deleteConfirmation = I18n.t('prompts.delete_override', 'Are you sure you want to delete this assignment override?');
    return AssignmentOverride = (function(_super) {
      __extends(AssignmentOverride, _super);

      function AssignmentOverride(data, contextInfo) {
        this.saveDates = __bind(this.saveDates, this);
        this.copyDataFromObject = __bind(this.copyDataFromObject, this);        AssignmentOverride.__super__.constructor.apply(this, arguments);
        this.eventType = 'assignment_override';
        this.deleteConfirmation = deleteConfirmation;
        this.deleteUrl = contextInfo.assignment_url;
        this.addClass('assignment_override');
      }

      AssignmentOverride.prototype.copyDataFromObject = function(data) {
        if (data.assignment != null) {
          this.copyDataFromAssignment(data.assignment);
          this.copyDataFromOverride(data.assignment_override);
        } else {
          this.copyDataFromOverride(data);
        }
        this.title = "" + this.assignment.name + " (" + this.override.title + ")";
        this.object = this.override;
        this.addClass("group_" + (this.contextCode()));
        return AssignmentOverride.__super__.copyDataFromObject.apply(this, arguments);
      };

      AssignmentOverride.prototype.copyDataFromAssignment = function(assignment) {
        this.assignment = assignment;
        this.lock_explanation = this.assignment.lock_explanation;
        this.description = this.assignment.description;
        this.start = this.parseStartDate();
        if (this.start) {
          return this.originalStartDate = new Date(this.start);
        }
      };

      AssignmentOverride.prototype.copyDataFromOverride = function(override) {
        this.override = override;
        this.id = "override_" + this.override.id;
        return this.assignment.due_at = this.override.due_at;
      };

      AssignmentOverride.prototype.fullDetailsURL = function() {
        return this.assignment.html_url;
      };

      AssignmentOverride.prototype.startDate = function() {
        return this.originalStartDate;
      };

      AssignmentOverride.prototype.parseStartDate = function() {
        if (this.assignment.due_at) {
          return $.parseFromISO(this.assignment.due_at, 'due_date').time;
        } else {
          return null;
        }
      };

      AssignmentOverride.prototype.displayTimeString = function() {
        var date, time_string;

        if (!this.start) {
          return "No Date";
        }
        date = this.start;
        time_string = "" + ($.dateString(date)) + " at " + ($.timeString(date));
        return "Due: <time datetime='" + (date.toISOString()) + "'>" + time_string + "</time>";
      };

      AssignmentOverride.prototype.updateAssignmentTitle = function(title) {
        var titleContext;

        this.assignment.title = title;
        titleContext = this.title.match(/\(.+\)$/)[0];
        return this.title = "" + title + " " + titleContext;
      };

      AssignmentOverride.prototype.saveDates = function(success, error) {
        return this.save({
          'assignment_override[due_at]': $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(this.start))
        }, success, error);
      };

      AssignmentOverride.prototype.methodAndURLForSave = function() {
        var url;

        url = $.replaceTags(this.contextInfo.assignment_override_url, {
          assignment_id: this.assignment.id,
          id: this.override.id
        });
        return ['PUT', url];
      };

      return AssignmentOverride;

    })(CommonEvent);
  });

}).call(this);
