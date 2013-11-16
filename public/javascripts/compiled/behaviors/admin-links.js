(function() {
  define(['jquery', 'compiled/jquery.kylemenu'], function($, KyleMenu) {
    return $(document).on('click keydown', '.al-trigger', function(event) {
      var $trigger, opts, userAgent;

      $trigger = $(this);
      if (event.keyCode || event.which) {
        return $trigger.click();
      }
      if (!$trigger.data('kyleMenu')) {
        event.preventDefault();
        opts = $.extend({
          noButton: true
        }, $trigger.data('kyleMenuOptions'));
        new KyleMenu($trigger, opts).open();
        userAgent = window.navigator.userAgent;
        if (userAgent.match(/Windows/) && userAgent.match(/Firefox/)) {
          return menu.attr('tabindex', -1);
        }
      }
    });
  });

}).call(this);
