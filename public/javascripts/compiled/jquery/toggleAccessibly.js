(function() {
  define(['jquery'], function($) {
    return $.fn.toggleAccessibly = function(visible) {
      if (visible) {
        this.show();
        this.attr('aria-expanded', 'true');
      } else {
        this.hide();
        this.attr('aria-expanded', 'false');
      }
      return this;
    };
  });

}).call(this);
