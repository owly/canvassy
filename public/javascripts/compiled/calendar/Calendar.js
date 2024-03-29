(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!calendar', 'jquery', 'underscore', 'compiled/userSettings', 'compiled/util/hsvToRgb', 'jst/calendar/calendarApp', 'compiled/calendar/EventDataSource', 'compiled/calendar/commonEventFactory', 'compiled/calendar/ShowEventDetailsDialog', 'compiled/calendar/EditEventDetailsDialog', 'compiled/calendar/Scheduler', 'compiled/calendar/CalendarDefaults', 'vendor/fullcalendar', 'jquery.instructure_misc_helpers', 'jquery.instructure_misc_plugins', 'vendor/jquery.ba-tinypubsub', 'jqueryui/button'], function(I18n, $, _, userSettings, hsvToRgb, calendarAppTemplate, EventDataSource, commonEventFactory, ShowEventDetailsDialog, EditEventDetailsDialog, Scheduler, calendarDefaults) {
    var Calendar;

    return Calendar = (function() {
      var $styleContainer, cssColor, hues;

      function Calendar(selector, contexts, manageContexts, dataSource, options) {
        var context, data, date, fullCalendarParams, radioId, weekColumnFormatter, _ref, _ref1,
          _this = this;

        this.contexts = contexts;
        this.manageContexts = manageContexts;
        this.dataSource = dataSource;
        this.options = options;
        this.dataFromDocumentHash = __bind(this.dataFromDocumentHash, this);
        this.loadView = __bind(this.loadView, this);
        this.refetchEvents = __bind(this.refetchEvents, this);
        this.ajaxEnded = __bind(this.ajaxEnded, this);
        this.ajaxStarted = __bind(this.ajaxStarted, this);
        this.visibleContextListChanged = __bind(this.visibleContextListChanged, this);
        this.updateOverrides = __bind(this.updateOverrides, this);
        this.eventSaveFailed = __bind(this.eventSaveFailed, this);
        this.eventSaved = __bind(this.eventSaved, this);
        this.eventSaving = __bind(this.eventSaving, this);
        this.eventDeleted = __bind(this.eventDeleted, this);
        this.eventDeleting = __bind(this.eventDeleting, this);
        this.reloadClick = __bind(this.reloadClick, this);
        this.fragmentChange = __bind(this.fragmentChange, this);
        this.drop = __bind(this.drop, this);
        this.viewDisplay = __bind(this.viewDisplay, this);
        this.dayClick = __bind(this.dayClick, this);
        this.eventClick = __bind(this.eventClick, this);
        this.addEventClick = __bind(this.addEventClick, this);
        this.eventResize = __bind(this.eventResize, this);
        this.eventDrop = __bind(this.eventDrop, this);
        this.eventResizeStart = __bind(this.eventResizeStart, this);
        this.eventDragStart = __bind(this.eventDragStart, this);
        this.eventAfterRender = __bind(this.eventAfterRender, this);
        this.eventRender = __bind(this.eventRender, this);
        this.windowResize = __bind(this.windowResize, this);
        this.getEvents = __bind(this.getEvents, this);
        this.contextCodes = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = contexts.length; _i < _len; _i++) {
            context = contexts[_i];
            _results.push(context.asset_string);
          }
          return _results;
        })();
        this.visibleContextList = [];
        this.displayAppointmentEvents = null;
        this.activateEvent = (_ref = this.options) != null ? _ref.activateEvent : void 0;
        this.activeAjax = 0;
        $.subscribe({
          "CommonEvent/eventDeleting": this.eventDeleting,
          "CommonEvent/eventDeleted": this.eventDeleted,
          "CommonEvent/eventSaving": this.eventSaving,
          "CommonEvent/eventSaved": this.eventSaved,
          "CommonEvent/eventSaveError": this.eventSaveFailed,
          "Calendar/visibleContextListChanged": this.visibleContextListChanged,
          "EventDataSource/ajaxStarted": this.ajaxStarted,
          "EventDataSource/ajaxEnded": this.ajaxEnded,
          "Calendar/refetchEvents": this.refetchEvents,
          'CommonEvent/assignmentSaved': this.updateOverrides
        });
        weekColumnFormatter = "'<span class=\"agenda-col-wrapper\">\n  <span class=\"day-num\">'d'</span>\n  <span class=\"day-and-month\">\n    <span class=\"day-name\">'dddd'</span><br />\n    <span class=\"month-name\">'MMM'</span>\n  </span>\n</span>'";
        fullCalendarParams = _.defaults({
          header: {
            left: 'prev,today,next,title',
            center: '',
            right: ''
          },
          editable: true,
          columnFormat: {
            month: 'dddd',
            week: weekColumnFormatter
          },
          buttonText: {
            today: I18n.t('today', 'Today')
          },
          defaultEventMinutes: 60,
          slotMinutes: 30,
          firstHour: 7,
          droppable: true,
          dropAccept: '.undated_event',
          events: this.getEvents,
          eventRender: this.eventRender,
          eventAfterRender: this.eventAfterRender,
          eventDragStart: this.eventDragStart,
          eventDrop: this.eventDrop,
          eventClick: this.eventClick,
          eventResize: this.eventResize,
          eventResizeStart: this.eventResizeStart,
          dayClick: this.dayClick,
          addEventClick: this.addEventClick,
          titleFormat: {
            week: "MMM d[ yyyy]{ '&ndash;'[ MMM] d, yyyy}"
          },
          viewDisplay: this.viewDisplay,
          windowResize: this.windowResize,
          drop: this.drop
        }, calendarDefaults);
        data = this.dataFromDocumentHash();
        if (!data.view_start && ((_ref1 = this.options) != null ? _ref1.viewStart : void 0)) {
          data.view_start = this.options.viewStart;
          location.hash = $.encodeToHex(JSON.stringify(data));
        }
        if (data.view_start) {
          date = $.fullCalendar.parseISO8601(data.view_start);
          if (date) {
            fullCalendarParams.year = date.getFullYear();
            fullCalendarParams.month = date.getMonth();
            fullCalendarParams.date = date.getDate();
          }
        }
        this.el = $(selector).html(calendarAppTemplate({
          calendar2Only: this.options.calendar2Only,
          showScheduler: this.options.showScheduler
        }));
        if (data.view_name === 'week') {
          data.view_name = 'agendaWeek';
        }
        if (data.view_name === 'month' || data.view_name === 'agendaWeek') {
          radioId = data.view_name === 'agendaWeek' ? 'week' : 'month';
          $("#" + radioId).click();
          fullCalendarParams.defaultView = data.view_name;
        }
        if (data.show && data.show !== '') {
          this.visibleContextList = data.show.split(',');
        }
        this.calendar = this.el.find("div.calendar").fullCalendar(fullCalendarParams);
        $(document).fragmentChange(this.fragmentChange);
        this.el.find('#calendar_views').buttonset().find('input').change(function(event) {
          return _this.loadView($(event.target).attr('id'));
        });
        this.$refresh_calendar_link = this.el.find('#refresh_calendar_link').click(this.reloadClick);
        this.$create_new_event_link = this.el.find('#create_new_event_link').click(this.addEventClick);
        this.colorizeContexts();
        this.scheduler = new Scheduler(".scheduler-wrapper", this);
        if (this.options.showScheduler) {
          this.dataSource.getAppointmentGroups(false, function(data) {
            var group, required, _i, _len;

            required = 0;
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              group = data[_i];
              if (group.requiring_action) {
                required += 1;
              }
            }
            return _this.el.find("#calendar-header .counter-badge").toggle(required > 0).text(required);
          });
        }
        window.setTimeout(function() {
          if (data.view_name === 'scheduler') {
            $("#scheduler").click();
            if (data.appointment_group_id) {
              return _this.scheduler.viewCalendarForGroupId(data.appointment_group_id);
            }
          }
        });
      }

      Calendar.prototype.getEvents = function(start, end, cb) {
        var filterEvents,
          _this = this;

        filterEvents = function(events) {
          var event, eventIds, idx, keep, _i, _ref, _ref1;

          eventIds = {};
          if (!(events.length > 0)) {
            return events;
          }
          for (idx = _i = _ref = events.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
            event = events[idx];
            keep = true;
            if (eventIds[event.id]) {
              keep = false;
            } else if (event.isAppointmentGroupEvent()) {
              if (!_this.displayAppointmentEvents) {
                if (!event.calendarEvent.reserve_url) {
                  keep = true;
                } else if (event.calendarEvent.child_events_count > 0 && !event.calendarEvent.reserved && event.can_edit) {
                  keep = true;
                } else {
                  keep = false;
                }
              } else {
                if (_this.displayAppointmentEvents.id === ((_ref1 = event.calendarEvent) != null ? _ref1.appointment_group_id : void 0)) {
                  keep = !!event.calendarEvent.reserve_url;
                } else {
                  keep = !event.calendarEvent.reserve_url;
                }
              }
            }
            if (!keep) {
              events.splice(idx, 1);
            }
            eventIds[event.id] = true;
          }
          return events;
        };
        return this.dataSource.getEvents($.unfudgeDateForProfileTimezone(start), $.unfudgeDateForProfileTimezone(end), this.visibleContextList, function(events) {
          if (_this.displayAppointmentEvents) {
            return _this.dataSource.getEventsForAppointmentGroup(_this.displayAppointmentEvents, function(aEvents) {
              var event, _i, _j, _len, _len1;

              for (_i = 0, _len = events.length; _i < _len; _i++) {
                event = events[_i];
                event.removeClass('current-appointment-group');
              }
              for (_j = 0, _len1 = aEvents.length; _j < _len1; _j++) {
                event = aEvents[_j];
                event.addClass('current-appointment-group');
              }
              return cb(filterEvents(events.concat(aEvents)));
            });
          } else {
            return cb(filterEvents(events));
          }
        });
      };

      Calendar.prototype.closeEventPopups = function() {
        return $('.event-details').each(function() {
          var existingDialog;

          existingDialog = $(this).data('showEventDetailsDialog');
          if (existingDialog) {
            return existingDialog.close();
          }
        });
      };

      Calendar.prototype.windowResize = function(view) {
        return this.closeEventPopups();
      };

      Calendar.prototype.eventRender = function(event, element, view) {
        var $element, screenReaderTitleHint, status, timeString;

        $element = $(element);
        if (event.isAppointmentGroupEvent() && this.displayAppointmentEvents && this.displayAppointmentEvents.id === event.calendarEvent.appointment_group_id) {
          status = "Available";
          if (event.calendarEvent.available_slots > 0) {
            status = "" + event.calendarEvent.available_slots + " Available";
          }
          if (event.calendarEvent.available_slots === 0) {
            status = "Filled";
          }
          if (event.calendarEvent.reserved === true) {
            status = "Reserved";
          }
          $element.find('.fc-event-title').text(status);
        }
        timeString = !event.endDate() || event.startDate().getTime() === event.endDate().getTime() ? this.calendar.fullCalendar('formatDate', event.startDate(), 'h:mmtt') : this.calendar.fullCalendar('formatDates', event.startDate(), event.endDate(), 'h:mmtt{ – h:mmtt}');
        screenReaderTitleHint = event.eventType.match(/assignment/) ? I18n.t('event_assignment_title', 'Assignment Title: ') : I18n.t('event_event_title', 'Event Title: ');
        $element.attr('title', $.trim("" + timeString + "\n" + ($element.find('.fc-event-title').text()) + "\n\n" + (I18n.t('calendar_title', 'Calendar:')) + " " + event.contextInfo.name));
        $element.find('.fc-event-inner').prepend($("<span class='screenreader-only'>" + (I18n.t('calendar_title', 'Calendar:')) + " " + event.contextInfo.name + "</span>"));
        $element.find('.fc-event-title').prepend($("<span class='screenreader-only'>" + screenReaderTitleHint + "</span>"));
        return true;
      };

      Calendar.prototype.eventAfterRender = function(event, element, view) {
        var _ref, _ref1;

        if (event.isDueAtMidnight()) {
          element.find('.fc-event-time').html(this.calendar.fullCalendar('formatDate', event.startDate(), 'h(:mm)t'));
        }
        if (event.eventType.match(/assignment/) && view.name === "agendaWeek") {
          element.height('').find('.ui-resizable-handle').remove();
        }
        if (event.eventType.match(/assignment/)) {
          element.find('.fc-event-time').html(I18n.t('labels.due', 'due'));
        }
        if (event.eventType === 'calendar_event' && ((_ref = this.options) != null ? _ref.activateEvent : void 0) && event.id === ("calendar_event_" + ((_ref1 = this.options) != null ? _ref1.activateEvent : void 0))) {
          this.options.activateEvent = null;
          return this.eventClick(event, {
            currentTarget: element,
            pageX: element.offset().left + parseInt(element.width() / 2)
          }, view);
        }
      };

      Calendar.prototype.eventDragStart = function(event, jsEvent, ui, view) {
        return this.closeEventPopups();
      };

      Calendar.prototype.eventResizeStart = function(event, jsEvent, ui, view) {
        return this.closeEventPopups();
      };

      Calendar.prototype.eventDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
        var originalDuration;

        if (event.eventType === "assignment" && allDay) {
          revertFunc();
          return;
        }
        if (event.eventType === "assignment" && event.isDueAtMidnight() && minuteDelta === 0) {
          event.start.setMinutes(59);
        }
        if (event.eventType === "calendar_event" && allDay) {
          event.allDay = true;
        }
        if (event.end && event.endDate()) {
          originalDuration = event.endDate().getTime() - event.startDate().getTime();
          event.end = new Date(event.start.getTime() + originalDuration);
        }
        return event.saveDates(null, revertFunc);
      };

      Calendar.prototype.eventResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view) {
        return event.saveDates(null, revertFunc);
      };

      Calendar.prototype.addEventClick = function(event, jsEvent, view) {
        var activeContexts, allowedContexts;

        if (this.displayAppointmentEvents) {
          return;
        }
        allowedContexts = userSettings.get('checked_calendar_codes') || _.pluck(this.contexts, 'asset_string');
        activeContexts = _.filter(this.contexts, function(c) {
          return _.contains(allowedContexts, c.asset_string);
        });
        event = commonEventFactory(null, activeContexts);
        return new EditEventDetailsDialog(event).show();
      };

      Calendar.prototype.eventClick = function(event, jsEvent, view) {
        var $event, detailsDialog;

        $event = $(jsEvent.currentTarget);
        if (!$event.hasClass('event_pending')) {
          detailsDialog = new ShowEventDetailsDialog(event);
          $event.data('showEventDetailsDialog', detailsDialog);
          return detailsDialog.show(jsEvent);
        }
      };

      Calendar.prototype.dayClick = function(date, allDay, jsEvent, view) {
        var activeContexts, allowedContexts, event;

        if (this.displayAppointmentEvents) {
          return;
        }
        allowedContexts = userSettings.get('checked_calendar_codes') || _.pluck(this.contexts, 'asset_string');
        activeContexts = _.filter(this.contexts, function(c) {
          return _.contains(allowedContexts, c.asset_string);
        });
        event = commonEventFactory(null, activeContexts);
        event.allDay = allDay;
        event.date = date;
        return (new EditEventDetailsDialog(event)).show();
      };

      Calendar.prototype.updateFragment = function(opts) {
        var data, k, v;

        data = this.dataFromDocumentHash();
        for (k in opts) {
          v = opts[k];
          data[k] = v;
        }
        return location.replace("#" + $.encodeToHex(JSON.stringify(data)));
      };

      Calendar.prototype.viewDisplay = function(view) {
        return this.updateFragment({
          view_start: $.dateToISO8601UTC(view.start)
        });
      };

      Calendar.prototype.drop = function(date, allDay, jsEvent, ui) {
        var event, eventId, originalDuration, revertFunc;

        eventId = $(ui.helper).data('event-id');
        event = $("[data-event-id=" + eventId + "]").data('calendarEvent');
        revertFunc = function() {
          return console.log("could not save date on undated event");
        };
        if (event) {
          event.start = date;
          event.addClass('event_pending');
          if (event.eventType === "assignment" && allDay) {
            revertFunc();
            return;
          }
          if (event.eventType === "assignment" && event.isDueAtMidnight() && minuteDelta === 0) {
            event.start.setMinutes(59);
          }
          if (event.eventType === "calendar_event" && allDay) {
            event.allDay = true;
          }
          if (event.end && event.endDate()) {
            originalDuration = event.endDate().getTime() - event.startDate().getTime();
            event.end = new Date(event.start.getTime() + originalDuration);
          }
          this.calendar.fullCalendar('renderEvent', event);
          return event.saveDates(null, revertFunc);
        }
      };

      Calendar.prototype.fragmentChange = function(event, hash) {
        var data, date, view, _ref;

        data = this.dataFromDocumentHash();
        view = (_ref = this.calendar) != null ? _ref.fullCalendar('getView') : void 0;
        if (!(view && !$.isEmptyObject(data))) {
          return;
        }
        if ((data.view_name === 'month' || data.view_name === 'agendaWeek') && data.view_name !== view.name) {
          this.calendar.fullCalendar('changeView', data.view_name);
        }
        if (data.view_start && data.view_start !== $.dateToISO8601UTC(view.start)) {
          date = $.fullCalendar.parseISO8601(data.view_start);
          if (date) {
            return this.calendar.fullCalendar('gotoDate', date);
          }
        }
      };

      Calendar.prototype.reloadClick = function(event) {
        event.preventDefault();
        if (this.activeAjax === 0) {
          this.dataSource.clearCache();
          if (this.currentView === 'scheduler') {
            this.scheduler.loadData();
          }
          return this.calendar.fullCalendar('refetchEvents');
        }
      };

      Calendar.prototype.eventDeleting = function(event) {
        event.addClass('event_pending');
        return this.calendar.fullCalendar('updateEvent', event);
      };

      Calendar.prototype.eventDeleted = function(event) {
        return this.calendar.fullCalendar('removeEvents', event.id);
      };

      Calendar.prototype.eventSaving = function(event) {
        if (!event.start) {
          return;
        }
        event.addClass('event_pending');
        if (event.isNewEvent()) {
          return this.calendar.fullCalendar('renderEvent', event);
        } else {
          return this.calendar.fullCalendar('updateEvent', event);
        }
      };

      Calendar.prototype.eventSaved = function(event) {
        event.removeClass('event_pending');
        delete event._id;
        this.calendar.fullCalendar('refetchEvents');
        return this.closeEventPopups();
      };

      Calendar.prototype.eventSaveFailed = function(event) {
        event.removeClass('event_pending');
        if (event.isNewEvent()) {
          return this.calendar.fullCalendar('removeEvents', event.id);
        } else {
          return this.calendar.fullCalendar('updateEvent', event);
        }
      };

      Calendar.prototype.updateOverrides = function(event) {
        return _.each(this.dataSource.cache.contexts[event.contextCode()].events, function(override, key) {
          if (key.match(/override/) && event.assignment.id === override.assignment.id) {
            return override.updateAssignmentTitle(event.title);
          }
        });
      };

      Calendar.prototype.visibleContextListChanged = function(newList) {
        this.visibleContextList = newList;
        return this.calendar.fullCalendar('refetchEvents');
      };

      Calendar.prototype.ajaxStarted = function() {
        this.activeAjax += 1;
        return this.$refresh_calendar_link.addClass('loading');
      };

      Calendar.prototype.ajaxEnded = function() {
        this.activeAjax -= 1;
        if (!this.activeAjax) {
          return this.$refresh_calendar_link.removeClass('loading');
        }
      };

      Calendar.prototype.refetchEvents = function() {
        return this.calendar.fullCalendar('refetchEvents');
      };

      Calendar.prototype.gotoDate = function(d) {
        return this.calendar.fullCalendar("gotoDate", d);
      };

      Calendar.prototype.loadView = function(view) {
        this.updateFragment({
          view_name: view
        });
        if (view !== 'scheduler') {
          this.currentView = view;
          this.calendar.removeClass('scheduler-mode');
          this.displayAppointmentEvents = null;
          this.scheduler.hide();
          this.$create_new_event_link.show();
          this.calendar.show();
          this.calendar.fullCalendar('refetchEvents');
          return this.calendar.fullCalendar('changeView', view === 'week' ? 'agendaWeek' : 'month');
        } else {
          this.currentView = 'scheduler';
          this.calendar.addClass('scheduler-mode');
          this.$create_new_event_link.hide();
          this.calendar.hide();
          return this.scheduler.show();
        }
      };

      $styleContainer = $('<div />').appendTo('body');

      hues = [43, 5, 205, 85, 289, 63, 230, 186, 115, 330];

      cssColor = function(h, s, b) {
        var rgbArray;

        rgbArray = hsvToRgb(h, s, b);
        return "rgb(" + (rgbArray.join(' ,')) + ")";
      };

      Calendar.prototype.colorizeContexts = function() {
        var bgBrightness, bgSaturation, contextCode, html, hue, index, strokeBrightness, strokeSaturation, textBrightness, textSaturation, _ref, _ref1, _ref2;

        _ref = [30, 96], bgSaturation = _ref[0], bgBrightness = _ref[1];
        _ref1 = [60, 40], textSaturation = _ref1[0], textBrightness = _ref1[1];
        _ref2 = [70, 70], strokeSaturation = _ref2[0], strokeBrightness = _ref2[1];
        html = (function() {
          var _i, _len, _ref3, _results;

          _ref3 = this.contextCodes;
          _results = [];
          for (index = _i = 0, _len = _ref3.length; _i < _len; index = ++_i) {
            contextCode = _ref3[index];
            hue = hues[index % hues.length];
            _results.push(".group_" + contextCode + "{           color: " + (cssColor(hue, textSaturation, textBrightness)) + ";           border-color: " + (cssColor(hue, strokeSaturation, strokeBrightness)) + ";           background-color: " + (cssColor(hue, bgSaturation, bgBrightness)) + ";        }");
          }
          return _results;
        }).call(this);
        return $styleContainer.html("<style>" + (html.join('')) + "</style>");
      };

      Calendar.prototype.dataFromDocumentHash = function() {
        var data, e;

        data = {};
        try {
          data = $.parseJSON($.decodeFromHex(location.hash.substring(1))) || {};
        } catch (_error) {
          e = _error;
          data = {};
        }
        return data;
      };

      return Calendar;

    })();
  });

}).call(this);
