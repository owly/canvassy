(function() {
  require(['full_files', 'jquery.google-analytics', 'use!uploadify'], function() {
    return $(function() {
      return $('.manage_collaborations').on('click', function() {
        return $.trackEvent('files', 'click', 'manage_collaborations');
      });
    });
  });

}).call(this);
