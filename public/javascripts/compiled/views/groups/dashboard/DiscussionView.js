(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/QuickStartBar/AnnouncementView'], function(BaseAnnouncementView) {
    var AnnouncementView, _ref;

    return AnnouncementView = (function(_super) {
      __extends(AnnouncementView, _super);

      function AnnouncementView() {
        _ref = AnnouncementView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AnnouncementView.prototype.render = function(opts) {
        if (opts == null) {
          opts = {};
        }
        AnnouncementView.__super__.render.call(this, opts);
        this.$('.course_finder').html("&nbsp;");
        $("<input>", {
          type: "hidden",
          name: "context_ids[]",
          value: "group_" + ENV.GROUP_ID
        }).appendTo(this.$('.course_finder'));
        return this;
      };

      return AnnouncementView;

    })(BaseAnnouncementView);
  });

}).call(this);
