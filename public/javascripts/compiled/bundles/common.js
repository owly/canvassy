(function() {
  require(['Backbone', 'compiled/widget/courseList', 'compiled/helpDialog', 'compiled/tours', 'translations/_core_en', 'jquery.ajaxJSON', 'vendor/firebugx', 'jquery.google-analytics', 'vendor/swfobject/swfobject', 'reminders', 'jquery.instructure_forms', 'instructure', 'ajax_errors', 'page_views', 'compiled/license_help', 'compiled/behaviors/ujsLinks', 'compiled/behaviors/admin-links', 'compiled/behaviors/elementToggler', 'compiled/behaviors/tooltip', 'compiled/behaviors/instructure_inline_media_comment', 'media_comments', 'order', 'jqueryui/effects/drop', 'jqueryui/progressbar', 'jqueryui/tabs', 'compiled/registration/incompleteRegistrationWarning', 'jquery.fancyplaceholder', 'jqueryui/autocomplete', 'link_enrollment', 'media_comments', 'vendor/jquery.pageless', 'vendor/jquery.scrollTo', 'compiled/badge_counts'], function(Backbone, courseList, helpDialog, tours) {
    var $logo;

    courseList.init();
    helpDialog.initTriggers();
    tours.init();
    if (INST.browser.ie8) {
      $('<style>:before,:after{content:"" !important}</style>').appendTo('head').delay(1).remove();
    }
    $('#skip_navigation_link').on('click', function() {
      return $($(this).attr('href')).attr('tabindex', -1).focus();
    });
    $logo = $('#header-logo');
    if ($logo.length > 0 && $logo.css('background-image').match(/\/canvas\/header_canvas_logo\.png/)) {
      $logo.addClass('original');
    }
    return $('body').on('click', '[data-pushstate]', function(event) {
      event.preventDefault();
      return Backbone.history.navigate($(this).attr('href'), true);
    });
  });

}).call(this);
