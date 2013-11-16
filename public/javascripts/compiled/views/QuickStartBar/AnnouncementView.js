(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/QuickStartBar/BaseItemView', 'underscore', 'compiled/models/Announcement', 'jst/quickStartBar/announcement', 'jquery.instructure_date_and_time'], function(BaseItemView, _, Announcement, template) {
    var AnnouncementView, _ref;

    return AnnouncementView = (function(_super) {
      __extends(AnnouncementView, _super);

      function AnnouncementView() {
        _ref = AnnouncementView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AnnouncementView.prototype.template = template;

      AnnouncementView.prototype.contextSearchOptions = {
        fakeInputWidth: '100%',
        contexts: ENV.CONTEXTS,
        placeholder: "Type the name of a class to announce this too...",
        selector: {
          baseData: {
            type: 'course'
          },
          noExpand: true,
          browser: false
        }
      };

      AnnouncementView.prototype.save = function(json) {
        var dfds, _ref1,
          _this = this;

        if (((_ref1 = json.assignment) != null ? _ref1.due_at : void 0) != null) {
          json.assignment.due_at = this.$('.datetime_suggest').text();
        }
        dfds = _.map(json.context_ids, function(id) {
          var model;

          model = new Announcement(json);
          model.contextCode = id;
          return model.save();
        });
        return $.when.apply($, dfds);
      };

      AnnouncementView.type = 'announcement';

      AnnouncementView.title = function() {
        return AnnouncementView.__super__.constructor.title.call(this, 'announcement', 'Announcement');
      };

      return AnnouncementView;

    })(BaseItemView);
  });

}).call(this);
