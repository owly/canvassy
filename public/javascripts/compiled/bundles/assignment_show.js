(function() {
  require(['INST', 'i18n!assignment', 'jquery', 'jquery.instructure_forms'], function(INST, I18n, $) {
    return $(function() {
      $(".upload_submissions_link").click(function(event) {
        event.preventDefault();
        return $("#re_upload_submissions_form").slideToggle();
      });
      $(".download_submissions_link").click(function(event) {
        event.preventDefault();
        INST.downloadSubmissions($(this).attr('href'));
        return $(".upload_submissions_link").slideDown();
      });
      $("#re_upload_submissions_form").submit(function(event) {
        var data;

        data = $(this).getFormData();
        if (!data.submissions_zip) {
          event.preventDefault();
          return event.stopPropagation();
        } else if (!data.submissions_zip.match(/\.zip$/)) {
          event.preventDefault();
          event.stopPropagation();
          return $(this).formErrors({
            submissions_zip: I18n.t('errors.upload_as_zip', "Please upload files as a .zip")
          });
        }
      });
      return $("#edit_assignment_form").bind('assignment_updated', function(event, data) {
        if (data.assignment && data.assignment.peer_reviews) {
          return $(".assignment_peer_reviews_link").slideDown();
        } else {
          return $(".assignment_peer_reviews_link").slideUp();
        }
      });
    });
  });

}).call(this);
