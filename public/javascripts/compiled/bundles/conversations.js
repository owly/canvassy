(function() {
  require(['compiled/conversations/Inbox', 'jquery.google-analytics'], function(Inbox) {
    new Inbox(ENV.CONVERSATIONS);
    $('#create_message_form').on('click', 'div.token_input', function(e) {
      return $.trackEvent('Compose Message', 'Select Recipient', 'Text Field');
    });
    $('#create_message_form').on('click', 'a.browser', function(e) {
      return $.trackEvent('Compose Message', 'Select Recipient', 'Picker Button');
    });
    $('body').on('click', 'div.autocomplete_menu li.selectable', function(e) {
      var label;

      label = $(e.currentTarget).hasClass('context') ? 'Course/Group' : 'User';
      return $.trackEvent('Autocomplete', 'Click', label);
    });
    $('#context_tags_filter').on('click', 'div.token_input', function(e) {
      return $.trackEvent('Filter', 'From/To', 'Text Field');
    });
    return $('#context_tags_filter').on('click', 'a.browser', function(e) {
      return $.trackEvent('Filter', 'From/To', 'Picker Button');
    });
  });

}).call(this);
