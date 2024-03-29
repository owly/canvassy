(function() {
  define(['jquery', 'underscore', 'compiled/fn/preventDefault', 'jqueryui/dialog'], function($, _, preventDefault) {
    return $.fn.fixDialogButtons = function() {
      return this.each(function() {
        var $buttons, $dialog, buttons;

        $dialog = $(this);
        $buttons = $dialog.find(".button-container:last .btn, button[type=submit]");
        if ($buttons.length) {
          $dialog.find(".button-container:last, button[type=submit]").hide();
          buttons = $.map($buttons.toArray(), function(button) {
            var $button, classes, id, _ref;

            $button = $(button);
            classes = (_ref = $button.attr('class')) != null ? _ref : '';
            id = $button.attr('id');
            if ($button.is('.dialog_closer')) {
              $button.click(preventDefault(function() {
                return $dialog.dialog('close');
              }));
            }
            if ($button.prop('type') === 'submit' && $button[0].form) {
              classes += ' button_type_submit';
              $dialog.keypress(function(e) {
                if (!$(e.target).filter('input:text').length) {
                  return;
                }
                if (e.keyCode === $.ui.keyCode.ENTER) {
                  return $($button[0].form).submit();
                }
              });
            }
            return {
              text: $button.text(),
              "data-text-while-loading": $button.data("textWhileLoading"),
              click: function() {
                return $button.click();
              },
              "class": classes,
              id: id
            };
          });
          buttons = _.sortBy(buttons, function(button) {
            if (button["class"].match(/btn-primary/)) {
              return 1;
            } else {
              return 0;
            }
          });
          return $dialog.dialog("option", "buttons", buttons);
        }
      });
    };
  });

}).call(this);
