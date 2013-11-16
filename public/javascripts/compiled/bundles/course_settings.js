(function() {
  require(['compiled/views/course_settings/NavigationView', 'compiled/collections/UserCollection', 'vendor/jquery.cookie', 'course_settings', 'grading_standards'], function(NavigationView, UserCollection) {
    var nav_view;

    nav_view = new NavigationView({
      el: $('#tab-navigation')
    });
    return $(function() {
      return nav_view.render();
    });
  });

}).call(this);
