(function() {
  define(['i18n!shared.flash_notices', 'underscore', 'compiled/fn/preventDefault', 'jqueryui/effects/drop', 'vendor/jquery.cookie'], function(I18n, _, preventDefault) {
    var $buffer, $holder, flashBox;

    $buffer = $("#flash_message_buffer");
    $holder = $("#flash_message_holder");
    $holder.on('click', '.close_link', preventDefault);
    $holder.on('click', 'li', function() {
      var $this, bufferIndex;

      $this = $(this);
      if ($this.hasClass('no_close')) {
        return;
      }
      if ($this.hasClass('unsupported_browser')) {
        $.cookie('unsupported_browser_dismissed', '1');
      }
      $this.stop(true, true).remove();
      if ((bufferIndex = $this.data('buffer-index')) != null) {
        return $buffer.find("[data-buffer-index=" + bufferIndex + "]").remove();
      }
    });
    flashBox = function(type, content, timeout, cssOptions) {
      var $node;

      if (cssOptions == null) {
        cssOptions = {};
      }
      $node = $("<li class=\"ui-state-" + type + "\" role=\"alert\">\n  <i></i>\n  " + content + "\n  <a href=\"#\" class=\"close_link icon-end\">" + (I18n.t("close", "Close")) + "</a>\n</li>");
      return $node.appendTo($holder).css(_.extend({
        zIndex: 1
      }, cssOptions)).show('drop', {
        direction: "up"
      }, 'fast', function() {
        return $(this).css('z-index', 2);
      }).delay(timeout || 7000).animate({
        'z-index': 1
      }, 0).fadeOut('slow', function() {
        return $(this).slideUp('fast', function() {
          return $(this).remove();
        });
      });
    };
    $.flashMessage = function(content, timeout) {
      if (timeout == null) {
        timeout = 3000;
      }
      return flashBox("success", content, timeout);
    };
    $.flashError = function(content, timeout) {
      return flashBox("error", content, timeout);
    };
    $.screenReaderFlashMessage = function(content, timeout) {
      if (timeout == null) {
        timeout = 3000;
      }
      return flashBox('success', content, timeout, {
        position: 'absolute',
        left: -10000
      });
    };
    return $.screenReaderFlashError = function(content, timeout) {
      if (timeout == null) {
        timeout = 3000;
      }
      return flashBox('error', content, timeout, {
        position: 'absolute',
        left: -10000
      });
    };
  });

}).call(this);
