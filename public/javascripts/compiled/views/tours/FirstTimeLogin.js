(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/TourView', 'jst/tours/FirstTimeLogin'], function(TourView, template) {
    var FirstTimeLogin, _ref;

    return FirstTimeLogin = (function(_super) {
      __extends(FirstTimeLogin, _super);

      function FirstTimeLogin() {
        _ref = FirstTimeLogin.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FirstTimeLogin.prototype.template = template;

      return FirstTimeLogin;

    })(TourView);
  });

}).call(this);
