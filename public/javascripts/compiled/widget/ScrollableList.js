(function() {
  define(['compiled/util/ScrollableListDataSource', 'compiled/util/shortcut', 'compiled/jquery/scrollIntoView', 'jquery.disableWhileLoading'], function(ScrollableListDataSource, shortcut) {
    return (function() {
      shortcut(_Class, 'ds', 'addItem', 'updateItems', 'removeItem');

      function _Class($scroller, options) {
        var _ref, _ref1, _ref2,
          _this = this;

        this.$scroller = $scroller;
        if (options == null) {
          options = {};
        }
        this.$scroller.css('overflow', 'auto');
        this.ds = new ScrollableListDataSource(this, options);
        this.$scroller.scroll(function(e) {
          return _this.scroll(e);
        });
        this.$list = this.$scroller.find('ul').eq(0);
        if (!this.$list.length) {
          this.$list = $('<ul>').appendTo(this.$scroller);
        }
        this.$list.addClass('scrollable-list');
        this.itemTemplate = (_ref = options.itemTemplate) != null ? _ref : function(data) {
          return "<li>" + data + "</li>";
        };
        this.elementHeight = (_ref1 = options.elementHeight) != null ? _ref1 : this.inferElementHeight();
        this.fetchBuffer = (_ref2 = options.fetchBuffer) != null ? _ref2 : 20;
        this.firstLoad = true;
        if (!options.noAutoLoad) {
          this.load();
        }
        if (this.clicked) {
          this.$list.delegate('.scrollable-list > li', 'click', this.clicked);
        }
      }

      _Class.prototype.item = function(id) {
        return this.ds.items[this.positionFor(id)];
      };

      _Class.prototype.$item = function(id) {
        var $item;

        $item = this.$itemAt(this.positionFor(id));
        if ($item.length) {
          return $item;
        }
      };

      _Class.prototype.$itemAt = function(pos) {
        return this.$items().eq(pos);
      };

      _Class.prototype.$items = function() {
        return this.$list.find('> li').not('.scrollable-list-item-deleting,.scrollable-list-item-moving');
      };

      _Class.prototype.addedItem = function(item, offset) {
        var $newItem;

        this.prepareItems(offset - 1);
        $newItem = $(this.itemTemplate(item));
        if (offset === 0) {
          $newItem.prependTo(this.$list);
        } else {
          $newItem.insertAfter(this.$itemAt(offset - 1));
        }
        this.setCount(this.ds.itemIds.length);
        return typeof this.added === "function" ? this.added(item, $newItem) : void 0;
      };

      _Class.prototype.updateItem = function(item) {
        return this.updateItems([item]);
      };

      _Class.prototype.updatedItem = function(item, currOffset, newOffset) {
        var $item, $items, $newItem,
          _this = this;

        this.prepareItems(Math.max(newOffset - 1, currOffset));
        this.$itemAt(currOffset).replaceWith(this.itemTemplate(item));
        $items = this.$items();
        $item = $items.eq(currOffset);
        if (currOffset !== newOffset) {
          $newItem = $item.clone();
          $item.addClass('scrollable-list-item-moving').animate({
            opacity: 'toggle',
            height: 'toggle'
          }, 200, function() {
            return $item.remove();
          });
          if (newOffset === 0) {
            $newItem.prependTo(this.$list);
          } else {
            $newItem.insertAfter($items.eq(newOffset - 1));
          }
          $newItem.animate({
            opacity: 'toggle',
            height: 'toggle'
          }, 0).animate({
            opacity: 'toggle',
            height: 'toggle'
          }, 200, function() {
            return $newItem.scrollIntoView();
          });
        }
        return typeof this.updated === "function" ? this.updated(item, $newItem != null ? $newItem : $item) : void 0;
      };

      _Class.prototype.removedItem = function(item, offset) {
        var $item,
          _this = this;

        $item = this.$itemAt(offset);
        $item.addClass('scrollable-list-item-deleting').fadeOut('fast', function() {
          $item.remove();
          _this.setCount(_this.ds.itemIds.length);
          return _this.fetchVisible();
        });
        return typeof this.removed === "function" ? this.removed(item, $item) : void 0;
      };

      _Class.prototype.replaceItems = function(offset, items, totalCount) {
        var $items, item, newItems;

        this.setCount(totalCount);
        this.prepareItems(offset - 1);
        $items = this.$items().slice(offset, offset + items.length);
        newItems = [];
        if ($items.length < items.length) {
          newItems = items.slice($items.length);
          items = items.slice(0, $items.length);
        }
        $(((function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            item = items[_i];
            _results.push(this.itemTemplate(item));
          }
          return _results;
        }).call(this)).join('')).insertBefore($items.eq(0));
        $items.remove();
        if (newItems.length) {
          return this.$list.append(((function() {
            var _i, _len, _results;

            _results = [];
            for (_i = 0, _len = newItems.length; _i < _len; _i++) {
              item = newItems[_i];
              _results.push(this.itemTemplate(item));
            }
            return _results;
          }).call(this)).join(""));
        }
      };

      _Class.prototype.fetchVisible = function() {
        var fetchEnd, fetchStart;

        if (!this.ds.itemIds) {
          return [];
        }
        fetchStart = Math.floor(this.$scroller.scrollTop() / this.elementHeight);
        fetchEnd = Math.floor((this.$scroller.scrollTop() + this.$scroller.height() - 1) / this.elementHeight) + this.fetchBuffer;
        if (fetchEnd >= this.numItems) {
          fetchEnd = Math.max(this.numItems, 1) - 1;
        }
        fetchStart = Math.max(0, fetchStart - this.fetchBuffer);
        this.prepareItems(fetchEnd);
        return this.ds.fetchRange(fetchStart, fetchEnd);
      };

      _Class.prototype.prepareItems = function(renderThrough) {
        var i, newItems;

        newItems = renderThrough - this.$items().length;
        if (newItems > 0) {
          return this.$list.append(((function() {
            var _i, _results;

            _results = [];
            for (i = _i = 0; 0 <= newItems ? _i <= newItems : _i >= newItems; i = 0 <= newItems ? ++_i : --_i) {
              _results.push("<li class='scrollable-list-item-loading' />");
            }
            return _results;
          })()).join(''));
        }
      };

      _Class.prototype.scroll = function() {
        var _this = this;

        if (this.scrollCb) {
          clearTimeout(this.scrollCb);
        }
        return this.scrollCb = setTimeout(function() {
          delete _this.scrollCb;
          return _this.fetchVisible();
        }, 50);
      };

      _Class.prototype.inferElementHeight = function() {
        var $dummy, height;

        $dummy = $(this.itemTemplate({})).appendTo(this.$list);
        height = $dummy.height();
        $dummy.remove();
        return height;
      };

      _Class.prototype.positionFor = function(id) {
        return this.ds.itemMap[id];
      };

      _Class.prototype.loadItem = function(id) {
        var deferreds, pos,
          _this = this;

        if ((id != null) && ((pos = this.positionFor(id)) != null)) {
          this.prepareItems(pos);
          this.$item(id).scrollIntoView({
            toTop: this.firstLoad
          });
        }
        deferreds = this.fetchVisible();
        if (!deferreds.length) {
          deferreds = [{}];
        }
        return $.when.apply($, deferreds).done(function() {
          var $node, item, _ref;

          if (pos != null) {
            _ref = [_this.ds.items[pos], _this.$item(id)], item = _ref[0], $node = _ref[1];
          }
          return typeof _this.loaded === "function" ? _this.loaded(id, item, $node) : void 0;
        });
      };

      _Class.prototype.load = function(options) {
        var deferred, paramsChanged, sortKeyChanged,
          _this = this;

        if (options == null) {
          options = {};
        }
        sortKeyChanged = options.sortKey && options.sortKey !== this.ds.sortKey;
        paramsChanged = options.params && JSON.stringify(options.params) !== JSON.stringify(this.ds.params);
        if (sortKeyChanged || paramsChanged || !this.ds.initialized || options.force) {
          this.fetchThrough = 0;
          this.$list.empty();
          this.$list.css('min-height', '0px');
          deferred = this.ds.load(options, function(totalCount) {
            _this.setCount(totalCount);
            _this.loadItem(options.loadId);
            if (typeof options.cb === "function") {
              options.cb();
            }
            return _this.firstLoad = false;
          });
          return this.$scroller.disableWhileLoading(deferred);
        } else {
          this.loadItem(options.loadId);
          return this.firstLoad = false;
        }
      };

      _Class.prototype.setCount = function(numItems) {
        var $items;

        this.numItems = numItems;
        this.$list.css('min-height', (this.elementHeight * this.numItems) + 'px');
        $items = this.$items();
        if ($items.length > this.numItems) {
          return $items.slice(this.numItems).remove();
        }
      };

      return _Class;

    })();
  });

}).call(this);
