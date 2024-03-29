(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/PaginatedView', 'jquery.disableWhileLoading'], function(_, PaginatedView) {
    var TokenSelectorList, _ref;

    return TokenSelectorList = (function(_super) {
      __extends(TokenSelectorList, _super);

      function TokenSelectorList() {
        this.showPaginationLoader = __bind(this.showPaginationLoader, this);
        this.addOne = __bind(this.addOne, this);
        this.render = __bind(this.render, this);        _ref = TokenSelectorList.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TokenSelectorList.prototype.tagName = 'div';

      TokenSelectorList.prototype.className = 'list';

      TokenSelectorList.prototype.paginationLoaderTemplate = function() {
        return "<div class=\"pagination-loader\" style=\"height: 60px;\">&nbsp;</div>";
      };

      TokenSelectorList.prototype.events = {
        'blur li': 'onBlur',
        'focus li': 'onFocus',
        'keydown li': 'onKeydown'
      };

      TokenSelectorList.prototype.keyCodes = {
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        27: 'Escape',
        32: 'Space',
        37: 'LeftArrow',
        38: 'UpArrow',
        39: 'RightArrow',
        40: 'DownArrow',
        91: 'Command'
      };

      TokenSelectorList.prototype.initialize = function(options) {
        this.selector = this.options.selector;
        this.parent = this.options.parent;
        this.ancestors = this.options.ancestors;
        this.query = this.options.query;
        this.$heading = $('<ul />', {
          "class": 'heading'
        }).appendTo(this.$el);
        this.paginationScrollContainer = $('<ul />', {
          role: 'menu'
        });
        this.$body = this.paginationScrollContainer.appendTo(this.$el);
        this.$el.find('ul').on('mousemove', this.selector.mouseMove).on('mousedown', this.selector.mouseDown).on('click', this.selector.click);
        this.collection.on('beforeFetch', this.showPaginationLoader, this);
        this.collection.on('fetch', this.render);
        return TokenSelectorList.__super__.initialize.apply(this, arguments);
      };

      TokenSelectorList.prototype.render = function() {
        var $li, $message, activeIndex, everyoneText, filterText, selectAllText, _base, _base1, _base2, _ref1, _ref2, _ref3;

        activeIndex = this.paginationScrollContainer.children('.active').index();
        this.clear();
        this.$selectAll = null;
        if (this.parent) {
          $li = this.parent.clone();
          $li.addClass('expanded').removeClass('active first last');
          this.$heading.append($li).show();
        } else {
          this.$heading.hide();
        }
        if (!this.query.search) {
          if (this.collection.length > 0) {
            filterText = typeof (_base = this.selector.options).includeFilterOption === "function" ? _base.includeFilterOption(this.query) : void 0;
            if (filterText) {
              this.addFilterOption(filterText);
            }
          }
          if (this.collection.length > 1) {
            everyoneText = typeof (_base1 = this.selector.options).includeEveryoneOption === "function" ? _base1.includeEveryoneOption(this.query, this.parent) : void 0;
            selectAllText = typeof (_base2 = this.selector.options).includeSelectAllOption === "function" ? _base2.includeSelectAllOption(this.query, this.parent) : void 0;
            if (everyoneText) {
              this.addEveryoneOption(everyoneText);
            }
            if (selectAllText) {
              this.addSelectAllOption(selectAllText);
            }
          }
        }
        this.collection.each(this.addOne);
        if (this.selectAllActive() || ((_ref1 = this.parent) != null ? typeof _ref1.hasClass === "function" ? _ref1.hasClass('on') : void 0 : void 0)) {
          this.$body.find('li.toggleable').addClass('on');
        }
        this.$el.toggleClass('with-toggles', this.selector.options.showToggles && this.$body.find('li.toggleable').length > 0);
        this.selector.select($(this.paginationScrollContainer.children()[activeIndex]));
        if (this.collection.fetchingPage || this.collection.fetchingNextPage) {
          this.showPaginationLoader();
        } else {
          this.hidePaginationLoader();
        }
        if (this.collection.atLeastOnePageFetched && !this.$body.find('li').length) {
          $message = $('<li class="message first last no-results"></li>');
          $message.text((_ref2 = (_ref3 = this.selector.options.messages) != null ? _ref3.noResults : void 0) != null ? _ref2 : '');
          this.$body.append($message);
        }
        return TokenSelectorList.__super__.render.apply(this, arguments);
      };

      TokenSelectorList.prototype.addEveryoneOption = function(everyoneText) {
        var parentData, row;

        parentData = this.parent.data('user_data');
        row = {
          id: "" + this.query.context + "_all",
          name: everyoneText,
          user_count: parentData.user_count,
          type: 'context',
          avatar_url: parentData.avatar_url
        };
        if (this.selector.options.includeSelectAllOption) {
          $.extend(row, {
            permissions: parentData.permissions,
            selectAll: parentData.permissions.send_messages_all
          });
        }
        return this.addOneRaw(row);
      };

      TokenSelectorList.prototype.addSelectAllOption = function(selectAllText) {
        var parentData;

        parentData = this.parent.data('user_data');
        return this.addOneRaw({
          id: this.query.context,
          name: selectAllText,
          user_count: parentData.user_count,
          type: 'context',
          avatar_url: parentData.avatar_url,
          permissions: parentData.permissions,
          selectAll: true,
          noExpand: true
        });
      };

      TokenSelectorList.prototype.addFilterOption = function(filterText) {
        return this.addOneRaw({
          id: this.query.context,
          name: this.parent.data('text'),
          type: 'context',
          avatar_url: this.parent.data('user_data').avatar_url,
          subText: filterText,
          noExpand: true
        });
      };

      TokenSelectorList.prototype.addOne = function(recipient) {
        return this.addOneRaw(recipient.attributes);
      };

      TokenSelectorList.prototype.addOneRaw = function(row) {
        var $li;

        $li = $('<li />', {
          "class": 'selectable',
          tabindex: '-1'
        });
        if (!this.$body.find('li:first')) {
          $li.addClass('first');
        }
        this.$body.find('li:last').removeClass('last');
        $li.addClass('last');
        this.populateRow($li, row, {
          level: this.ancestors.length,
          parent: this.parent,
          ancestors: this.ancestors
        });
        if (row.selectAll) {
          this.$selectAll = $li;
        }
        if ($li.hasClass('toggleable') && this.selector.input.hasToken($li.data('id'))) {
          $li.addClass('on');
        }
        return this.$body.append($li);
      };

      TokenSelectorList.prototype.populateRow = function($node, data, options) {
        if (options == null) {
          options = {};
        }
        if (this.selector.options.populator) {
          options = $.extend({
            noExpand: this.selector.options.noExpand
          }, options);
          return this.selector.options.populator(this.selector, $node, data, options);
        } else {
          $node.data('id', data.text);
          return $node.text(data.text);
        }
      };

      TokenSelectorList.prototype.first = function() {
        return this.$el.find('li:first');
      };

      TokenSelectorList.prototype.last = function() {
        return this.$el.find('li:last');
      };

      TokenSelectorList.prototype.appendTo = function($node) {
        return $node.append(this.$el);
      };

      TokenSelectorList.prototype.insertAfter = function(otherList) {
        return this.$el.insertAfter(otherList.$el);
      };

      TokenSelectorList.prototype.remove = function() {
        return this.$el.remove();
      };

      TokenSelectorList.prototype.hide = function(callback) {
        return this.$el.animate({
          height: '1px'
        }, 'fast', callback);
      };

      TokenSelectorList.prototype.restore = function() {
        return this.$el.css('height', 'auto');
      };

      TokenSelectorList.prototype.clear = function() {
        this.$body.empty();
        return this.$heading.empty();
      };

      TokenSelectorList.prototype.showPaginationLoader = function() {
        var rv;

        rv = TokenSelectorList.__super__.showPaginationLoader.apply(this, arguments);
        this.$paginationLoader.disableWhileLoading(this.collection.deferred);
        return rv;
      };

      TokenSelectorList.prototype.placePaginationLoader = function() {
        var _ref1;

        return (_ref1 = this.$paginationLoader) != null ? _ref1.insertAfter(this.$body) : void 0;
      };

      TokenSelectorList.prototype.canSelectAll = function() {
        return this.$selectAll != null;
      };

      TokenSelectorList.prototype.selectAllActive = function() {
        var _ref1;

        return (_ref1 = this.$selectAll) != null ? _ref1.hasClass('on') : void 0;
      };

      TokenSelectorList.prototype.updateSelectAll = function(selectAllToggled, toggle) {
        var $nodes, $onNodes,
          _this = this;

        if (!this.$selectAll) {
          return;
        }
        $nodes = this.$body.find('li.toggleable').not(this.$selectAll);
        if (selectAllToggled) {
          if (this.selectAllActive()) {
            return $nodes.addClass('on').each(function(i, node) {
              return toggle(false, $(node));
            });
          } else {
            return $nodes.removeClass('on').each(function(i, node) {
              return toggle(false, $(node));
            });
          }
        } else {
          $onNodes = $nodes.filter('.on');
          if ($onNodes.length < $nodes.length && this.selectAllActive()) {
            this.$selectAll.removeClass('on');
            toggle(false, this.$selectAll);
            return $onNodes.each(function(i, node) {
              return toggle(true, $(node));
            });
          } else if ($onNodes.length === $nodes.length && !this.selectAllActive()) {
            this.$selectAll.addClass('on');
            toggle(true, this.$selectAll);
            return $onNodes.each(function(i, node) {
              return toggle(false, $(node));
            });
          }
        }
      };

      TokenSelectorList.prototype.onKeydown = function(e) {
        var $target, code, fn;

        $target = $(e.target);
        code = e.keyCode || e.which;
        fn = "on" + this.keyCodes[code] + "Key";
        if (this[fn]) {
          return this[fn].call(this, e, $target) && e.preventDefault();
        } else if (_.include([16, 17, 18, 92], code)) {

        } else {
          this.selector.input.focus();
          return $(this.selector.input.$input).trigger(e);
        }
      };

      TokenSelectorList.prototype.onBlur = function(e) {
        var _base;

        $(e.target).removeClass('active');
        return typeof (_base = this.selector).blur === "function" ? _base.blur() : void 0;
      };

      TokenSelectorList.prototype.onFocus = function(e) {
        return $(e.target).addClass('active');
      };

      TokenSelectorList.prototype.onUpArrowKey = function(e, $target) {
        e.preventDefault();
        this.selector.selectPrev();
        if ($target.prev().length === 0) {
          return this.selector.input.focus();
        }
      };

      TokenSelectorList.prototype.onDownArrowKey = function(e, $target) {
        e.preventDefault();
        return this.selector.selectNext();
      };

      TokenSelectorList.prototype.onRightArrowKey = function(e, $target) {
        e.preventDefault();
        return this.selector.expandSelection();
      };

      TokenSelectorList.prototype.onLeftArrowKey = function(e, $target) {
        if (this.selector.listExpanded()) {
          return this.selector.collapse();
        }
      };

      TokenSelectorList.prototype.onEnterKey = function(e, $target) {
        e.preventDefault();
        return this.selectResult($target);
      };

      TokenSelectorList.prototype.onSpaceKey = function(e, $target) {
        e.preventDefault();
        return this.selectResult($target);
      };

      TokenSelectorList.prototype.onEscapeKey = function(e, $target) {
        this.selector.input.focus();
        return this.selector.close();
      };

      TokenSelectorList.prototype.selectResult = function($result) {
        if ($result.hasClass('expandable') && $result.find('a.toggle').length > 0) {
          return this.selector.toggleSelection();
        } else {
          return $result.click();
        }
      };

      return TokenSelectorList;

    })(PaginatedView);
  });

}).call(this);
