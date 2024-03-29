(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!calendar', 'compiled/calendar/CommonEvent', 'jquery.instructure_date_and_time', 'jquery.instructure_misc_helpers'], function(I18n, CommonEvent) {
    var Assignment, deleteConfirmation;

    deleteConfirmation = I18n.t('prompts.delete_assignment', "Are you sure you want to delete this assignment?");
    return Assignment = (function(_super) {
      __extends(Assignment, _super);

      function Assignment(data, contextInfo) {
        this.save = __bind(this.save, this);
        this.saveDates = __bind(this.saveDates, this);
        this.copyDataFromObject = __bind(this.copyDataFromObject, this);        Assignment.__super__.constructor.apply(this, arguments);
        this.eventType = 'assignment';
        this.deleteConfirmation = deleteConfirmation;
        this.deleteURL = contextInfo.assignment_url;
        this.addClass('assignment');
      }

      Assignment.prototype.copyDataFromObject = function(data) {
        if (data.assignment) {
          data = data.assignment;
        }
        this.object = this.assignment = data;
        if (data.id) {
          this.id = "assignment_" + data.id;
        }
        this.title = data.title || data.name || "Untitled";
        this.lock_explanation = this.object.lock_explanation;
        this.addClass("group_" + (this.contextCode()));
        this.description = data.description;
        this.start = this.parseStartDate();
        if (this.start) {
          this.originalStartDate = new Date(this.start);
        }
        return Assignment.__super__.copyDataFromObject.apply(this, arguments);
      };

      Assignment.prototype.fullDetailsURL = function() {
        return this.assignment.html_url;
      };

      Assignment.prototype.startDate = function() {
        return this.originalStartDate;
      };

      Assignment.prototype.parseStartDate = function() {
        if (this.assignment.due_at) {
          return $.parseFromISO(this.assignment.due_at, 'due_date').time;
        } else {
          return null;
        }
      };

      Assignment.prototype.displayTimeString = function() {
        var date, time_string;

        if (!this.assignment.due_at) {
          return "No Date";
        }
        date = $.parseFromISO(this.assignment.due_at, 'due_date');
        time_string = "" + ($.dateString(date.date)) + " at " + date.time_string;
        return "Due: <time datetime='" + (date.time.toISOString()) + "'>" + time_string + "</time>";
      };

      Assignment.prototype.saveDates = function(success, error) {
        return this.save({
          'assignment[due_at]': $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(this.start))
        }, success, error);
      };

      Assignment.prototype.save = function(params, success, error) {
        $.publish('CommonEvent/assignmentSaved', this);
        return Assignment.__super__.save.call(this, params, success, error);
      };

      Assignment.prototype.methodAndURLForSave = function() {
        var method, url;

        if (this.isNewEvent()) {
          method = 'POST';
          url = this.contextInfo.create_assignment_url;
        } else {
          method = 'PUT';
          url = $.replaceTags(this.contextInfo.assignment_url, 'id', this.assignment.id);
        }
        return [method, url];
      };

      return Assignment;

    })(CommonEvent);
  });

}).call(this);
