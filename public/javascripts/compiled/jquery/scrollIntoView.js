(function() {
  define(['jquery'], function($) {
    return $.fn.scrollIntoView = function(options) {
      var $container, containerBottom, containerTop, elemBottom, elemTop, _ref;

      if (options == null) {
        options = {};
      }
      $container = options.container || this.offsetParent();
      containerTop = $container.scrollTop();
      containerBottom = containerTop + $container.height();
      elemTop = this[0].offsetTop;
      elemBottom = elemTop + $(this[0]).outerHeight();
      if ((_ref = options.ignore) != null ? _ref.border : void 0) {
        elemTop += parseInt($(this[0]).css('border-top-width').replace('px', ''));
        elemBottom -= parseInt($(this[0]).css('border-bottom-width').replace('px', ''));
      }
      if (elemTop < containerTop || options.toTop) {
        return $container.scrollTop(elemTop);
      } else if (elemBottom > containerBottom) {
        return $container.scrollTop(elemBottom - $container.height());
      }
    };
  });

}).call(this);
