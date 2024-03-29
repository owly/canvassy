(function() {
  define(['jst/profiles/notifications/privacyNotice', 'compiled/jquery/fixDialogButtons'], function(privacyNoticeTpl) {
    return function() {
      var $privacyNotice;

      if (ENV.READ_PRIVACY_INFO || !ENV.ACCOUNT_PRIVACY_NOTICE) {
        return;
      }
      $privacyNotice = $(privacyNoticeTpl());
      return $privacyNotice.appendTo('body').dialog({
        close: function(event, ui) {
          return $.post('/profile', {
            _method: 'put',
            privacy_notice: 1
          });
        },
        title: $privacyNotice.data('title')
      }).fixDialogButtons();
    };
  });

}).call(this);
