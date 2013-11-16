(function() {
  require(['quiz_inputs', 'quiz_show', 'quiz_rubric', 'message_students'], function(inputMethods) {
    return $(function() {
      inputMethods.setWidths();
      $('.answer input[type=text]').each(function() {
        return $(this).width(($(this).val().length || 11) * 9.5);
      });
      return $(".download_submissions_link").click(function(event) {
        event.preventDefault();
        return INST.downloadSubmissions($(this).attr('href'));
      });
    });
  });

}).call(this);
