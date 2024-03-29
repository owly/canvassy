(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['Backbone', 'underscore', 'i18n!discussions.reply', 'jquery', 'compiled/models/Entry', 'str/htmlEscape', 'jst/discussions/_reply_attachment', 'compiled/fn/preventDefault', 'tinymce.editor_box'], function(Backbone, _, I18n, $, Entry, htmlEscape, replyAttachmentTemplate, preventDefault) {
    var Reply;

    Reply = (function() {
      function Reply(view, options) {
        var _this = this;

        this.view = view;
        this.options = options != null ? options : {};
        this.onPostReplyError = __bind(this.onPostReplyError, this);
        this.onPostReplySuccess = __bind(this.onPostReplySuccess, this);
        this.submit = __bind(this.submit, this);
        this.hideNotification = __bind(this.hideNotification, this);
        this.hide = __bind(this.hide, this);
        this.el = this.view.$('.discussion-reply-action:first');
        this.discussionEntry = this.el.closest('.discussion_entry');
        if (this.discussionEntry.length === 0) {
          this.discussionEntry = this.el.closest('.entry');
        }
        this.form = this.discussionEntry.find('form:first').submit(preventDefault(this.submit));
        this.textArea = this.getEditingElement();
        this.form.find('.cancel_button').click(this.hide);
        this.form.on('click', '.toggle-wrapper a', function(e) {
          e.preventDefault();
          return _this.textArea.editorBox('toggle');
        });
        this.form.delegate('.alert .close', 'click', preventDefault(this.hideNotification));
        this.editing = false;
      }

      Reply.prototype.toggle = function() {
        if (!this.editing) {
          return this.edit();
        } else {
          return this.hide();
        }
      };

      Reply.prototype.edit = function() {
        var _this = this;

        this.form.addClass('replying');
        this.discussionEntry.addClass('replying');
        this.textArea.editorBox({
          tinyOptions: {
            width: '100%'
          }
        });
        if (this.options.focus) {
          setTimeout((function() {
            return _this.textArea.editorBox('focus');
          }), 20);
        }
        this.editing = true;
        return this.trigger('edit', this);
      };

      Reply.prototype.hide = function() {
        this.content = this.textArea._justGetCode();
        this.textArea._removeEditor();
        this.form.removeClass('replying');
        this.discussionEntry.removeClass('replying');
        this.textArea.val(this.content);
        this.editing = false;
        return this.trigger('hide', this);
      };

      Reply.prototype.hideNotification = function() {
        return this.view.model.set('notification', '');
      };

      Reply.prototype.submit = function() {
        var entry;

        this.hide();
        this.textArea._setContentCode('');
        this.view.model.set('notification', "<div class='alert alert-info'>" + (I18n.t('saving_reply', 'Saving reply...')) + "</div>");
        entry = new Entry(this.getModelAttributes());
        entry.save(null, {
          success: this.onPostReplySuccess,
          error: this.onPostReplyError,
          multipart: entry.get('attachment'),
          proxyAttachment: true
        });
        this.hide();
        return this.removeAttachments();
      };

      Reply.prototype.getEditingElement = function() {
        return this.view.$('.reply-textarea:first');
      };

      Reply.prototype.getModelAttributes = function() {
        var now;

        now = new Date().getTime();
        return {
          summary: $('<div/>').html(this.content).text(),
          message: this.content,
          parent_id: this.options.topLevel ? null : this.view.model.get('id'),
          user_id: ENV.current_user_id,
          created_at: now,
          updated_at: now,
          attachment: this.form.find('input[type=file]')[0],
          "new": true
        };
      };

      Reply.prototype.onPostReplySuccess = function(entry) {
        this.view.model.set('notification', '');
        return this.trigger('save', entry);
      };

      Reply.prototype.onPostReplyError = function(entry) {
        this.view.model.set('notification', "<div class='alert alert-info'>" + (I18n.t('error_saving_reply', "*An error occured*, please post your reply again later", {
          wrapper: '<strong>$1</strong>'
        })) + "</div>");
        this.textArea.val(entry.get('message'));
        return this.edit();
      };

      Reply.prototype.addAttachment = function($el) {
        this.form.find('ul.discussion-reply-attachments').append(replyAttachmentTemplate());
        return this.form.find('a.discussion-reply-add-attachment').hide();
      };

      Reply.prototype.removeAttachment = function($el) {
        $el.closest('ul.discussion-reply-attachments li').remove();
        return this.form.find('a.discussion-reply-add-attachment').show();
      };

      Reply.prototype.removeAttachments = function() {
        this.form.find('ul.discussion-reply-attachments').empty();
        return this.form.find('a.discussion-reply-add-attachment').show();
      };

      return Reply;

    })();
    _.extend(Reply.prototype, Backbone.Events);
    return Reply;
  });

}).call(this);
