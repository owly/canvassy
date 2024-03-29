(function() {
  define(['i18n!dashboard', 'compiled/fn/preventDefault', 'jquery.ajaxJSON', 'jquery.disableWhileLoading'], function(I18n, preventDefault) {
    var dashboardToggle;

    return dashboardToggle = function(action) {
      var $a, clicked;

      $a = $('<a />');
      $a.text(action === 'enable' ? I18n.t('enable_dashboard', "Try out the new dashboard") : I18n.t('disable_dashboard', "Go back to the old dashboard"));
      clicked = false;
      $a.click(preventDefault(function() {
        if (clicked) {
          return;
        }
        clicked = true;
        $a.css({
          opacity: 0.5
        });
        return $.ajaxJSON('/toggle_dashboard', 'POST', {}, function() {
          return location.reload();
        });
      }));
      return $('<span class="dashboard-toggle" />').append($a);
    };
  });

}).call(this);
