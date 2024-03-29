(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'jst/courses/Syllabus'], function(_, Backbone, template) {
    var SyllabusView, _ref;

    return SyllabusView = (function(_super) {
      __extends(SyllabusView, _super);

      function SyllabusView() {
        _ref = SyllabusView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SyllabusView.prototype.template = template;

      SyllabusView.prototype.initialize = function(_arg) {
        this.can_read = _arg.can_read, this.is_valid_user = _arg.is_valid_user;
        return SyllabusView.__super__.initialize.apply(this, arguments);
      };

      SyllabusView.prototype.toJSON = function() {
        var dateCollator, dates, event, events, html_url_for_assignment, html_url_for_event, id, lastDate, lastEvent, now, overrides_present, relatedEvents, today, _i, _len;

        now = new Date;
        today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        html_url_for_assignment = this.can_read;
        html_url_for_event = this.can_read && this.is_valid_user;
        relatedEvents = {};
        lastDate = null;
        lastEvent = null;
        dateCollator = function(memo, json) {
          var due_at, end_at, end_date, html_url, override, related_id, start_at, start_date, title, type, _ref1, _ref2, _ref3;

          related_id = json['related_id'];
          if (related_id == null) {
            related_id = json['id'];
          }
          if (json['assignment']) {
            type = 'assignment';
            if (html_url_for_assignment) {
              html_url = json['html_url'];
            }
          } else {
            type = 'event';
            if (html_url_for_event) {
              html_url = json['html_url'];
            }
          }
          title = json['title'];
          if (json['start_at']) {
            start_at = $.fudgeDateForProfileTimezone(Date.parse(json['start_at']));
          }
          if (json['end_at']) {
            end_at = $.fudgeDateForProfileTimezone(Date.parse(json['end_at']));
          }
          if ((_ref1 = json['assignment']) != null ? _ref1['due_at'] : void 0) {
            due_at = $.fudgeDateForProfileTimezone(Date.parse(json['assignment']['due_at']));
          }
          override = null;
          _.each((_ref2 = json.assignment_overrides) != null ? _ref2 : [], function(ov) {
            if (override == null) {
              override = {};
            }
            return override.title = ov.title;
          });
          start_date = null;
          if (start_at) {
            start_date = new Date(start_at.getFullYear(), start_at.getMonth(), start_at.getDate());
          }
          end_date = null;
          if (end_at) {
            end_date = new Date(end_at.getFullYear(), end_at.getMonth(), end_at.getDate());
          }
          if (!lastDate || ((_ref3 = lastDate['date']) != null ? _ref3.getTime() : void 0) !== (start_date != null ? start_date.getTime() : void 0)) {
            lastDate = {
              'date': start_date,
              'passed': start_date && start_date < today,
              'events': []
            };
            memo.push(lastDate);
            lastEvent = null;
          } else {
            if (lastEvent) {
              lastEvent['last'] = false;
            }
          }
          lastEvent = {
            'related_id': related_id,
            'type': type,
            'title': title,
            'html_url': html_url,
            'start_at': start_at,
            'end_at': end_at,
            'due_at': due_at,
            'same_day': (start_date != null ? start_date.getTime() : void 0) === (end_date != null ? end_date.getTime() : void 0),
            'same_time': (start_at != null ? start_at.getTime() : void 0) === (end_at != null ? end_at.getTime() : void 0),
            'last': true,
            'override': override,
            'json': json
          };
          lastDate['events'].push(lastEvent);
          if (!(related_id in relatedEvents)) {
            relatedEvents[related_id] = [];
          }
          relatedEvents[related_id].push(lastEvent);
          return memo;
        };
        dates = _.reduce(SyllabusView.__super__.toJSON.apply(this, arguments), dateCollator, []);
        overrides_present = false;
        for (id in relatedEvents) {
          events = relatedEvents[id];
          if (events.length === 1) {
            events[0]['override'] = null;
          } else {
            for (_i = 0, _len = events.length; _i < _len; _i++) {
              event = events[_i];
              overrides_present |= event['override'] !== null;
            }
          }
        }
        return {
          dates: dates,
          overrides_present: overrides_present
        };
      };

      return SyllabusView;

    })(Backbone.View);
  });

}).call(this);
