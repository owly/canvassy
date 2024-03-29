(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'compiled/calendar/commonEventFactory', 'jquery.ajaxJSON', 'vendor/jquery.ba-tinypubsub'], function($, commonEventFactory) {
    return (function() {
      function _Class(contexts) {
        this.fetchNextBatch = __bind(this.fetchNextBatch, this);
        this.startFetch = __bind(this.startFetch, this);
        this.getParticipants = __bind(this.getParticipants, this);
        this.getEvents = __bind(this.getEvents, this);
        this.getEventsForAppointmentGroup = __bind(this.getEventsForAppointmentGroup, this);
        this.processAppointmentData = __bind(this.processAppointmentData, this);
        this.getAppointmentGroups = __bind(this.getAppointmentGroups, this);
        this.getAppointmentGroupsFromCache = __bind(this.getAppointmentGroupsFromCache, this);
        this.getEventsFromCache = __bind(this.getEventsFromCache, this);
        this.processNextRequest = __bind(this.processNextRequest, this);
        this.getEventsFromCacheForContext = __bind(this.getEventsFromCacheForContext, this);
        this.addEventToCache = __bind(this.addEventToCache, this);
        this.needUndatedEventsForContexts = __bind(this.needUndatedEventsForContexts, this);
        this.requiredDateRangeForContexts = __bind(this.requiredDateRangeForContexts, this);
        this.requiredDateRangeForContext = __bind(this.requiredDateRangeForContext, this);
        this.clearCache = __bind(this.clearCache, this);
        this.eventWithId = __bind(this.eventWithId, this);
        this.eventDeleted = __bind(this.eventDeleted, this);
        this.eventSaved = __bind(this.eventSaved, this);        this.contexts = contexts;
        this.clearCache();
        this.inFlightRequest = {};
        this.pendingRequests = [];
        $.subscribe("CommonEvent/eventDeleted", this.eventDeleted);
        $.subscribe("CommonEvent/eventSaved", this.eventSaved);
      }

      _Class.prototype.eventSaved = function(event) {
        return this.addEventToCache(event);
      };

      _Class.prototype.eventDeleted = function(event) {
        var events, _ref;

        events = (_ref = this.cache.contexts[event.contextCode()]) != null ? _ref.events : void 0;
        if (events) {
          return delete events[event.id];
        }
      };

      _Class.prototype.eventWithId = function(id) {
        var contextCode, contextData, _ref;

        _ref = this.cache.contexts;
        for (contextCode in _ref) {
          contextData = _ref[contextCode];
          if (contextData.events[id]) {
            return contextData.events[id];
          }
        }
        return null;
      };

      _Class.prototype.clearCache = function() {
        var contextInfo, _i, _len, _ref, _results;

        this.cache = {
          contexts: {},
          appointmentGroups: {},
          participants: {},
          fetchedAppointmentGroups: null
        };
        _ref = this.contexts;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          contextInfo = _ref[_i];
          _results.push(this.cache.contexts[contextInfo.asset_string] = {
            events: {},
            fetchedRanges: [],
            fetchedUndated: false
          });
        }
        return _results;
      };

      _Class.prototype.requiredDateRangeForContext = function(start, end, context) {
        var contextInfo, range, ranges, _i, _len;

        if (!(contextInfo = this.cache.contexts[context])) {
          return [start, end];
        }
        if (!(ranges = contextInfo.fetchedRanges)) {
          return [start, end];
        }
        for (_i = 0, _len = ranges.length; _i < _len; _i++) {
          range = ranges[_i];
          if (range[0] <= start && start <= range[1]) {
            start = range[1];
          }
          if (range[0] <= end && end <= range[1]) {
            end = range[0];
          }
        }
        return [start, end];
      };

      _Class.prototype.requiredDateRangeForContexts = function(start, end, contexts) {
        var context, e, earliest, latest, s, _i, _len, _ref;

        earliest = end;
        latest = start;
        for (_i = 0, _len = contexts.length; _i < _len; _i++) {
          context = contexts[_i];
          _ref = this.requiredDateRangeForContext(start, end, context), s = _ref[0], e = _ref[1];
          if (s < earliest) {
            earliest = s;
          }
          if (e > latest) {
            latest = e;
          }
        }
        return [earliest, latest];
      };

      _Class.prototype.needUndatedEventsForContexts = function(contexts) {
        var context, _i, _len;

        for (_i = 0, _len = contexts.length; _i < _len; _i++) {
          context = contexts[_i];
          if (!this.cache.contexts[context].fetchedUndated) {
            return true;
          }
        }
        return false;
      };

      _Class.prototype.addEventToCache = function(event) {
        var contextCode, contextInfo;

        contextCode = event.contextCode();
        contextInfo = this.cache.contexts[contextCode];
        return contextInfo.events[event.id] = event;
      };

      _Class.prototype.getEventsFromCacheForContext = function(start, end, context) {
        var contextInfo, event, events, id, _ref;

        contextInfo = this.cache.contexts[context];
        events = [];
        _ref = contextInfo.events;
        for (id in _ref) {
          event = _ref[id];
          if (!event.start && !start || event.start >= start && event.start <= end) {
            events.push(event);
          }
        }
        return events;
      };

      _Class.prototype.processNextRequest = function(inFlightCheckKey) {
        var args, id, key, method, _ref, _ref1;

        if (inFlightCheckKey == null) {
          inFlightCheckKey = 'default';
        }
        _ref = this.pendingRequests;
        for (id in _ref) {
          _ref1 = _ref[id], method = _ref1[0], args = _ref1[1], key = _ref1[2];
          if (key === inFlightCheckKey) {
            this.pendingRequests.splice(id, 1);
            method.apply(null, args);
            return;
          }
        }
      };

      _Class.prototype.getEventsFromCache = function(start, end, contexts) {
        var context, events, _i, _len;

        events = [];
        for (_i = 0, _len = contexts.length; _i < _len; _i++) {
          context = contexts[_i];
          events = events.concat(this.getEventsFromCacheForContext(start, end, context));
        }
        return events;
      };

      _Class.prototype.getAppointmentGroupsFromCache = function() {
        var group, id, _ref, _results;

        _ref = this.cache.appointmentGroups;
        _results = [];
        for (id in _ref) {
          group = _ref[id];
          _results.push(group);
        }
        return _results;
      };

      _Class.prototype.getAppointmentGroups = function(fetchManageable, cb) {
        var dataCB, doneCB, fetchJobs,
          _this = this;

        if (this.inFlightRequest['appointmentGroups']) {
          this.pendingRequests.push([this.getAppointmentGroups, arguments, 'appointmentGroups']);
          return;
        }
        if (this.cache.fetchedAppointmentGroups && this.cache.fetchedAppointmentGroups.manageable === fetchManageable) {
          cb(this.getAppointmentGroupsFromCache());
          this.processNextRequest('appointmentGroups');
          return;
        }
        this.cache.fetchedAppointmentGroups = {
          manageable: fetchManageable
        };
        this.cache.appointmentGroups = {};
        dataCB = function(data, url, params) {
          var group, _i, _len, _results;

          if (data) {
            _results = [];
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              group = data[_i];
              if (params.scope === "manageable") {
                group.is_manageable = true;
              } else {
                group.is_scheduleable = true;
              }
              _results.push(_this.processAppointmentData(group));
            }
            return _results;
          }
        };
        doneCB = function() {
          return cb(_this.getAppointmentGroupsFromCache());
        };
        fetchJobs = [
          [
            '/api/v1/appointment_groups', {
              include: ['reserved_times', 'participant_count']
            }
          ]
        ];
        if (fetchManageable) {
          fetchJobs.push([
            '/api/v1/appointment_groups', {
              scope: 'manageable',
              include: ['reserved_times', 'participant_count'],
              include_past_appointments: true
            }
          ]);
        }
        return this.startFetch(fetchJobs, dataCB, doneCB, 'appointmentGroups');
      };

      _Class.prototype.processAppointmentData = function(group) {
        var childEvent, childEventData, event, eventData, id, _i, _len, _ref, _ref1, _results;

        id = group.id;
        if ((_ref = this.cache.appointmentGroups[id]) != null ? _ref.is_manageable : void 0) {
          group.is_manageable = true;
        } else {
          group.is_scheduleable = true;
        }
        this.cache.appointmentGroups[id] = group;
        if (group.appointments) {
          group.appointmentEvents = [];
          _ref1 = group.appointments;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            eventData = _ref1[_i];
            event = commonEventFactory(eventData, this.contexts);
            if (event && event.object.workflow_state !== 'deleted') {
              group.appointmentEvents.push(event);
              this.addEventToCache(event);
              if (eventData.child_events) {
                event.childEvents = [];
                _results.push((function() {
                  var _j, _len1, _ref2, _results1;

                  _ref2 = eventData.child_events;
                  _results1 = [];
                  for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                    childEventData = _ref2[_j];
                    childEvent = commonEventFactory(childEventData, this.contexts);
                    this.addEventToCache(event);
                    if (childEvent) {
                      _results1.push(event.childEvents.push(childEvent));
                    } else {
                      _results1.push(void 0);
                    }
                  }
                  return _results1;
                }).call(this));
              } else {
                _results.push(void 0);
              }
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      };

      _Class.prototype.getEventsForAppointmentGroup = function(group, cb) {
        var cachedEvents, dataCB, params, _ref,
          _this = this;

        if (this.inFlightRequest['default']) {
          this.pendingRequests.push([this.getEventsForAppointmentGroup, arguments, 'default']);
          return;
        }
        cachedEvents = (_ref = this.cache.appointmentGroups[group.id]) != null ? _ref.appointmentEvents : void 0;
        if (cachedEvents) {
          cb(cachedEvents);
          this.processNextRequest();
          return;
        }
        dataCB = function(data) {
          if (data) {
            return _this.processAppointmentData(data);
          }
        };
        params = {
          include: ['reserved_times', 'participant_count', 'appointments', 'child_events']
        };
        return this.startFetch([[group.url, params]], dataCB, (function() {
          return cb(_this.cache.appointmentGroups[group.id].appointmentEvents);
        }));
      };

      _Class.prototype.getEvents = function(start, end, contexts, cb) {
        var context, contextInfo, dataCB, doneCB, params, paramsForDatedEvents, paramsForUndatedEvents, _i, _len,
          _this = this;

        if (this.inFlightRequest['default']) {
          this.pendingRequests.push([this.getEvents, arguments, 'default']);
          return;
        }
        paramsForDatedEvents = function(start, end, contexts) {
          var endDay, startDay, _ref;

          _ref = _this.requiredDateRangeForContexts(start, end, contexts), startDay = _ref[0], endDay = _ref[1];
          if (startDay >= endDay) {
            return null;
          }
          return {
            context_codes: contexts,
            start_date: $.dateToISO8601UTC(startDay),
            end_date: $.dateToISO8601UTC(endDay)
          };
        };
        paramsForUndatedEvents = function(contexts) {
          if (!_this.needUndatedEventsForContexts(contexts)) {
            return null;
          }
          return {
            context_codes: contexts,
            undated: '1'
          };
        };
        params = start ? paramsForDatedEvents(start, end, contexts) : paramsForUndatedEvents(contexts);
        if (!params) {
          cb(this.getEventsFromCache(start, end, contexts));
          this.processNextRequest();
          return;
        }
        for (_i = 0, _len = contexts.length; _i < _len; _i++) {
          context = contexts[_i];
          contextInfo = this.cache.contexts[context];
          if (contextInfo) {
            if (start) {
              contextInfo.fetchedRanges.push([start, end]);
            } else {
              contextInfo.fetchedUndated = true;
            }
          }
        }
        doneCB = function() {
          return cb(_this.getEventsFromCache(start, end, contexts));
        };
        dataCB = function(data) {
          var e, event, _j, _len1, _results;

          if (data) {
            _results = [];
            for (_j = 0, _len1 = data.length; _j < _len1; _j++) {
              e = data[_j];
              event = commonEventFactory(e, _this.contexts);
              if (event && event.object.workflow_state !== 'deleted') {
                _results.push(_this.addEventToCache(event));
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        };
        return this.startFetch([
          ['/api/v1/calendar_events', params], [
            '/api/v1/calendar_events', $.extend({
              type: 'assignment'
            }, params)
          ]
        ], dataCB, doneCB);
      };

      _Class.prototype.getParticipants = function(appointmentGroup, registrationStatus, cb) {
        var dataCB, doneCB, key, type,
          _this = this;

        if (this.inFlightRequest['default']) {
          this.pendingRequests.push([this.getParticipants, arguments, 'default']);
          return;
        }
        key = "" + appointmentGroup.id + "_" + registrationStatus;
        if (this.cache.participants[key]) {
          cb(this.cache.participants[key]);
          this.processNextRequest();
          return;
        }
        this.cache.participants[key] = [];
        dataCB = function(data, url, params) {
          if (data) {
            return _this.cache.participants[key].push.apply(_this.cache.participants[key], data);
          }
        };
        doneCB = function() {
          return cb(_this.cache.participants[key]);
        };
        type = appointmentGroup.participant_type === "Group" ? 'groups' : 'users';
        return this.startFetch([
          [
            "/api/v1/appointment_groups/" + appointmentGroup.id + "/" + type, {
              registration_status: registrationStatus
            }
          ]
        ], dataCB, doneCB);
      };

      _Class.prototype.startFetch = function(urlAndParamsArray, dataCB, doneCB, inFlightCheckKey) {
        var numCompleted, urlAndParams, wrapperCB, _i, _len, _results,
          _this = this;

        if (inFlightCheckKey == null) {
          inFlightCheckKey = 'default';
        }
        numCompleted = 0;
        this.inFlightRequest[inFlightCheckKey] = true;
        wrapperCB = function(data, isDone, url, params) {
          dataCB(data, url, params);
          if (isDone) {
            numCompleted += 1;
            if (numCompleted >= urlAndParamsArray.length) {
              doneCB();
              _this.inFlightRequest[inFlightCheckKey] = false;
              return _this.processNextRequest(inFlightCheckKey);
            }
          }
        };
        _results = [];
        for (_i = 0, _len = urlAndParamsArray.length; _i < _len; _i++) {
          urlAndParams = urlAndParamsArray[_i];
          _results.push((function(urlAndParams) {
            return _this.fetchNextBatch(urlAndParams[0], urlAndParams[1], function(data, isDone) {
              return wrapperCB(data, isDone, urlAndParams[0], urlAndParams[1]);
            });
          })(urlAndParams));
        }
        return _results;
      };

      _Class.prototype.fetchNextBatch = function(url, params, cb) {
        var parseLinkHeader,
          _this = this;

        parseLinkHeader = function(header) {
          var component, link, rel, rels, _i, _len, _ref, _ref1;

          if (!header) {
            return null;
          }
          rels = {};
          _ref = header.split(',');
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            component = _ref[_i];
            _ref1 = component.split(';'), link = _ref1[0], rel = _ref1[1];
            link = link.replace(/^</, '').replace(/>$/, '');
            rel = rel.split('"')[1];
            rels[rel] = link;
          }
          return rels;
        };
        $.publish("EventDataSource/ajaxStarted");
        if (!(url.match(/per_page=/) || (params.per_page != null))) {
          params.per_page = 50;
        }
        return $.ajaxJSON(url, 'GET', params, function(data, xhr) {
          var linkHeader, rels;

          $.publish("EventDataSource/ajaxEnded");
          linkHeader = typeof xhr.getResponseHeader === "function" ? xhr.getResponseHeader('Link') : void 0;
          rels = parseLinkHeader(linkHeader);
          if (rels != null ? rels.next : void 0) {
            cb(data, false);
            _this.fetchNextBatch(rels.next, {}, cb);
            return;
          }
          return cb(data, true);
        });
      };

      return _Class;

    })();
  });

}).call(this);
