(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define([], function() {
    var Popover, activePopovers, idCounter, using;

    using = function(position, feedback) {
      return $(this).css(position).toggleClass('carat-bottom', feedback.vertical === 'bottom');
    };
    idCounter = 0;
    activePopovers = [];
    return Popover = (function() {
      function Popover(clickEvent, content) {
        var _this = this;

        this.content = content;
        this.position = __bind(this.position, this);
        this.outsideClickHandler = __bind(this.outsideClickHandler, this);
        this.trigger = $(clickEvent.currentTarget);
        this.el = $(this.content).addClass('carat-bottom').attr("role", "dialog").data('popover', this).keyup(function(event) {
          if (event.keyCode === $.ui.keyCode.ESCAPE) {
            return _this.hide();
          }
        });
        this.el.delegate('.popover_close', 'click', function(event) {
          event.preventDefault();
          return _this.hide();
        });
        this.show(clickEvent);
      }

      Popover.prototype.show = function(clickEvent) {
        var actualOffset, caratOffset, differenceInOffset, id, popoverToHide;

        while (popoverToHide = activePopovers.pop()) {
          popoverToHide.hide();
        }
        activePopovers.push(this);
        id = "popover-" + (idCounter++);
        this.trigger.attr({
          "aria-haspopup": true,
          "aria-owns": id
        });
        this.el.attr({
          'id': id,
          'aria-hidden': false,
          'aria-expanded': true
        }).appendTo(document.body).show();
        this.el.find(':tabbable').not('.popover_close').first().focus(1);
        this.position();
        this.el.find(".ui-menu-carat").remove();
        differenceInOffset = this.trigger.offset().left - this.el.offset().left;
        actualOffset = clickEvent.pageX - this.trigger.offset().left;
        caratOffset = Math.min(Math.max(20, actualOffset), this.trigger.width() - 20) + differenceInOffset;
        $('<span class="ui-menu-carat"><span /></span>').css('left', caratOffset).prependTo(this.el);
        this.positionInterval = setInterval(this.position, 200);
        return $(window).click(this.outsideClickHandler);
      };

      Popover.prototype.hide = function() {
        var index, popover, _i, _len;

        for (index = _i = 0, _len = activePopovers.length; _i < _len; index = ++_i) {
          popover = activePopovers[index];
          if (this === popover) {
            activePopovers.splice(index, 1);
          }
        }
        this.el.detach();
        clearInterval(this.positionInterval);
        return $(window).unbind('click', this.outsideClickHandler);
      };

      Popover.prototype.ignoreOutsideClickSelector = '.ui-dialog';

      Popover.prototype.outsideClickHandler = function(event) {
        if (!$(event.target).closest(this.el.add(this.trigger).add(this.ignoreOutsideClickSelector)).length) {
          return this.hide();
        }
      };

      Popover.prototype.position = function() {
        return this.el.position({
          my: 'center bottom',
          at: 'center top',
          of: this.trigger,
          offset: '0 -10px',
          within: 'body',
          collision: 'flipfit flipfit',
          using: using
        });
      };

      return Popover;

    })();
  });

}).call(this);
