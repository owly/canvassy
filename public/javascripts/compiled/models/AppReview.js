(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/backbone-ext/DefaultUrlMixin'], function(_arg, DefaultUrlMixin) {
    var AppReview, Model, _ref;

    Model = _arg.Model;
    return AppReview = (function(_super) {
      __extends(AppReview, _super);

      function AppReview() {
        _ref = AppReview.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppReview.mixin(DefaultUrlMixin);

      AppReview.prototype.urlRoot = function() {
        return this._defaultUrl();
      };

      return AppReview;

    })(Model);
  });

}).call(this);
