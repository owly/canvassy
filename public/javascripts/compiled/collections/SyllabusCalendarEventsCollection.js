(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/collections/PaginatedCollection'], function(_, PaginatedCollection) {
    var SyllabusCalendarEventsCollection, _ref;

    return SyllabusCalendarEventsCollection = (function(_super) {
      __extends(SyllabusCalendarEventsCollection, _super);

      function SyllabusCalendarEventsCollection() {
        this.parse = __bind(this.parse, this);        _ref = SyllabusCalendarEventsCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SyllabusCalendarEventsCollection.prototype.url = '/api/v1/calendar_events';

      SyllabusCalendarEventsCollection.prototype.initialize = function(context_codes, type) {
        this.context_codes = context_codes;
        this.type = type != null ? type : 'event';
        return SyllabusCalendarEventsCollection.__super__.initialize.apply(this, arguments);
      };

      SyllabusCalendarEventsCollection.prototype.fetch = function(options) {
        var _base, _ref1, _ref2, _ref3;

        if (options == null) {
          options = {};
        }
        if ((_ref1 = options['add']) == null) {
          options['add'] = true;
        }
        if ((_ref2 = options['data']) == null) {
          options['data'] = {};
        }
        options['data']['type'] = this.type;
        options['data']['context_codes'] = this.context_codes;
        if ((_ref3 = (_base = options['data'])['all_events']) == null) {
          _base['all_events'] = '1';
        }
        return SyllabusCalendarEventsCollection.__super__.fetch.call(this, options);
      };

      SyllabusCalendarEventsCollection.prototype.parse = function(resp) {
        var eventType, normalize, result;

        eventType = this.type;
        switch (eventType) {
          case "assignment":
            normalize = function(ev) {
              var overridden, _ref1;

              ev.related_id = ev.id;
              overridden = false;
              _.each((_ref1 = ev.assignment_overrides) != null ? _ref1 : [], function(override) {
                if (!overridden) {
                  ev.id = "" + ev.id + "_override_" + override.id;
                  return overridden = true;
                }
              });
              return ev;
            };
            break;
          case "event":
            normalize = function(ev) {
              ev.related_id = ev.id = "" + eventType + "_" + ev.id;
              if (ev.parent_event_id) {
                ev.related_id = "" + eventType + "_" + ev.parent_event_id;
              }
              return ev;
            };
        }
        result = [];
        _.each(SyllabusCalendarEventsCollection.__super__.parse.apply(this, arguments), function(ev) {
          if (!ev.hidden) {
            return result.push(normalize(ev));
          }
        });
        return result;
      };

      return SyllabusCalendarEventsCollection;

    })(PaginatedCollection);
  });

}).call(this);
