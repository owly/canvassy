(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'underscore', 'compiled/widget/TokenSelectorList', 'compiled/collections/RecipientCollection', 'jquery.instructure_misc_helpers', 'compiled/jquery/scrollIntoView'], function($, _, TokenSelectorList, RecipientCollection) {
    return (function() {
      function _Class(input, url, options) {
        var _this = this;

        this.input = input;
        this.url = url;
        this.options = options != null ? options : {};
        this.select = __bind(this.select, this);
        this.close = __bind(this.close, this);
        this.click = __bind(this.click, this);
        this.mouseDown = __bind(this.mouseDown, this);
        this.mouseMove = __bind(this.mouseMove, this);
        this.autoSelectFirst = __bind(this.autoSelectFirst, this);
        this.stack = [];
        this.cache = {};
        this.$container = $('<div />').addClass('autocomplete_menu');
        this.$menu = $('<div />');
        this.$container.append($('<div />').append(this.$menu));
        this.$container.css('top', 0).css('left', 0);
        this.mode = 'input';
        $('body').append(this.$container);
        this.reposition = function() {
          var offset;

          offset = _this.input.bottomOffset();
          _this.$container.css('top', offset.top);
          return _this.$container.css('left', offset.left);
        };
        $(window).resize(this.reposition);
        this.close();
      }

      _Class.prototype.autoSelectFirst = function(list) {
        if (list == null) {
          list = this.list;
        }
        if (list === this.list && (this.selection == null)) {
          return this.select(list.first(), true);
        }
      };

      _Class.prototype.browse = function(data) {
        if (this.uiLocked) {
          return;
        }
        this.clear();
        this.close();
        this.open();
        this.list = this.listForQuery(this.preparePost(data));
        this.list.appendTo(this.$menu);
        this.autoSelectFirst();
        return true;
      };

      _Class.prototype.mouseMove = function(e) {
        var $li;

        if (this.uiLocked) {
          return;
        }
        $li = $(e.target).closest('li');
        if (!$li.hasClass('selectable')) {
          $li = null;
        }
        return this.select($li);
      };

      _Class.prototype.mouseDown = function(e) {
        var _this = this;

        return setTimeout(function() {
          return _this.input.focus();
        }, 0);
      };

      _Class.prototype.click = function(e) {
        if (this.uiLocked) {
          return;
        }
        this.mouseMove(e);
        if (this.selection) {
          if ($(e.target).closest('a.expand').length) {
            if (this.selectionExpanded()) {
              this.collapse();
            } else {
              this.expandSelection();
            }
          } else if (this.selectionToggleable() && $(e.target).closest('a.toggle').length) {
            this.toggleSelection();
          } else {
            if (this.selectionExpanded()) {
              this.collapse();
            } else if (this.selectionExpandable()) {
              this.expandSelection();
            } else {
              this.toggleSelection(true);
              this.clear();
              this.close();
            }
          }
        }
        return this.input.focus();
      };

      _Class.prototype.captureKeyDown = function(e) {
        var keyCode, _ref, _ref1;

        keyCode = (_ref = (_ref1 = e.originalEvent) != null ? _ref1.keyIdentifier : void 0) != null ? _ref : e.which;
        if (this.uiLocked) {
          return true;
        }
        if (this.$menu.find('.no-results').length > 0 && _.include([13, 'Enter'], keyCode)) {
          return e.preventDefault();
        }
        switch (keyCode) {
          case 'Backspace':
          case 'U+0008':
          case 8:
            if (this.input.val() === '') {
              if (this.listExpanded()) {
                this.collapse();
              } else if (this.$menu.is(":visible")) {
                this.close();
              } else {
                this.input.removeLastToken();
              }
              return true;
            }
            break;
          case 'Tab':
          case 'U+0009':
          case 9:
            if (this.selection && (this.selectionToggleable() || !this.selectionExpandable())) {
              this.toggleSelection(true);
            }
            this.clear();
            this.close();
            if (this.selection) {
              return true;
            }
            break;
          case 'Enter':
          case 13:
            if (this.selectionExpanded()) {
              this.collapse();
              return true;
            } else if (this.selectionExpandable() && !this.selectionToggleable()) {
              this.expandSelection();
              return true;
            } else if (this.selection) {
              this.toggleSelection(true);
              this.clear();
            }
            this.close();
            return true;
          case 'Shift':
          case 16:
            return false;
          case 'Esc':
          case 'U+001B':
          case 27:
            if (this.$menu.is(":visible")) {
              this.close();
              return true;
            } else {
              return false;
            }
            break;
          case 'U+0020':
          case 32:
            if (this.selectionToggleable() && this.mode === 'menu') {
              this.toggleSelection();
              return true;
            }
            break;
          case 'Left':
          case 37:
            if (this.listExpanded() && this.input.caret() === 0) {
              if (this.selectionExpanded() || this.input.val() === '') {
                this.collapse();
              } else {
                this.select(this.list.first());
              }
              return true;
            }
            break;
          case 'Up':
          case 38:
            this.selectPrev();
            return true;
          case 'Right':
          case 39:
            if (this.input.caret() === this.input.val().length && this.expandSelection()) {
              return true;
            }
            break;
          case 'Down':
          case 40:
            this.selectNext();
            return true;
          case 'U+002B':
          case 187:
          case 107:
            if (this.selectionToggleable() && this.mode === 'menu') {
              this.toggleSelection(true);
              return true;
            }
            break;
          case 'U+002D':
          case 189:
          case 109:
            if (this.selectionToggleable() && this.mode === 'menu') {
              this.toggleSelection(false);
              return true;
            }
        }
        this.mode = 'input';
        this.updateSearch();
        return false;
      };

      _Class.prototype.open = function() {
        this.$container.show();
        return this.reposition();
      };

      _Class.prototype.close = function() {
        var $selection, i, list, _i, _len, _ref, _ref1, _ref2;

        this.uiLocked = false;
        this.$container.hide();
        if ((_ref = this.list) != null) {
          _ref.remove();
        }
        _ref1 = this.stack;
        for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
          _ref2 = _ref1[i], $selection = _ref2[0], list = _ref2[1];
          list.remove();
        }
        this.list = null;
        this.stack = [];
        this.$menu.css('left', 0);
        this.select(null);
        return this.input.selectorClosed();
      };

      _Class.prototype.clear = function() {
        clearTimeout(this.timeout);
        this.input.val('');
        return this.select(null);
      };

      _Class.prototype.blur = function() {
        var _this = this;

        return setTimeout(function() {
          if (!(_this.input.hasFocus() || _this.$container.find(':focus').length > 0)) {
            return _this.close();
          }
        }, 0);
      };

      _Class.prototype.listExpanded = function() {
        if (this.stack.length) {
          return true;
        } else {
          return false;
        }
      };

      _Class.prototype.parent = function() {
        if (this.listExpanded()) {
          return this.stack[this.stack.length - 1][0];
        } else {
          return null;
        }
      };

      _Class.prototype.selectionExpanded = function() {
        var _ref, _ref1;

        return (_ref = (_ref1 = this.selection) != null ? _ref1.hasClass('expanded') : void 0) != null ? _ref : false;
      };

      _Class.prototype.selectionExpandable = function() {
        var _ref, _ref1;

        return (_ref = (_ref1 = this.selection) != null ? _ref1.hasClass('expandable') : void 0) != null ? _ref : false;
      };

      _Class.prototype.selectionToggleable = function($node) {
        var _ref;

        if ($node == null) {
          $node = this.selection;
        }
        return ((_ref = $node != null ? $node.hasClass('toggleable') : void 0) != null ? _ref : false) && !this.selectionExpanded();
      };

      _Class.prototype.expandSelection = function() {
        var list,
          _this = this;

        if (!(this.selectionExpandable() && !this.selectionExpanded())) {
          return false;
        }
        this.stack.push([this.selection, this.list]);
        this.clear();
        this.$menu.css('width', ((this.stack.length + 1) * 100) + '%');
        this.uiLocked = true;
        list = this.listForQuery(this.preparePost());
        list.insertAfter(this.list);
        return this.$menu.animate({
          left: '-=' + this.$menu.parent().css('width')
        }, 'fast', function() {
          return _this.list.hide(function() {
            _this.list = list;
            _this.autoSelectFirst();
            return _this.uiLocked = false;
          });
        });
      };

      _Class.prototype.collapse = function() {
        var $selection, list, _ref,
          _this = this;

        if (!this.listExpanded()) {
          return false;
        }
        _ref = this.stack.pop(), $selection = _ref[0], list = _ref[1];
        this.uiLocked = true;
        list.restore();
        return this.$menu.animate({
          left: '+=' + this.$menu.parent().css('width')
        }, 'fast', function() {
          _this.list.remove();
          _this.list = list;
          _this.input.val(_this.list.query.search);
          _this.select($selection);
          return _this.uiLocked = false;
        });
      };

      _Class.prototype.toggleSelection = function(state, $node, toggleOnly) {
        var id, _ref;

        if ($node == null) {
          $node = this.selection;
        }
        if (toggleOnly == null) {
          toggleOnly = false;
        }
        if (!((state != null) || this.selectionToggleable($node))) {
          return false;
        }
        id = $node.data('id');
        if (state == null) {
          state = !$node.hasClass('on');
        }
        if (state) {
          if (this.selectionToggleable($node) && !toggleOnly) {
            $node.addClass('on');
          }
          this.input.addToken({
            value: id,
            text: (_ref = $node.data('text')) != null ? _ref : $node.text(),
            noClear: true,
            data: $node.data('user_data')
          });
        } else {
          if (!toggleOnly) {
            $node.removeClass('on');
          }
          this.input.removeToken({
            value: id
          });
        }
        if (!toggleOnly) {
          return this.updateSelectAll($node);
        }
      };

      _Class.prototype.updateSelectAll = function($node, offset) {
        var $parentNode, list, selectAllToggled,
          _this = this;

        if (offset == null) {
          offset = 0;
        }
        selectAllToggled = $node.data('user_data').selectAll;
        list = offset ? this.stack[this.stack.length - offset][1] : this.list;
        if (!list.canSelectAll()) {
          return;
        }
        list.updateSelectAll(selectAllToggled, function(state, $node) {
          return _this.toggleSelection(state, $node, true);
        });
        if (offset < this.stack.length) {
          offset++;
          $parentNode = this.stack[this.stack.length - offset][0];
          if (this.selectionToggleable($parentNode)) {
            if (list.selectAllActive()) {
              $parentNode.addClass('on');
            } else {
              $parentNode.removeClass('on');
            }
            return this.updateSelectAll($parentNode, offset);
          }
        }
      };

      _Class.prototype.select = function($node, preserveMode) {
        var _ref;

        if (preserveMode == null) {
          preserveMode = false;
        }
        if (($node != null ? $node[0] : void 0) === ((_ref = this.selection) != null ? _ref[0] : void 0)) {
          return;
        }
        this.selection = ($node != null ? $node.length : void 0) ? ($node.focus(), $node.scrollIntoView({
          ignore: {
            border: true
          }
        }), $node) : null;
        if (!preserveMode) {
          return this.mode = ($node ? 'menu' : 'input');
        }
      };

      _Class.prototype.selectNext = function(preserveMode) {
        var _ref;

        if (preserveMode == null) {
          preserveMode = false;
        }
        this.select(this.selection ? this.selection.next().length ? this.selection.next() : this.selection.parent('ul').next().length ? this.selection.parent('ul').next().find('li').first() : null : this.list.first(), preserveMode);
        if ((_ref = this.selection) != null ? _ref.hasClass('message') : void 0) {
          return this.selectNext(preserveMode);
        }
      };

      _Class.prototype.selectPrev = function() {
        var _ref, _ref1;

        this.select(this.selection ? ((_ref = this.selection) != null ? _ref.prev().length : void 0) ? this.selection.prev() : this.selection.parent('ul').prev().length ? this.selection.parent('ul').prev().find('li').last() : null : this.list.last());
        if ((_ref1 = this.selection) != null ? _ref1.hasClass('message') : void 0) {
          return this.selectPrev();
        }
      };

      _Class.prototype.updateSearch = function() {
        var _this = this;

        clearTimeout(this.timeout);
        this.select(null);
        return this.timeout = setTimeout(function() {
          var list;

          list = _this.listForQuery(_this.preparePost());
          if (list === _this.list) {

          } else if (list.query.search === '' && !_this.listExpanded()) {
            if (_this.$menu.is(":visible")) {
              return _this.close();
            }
          } else {
            if (_this.list) {
              list.insertAfter(_this.list);
              _this.list.remove();
            } else {
              _this.open();
              list.appendTo(_this.$menu);
            }
            _this.list = list;
            return _this.autoSelectFirst();
          }
        }, 100);
      };

      _Class.prototype.preparePost = function(data) {
        var postData, _ref, _ref1;

        postData = $.extend({}, (_ref = this.options.baseData) != null ? _ref : {}, data != null ? data : {}, {
          search: this.input.val().replace(/^\s+|\s+$/g, "")
        });
        if ((_ref1 = postData.exclude) == null) {
          postData.exclude = [];
        }
        postData.exclude = postData.exclude.concat(this.input.baseExclude);
        if (this.listExpanded()) {
          postData.context = this.parent().data('id');
        } else {
          postData.exclude = postData.exclude.concat(this.input.tokenValues());
        }
        return postData;
      };

      _Class.prototype.collectionForQuery = function(query) {
        var cacheKey, collection;

        cacheKey = JSON.stringify(query);
        if (this.cache[cacheKey] == null) {
          collection = new RecipientCollection;
          collection.url = this.url;
          collection.fetch({
            data: query
          });
          this.cache[cacheKey] = collection;
        }
        return this.cache[cacheKey];
      };

      _Class.prototype.listForQuery = function(query) {
        var ancestor, collection, list,
          _this = this;

        collection = this.collectionForQuery(query);
        list = new TokenSelectorList({
          selector: this,
          parent: this.parent(),
          ancestors: (function() {
            var _i, _len, _ref, _results;

            _ref = this.stack;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              ancestor = _ref[_i];
              _results.push(ancestor[0].data('id'));
            }
            return _results;
          }).call(this),
          collection: collection,
          query: query
        });
        list.render();
        if (!collection.atLeastOnePageFetched) {
          collection.on('fetch', _.once(function() {
            return _this.autoSelectFirst(list);
          }));
        }
        return list;
      };

      _Class.prototype.teardown = function() {
        return this.$container.remove();
      };

      return _Class;

    })();
  });

}).call(this);
