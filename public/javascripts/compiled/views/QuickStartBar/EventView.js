(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!dashboard', 'jquery', 'underscore', 'compiled/views/QuickStartBar/BaseItemView', 'compiled/models/CalendarEvent', 'jst/quickStartBar/event', 'compiled/jquery.rails_flash_notifications', 'jquery.disableWhileLoading'], function(I18n, $, _, BaseItemView, CalendarEvent, template) {
    var EventView, _ref;

    return EventView = (function(_super) {
      __extends(EventView, _super);

      function EventView() {
        _ref = EventView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EventView.prototype.template = template;

      EventView.prototype.contextSearchOptions = {
        fakeInputWidth: '100%',
        contexts: ENV.CONTEXTS,
        placeholder: "Type the name of a class to add this to...",
        selector: {
          baseData: {
            type: 'course'
          },
          noExpand: true,
          browser: false
        }
      };

      EventView.prototype.save = function(json) {
        var date, dfds,
          _this = this;

        date = this.$('.datetime_suggest').text();
        json.start_at = date;
        json.end_at = date;
        delete json.date;
        dfds = _.map(json.context_code, function(code) {
          var model;

          model = new CalendarEvent(json);
          model.set('context_code', code);
          return model.save().done(function() {});
        });
        return $.when.apply($, dfds).done(function() {
          return $.flashMessage(I18n.t('event_created', 'Event created'));
        });
      };

      EventView.type = 'event';

      EventView.title = function() {
        return EventView.__super__.constructor.title.call(this, 'event', 'Event');
      };

      return EventView;

    })(BaseItemView);
  });

}).call(this);
