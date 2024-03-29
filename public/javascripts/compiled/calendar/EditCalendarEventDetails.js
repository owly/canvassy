(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'compiled/calendar/commonEventFactory', 'compiled/calendar/TimeBlockList', 'jst/calendar/editCalendarEvent', 'jquery.instructure_date_and_time', 'jquery.instructure_forms', 'jquery.instructure_misc_helpers', 'vendor/date'], function($, commonEventFactory, TimeBlockList, editCalendarEventTemplate) {
    var EditCalendarEventDetails;

    return EditCalendarEventDetails = (function() {
      function EditCalendarEventDetails(selector, event, contextChangeCB, closeCB) {
        this.event = event;
        this.contextChangeCB = contextChangeCB;
        this.closeCB = closeCB;
        this.formSubmit = __bind(this.formSubmit, this);
        this.setupTimeAndDatePickers = __bind(this.setupTimeAndDatePickers, this);
        this.contextChange = __bind(this.contextChange, this);
        this.setContext = __bind(this.setContext, this);
        this.moreOptionsClick = __bind(this.moreOptionsClick, this);
        this.activate = __bind(this.activate, this);
        this.currentContextInfo = null;
        this.form = $(editCalendarEventTemplate({
          title: this.event.title,
          contexts: this.event.possibleContexts(),
          lockedTitle: this.event.lockedTitle
        }));
        $(selector).append(this.form);
        this.setupTimeAndDatePickers();
        this.form.submit(this.formSubmit);
        this.form.find(".more_options_link").click(this.moreOptionsClick);
        this.form.find("select.context_id").change(this.contextChange);
        this.form.find("select.context_id").triggerHandler('change', false);
        if (!this.event.isNewEvent()) {
          this.form.find(".context_select").hide();
        }
      }

      EditCalendarEventDetails.prototype.contextInfoForCode = function(code) {
        var context, _i, _len, _ref;

        _ref = this.event.possibleContexts();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          context = _ref[_i];
          if (context.asset_string === code) {
            return context;
          }
        }
        return null;
      };

      EditCalendarEventDetails.prototype.activate = function() {
        return this.form.find("select.context_id").change();
      };

      EditCalendarEventDetails.prototype.moreOptionsClick = function(jsEvent) {
        var data, params, pieces;

        if (this.event.object.parent_event_id) {
          return;
        }
        jsEvent.preventDefault();
        pieces = $(jsEvent.target).attr('href').split("#");
        data = $("#edit_calendar_event_form").getFormData({
          object_name: 'calendar_event'
        });
        params = {};
        if (data.title) {
          params['title'] = data.title;
        }
        if (data.date) {
          params['start_at'] = "" + data.date + " " + (data.start_time || '');
          params['end_at'] = "" + data.date + " " + (data.end_time || '');
        }
        params['return_to'] = window.location.href;
        pieces[0] += "?" + $.param(params);
        return window.location.href = pieces.join("#");
      };

      EditCalendarEventDetails.prototype.setContext = function(newContext) {
        return this.form.find("select.context_id").val(newContext).triggerHandler('change', false);
      };

      EditCalendarEventDetails.prototype.contextChange = function(jsEvent, propagate) {
        var context, moreOptionsHref;

        context = $(jsEvent.target).val();
        this.currentContextInfo = this.contextInfoForCode(context);
        this.event.contextInfo = this.currentContextInfo;
        if (this.currentContextInfo === null) {
          return;
        }
        if (propagate !== false) {
          this.contextChangeCB(context);
        }
        moreOptionsHref = null;
        if (this.event.isNewEvent()) {
          moreOptionsHref = this.currentContextInfo.new_calendar_event_url;
        } else {
          moreOptionsHref = this.event.fullDetailsURL() + '/edit';
        }
        return this.form.find(".more_options_link").attr('href', moreOptionsHref);
      };

      EditCalendarEventDetails.prototype.setupTimeAndDatePickers = function() {
        var endDate, startDate,
          _this = this;

        this.form.find(".date_field").date_field();
        this.form.find(".time_field").time_field().blur(function(jsEvent) {
          var endDate, end_time, startDate, start_time;

          start_time = _this.form.find(".time_field.start_time").next(".datetime_suggest").text();
          if (_this.form.find(".time_field.start_time").next(".datetime_suggest").hasClass('invalid_datetime')) {
            start_time = null;
          }
          if (start_time == null) {
            start_time = _this.form.find(".time_field.start_time").val();
          }
          end_time = _this.form.find(".time_field.end_time").next(".datetime_suggest").text();
          if (_this.form.find(".time_field.end_time").next(".datetime_suggest").hasClass('invalid_datetime')) {
            end_time = null;
          }
          if (end_time == null) {
            end_time = _this.form.find(".time_field.end_time").val();
          }
          startDate = Date.parse(start_time);
          endDate = Date.parse(end_time);
          startDate = startDate || endDate;
          endDate = endDate || startDate;
          if ($(jsEvent.target).hasClass('end_time')) {
            if (startDate > endDate) {
              startDate = endDate;
            }
          } else {
            if (endDate < startDate) {
              endDate = startDate;
            }
          }
          if (startDate) {
            _this.form.find(".time_field.start_time").val(startDate.toString('h:mmtt').toLowerCase());
          }
          if (endDate) {
            return _this.form.find(".time_field.end_time").val(endDate.toString('h:mmtt').toLowerCase());
          }
        });
        startDate = this.event.startDate();
        endDate = this.event.endDate();
        if (!this.event.allDay) {
          if (startDate) {
            this.form.find(".time_field.start_time").val(startDate.toString('h:mmtt')).change().blur();
          }
          if (endDate) {
            this.form.find(".time_field.end_time").val(endDate.toString('h:mmtt')).change().blur();
          }
        }
        if (startDate) {
          return this.form.find(".date_field").val(startDate.toString('MMM d, yyyy')).change();
        }
      };

      EditCalendarEventDetails.prototype.formSubmit = function(jsEvent) {
        var data, end_date, newEvent, objectData, params, start_date, _ref, _ref1;

        jsEvent.preventDefault();
        data = this.form.getFormData({
          object_name: 'calendar_event'
        });
        if (data.date) {
          start_date = Date.parse("" + data.date + " " + data.start_time);
          if ((_ref = data.end_time) == null) {
            data.end_time = data.start_time;
          }
          end_date = Date.parse("" + data.date + " " + data.end_time);
        } else {
          start_date = null;
          end_date = null;
        }
        params = {
          'calendar_event[title]': (_ref1 = data.title) != null ? _ref1 : this.event.title,
          'calendar_event[start_at]': start_date ? $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(start_date)) : '',
          'calendar_event[end_at]': end_date ? $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(end_date)) : ''
        };
        if (this.event.isNewEvent()) {
          params['calendar_event[context_code]'] = data.context_code;
          objectData = {
            calendar_event: {
              title: params['calendar_event[title]'],
              start_at: start_date ? $.dateToISO8601UTC(start_date) : null,
              end_at: end_date ? $.dateToISO8601UTC(end_date) : null,
              context_code: this.form.find(".context_id").val()
            }
          };
          newEvent = commonEventFactory(objectData, this.event.possibleContexts());
          newEvent.save(params);
        } else {
          this.event.title = params['calendar_event[title]'];
          this.event.start = start_date;
          this.event.end = end_date;
          this.event.save(params);
        }
        return this.closeCB();
      };

      return EditCalendarEventDetails;

    })();
  });

}).call(this);
