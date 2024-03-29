(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'jst/calendar/undatedEvents', 'compiled/calendar/EventDataSource', 'compiled/calendar/ShowEventDetailsDialog', 'jqueryui/draggable', 'jquery.disableWhileLoading', 'vendor/jquery.ba-tinypubsub'], function($, undatedEventsTemplate, EventDataSource, ShowEventDetailsDialog) {
    var UndatedEventsList;

    return UndatedEventsList = (function() {
      function UndatedEventsList(selector, dataSource, calendar) {
        this.dataSource = dataSource;
        this.calendar = calendar;
        this.eventSaved = __bind(this.eventSaved, this);
        this.eventSaving = __bind(this.eventSaving, this);
        this.visibleContextListChanged = __bind(this.visibleContextListChanged, this);
        this.clickEvent = __bind(this.clickEvent, this);
        this.show = __bind(this.show, this);
        this.load = __bind(this.load, this);
        this.div = $(selector).html(undatedEventsTemplate({}));
        this.hidden = true;
        this.visibleContextList = [];
        $.subscribe({
          "CommonEvent/eventDeleting": this.eventSaving,
          "CommonEvent/eventDeleted": this.eventSaved,
          "CommonEvent/eventSaving": this.eventSaving,
          "CommonEvent/eventSaved": this.eventSaved,
          "Calendar/visibleContextListChanged": this.visibleContextListChanged
        });
        this.div.on('click', '.event', this.clickEvent).on('click', '.undated_event_title', this.clickEvent).on('click', '.undated-events-link', this.show);
      }

      UndatedEventsList.prototype.load = function() {
        var loadingDfd,
          _this = this;

        if (this.hidden) {
          return;
        }
        loadingDfd = new $.Deferred();
        this.div.disableWhileLoading(loadingDfd, {
          buttons: ['.undated-events-link'],
          opacity: 1,
          lines: 8,
          length: 2,
          width: 2,
          radius: 3
        });
        return this.dataSource.getEvents(null, null, this.visibleContextList, function(events) {
          var e, _i, _j, _len, _len1;

          loadingDfd.resolve();
          for (_i = 0, _len = events.length; _i < _len; _i++) {
            e = events[_i];
            e.details_url = e.fullDetailsURL();
            e.icon = e.calendarEvent ? 'calendar-day' : 'assignment';
          }
          _this.div.html(undatedEventsTemplate({
            events: events
          }));
          for (_j = 0, _len1 = events.length; _j < _len1; _j++) {
            e = events[_j];
            _this.div.find("." + e.id).data('calendarEvent', e);
          }
          return _this.div.find('.event').draggable({
            revert: 'invalid',
            revertDuration: 0,
            helper: 'clone',
            start: function() {
              _this.calendar.closeEventPopups();
              return $(_this).hide();
            },
            stop: function(e, ui) {
              if (!$(this).data('calendarEvent').start) {
                return $(this).show();
              }
            }
          });
        });
      };

      UndatedEventsList.prototype.show = function(event) {
        event.preventDefault();
        this.hidden = false;
        return this.load();
      };

      UndatedEventsList.prototype.clickEvent = function(jsEvent) {
        var event, eventId;

        jsEvent.preventDefault();
        eventId = $(jsEvent.target).data('event-id');
        eventId || (eventId = $(jsEvent.target).closest('.event').data('event-id'));
        event = this.dataSource.eventWithId(eventId);
        if (event) {
          return new ShowEventDetailsDialog(event, this.dataSource).show(jsEvent);
        }
      };

      UndatedEventsList.prototype.visibleContextListChanged = function(list) {
        this.visibleContextList = list;
        if (!this.hidden) {
          return this.load();
        }
      };

      UndatedEventsList.prototype.eventSaving = function(event) {
        return this.div.find("." + event.id).addClass('event_pending');
      };

      UndatedEventsList.prototype.eventSaved = function() {
        return this.load();
      };

      return UndatedEventsList;

    })();
  });

}).call(this);
