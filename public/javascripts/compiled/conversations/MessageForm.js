(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!conversations', 'underscore', 'compiled/util/shortcut', 'jst/conversations/MessageForm', 'jst/conversations/addAttachment'], function(I18n, _, shortcut, messageFormTemplate, addAttachmentTemplate) {
    var MessageForm;

    return MessageForm = (function() {
      shortcut(MessageForm, 'pane', 'resize');

      function MessageForm(pane, canAddNotesFor, options) {
        this.pane = pane;
        this.canAddNotesFor = canAddNotesFor;
        this.options = options;
        this.recipientIdsChanged = __bind(this.recipientIdsChanged, this);
        this.$form = $(messageFormTemplate(this.options));
        this.$mediaComment = this.$form.find('.media_comment');
        this.$mediaCommentId = this.$form.find("input[name=media_comment_id]");
        this.$mediaCommentType = this.$form.find("input[name=media_comment_type]");
        this.$addMediaComment = this.$form.find(".action_media_comment");
        this.$attachments = this.$form.find('.attachment_list');
      }

      MessageForm.prototype.initialize = function() {
        var query,
          _this = this;

        if (this.tokenInput = this.$form.find('.recipients').data('token_input')) {
          this.tokenInput.$fakeInput.css('width', '100%');
          if (this.options.user_id) {
            query = {
              user_id: this.options.user_id,
              from_conversation_id: this.options.from_conversation_id
            };
            $.ajaxJSON(this.tokenInput.selector.url, 'GET', query, function(data) {
              if (data.length) {
                return _this.tokenInput.addToken({
                  value: data[0].id,
                  text: data[0].name,
                  data: data[0]
                });
              }
            });
          }
        }
        this.initializeActions();
        if (!$(document.activeElement).filter(':input').length && window.location.hash !== '') {
          return this.$form.find(':input:visible:first').focus();
        }
      };

      MessageForm.prototype.initializeActions = function() {
        var _this = this;

        if (this.tokenInput) {
          this.tokenInput.change = this.recipientIdsChanged;
        }
        return this.$form.formSubmit({
          fileUpload: function() {
            return _this.$form.find(".file_input:visible").length > 0;
          },
          preparedFileUpload: true,
          context_code: "user_" + ENV.current_user_id,
          folder_id: this.options.folderId,
          intent: 'message',
          formDataTarget: 'url',
          disableWhileLoading: true,
          required: ['body'],
          property_validations: {
            token_capture: function() {
              if (_this.tokenInput && !_this.tokenInput.tokenValues().length) {
                return I18n.t('errors.field_is_required', "This field is required");
              }
            }
          },
          handle_files: function(attachments, data) {
            var a;

            data.attachment_ids = (function() {
              var _i, _len, _results;

              _results = [];
              for (_i = 0, _len = attachments.length; _i < _len; _i++) {
                a = attachments[_i];
                _results.push(a.attachment.id);
              }
              return _results;
            })();
            return data;
          },
          onSubmit: function(request, data) {
            _this.request = request;
            return _this.pane.addingMessage(_this.messageData(data), _this.request);
          }
        });
      };

      MessageForm.prototype.recipientIdsChanged = function(recipientIds) {
        var _ref;

        if (recipientIds.length > 1 || ((_ref = recipientIds[0]) != null ? _ref.match(/^(course|group)_/) : void 0)) {
          this.toggleOptions({
            user_note: false,
            group_conversation: true
          });
        } else {
          this.toggleOptions({
            user_note: this.canAddNotesFor(recipientIds[0]),
            group_conversation: false
          });
        }
        return this.resize();
      };

      MessageForm.prototype.addAttachment = function() {
        var $attachment,
          _this = this;

        $attachment = $(addAttachmentTemplate());
        this.$attachments.append($attachment);
        return $attachment.slideDown("fast", function() {
          return _this.resize();
        });
      };

      MessageForm.prototype.removeAttachment = function($node) {
        var $attachment,
          _this = this;

        $attachment = $node.closest(".attachment");
        return $attachment.slideUp("fast", function() {
          _this.resize();
          return $attachment.remove();
        });
      };

      MessageForm.prototype.addToken = function(userData) {
        var input;

        input = this.$form.find('.recipients').data('token_input');
        if (input) {
          return input.addToken(userData);
        }
      };

      MessageForm.prototype.addMediaComment = function() {
        var _this = this;

        return this.$mediaComment.mediaComment('create', 'any', function(id, type) {
          _this.$mediaCommentId.val(id);
          _this.$mediaCommentType.val(type);
          _this.$mediaComment.show();
          return _this.$addMediaComment.hide();
        });
      };

      MessageForm.prototype.removeMediaComment = function() {
        this.$mediaCommentId.val('');
        this.$mediaCommentType.val('');
        this.$mediaComment.hide();
        return this.$addMediaComment.show();
      };

      MessageForm.prototype.messageData = function(data) {
        var numRecipients;

        numRecipients = this.options.conversation ? Math.max(this.options.conversation.get('audience').length, 1) : _.reduce(this.tokenInput.$tokens.find('input[name="recipients[]"]'), function(memo, node) {
          var _ref;

          return memo + ((_ref = $(node).closest('li').data('user_count')) != null ? _ref : 1);
        }, 0);
        return {
          recipient_count: numRecipients,
          message: {
            body: data.body
          }
        };
      };

      MessageForm.prototype.resetForParticipant = function(user) {
        if (this.canAddNotesFor(user)) {
          return this.toggleOptions({
            user_note: true
          });
        }
      };

      MessageForm.prototype.toggleOptions = function(options) {
        var $node, enabled, key, _results;

        _results = [];
        for (key in options) {
          enabled = options[key];
          $node = this.$form.find("." + key + "_info");
          $node.showIf(enabled);
          if (!enabled) {
            _results.push($node.find("input[name=" + key + "]").prop('checked', false));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      MessageForm.prototype.toggle = function(state) {
        return this.$form[state ? 'addClass' : 'removeClass']('disabled');
      };

      MessageForm.prototype.height = function() {
        return this.$form.outerHeight(true);
      };

      MessageForm.prototype.refresh = function(audienceHtml) {
        this.$form.find('.audience').html(audienceHtml);
        return this.resize();
      };

      MessageForm.prototype.destroy = function() {
        var _this = this;

        this.$form.hideErrors();
        this.$form.css({
          position: 'absolute',
          zIndex: -1
        });
        return $.when(this.request).then(function() {
          return _this.$form.remove();
        });
      };

      return MessageForm;

    })();
  });

}).call(this);
