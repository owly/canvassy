(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'compiled/arr/walk', 'Backbone', 'jst/discussions/EntryCollectionView', 'jst/discussions/entryStats', 'compiled/views/DiscussionTopic/EntryView'], function(I18n, walk, _arg, template, entryStats, EntryView) {
    var EntryCollectionView, View, _ref;

    View = _arg.View;
    return EntryCollectionView = (function(_super) {
      __extends(EntryCollectionView, _super);

      function EntryCollectionView() {
        this.add = __bind(this.add, this);
        this.addAll = __bind(this.addAll, this);        _ref = EntryCollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EntryCollectionView.prototype.defaults = {
        descendants: 2,
        showMoreDescendants: 2,
        showReplyButton: false,
        displayShowMore: true,
        threaded: false,
        root: false
      };

      EntryCollectionView.prototype.events = {
        'click .loadNext': 'loadNextFromEvent'
      };

      EntryCollectionView.prototype.template = template;

      EntryCollectionView.prototype.els = {
        '.discussion-entries': 'list'
      };

      EntryCollectionView.prototype.attach = function() {
        this.collection.on('reset', this.addAll);
        return this.collection.on('add', this.add);
      };

      EntryCollectionView.prototype.toJSON = function() {
        return this.options;
      };

      EntryCollectionView.prototype.addAll = function() {
        this.teardown();
        return this.collection.each(this.add);
      };

      EntryCollectionView.prototype.add = function(entry) {
        var view;

        view = new EntryView({
          model: entry,
          treeView: this.constructor,
          descendants: this.options.descendants,
          children: this.collection.options.perPage,
          showMoreDescendants: this.options.showMoreDescendants,
          threaded: this.options.threaded,
          collapsed: this.options.collapsed
        });
        view.render();
        entry.on('change:editor', this.nestEntries);
        if (entry.get('new')) {
          return this.addNewView(view);
        }
        if (this.options.descendants) {
          view.renderTree();
        } else if (entry.hasChildren()) {
          view.renderDescendantsLink();
        }
        if (!this.options.threaded && !this.options.root) {
          this.list.prepend(view.el);
        } else {
          this.list.append(view.el);
        }
        return this.nestEntries();
      };

      EntryCollectionView.prototype.nestEntries = function() {
        return $('.entry_content[data-should-position]').each(function() {
          var $el, offset;

          $el = $(this);
          offset = ($el.parents('li.entry').length - 1) * 30;
          return $el.css('padding-left', offset).removeAttr('data-should-position');
        });
      };

      EntryCollectionView.prototype.addNewView = function(view) {
        var _this = this;

        view.model.set('new', false);
        if (this.options.threaded) {
          this.list.prepend(view.el);
        } else {
          this.list.append(view.el);
        }
        this.nestEntries();
        if (!this.options.root) {
          view.$el.hide();
          return setTimeout(function() {
            return view.$el.fadeIn();
          }, 500);
        }
      };

      EntryCollectionView.prototype.teardown = function() {
        return this.list.empty();
      };

      EntryCollectionView.prototype.afterRender = function() {
        EntryCollectionView.__super__.afterRender.apply(this, arguments);
        this.addAll();
        return this.renderNextLink();
      };

      EntryCollectionView.prototype.renderNextLink = function() {
        var moreText, showMore, stats, _ref1;

        if ((_ref1 = this.nextLink) != null) {
          _ref1.remove();
        }
        if (!(this.options.displayShowMore && this.unShownChildren() > 0)) {
          return;
        }
        stats = this.getUnshownStats();
        this.nextLink = $('<div/>');
        showMore = true;
        if (!this.options.threaded) {
          moreText = I18n.t('show_all_n_replies', {
            one: "Show one reply",
            other: "Show all %{count} replies"
          }, {
            count: stats.total + this.collection.options.perPage
          });
        }
        this.nextLink.html(entryStats({
          stats: stats,
          moreText: moreText,
          showMore: true
        }));
        this.nextLink.addClass('showMore loadNext');
        if (this.options.threaded) {
          return this.nextLink.insertAfter(this.list);
        } else {
          return this.nextLink.insertBefore(this.list);
        }
      };

      EntryCollectionView.prototype.getUnshownStats = function() {
        var end, start, total, unread, unshown;

        start = this.collection.length;
        end = this.collection.fullCollection.length;
        unshown = this.collection.fullCollection.toJSON().slice(start, end);
        total = 0;
        unread = 0;
        walk(unshown, 'replies', function(entry) {
          total++;
          if (entry.read_state === 'unread') {
            return unread++;
          }
        });
        return {
          total: total,
          unread: unread
        };
      };

      EntryCollectionView.prototype.unShownChildren = function() {
        return this.collection.fullCollection.length - this.collection.length;
      };

      EntryCollectionView.prototype.loadNextFromEvent = function(event) {
        event.stopPropagation();
        event.preventDefault();
        return this.loadNext();
      };

      EntryCollectionView.prototype.loadNext = function() {
        if (this.options.threaded) {
          this.collection.add(this.collection.fullCollection.getPage('next'));
        } else {
          this.collection.reset(this.collection.fullCollection.toArray());
        }
        return this.renderNextLink();
      };

      EntryCollectionView.prototype.filter = EntryCollectionView.prototype.afterRender;

      return EntryCollectionView;

    })(View);
  });

}).call(this);
