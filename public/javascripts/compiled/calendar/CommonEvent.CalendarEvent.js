(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!calendar', 'compiled/util/semanticDateRange', 'compiled/calendar/CommonEvent', 'jquery.instructure_date_and_time', 'jquery.instructure_misc_helpers'], function(I18n, semanticDateRange, CommonEvent) {
    var CalendarEvent, deleteConfirmation;

    deleteConfirmation = I18n.t('prompts.delete_event', "Are you sure you want to delete this event?");
    return CalendarEvent = (function(_super) {
      __extends(CalendarEvent, _super);

      function CalendarEvent(data, contextInfo, actualContextInfo) {
        this.saveDates = __bind(this.saveDates, this);
        this.copyDataFromObject = __bind(this.copyDataFromObject, this);        CalendarEvent.__super__.constructor.call(this, data, contextInfo, actualContextInfo);
        this.eventType = 'calendar_event';
        this.deleteConfirmation = deleteConfirmation;
        this.deleteURL = contextInfo.calendar_event_url;
      }

      CalendarEvent.prototype.copyDataFromObject = function(data) {
        if (data.calendar_event) {
          data = data.calendar_event;
        }
        this.object = this.calendarEvent = data;
        if (data.id) {
          this.id = "calendar_event_" + data.id;
        }
        this.title = data.title || "Untitled";
        this.start = this.parseStartDate();
        if (this.start) {
          this.originalStartDate = new Date(this.start);
        }
        this.end = this.parseEndDate();
        if (this.end) {
          this.originalEndDate = new Date(this.end);
        }
        this.allDay = data.all_day;
        this.editable = true;
        this.lockedTitle = this.object.parent_event_id != null;
        this.description = data.description;
        this.addClass("group_" + (this.contextCode()));
        if (this.isAppointmentGroupEvent()) {
          this.addClass("scheduler-event");
          if (this.object.reserved) {
            this.addClass("scheduler-reserved");
          }
          if (this.object.available_slots === 0) {
            this.addClass("scheduler-full");
          }
          if (this.object.available_slots === void 0 || this.object.available_slots > 0) {
            this.addClass("scheduler-available");
          }
          this.editable = false;
        }
        return CalendarEvent.__super__.copyDataFromObject.apply(this, arguments);
      };

      CalendarEvent.prototype.startDate = function() {
        return this.originalStartDate;
      };

      CalendarEvent.prototype.endDate = function() {
        return this.originalEndDate;
      };

      CalendarEvent.prototype.parseStartDate = function() {
        if (this.calendarEvent.start_at) {
          return $.parseFromISO(this.calendarEvent.start_at).time;
        } else {
          return null;
        }
      };

      CalendarEvent.prototype.parseEndDate = function() {
        if (this.calendarEvent.end_at) {
          return $.parseFromISO(this.calendarEvent.end_at).time;
        } else {
          return null;
        }
      };

      CalendarEvent.prototype.fullDetailsURL = function() {
        var _ref;

        if (this.isAppointmentGroupEvent()) {
          return "/appointment_groups/" + this.object.appointment_group_id;
        } else {
          return $.replaceTags(this.contextInfo.calendar_event_url, 'id', (_ref = this.calendarEvent.parent_event_id) != null ? _ref : this.calendarEvent.id);
        }
      };

      CalendarEvent.prototype.displayTimeString = function() {
        var date;

        if (this.calendarEvent.all_day) {
          date = this.startDate();
          return "<time datetime='" + (date.toISOString()) + "'>" + ($.dateString(date)) + "</time>";
        } else {
          return semanticDateRange(this.calendarEvent.start_at, this.calendarEvent.end_at);
        }
      };

      CalendarEvent.prototype.saveDates = function(success, error) {
        return this.save({
          'calendar_event[start_at]': this.start ? $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(this.start)) : '',
          'calendar_event[end_at]': this.end ? $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(this.end)) : '',
          'calendar_event[all_day]': this.allDay
        }, success, error);
      };

      CalendarEvent.prototype.methodAndURLForSave = function() {
        var method, url;

        if (this.isNewEvent()) {
          method = 'POST';
          url = '/api/v1/calendar_events';
        } else {
          method = 'PUT';
          url = this.calendarEvent.url;
        }
        return [method, url];
      };

      return CalendarEvent;

    })(CommonEvent);
  });

}).call(this);
