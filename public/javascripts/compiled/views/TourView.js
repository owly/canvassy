(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['vendor/usher/usher', 'Backbone'], function(Usher, Backbone, template) {
    var TourView, _ref;

    return TourView = (function(_super) {
      __extends(TourView, _super);

      function TourView() {
        this.start = __bind(this.start, this);        _ref = TourView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TourView.prototype.initialize = function() {
        this.render();
        this.$el.appendTo($(document.body));
        this.tour = new Usher(this.$el);
        return this.attach();
      };

      TourView.prototype.start = function() {
        return this.tour.start();
      };

      TourView.prototype.attach = function() {
        return setTimeout(this.start, 2000);
      };

      return TourView;

    })(Backbone.View);
  });

}).call(this);
