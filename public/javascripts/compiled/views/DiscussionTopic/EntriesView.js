(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'jquery', 'jst/DiscussionTopics/pageNav', 'Backbone', 'compiled/views/DiscussionTopic/EntryCollectionView', 'compiled/jquery/scrollIntoView'], function(_, $, pageNavTemplate, Backbone, EntryCollectionView) {
    var EntriesView, _ref;

    return EntriesView = (function(_super) {
      __extends(EntriesView, _super);

      function EntriesView() {
        this.render = __bind(this.render, this);
        this.goToEntry = __bind(this.goToEntry, this);
        this.addEntry = __bind(this.addEntry, this);
        this.hideIfFiltering = __bind(this.hideIfFiltering, this);        _ref = EntriesView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EntriesView.prototype.defaults = {
        initialPage: 0,
        descendants: 2,
        showMoreDescendants: 50,
        children: 3
      };

      EntriesView.prototype.$window = $(window);

      EntriesView.prototype.initialize = function() {
        this.collection.on('add', this.addEntry);
        return this.model.on('change', this.hideIfFiltering);
      };

      EntriesView.prototype.hideIfFiltering = function() {
        if (this.model.hasFilter()) {
          return this.$el.addClass('hidden');
        } else {
          return this.$el.removeClass('hidden');
        }
      };

      EntriesView.prototype.addEntry = function(entry) {
        return this.collectionView.collection.add(entry);
      };

      EntriesView.prototype.goToEntry = function(id) {
        var $el, entryData;

        if (typeof id !== 'object') {
          id = parseInt(id, 10);
        } else {
          entryData = id;
          id = entryData.entry.id;
        }
        $el = $("#entry-" + id);
        if ($el.length) {
          return this.scrollToEl($el);
        }
        if (entryData == null) {
          entryData = this.collection.getEntryData(id);
        }
        if (this.collection.currentPage === entryData.page) {
          if (entryData.levels === 0) {
            return this.expandToUnrenderedEntry(entryData);
          } else {
            return this.descendToUnrenderedEntry(entryData);
          }
        } else {
          return this.renderAndGoToEntry(entryData);
        }
      };

      EntriesView.prototype.expandToUnrenderedEntry = function(entryData) {
        var $el, entry, view;

        entry = entryData.entry;
        $el = {};
        while (!$el.length) {
          entry = entry.parent;
          $el = $("#entry-" + entry.id);
        }
        view = $el.data('view');
        if (view.treeView) {
          view.treeView.loadNext();
        } else {
          view.renderTree();
        }
        return this.goToEntry(entryData);
      };

      EntriesView.prototype.descendToUnrenderedEntry = function(entryData) {
        var $el, child, descendants, entry, parent, replies, view;

        entry = entryData.entry;
        parent = entry;
        descendants = -1;
        $el = {};
        while (!$el.length) {
          child = parent;
          parent = child.parent;
          descendants++;
          replies = _.without(parent.replies, child);
          replies.unshift(child);
          parent.replies = replies;
          $el = $("#entry-" + child.id);
        }
        view = $el.data('view');
        view.renderTree({
          descendants: descendants
        });
        return this.goToEntry(entryData);
      };

      EntriesView.prototype.renderAndGoToEntry = function(entryData) {
        this.render(entryData.page + 1);
        return this.goToEntry(entryData);
      };

      EntriesView.prototype.scrollToEl = function($el) {
        var _this = this;

        return this.$window.scrollTo($el, 200, {
          offset: -150,
          onAfter: function() {
            var once;

            setTimeout((function() {
              return $el.addClass('highlight');
            }), 200);
            setTimeout((function() {
              return $el.removeClass('highlight');
            }), 400);
            setTimeout((function() {
              return $el.addClass('highlight');
            }), 600);
            once = function() {
              $el.removeClass('highlight');
              _this.$window.off('scroll', once);
              return _this.trigger('scrollAwayFromEntry');
            };
            return setTimeout(function() {
              _this.$window.on("scroll", once);
              return setTimeout(once, 5000);
            }, 10);
          }
        });
      };

      EntriesView.prototype.render = function(page) {
        if (page == null) {
          page = 1;
        }
        this.teardown();
        this.collectionView = new EntryCollectionView({
          el: this.$el[0],
          collection: this.collection.getPageAsCollection(page - 1, {
            perPage: this.options.children
          }),
          descendants: this.options.descendants,
          showMoreDescendants: this.options.showMoreDescendants,
          displayShowMore: false,
          threaded: this.options.threaded,
          root: true,
          collapsed: this.model.get('collapsed')
        });
        this.collectionView.render();
        this.renderPageNav();
        return this;
      };

      EntriesView.prototype.teardown = function() {
        return this.$el.empty();
      };

      EntriesView.prototype.renderPageNav = function() {
        var current, html, locals, pagesToShow, total, _i, _results;

        total = this.collection.totalPages();
        current = this.collection.currentPage + 1;
        if (total < 2) {
          return;
        }
        pagesToShow = 3;
        locals = {
          current: current
        };
        locals.showFirst = total > pagesToShow && current !== 1;
        if (total > pagesToShow && current !== total) {
          locals.lastPage = total;
        }
        locals.pages = total < pagesToShow + 1 ? (function() {
          _results = [];
          for (var _i = 1; 1 <= total ? _i <= total : _i >= total; 1 <= total ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this) : locals.showFirst && locals.lastPage ? [current - 1, current, current + 1] : locals.showFirst && !locals.lastPage ? [current - 2, current - 1, current] : !locals.showFirst && locals.lastPage ? [current, current + 1, current + 2] : void 0;
        html = pageNavTemplate(locals);
        return this.$el.prepend(html).append(html);
      };

      return EntriesView;

    })(Backbone.View);
  });

}).call(this);
