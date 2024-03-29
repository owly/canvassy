(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'jst/ExternalTools/AppFullView', 'compiled/views/PaginatedCollectionView', 'compiled/views/ExternalTools/AppReviewView', 'compiled/views/ExternalTools/RateToolView', 'compiled/collections/PaginatedCollection', 'compiled/models/AppReview', 'vendor/jquery.raty'], function(Backbone, $, template, PaginatedCollectionView, AppReviewView, RateToolView, PaginatedCollection, AppReview) {
    var AppFullView, _ref;

    return AppFullView = (function(_super) {
      __extends(AppFullView, _super);

      function AppFullView() {
        this.addApp = __bind(this.addApp, this);
        this.renderItem = __bind(this.renderItem, this);        _ref = AppFullView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppFullView.prototype.template = template;

      AppFullView.prototype.itemView = AppReviewView;

      AppFullView.prototype.className = 'app_full';

      AppFullView.prototype.events = {
        'click .add_app': 'addApp',
        'click .app_cancel': 'cancel',
        'click .rate_app': 'rateApp'
      };

      AppFullView.prototype.initialize = function() {
        this.collection = new PaginatedCollection;
        AppFullView.__super__.initialize.apply(this, arguments);
        this.render();
        this.collection.resourceName = "app_center/apps/" + this.model.id + "/reviews";
        return this.collection.fetch();
      };

      AppFullView.prototype.afterRender = function() {
        return this.$('.app-star').raty({
          readOnly: true,
          score: this.model.get('avg_rating'),
          path: '/images/raty/'
        });
      };

      AppFullView.prototype.renderItem = function(model) {
        if (model.get('comments').length > 0) {
          return AppFullView.__super__.renderItem.apply(this, arguments);
        }
      };

      AppFullView.prototype.refresh = function() {
        if (!this.collection.resourceName.match(/force_refresh/)) {
          this.collection.resourceName = "" + this.collection.resourceName + "?force_refresh=1";
        }
        return this.collection.fetch();
      };

      AppFullView.prototype.addApp = function(e) {
        if (e) {
          e.preventDefault();
        }
        return this.trigger('addApp', this);
      };

      AppFullView.prototype.cancel = function(e) {
        if (e) {
          e.preventDefault();
        }
        return this.trigger('cancel', this);
      };

      AppFullView.prototype.rateApp = function(e) {
        var _this = this;

        if (e) {
          e.preventDefault();
        }
        $('#rate_app_loader').show();
        this.review = new AppReview();
        this.review.on('sync', this.refresh, this);
        this.review.resourceName = "app_center/apps/" + this.model.id + "/reviews/self";
        this.rateAppView = new RateToolView({
          model: this.review
        });
        return this.review.fetch({
          success: function() {
            _this.rateAppView.render();
            return $('#rate_app_loader').hide();
          },
          error: function() {
            _this.rateAppView.render();
            return $('#rate_app_loader').hide();
          }
        });
      };

      return AppFullView;

    })(PaginatedCollectionView);
  });

}).call(this);
