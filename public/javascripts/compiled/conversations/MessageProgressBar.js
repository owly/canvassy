(function() {
  define(['i18n!conversations', 'underscore', 'jst/conversations/MessageProgressBarText', 'compiled/str/TextHelper', 'jquery.ajaxJSON'], function(I18n, _, messageProgressBarTextTemplate, _arg) {
    var MessageProgressBar, truncateText;

    truncateText = _arg.truncateText;
    return MessageProgressBar = (function() {
      function MessageProgressBar(tracker, data) {
        var messageId;

        this.tracker = tracker;
        this.data = data;
        this.$node = $('<li class="progress-bar" />');
        messageId = _.uniqueId('progress_');
        this.$message = $('<span />', {
          id: messageId
        });
        this.$bar = $('<div />', {
          tabIndex: -1,
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuemax': 1,
          'aria-valuenow': this.data.completion,
          'aria-describedby': messageId
        });
        this.$completion = $('<b />').appendTo(this.$bar);
        this.$node.append(this.$message, this.$bar);
        this.update(this.data);
      }

      MessageProgressBar.prototype.update = function(data) {
        var percent, _ref;

        this.data = data;
        this.data.status = this.data.error ? 'error' : this.data.completion != null ? this.data.completion === 1 ? 'complete' : 'determinate' : 'indeterminate';
        this.data.num_people = I18n.t('people_count', 'person', {
          count: this.data.recipient_count
        });
        this.data.message_preview = truncateText(this.data.message.body, {
          max: 20
        });
        this.$node.attr('class', "progress-bar progress-bar-" + this.data.status);
        this.$message.html(messageProgressBarTextTemplate(this.data));
        this.$message.attr({
          title: this.data.message_preview
        });
        this.$bar.showIf(this.data.status !== 'error');
        percent = parseInt(100 * ((_ref = this.data.completion) != null ? _ref : 0)) + "%";
        this.$bar.attr('aria-valuenow', this.data.completion);
        return this.$completion.css({
          width: percent
        });
      };

      MessageProgressBar.prototype.error = function(error) {
        this.update(_.extend(this.data, {
          error: error,
          completion: 1
        }));
        return this.destroy();
      };

      MessageProgressBar.prototype.complete = function() {
        this.update(_.extend(this.data, {
          completion: 1
        }));
        return this.destroy();
      };

      MessageProgressBar.prototype.destroy = function() {
        var _this = this;

        return setTimeout(function() {
          return _this.$node.fadeTo('fast', 0).animate({
            width: 0
          }, 'fast', function() {
            return _this.$node.remove();
          });
        }, 5000);
      };

      return MessageProgressBar;

    })();
  });

}).call(this);
