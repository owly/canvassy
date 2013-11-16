(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/CollectionView', 'jst/paginatedCollection'], function($, _, CollectionView, template) {
    var PaginatedCollectionView, _ref;

    return PaginatedCollectionView = (function(_super) {
      __extends(PaginatedCollectionView, _super);

      function PaginatedCollectionView() {
        this.showLoadingIndicator = __bind(this.showLoadingIndicator, this);
        this.hideLoadingIndicator = __bind(this.hideLoadingIndicator, this);
        this.checkScroll = __bind(this.checkScroll, this);
        this.detachScroll = __bind(this.detachScroll, this);
        this.attachScroll = __bind(this.attachScroll, this);        _ref = PaginatedCollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PaginatedCollectionView.prototype.defaults = {
        buffer: 500,
        scrollContainer: window
      };

      PaginatedCollectionView.prototype.els = _.extend({}, CollectionView.prototype.els, {
        '.paginatedLoadingIndicator': '$loadingIndicator'
      });

      PaginatedCollectionView.optionProperty('scrollContainer');

      PaginatedCollectionView.prototype.template = template;

      PaginatedCollectionView.prototype.initialize = function() {
        PaginatedCollectionView.__super__.initialize.apply(this, arguments);
        return this.initScrollContainer();
      };

      PaginatedCollectionView.prototype.attachCollection = function() {
        PaginatedCollectionView.__super__.attachCollection.apply(this, arguments);
        this.collection.on('reset', this.attachScroll);
        this.collection.on('fetched:last', this.detachScroll);
        this.collection.on('beforeFetch', this.showLoadingIndicator);
        return this.collection.on('fetch', this.hideLoadingIndicator);
      };

      PaginatedCollectionView.prototype.initScrollContainer = function() {
        this.scrollContainer = $(this.scrollContainer);
        return this.heightContainer = this.scrollContainer[0] === window ? document.body : this.scrollContainer[0];
      };

      PaginatedCollectionView.prototype.attachScroll = function() {
        var resize, scroll;

        scroll = "scroll.pagination:" + this.cid;
        resize = "resize.pagination:" + this.cid;
        this.scrollContainer.on(scroll, this.checkScroll);
        return this.scrollContainer.on(resize, this.checkScroll);
      };

      PaginatedCollectionView.prototype.detachScroll = function() {
        return this.scrollContainer.off(".pagination:" + this.cid);
      };

      PaginatedCollectionView.prototype.checkScroll = function() {
        var distanceToBottom;

        if (this.fetchingPage) {
          return;
        }
        distanceToBottom = this.heightContainer.scrollHeight - this.scrollContainer.scrollTop() - this.scrollContainer.height();
        if (distanceToBottom < this.options.buffer) {
          return this.collection.fetch({
            page: 'next'
          });
        }
      };

      PaginatedCollectionView.prototype.remove = function() {
        this.detachScroll();
        return PaginatedCollectionView.__super__.remove.apply(this, arguments);
      };

      PaginatedCollectionView.prototype.afterRender = function() {
        PaginatedCollectionView.__super__.afterRender.apply(this, arguments);
        return this.hideLoadingIndicator();
      };

      PaginatedCollectionView.prototype.hideLoadingIndicator = function() {
        var _ref1;

        return (_ref1 = this.$loadingIndicator) != null ? _ref1.hide() : void 0;
      };

      PaginatedCollectionView.prototype.showLoadingIndicator = function() {
        var _ref1;

        return (_ref1 = this.$loadingIndicator) != null ? _ref1.show() : void 0;
      };

      return PaginatedCollectionView;

    })(CollectionView);
  });

}).call(this);
