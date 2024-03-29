(function() {
  define(['compiled/fn/preventDefault', 'compiled/registration/signupDialog', 'jst/registration/login'], function(preventDefault, signupDialog, loginForm) {
    var $loginForm;

    $loginForm = null;
    $('.signup_link').click(preventDefault(function() {
      return signupDialog($(this).data('template'), $(this).prop('title'));
    }));
    $('#registration_video a').click(preventDefault(function() {
      return $('<div style="padding:0;"><iframe style="float:left;" src="http://player.vimeo.com/video/35336470?portrait=0&amp;color=7fc8ff&amp;autoplay=1" width="800" height="450" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>').dialog({
        width: 800,
        title: "Canvas Introduction Video",
        modal: true,
        resizable: false,
        close: function() {
          return $(this).remove();
        }
      });
    }));
    $('body').click(function(e) {
      if (!$(e.target).closest('#registration_login, #login_form').length) {
        return $loginForm != null ? $loginForm.hide() : void 0;
      }
    });
    return $('#registration_login').on('click focus', preventDefault(function() {
      if ($loginForm) {
        $loginForm.toggle();
      } else {
        $loginForm = $(loginForm({
          login_handle_name: ENV.ACCOUNT.registration_settings.login_handle_name
        }));
        $loginForm.appendTo($(this).closest('.registration-content'));
      }
      if ($loginForm.is(':visible')) {
        return $loginForm.find('input:visible').eq(0).focus();
      }
    }));
  });

}).call(this);
