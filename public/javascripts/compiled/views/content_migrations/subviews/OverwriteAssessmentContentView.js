(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/subviews/OverwriteAssessmentContent'], function(Backbone, template) {
    var OverwriteAssessmentContentView, _ref;

    return OverwriteAssessmentContentView = (function(_super) {
      __extends(OverwriteAssessmentContentView, _super);

      function OverwriteAssessmentContentView() {
        _ref = OverwriteAssessmentContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OverwriteAssessmentContentView.prototype.template = template;

      return OverwriteAssessmentContentView;

    })(Backbone.View);
  });

}).call(this);
