(function() {
  define(function() {
    var blurActiveInput, initialized;

    blurActiveInput = false;
    initialized = false;
    return function(enable) {
      if (enable == null) {
        enable = true;
      }
      blurActiveInput = enable;
      if (initialized) {
        return;
      }
      initialized = true;
      return $(window).bind({
        blur: function(e) {
          if (blurActiveInput && document.activeElement && window === e.target) {
            return $(document.activeElement).filter(':input').change().triggerHandler('blur');
          }
        },
        focus: function(e) {
          if (blurActiveInput && document.activeElement && window === e.target) {
            return $(document.activeElement).filter(':input').triggerHandler('focus');
          }
        }
      });
    };
  });

}).call(this);
