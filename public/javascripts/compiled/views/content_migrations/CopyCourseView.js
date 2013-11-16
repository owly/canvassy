(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jst/content_migrations/CopyCourse', 'compiled/views/content_migrations/MigrationView'], function(Backbone, _, template, MigrationView) {
    var CopyCourseView, _ref;

    return CopyCourseView = (function(_super) {
      __extends(CopyCourseView, _super);

      function CopyCourseView() {
        _ref = CopyCourseView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CopyCourseView.prototype.template = template;

      CopyCourseView.child('courseFindSelect', '.courseFindSelect');

      CopyCourseView.child('dateShift', '.dateShift');

      CopyCourseView.child('selectContent', '.selectContent');

      return CopyCourseView;

    })(MigrationView);
  });

}).call(this);
