(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var GroupDashboardView, View, _ref;

    View = _arg.View;
    return GroupDashboardView = (function(_super) {
      __extends(GroupDashboardView, _super);

      function GroupDashboardView() {
        _ref = GroupDashboardView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      views:
        quickStartBar:
        activityFeedItems:
        dashboardAside:
      */


      GroupDashboardView.prototype.initialize = function() {
        return this.render();
      };

      GroupDashboardView.prototype.render = function() {
        this.$el.html("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span7\">\n      <div class=\"quickStartBar not-expanded border border-rbl border-round-b content-callout\"></div>\n      <div class=\"activityFeedItems v-gutter content-box border border-trbl border-round box-shadow\"></div>\n    </div>\n    <div class=\"span3\">\n      <!-- TODO: new collection thing -->\n      <h2>Collections</h2>\n      <div class=\"kollectionIndexView\"></div>\n      <!-- TODO: member activity and popular views -->\n    </div>\n  </div>\n</div>");
        return GroupDashboardView.__super__.render.apply(this, arguments);
      };

      return GroupDashboardView;

    })(View);
  });

}).call(this);
