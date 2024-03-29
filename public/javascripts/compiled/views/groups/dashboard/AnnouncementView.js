(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/QuickStartBar/DiscussionView'], function(BaseDiscussionView) {
    var DiscussionView, _ref;

    return DiscussionView = (function(_super) {
      __extends(DiscussionView, _super);

      function DiscussionView() {
        _ref = DiscussionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionView.prototype.render = function(opts) {
        if (opts == null) {
          opts = {};
        }
        DiscussionView.__super__.render.call(this, opts);
        this.$('.course_finder').html("&nbsp;");
        $("<input>", {
          type: "hidden",
          name: "context_ids[]",
          value: "group_" + ENV.GROUP_ID
        }).appendTo(this.$('.course_finder'));
        return this;
      };

      return DiscussionView;

    })(BaseDiscussionView);
  });

}).call(this);
