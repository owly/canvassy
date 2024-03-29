(function() {
  define(['jquery'], function($) {
    return $.fn.indicateLoading = function(position, deferred) {
      if (deferred == null) {
        deferred = position;
        position = 'center';
      }
      return this.each(function() {
        var $this;

        $this = $(this).addClass('loading ' + position);
        return $.when(deferred).done(function() {
          return $this.removeClass('loading ' + position);
        });
      });
    };
  });

}).call(this);
