(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/ExternalTools/AppThumbnailView'], function(Backbone, template) {
    var AppThumbnailView, _ref;

    return AppThumbnailView = (function(_super) {
      __extends(AppThumbnailView, _super);

      function AppThumbnailView() {
        this.hideDetails = __bind(this.hideDetails, this);
        this.showDetails = __bind(this.showDetails, this);        _ref = AppThumbnailView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppThumbnailView.prototype.template = template;

      AppThumbnailView.prototype.className = 'app';

      AppThumbnailView.prototype.events = {
        'mouseenter': 'showDetails',
        'mouseleave': 'hideDetails',
        'click': 'hideDetails'
      };

      AppThumbnailView.prototype.initialize = function() {
        AppThumbnailView.__super__.initialize.apply(this, arguments);
        return this.isHidingDetails = true;
      };

      AppThumbnailView.prototype.showDetails = function() {
        if (this.isHidingDetails) {
          this.$('.details').fadeTo(200, .85);
          return this.isHidingDetails = false;
        }
      };

      AppThumbnailView.prototype.hideDetails = function() {
        var _this = this;

        return this.$('.details').fadeOut(200, function() {
          return _this.isHidingDetails = true;
        });
      };

      return AppThumbnailView;

    })(Backbone.View);
  });

}).call(this);
