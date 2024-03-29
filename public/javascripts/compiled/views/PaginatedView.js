(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'jquery', 'Backbone', 'jst/PaginatedView'], function(_, $, Backbone, template) {
    var PaginatedView, _ref;

    return PaginatedView = (function(_super) {
      __extends(PaginatedView, _super);

      function PaginatedView() {
        _ref = PaginatedView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PaginatedView.prototype.paginationLoaderTemplate = template;

      PaginatedView.prototype.paginationScrollContainer = window;

      PaginatedView.prototype.distanceTillFetchNextPage = 100;

      PaginatedView.prototype.initialize = function(options) {
        var ret;

        ret = PaginatedView.__super__.initialize.call(this, options);
        this.fetchOptions = options.fetchOptions;
        this.startPaginationListener();
        this.bindPaginationEvents();
        return ret;
      };

      PaginatedView.prototype.render = function() {
        var ret;

        ret = PaginatedView.__super__.render.apply(this, arguments);
        if (this.collection.fetchingNextPage) {
          this.showPaginationLoader();
        }
        return ret;
      };

      PaginatedView.prototype.showPaginationLoader = function() {
        var _ref1;

        if ((_ref1 = this.$paginationLoader) == null) {
          this.$paginationLoader = $(this.paginationLoaderTemplate());
        }
        return this.placePaginationLoader();
      };

      PaginatedView.prototype.placePaginationLoader = function() {
        var _ref1;

        return (_ref1 = this.$paginationLoader) != null ? _ref1.insertAfter(this.el) : void 0;
      };

      PaginatedView.prototype.hidePaginationLoader = function() {
        var _ref1;

        return (_ref1 = this.$paginationLoader) != null ? _ref1.remove() : void 0;
      };

      PaginatedView.prototype.distanceToBottom = function() {
        var $container, containerScrollHeight;

        $container = $(this.paginationScrollContainer);
        containerScrollHeight = $container[0] === window ? $(document).height() : $container[0].scrollHeight;
        return containerScrollHeight - $container.scrollTop() - $container.height();
      };

      PaginatedView.prototype.startPaginationListener = function() {
        $(this.paginationScrollContainer).on("scroll.pagination" + this.cid + ", resize.pagination" + this.cid, $.proxy(this.fetchNextPageIfNeeded, this));
        return this.fetchNextPageIfNeeded();
      };

      PaginatedView.prototype.stopPaginationListener = function() {
        return $(this.paginationScrollContainer).off(".pagination" + this.cid);
      };

      PaginatedView.prototype.fetchNextPageIfNeeded = function() {
        var _this = this;

        if (this.collection.fetchingNextPage) {
          return;
        }
        if (!this.collection.urls || !this.collection.urls.next) {
          if (this.collection.length) {
            this.stopPaginationListener();
          }
          return;
        }
        return setTimeout(function() {
          if ($(_this.paginationScrollContainer).is(':visible') && _this.distanceToBottom() < _this.distanceTillFetchNextPage) {
            return _this.collection.fetch(_.extend({
              page: 'next'
            }, _this.fetchOptions));
          }
        }, 0);
      };

      PaginatedView.prototype.bindPaginationEvents = function() {
        this.collection.on('beforeFetch:next', this.showPaginationLoader, this);
        this.collection.on('fetch:next', this.hidePaginationLoader, this);
        return this.collection.on('all', this.fetchNextPageIfNeeded, this);
      };

      return PaginatedView;

    })(Backbone.View);
  });

}).call(this);
