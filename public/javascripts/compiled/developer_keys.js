(function() {
  define(['i18n!developer_keys', 'jquery', 'jst/developer_key', 'jst/developer_key_form', 'compiled/fn/preventDefault', 'jquery.ajaxJSON', 'jquery.instructure_date_and_time', 'jqueryui/dialog'], function(I18n, $, developer_key, developer_key_form, preventDefault) {
    var buildForm, buildKey, nextPage, page;

    page = 0;
    buildKey = function(key) {
      var $key;

      key.icon_image_url = key.icon_url || "/images/blank.png";
      key.name || (key.name = I18n.t('unnamed_tool', "Unnamed Tool"));
      key.user_name || (key.user_name = I18n.t('no_user', "No User"));
      key.created = $.parseFromISO(key.created_at).datetime_formatted;
      key.last_auth = $.parseFromISO(key.last_auth_at).datetime_formatted;
      key.last_access = $.parseFromISO(key.last_access_at).datetime_formatted;
      $key = $(developer_key(key));
      return $key.data('key', key);
    };
    buildForm = function(key, $orig) {
      var $form;

      $form = $(developer_key_form(key || {}));
      $form.formSubmit({
        beforeSubmit: function() {
          return $("#edit_dialog button.submit").text(I18n.t('button.saving', "Saving Key..."));
        },
        disableWhileLoading: true,
        success: function(key) {
          var $key;

          $("#edit_dialog").dialog('close');
          $key = buildKey(key);
          if ($orig) {
            return $orig.after($key).remove();
          } else {
            return $("#keys tbody").prepend($key);
          }
        },
        error: function() {
          return $("#edit_dialog button.submit").text(I18n.t('button.saving_failed', "Saving Key Failed"));
        }
      });
      return $form;
    };
    nextPage = function() {
      var req;

      $("#loading").attr('class', 'loading');
      page++;
      return req = $.ajaxJSON('/api/v1/developer_keys?page=' + page, 'GET', {}, function(data) {
        var $key, key, _i, _len;

        for (_i = 0, _len = data.length; _i < _len; _i++) {
          key = data[_i];
          $key = buildKey(key);
          $("#keys tbody").append($key);
        }
        if (req.getAllResponseHeaders().match(/rel="next"/)) {
          if (page > 1) {
            return nextPage();
          } else {
            return $("#loading").attr('class', 'show_more');
          }
        } else {
          return $("#loading").attr('class', '');
        }
      });
    };
    nextPage();
    $("#keys").on('click', '.delete_link', preventDefault(function() {
      var $key, key;

      $key = $(this).closest(".key");
      key = $key.data('key');
      return $key.confirmDelete({
        url: "/api/v1/developer_keys/" + key.id,
        message: I18n.t('messages.confirm_delete', 'Are you sure you want to delete this developer key?'),
        success: function() {
          return $key.remove();
        }
      });
    })).on('click', '.edit_link', preventDefault(function() {
      var $form, $key, key;

      $key = $(this).closest(".key");
      key = $key.data('key');
      $form = buildForm(key, $key);
      return $("#edit_dialog").empty().append($form).dialog('open');
    }));
    $(".add_key").click(function(event) {
      var $form;

      event.preventDefault();
      $form = buildForm();
      return $("#edit_dialog").empty().append($form).dialog('open');
    });
    $("#edit_dialog").html(developer_key_form({})).dialog({
      autoOpen: false,
      width: 350
    }).on('click', '.cancel', function() {
      return $("#edit_dialog").dialog('close');
    });
    return $(".show_all").click(function(event) {
      return nextPage();
    });
  });

}).call(this);
