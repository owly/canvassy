(function() {
  define(['jquery', 'compiled/util/objectCollection', 'jst/courseList/wrapper', 'jst/courseList/content', 'jquery.ajaxJSON'], function(jQuery, objectCollection, wrapper, content) {
    var CustomList;

    return CustomList = (function() {
      CustomList.prototype.options = {
        animationDuration: 200,
        dataAttribute: 'id',
        wrapper: wrapper,
        content: content,
        url: '/api/v1/users/self/favorites/courses',
        appendTarget: 'body',
        resetCount: 12,
        onToggle: false
      };

      function CustomList(selector, items, options) {
        this.options = jQuery.extend({}, this.options, options);
        this.appendTarget = jQuery(this.options.appendTarget);
        this.element = jQuery(selector);
        this.targetList = this.element.find('> ul');
        this.wrapper = jQuery(this.options.wrapper({}));
        this.sourceList = this.wrapper.find('> ul');
        this.contentTemplate = this.options.content;
        this.ghost = jQuery('<ul/>').addClass('customListGhost');
        this.requests = {
          add: {},
          remove: {}
        };
        this.doc = jQuery(document.body);
        this.attach();
        this.setItems(items);
        if (this.options.autoOpen) {
          this.open();
        }
      }

      CustomList.prototype.open = function() {
        var _this = this;

        this.wrapper.appendTo(this.appendTarget).show();
        return setTimeout(function() {
          var _base;

          _this.element.addClass('customListEditing');
          return typeof (_base = _this.options).onToggle === "function" ? _base.onToggle(true) : void 0;
        }, 1);
      };

      CustomList.prototype.close = function() {
        var _base,
          _this = this;

        this.wrapper.hide(0, function() {
          return _this.teardown();
        });
        this.element.removeClass('customListEditing');
        if (typeof (_base = this.options).onToggle === "function") {
          _base.onToggle(false);
        }
        if (this.pinned.length === 0) {
          return this.resetList();
        }
      };

      CustomList.prototype.attach = function() {
        this.element.delegate('.customListOpen', 'click', jQuery.proxy(this, 'open'));
        this.wrapper.delegate('.customListClose', 'click', jQuery.proxy(this, 'close'));
        this.wrapper.delegate('.customListRestore', 'click', jQuery.proxy(this, 'reset'));
        this.wrapper.delegate('a', 'click.customListTeardown', function(event) {
          return event.preventDefault();
        });
        return this.wrapper.delegate('.customListItem', 'click.customListTeardown', jQuery.proxy(this, 'sourceClickHandler'));
      };

      CustomList.prototype.teardown = function() {
        return this.wrapper.detach();
      };

      CustomList.prototype.add = function(id, element) {
        var clone, index, item, target;

        item = this.items.findBy('id', id);
        clone = element.clone().hide();
        item.element = clone;
        element.addClass('on');
        this.pinned.push(item);
        this.pinned.sortBy('shortName');
        index = this.pinned.indexOf(item) + 1;
        target = this.targetList.find("li:nth-child(" + index + ")");
        if (target.length !== 0) {
          clone.insertBefore(target);
        } else {
          clone.appendTo(this.targetList);
        }
        clone.slideDown(this.options.animationDuration);
        this.animateGhost(element, clone);
        return this.onAdd(item);
      };

      CustomList.prototype.animateGhost = function(fromElement, toElement) {
        var clone, from, to,
          _this = this;

        from = fromElement.offset();
        to = toElement.offset();
        clone = fromElement.clone();
        from.position = 'absolute';
        this.ghost.append(clone);
        return this.ghost.appendTo(this.doc).css(from).animate(to, this.options.animationDuration, function() {
          return _this.ghost.detach().empty();
        });
      };

      CustomList.prototype.remove = function(item, element) {
        var _this = this;

        element.removeClass('on');
        this.animating = true;
        this.onRemove(item);
        return item.element.slideUp(this.options.animationDuration, function() {
          item.element.remove();
          _this.pinned.eraseBy('id', item.id);
          return _this.animating = false;
        });
      };

      CustomList.prototype.abortAll = function() {
        var id, req, _ref, _ref1, _results;

        _ref = this.requests.add;
        for (id in _ref) {
          req = _ref[id];
          req.abort();
        }
        _ref1 = this.requests.remove;
        _results = [];
        for (id in _ref1) {
          req = _ref1[id];
          _results.push(req.abort());
        }
        return _results;
      };

      CustomList.prototype.reset = function() {
        var callback,
          _this = this;

        this.abortAll();
        callback = function() {
          return delete _this.requests.reset;
        };
        this.requests.reset = jQuery.ajaxJSON(this.options.url, 'DELETE', {}, callback, callback);
        return this.resetList();
      };

      CustomList.prototype.resetList = function() {
        var defaultItems, html;

        defaultItems = this.items.slice(0, this.options.resetCount);
        html = this.contentTemplate({
          items: defaultItems
        });
        this.targetList.empty().html(html);
        return this.setPinned();
      };

      CustomList.prototype.onAdd = function(item) {
        var error, req, success, url,
          _this = this;

        if (this.requests.remove[item.id]) {
          this.requests.remove[item.id].abort();
          return;
        }
        success = function() {
          var args;

          args = [].slice.call(arguments);
          args.unshift(item.id);
          return _this.addSuccess.apply(_this, args);
        };
        error = function() {
          var args;

          args = [].slice.call(arguments);
          args.unshift(item.id);
          return _this.addError.apply(_this, args);
        };
        url = this.options.url + '/' + item.id;
        req = jQuery.ajaxJSON(url, 'POST', {}, success, error);
        return this.requests.add[item.id] = req;
      };

      CustomList.prototype.onRemove = function(item) {
        var error, req, success, url,
          _this = this;

        if (this.requests.add[item.id]) {
          this.requests.add[item.id].abort();
          return;
        }
        success = function() {
          var args;

          args = [].slice.call(arguments);
          args.unshift(item.id);
          return _this.removeSuccess.apply(_this, args);
        };
        error = function() {
          var args;

          args = [].slice.call(arguments);
          args.unshift(item.id);
          return _this.removeError.apply(_this, args);
        };
        url = this.options.url + '/' + item.id;
        req = jQuery.ajaxJSON(url, 'DELETE', {}, success, error);
        return this.requests.remove[item.id] = req;
      };

      CustomList.prototype.addSuccess = function(id) {
        return delete this.requests.add[id];
      };

      CustomList.prototype.addError = function(id) {
        return delete this.requests.add[id];
      };

      CustomList.prototype.removeSuccess = function(id) {
        return delete this.requests.remove[id];
      };

      CustomList.prototype.removeError = function(id) {
        return delete this.requests.remove[id];
      };

      CustomList.prototype.setItems = function(items) {
        var html;

        this.items = objectCollection(items);
        this.items.sortBy('shortName');
        html = this.contentTemplate({
          items: this.items
        });
        this.sourceList.html(html);
        return this.setPinned();
      };

      CustomList.prototype.setPinned = function() {
        var item, match, _i, _len, _ref, _results,
          _this = this;

        this.pinned = objectCollection([]);
        this.element.find('> ul > li').each(function(index, element) {
          var id, item;

          element = jQuery(element);
          id = element.data('id');
          item = _this.items.findBy('id', id);
          if (!item) {
            return;
          }
          item.element = element;
          return _this.pinned.push(item);
        });
        this.wrapper.find('ul > li').removeClass('on');
        _ref = this.pinned;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          match = this.wrapper.find("ul > li[data-id=" + item.id + "]");
          _results.push(match.addClass('on'));
        }
        return _results;
      };

      CustomList.prototype.sourceClickHandler = function(event) {
        return this.checkElement(jQuery(event.currentTarget));
      };

      CustomList.prototype.checkElement = function(element) {
        var id, item;

        if (this.animating || this.requests.reset) {
          return;
        }
        id = element.data('id');
        item = this.pinned.findBy('id', id);
        if (item) {
          return this.remove(item, element);
        } else {
          return this.add(id, element);
        }
      };

      return CustomList;

    })();
  });

}).call(this);
