(function() {
  require(['jquery', 'i18n!group_settings', 'compiled/fn/preventDefault', 'jquery.instructure_forms'], function($, I18n, preventDefault) {
    var $changeLink, $form, toggleForm;

    $form = $('.group_avatar_form');
    $changeLink = $('.change_group_pic');
    toggleForm = function() {
      $form.toggle();
      return $changeLink.toggle();
    };
    $form.formSubmit({
      success: function(data) {
        $('.avatar').attr('src', data.avatar_url);
        return toggleForm();
      },
      fileUpload: true,
      preparedFileUpload: true,
      singleFile: true,
      handle_files: function(a, data) {
        data.avatar_id = a.attachment.id;
        return data;
      },
      context_code: 'group_' + ENV.GROUP_ID,
      folder_id: ENV.FOLDER_ID,
      formDataTarget: 'url',
      method: 'PUT',
      disableWhileLoading: true
    });
    $changeLink.click(preventDefault(function() {
      return toggleForm();
    }));
    $('.cancel_avatar').click(preventDefault(function() {
      return toggleForm();
    }));
    return $('.invite_form').formSubmit({
      required: ['email'],
      processData: function(data) {
        data['invitees[]'] = data.email;
        delete data.email;
        return data;
      },
      success: function() {
        return $.flashMessage(I18n.t('invitation_sent', 'Invitation sent'));
      }
    });
  });

}).call(this);
