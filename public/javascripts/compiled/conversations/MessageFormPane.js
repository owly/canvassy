(function() {
  define(['i18n!conversations', 'underscore', 'compiled/util/shortcut', 'compiled/conversations/MessageForm', 'compiled/conversations/MessageProgressTracker', 'compiled/fn/preventDefault'], function(I18n, _, shortcut, MessageForm, MessageProgressTracker, preventDefault) {
    var MessageFormPane;

    return MessageFormPane = (function() {
      shortcut(MessageFormPane, 'form', 'refresh', 'toggle', 'resetForParticipant');

      shortcut(MessageFormPane, 'app', 'resize');

      function MessageFormPane(app, formOptions) {
        this.app = app;
        this.formOptions = formOptions;
        this.$node = $('#create_message_form');
        this.initializeActions();
        this.tracker = new MessageProgressTracker(this.app);
        this.tracker.batchPoller();
      }

      MessageFormPane.prototype.height = function() {
        var _ref, _ref1;

        return ((_ref = (_ref1 = this.form) != null ? _ref1.height() : void 0) != null ? _ref : 0) + this.tracker.height();
      };

      MessageFormPane.prototype.reset = function(options) {
        var _ref;

        this.options = options;
        if ((_ref = this.form) != null) {
          _ref.destroy();
        }
        this.form = new MessageForm(this, this.app.canAddNotesFor, _.defaults(this.options, this.formOptions));
        this.$node.append(this.form.$form);
        this.app.addedMessageForm(this.form.$form);
        return this.form.initialize();
      };

      MessageFormPane.prototype.initializeActions = function() {
        var _this = this;

        this.$node.click(function() {
          return _this.app.toggleMessageActions(false);
        });
        this.$node.on('click', '.action_add_attachment', preventDefault(function() {
          return _this.form.addAttachment();
        }));
        this.$node.on('click', '.attachment a.remove_link', preventDefault(function(e) {
          return _this.form.removeAttachment($(e.currentTarget));
        }));
        this.$node.on('click', '.action_media_comment', preventDefault(function() {
          return _this.form.addMediaComment();
        }));
        this.$node.on('click', '.media_comment a.remove_link', preventDefault(function() {
          return _this.form.removeMediaComment;
        }));
        return this.$node.on('click', '.action_add_recipients', preventDefault(function(e) {
          return _this.app.addRecipients($(e.currentTarget));
        }));
      };

      MessageFormPane.prototype.addingMessage = function(data, deferred) {
        var _this = this;

        this.reset(this.options);
        this.tracker.track(data, deferred);
        return $.when(deferred).then(function(data) {
          if (data.length == null) {
            data = [data];
          }
          return _this.app.updatedConversation(data);
        });
      };

      return MessageFormPane;

    })();
  });

}).call(this);
