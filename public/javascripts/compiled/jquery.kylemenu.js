(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'jquery.ui.menu.inputmenu', 'jqueryui/button', 'jqueryui/popup'], function($) {
    var KyleMenu;

    KyleMenu = (function() {
      function KyleMenu(trigger, options) {
        this.keepButtonActive = __bind(this.keepButtonActive, this);
        this.onClose = __bind(this.onClose, this);
        this.select = __bind(this.select, this);
        this.onOpen = __bind(this.onOpen, this);
        var popupInstance, self, _open,
          _this = this;

        this.$trigger = $(trigger).data('kyleMenu', this);
        this.opts = $.extend(true, {}, KyleMenu.defaults, options);
        if (!this.opts.noButton) {
          if (this.opts.buttonOpts.addDropArrow) {
            this.$trigger.append('<i class="icon-mini-arrow-down"></i>');
          }
          this.$trigger.button(this.opts.buttonOpts);
          this.$trigger.bind('mouseleave.button', this.keepButtonActive);
        }
        this.$menu = this.$trigger.next().menu(this.opts.menuOpts).popup(this.opts.popupOpts).addClass("ui-kyle-menu use-css-transitions-for-show-hide");
        if (this.opts.appendMenuTo) {
          popupInstance = this.$menu.data('popup');
          _open = popupInstance.open;
          self = this;
          popupInstance.open = function() {
            self.$menu.appendTo(self.opts.appendMenuTo);
            return _open.apply(this, arguments);
          };
          this.$placeholder = $('<span style="display:none;">').insertAfter(this.$menu);
          this.$menu.bind('click', function() {
            var _ref;

            return (_ref = _this.$placeholder).trigger.apply(_ref, arguments);
          });
        }
        if (this.opts.notifyMenuActiveOnParent) {
          this.$notifyParent = this.$trigger.closest(this.opts.notifyMenuActiveOnParent);
        }
        this.$menu.on({
          menuselect: this.select,
          popupopen: this.onOpen,
          popupclose: this.onClose
        });
      }

      KyleMenu.prototype.onOpen = function(event) {
        this.adjustCarat(event);
        this.$menu.addClass('ui-state-open');
        if (this.opts.notifyMenuActiveOnParent) {
          return this.$notifyParent.addClass('menu_active');
        }
      };

      KyleMenu.prototype.open = function() {
        return this.$menu.popup('open');
      };

      KyleMenu.prototype.select = function(e, ui) {
        var $target, _ref;

        if (((_ref = e.originalEvent) != null ? _ref.type : void 0) !== "click" && ($target = $(ui.item).find('a'))) {
          e.preventDefault();
          $target.trigger('click');
        }
        return this.$menu.popup('close').removeClass("ui-state-open");
      };

      KyleMenu.prototype.onClose = function() {
        if (this.opts.appendMenuTo) {
          this.$menu.insertBefore(this.$placeholder);
        }
        this.$trigger.removeClass('ui-state-active');
        this.$menu.removeClass("ui-state-open");
        if (this.opts.notifyMenuActiveOnParent) {
          return this.$notifyParent.removeClass('menu_active');
        }
      };

      KyleMenu.prototype.keepButtonActive = function() {
        if (this.$menu.is('.ui-state-open') && this.$trigger.is('.btn, .ui-button')) {
          return this.$trigger.addClass('ui-state-active');
        }
      };

      KyleMenu.prototype.adjustCarat = function(event) {
        var actualOffset, caratOffset, differenceInOffset, pointToDropDownFrom, triggerOffsetLeft, triggerWidth, _ref;

        if ((_ref = this.$carat) != null) {
          _ref.remove();
        }
        if (this.$trigger.is('.btn, .ui-button')) {
          this.$trigger.addClass('ui-state-active');
        }
        triggerWidth = this.$trigger.outerWidth();
        triggerOffsetLeft = this.$trigger.offset().left;
        pointToDropDownFrom = event.pageX || (triggerOffsetLeft + triggerWidth / 2);
        differenceInOffset = triggerOffsetLeft - this.$menu.offset().left;
        actualOffset = pointToDropDownFrom - this.$trigger.offset().left;
        caratOffset = Math.min(Math.max(6, actualOffset), triggerWidth - 6) + differenceInOffset;
        this.$carat = $('<span class="ui-menu-carat"><span /></span>').css('left', caratOffset).prependTo(this.$menu);
        return this.$menu.css('-webkit-transform-origin-x', caratOffset + 'px');
      };

      KyleMenu.defaults = {
        popupOpts: {
          position: {
            my: 'center top',
            at: 'center bottom',
            offset: '0 10px',
            within: '#main',
            collision: 'fit'
          }
        },
        buttonOpts: {
          addDropArrow: true
        }
      };

      return KyleMenu;

    })();
    $.fn.kyleMenu = function(options) {
      return this.each(function() {
        if (!$(this).data().kyleMenu) {
          return new KyleMenu(this, options);
        }
      });
    };
    return KyleMenu;
  });

}).call(this);
