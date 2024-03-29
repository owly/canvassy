(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection'], function(PaginatedCollection) {
    var AppCenterAppCollection, _ref;

    return AppCenterAppCollection = (function(_super) {
      __extends(AppCenterAppCollection, _super);

      function AppCenterAppCollection() {
        _ref = AppCenterAppCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppCenterAppCollection.prototype.resourceName = 'app_center/apps';

      return AppCenterAppCollection;

    })(PaginatedCollection);
  });

}).call(this);
