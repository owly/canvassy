(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'str/htmlEscape', 'jqueryui/draggable'], function($, Backbone, h) {
    var OutcomeIconBase, _ref;

    return OutcomeIconBase = (function(_super) {
      __extends(OutcomeIconBase, _super);

      function OutcomeIconBase() {
        this.triggerSelect = __bind(this.triggerSelect, this);        _ref = OutcomeIconBase.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeIconBase.prototype.tagName = 'li';

      OutcomeIconBase.prototype.attributes = {
        tabindex: -1
      };

      OutcomeIconBase.prototype.events = {
        'click': 'triggerSelect',
        'keydown': 'onKeydown',
        'focus': 'onFocus'
      };

      OutcomeIconBase.prototype.keyCodes = {
        13: 'Enter',
        27: 'Escape',
        32: 'Space',
        37: 'LeftArrow',
        38: 'UpArrow',
        39: 'RightArrow',
        40: 'DownArrow'
      };

      OutcomeIconBase.prototype.initialize = function(opts) {
        this.readOnly = opts.readOnly;
        this.dir = opts.dir;
        return this.attachEvents();
      };

      OutcomeIconBase.prototype.attachEvents = function() {
        this.model.on('change:title', this.updateTitle, this);
        this.model.on('remove', this.remove, this);
        return this.model.on('select', this.triggerSelect, this);
      };

      OutcomeIconBase.prototype.triggerSelect = function(e) {
        if (e) {
          e.preventDefault();
        }
        this.trigger('select', this);
        return this.select();
      };

      OutcomeIconBase.prototype.onKeydown = function(e) {
        var $target, fn;

        $target = $(e.target);
        fn = "on" + this.keyCodes[e.keyCode] + "Key";
        if (this[fn]) {
          return this[fn].call(this, e, $target) && e.preventDefault();
        }
      };

      OutcomeIconBase.prototype.onUpArrowKey = function(e, $target) {
        return $target.prev().focus();
      };

      OutcomeIconBase.prototype.onDownArrowKey = function(e, $target) {
        return $target.next().focus();
      };

      OutcomeIconBase.prototype.onLeftArrowKey = function(e, $target) {
        if (!($target.parent().prev().length > 0)) {
          return;
        }
        return this.$el.parent().prev().find('[aria-expanded=true]').click().attr('aria-expanded', false).attr('tabindex', 0).focus();
      };

      OutcomeIconBase.prototype.onEnterKey = function(e, $target) {
        if ($target.hasClass('outcome-group')) {
          return this.onRightArrowKey(e, $target);
        } else {
          return this.triggerSelect();
        }
      };

      OutcomeIconBase.prototype.onDrop = function(dragObject, $destination) {
        var $target, destinationView, dfd, model, originalView;

        $target = dragObject.li;
        model = dragObject.model;
        destinationView = $destination.data('view');
        originalView = dragObject.parent;
        if (destinationView != null) {
          model.collection.remove(model);
          if ($target.hasClass('outcome-link')) {
            destinationView.outcomes.add(model);
          } else {
            destinationView.groups.add(model);
          }
          model.trigger('select');
          dfd = destinationView.moveModelHere(model);
        } else {
          destinationView = originalView;
        }
        if (!dfd) {
          return;
        }
        return dfd.done(function() {
          $('.wrapper [data-id=' + $target.data('id') + ']').attr('tabindex', 0).attr('aria-grabbed', false).focus();
          return $destination.parents('.wrapper:first').data('drag', null);
        });
      };

      OutcomeIconBase.prototype.onSpaceKey = function(e, $target) {
        var $sidebar, dragObject;

        $sidebar = $target.parents('.wrapper:first');
        if (dragObject = $sidebar.data('drag')) {
          $target.after(dragObject.li);
          return this.onDrop(dragObject, $target.parent());
        } else {
          $target.attr('aria-grabbed', true);
          dragObject = {
            li: $target,
            model: $target.data('view').model,
            parent: $target.parent().data('view')
          };
          $sidebar.data('drag', dragObject);
          $target.blur();
          return $target.focus();
        }
      };

      OutcomeIconBase.prototype.onEscapeKey = function(e, $target) {
        var $sidebar, dataObject;

        $sidebar = $target.parents('.wrapper:first');
        if (!(dataObject = $sidebar.data('drag'))) {
          return;
        }
        dataObject.li.data('parent', null).attr('aria-grabbed', false);
        return $sidebar.data('drag', null);
      };

      OutcomeIconBase.prototype.onFocus = function(e) {
        var $target;

        $target = $(e.target);
        $target.parents('.wrapper:first').find('[tabindex=0]').attr('tabindex', -1);
        return $target.attr('tabindex', 0);
      };

      OutcomeIconBase.prototype.select = function() {
        this.$el.parent().find('[tabindex=0]').attr('tabindex', -1);
        return this.$el.addClass('selected').attr('tabindex', 0);
      };

      OutcomeIconBase.prototype.unSelect = function() {
        return this.$el.removeClass('selected');
      };

      OutcomeIconBase.prototype.remove = function() {
        this.model.off('change:title', this.updateTitle, this);
        this.model.off('remove', this.remove, this);
        this.model.off('select', this.triggerSelect, this);
        return OutcomeIconBase.__super__.remove.apply(this, arguments);
      };

      OutcomeIconBase.prototype.updateTitle = function() {
        this.$('span').text(this.model.get('title'));
        return this.$('a').attr('title', h(this.model.get('title')));
      };

      OutcomeIconBase.prototype.render = function() {
        if (!this.readOnly) {
          this.initDraggable();
        }
        this.$el.data('view', this);
        return this;
      };

      OutcomeIconBase.prototype.initDraggable = function() {
        return this.$el.draggable({
          scope: 'outcomes',
          containment: '.outcomes-sidebar',
          opacity: 0.7,
          helper: 'clone',
          revert: 'invalid',
          scroll: false,
          drag: function(event, ui) {
            var i, o, scrolled, sidebar, sidebarOffsetLeft, sidebarWidth;

            i = $(this).data("draggable");
            o = i.options;
            scrolled = false;
            sidebar = i.relative_container;
            sidebarOffsetLeft = sidebar.offset().left;
            sidebarWidth = sidebar.width();
            if (event.pageX - sidebarOffsetLeft < o.scrollSensitivity) {
              sidebar[0].scrollLeft = scrolled = sidebar[0].scrollLeft - o.scrollSpeed;
            } else if ((sidebarOffsetLeft + sidebarWidth) - event.pageX < o.scrollSensitivity) {
              sidebar[0].scrollLeft = scrolled = sidebar[0].scrollLeft + o.scrollSpeed;
            }
            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
              return $.ui.ddmanager.prepareOffsets(i, event);
            }
          }
        });
      };

      return OutcomeIconBase;

    })(Backbone.View);
  });

}).call(this);
