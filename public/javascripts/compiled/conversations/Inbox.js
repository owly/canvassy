(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['i18n!conversations', 'underscore', 'str/htmlEscape', 'compiled/conversations/introSlideshow', 'compiled/conversations/ConversationsPane', 'compiled/conversations/MessageFormPane', 'compiled/conversations/audienceList', 'compiled/util/contextList', 'compiled/widget/ContextSearch', 'compiled/str/TextHelper', 'jquery.ajaxJSON', 'jquery.instructure_date_and_time', 'jquery.instructure_forms', 'jqueryui/dialog', 'jquery.instructure_misc_helpers', 'jquery.disableWhileLoading', 'compiled/jquery.rails_flash_notifications', 'compiled/jquery/offsetFrom', 'media_comments', 'vendor/jquery.ba-hashchange', 'vendor/jquery.elastic', 'jqueryui/position'], function(I18n, _, h, introSlideshow, ConversationsPane, MessageFormPane, audienceList, contextList, TokenInput, TextHelper) {
    return (function() {
      function _Class(options) {
        this.options = options;
        this.updateView = __bind(this.updateView, this);
        this.initializeMenus = __bind(this.initializeMenus, this);
        this.canAddNotesFor = __bind(this.canAddNotesFor, this);
        this.render = __bind(this.render, this);
        this.currentUser = this.options.USER;
        this.contexts = this.options.CONTEXTS;
        this.userCache = {};
        this.userCache[this.currentUser.id] = this.currentUser;
        $(this.render);
      }

      _Class.prototype.render = function() {
        this.$inbox = $('#inbox');
        this.minHeight = parseInt(this.$inbox.css('min-height').replace('px', ''));
        this.$conversations = $('#conversations');
        this.$messages = $('#messages');
        this.$messageList = this.$messages.find('ul.messages');
        this.$others = $('<div class="others" id="others_popup" />');
        this.initializeHelp();
        this.initializeForms();
        this.initializeMenus();
        this.initializeMessageActions();
        this.initializeTokenInputs();
        this.initializeConversationsPane();
        this.initializeMessageFormPane();
        this.initializeAutoResize();
        this.initializeHashChange();
        if (this.options.SHOW_INTRO) {
          return introSlideshow();
        }
      };

      _Class.prototype.filters = function() {
        var _ref;

        return (_ref = this.conversations.baseData().filter) != null ? _ref : [];
      };

      _Class.prototype.htmlAudience = function(conversation, options) {
        var audience, filters, id, ret, _ref;

        if (options == null) {
          options = {};
        }
        if (conversation == null) {
          conversation = (_ref = this.conversations.active()) != null ? _ref.attributes : void 0;
        }
        if (conversation == null) {
          return h(I18n.t('headings.new_message', 'New Message'));
        }
        filters = options.filters = options.highlightFilters ? this.filters() : [];
        audience = (function() {
          var _i, _len, _ref1, _results;

          _ref1 = conversation.audience;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            id = _ref1[_i];
            _results.push({
              id: id,
              name: this.userCache[id].name,
              activeFilter: _.include(filters, "user_" + id)
            });
          }
          return _results;
        }).call(this);
        ret = audienceList(audience, options);
        if (audience.length) {
          ret += " <em>" + this.htmlContextList(conversation.audience_contexts, options) + "</em>";
        }
        return ret;
      };

      _Class.prototype.htmlContextList = function(contexts, options) {
        if (options == null) {
          options = {};
        }
        contexts = {
          courses: _.keys(contexts.courses),
          groups: _.keys(contexts.groups)
        };
        return contextList(contexts, this.contexts, options);
      };

      _Class.prototype.htmlNameForUser = function(user, contexts) {
        var _ref, _ref1;

        if (contexts == null) {
          contexts = {
            courses: user.common_courses,
            groups: user.common_groups
          };
        }
        return h(user.name) + (((_ref = contexts.courses) != null ? _ref.length : void 0) || ((_ref1 = contexts.groups) != null ? _ref1.length : void 0) ? " <em>" + this.htmlContextList(contexts) + "</em>" : '');
      };

      _Class.prototype.canAddNotesFor = function(userOrId) {
        var id, roles, user, _ref, _ref1, _ref2;

        if (!this.options.NOTES_ENABLED) {
          return false;
        }
        user = typeof userOrId === 'object' ? userOrId : this.userCache[userOrId];
        if (user == null) {
          return false;
        }
        _ref = user.common_courses;
        for (id in _ref) {
          roles = _ref[id];
          if (__indexOf.call(roles, 'StudentEnrollment') >= 0 && (this.options.CAN_ADD_NOTES_FOR_ACCOUNT || ((_ref1 = this.contexts.courses[id]) != null ? (_ref2 = _ref1.permissions) != null ? _ref2.manage_user_notes : void 0 : void 0))) {
            return true;
          }
        }
        return false;
      };

      _Class.prototype.loadConversation = function(conversation, $node, cb) {
        var url,
          _this = this;

        this.$messageList.removeClass('private').hide().html('');
        if (typeof $conversation !== "undefined" && $conversation !== null ? $conversation.hasClass('private') : void 0) {
          this.$messageList.addClass('private');
        }
        this.resetMessageForm(conversation);
        this.toggleMessageActions(false);
        if (conversation == null) {
          return cb();
        }
        url = conversation.url();
        return this.$messageList.show().disableWhileLoading($.ajaxJSON(url, 'GET', {}, function(data) {
          var message, user, _i, _j, _len, _len1, _ref, _ref1, _ref2;

          _this.conversations.updateItems([data]);
          if (!_this.conversations.isActive(data.id)) {
            return;
          }
          _ref = data.participants;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            user = _ref[_i];
            if (!(!((_ref1 = _this.userCache[user.id]) != null ? _ref1.avatar_url : void 0))) {
              continue;
            }
            _this.userCache[user.id] = user;
            user.htmlName = _this.htmlNameForUser(user);
          }
          if (data['private'] && (user = ((function() {
            var _j, _len1, _ref2, _results;

            _ref2 = data.participants;
            _results = [];
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
              user = _ref2[_j];
              if (user.id !== this.currentUser.id) {
                _results.push(user);
              }
            }
            return _results;
          }).call(_this))[0])) {
            _this.formPane.resetForParticipant(user);
          }
          _this.resize();
          _this.$messages.show();
          _ref2 = data.messages;
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            message = _ref2[_j];
            _this.$messageList.append(_this.buildMessage(message));
          }
          _this.$messageList.show();
          return cb();
        }));
      };

      _Class.prototype.resetMessageForm = function(conversation) {
        var baseData;

        $('#action_compose_message').toggleClass('active', conversation == null);
        baseData = this.conversations.baseData();
        return this.formPane.reset(_.extend({}, this.currentHashData(), {
          conversation: conversation,
          audience: this.htmlAudience(null, {
            linkToContexts: true,
            highlightFilters: true
          }),
          addRecipientsEnabled: (conversation != null) && !conversation.get('private'),
          mediaCommentsEnabled: this.options.MEDIA_COMMENTS_ENABLED,
          filter: baseData.filter,
          scope: baseData.scope
        }));
      };

      _Class.prototype.updatedConversation = function(data) {
        var conversation;

        this.formPane.refresh(this.htmlAudience(null, {
          linkToContexts: true,
          highlightFilters: true
        }));
        if (!data.length) {
          return;
        }
        this.conversations.updateItems(data);
        if (data.length === 1) {
          conversation = data[0];
          if (this.conversations.isActive(conversation.id)) {
            this.buildMessage(conversation.messages[0]).prependTo(this.$messageList).slideDown('fast');
          }
          if (conversation.visible) {
            return this.updateHashData({
              id: conversation.id
            });
          }
        }
      };

      _Class.prototype.deselectMessages = function() {
        return this.$messageList.find('li.selected').removeClass('selected');
      };

      _Class.prototype.addMessage = function(message) {
        this.toggleMessageActions(false);
        return this.buildMessage(message).prependTo(this.$messageList).slideDown('fast');
      };

      _Class.prototype.buildMessage = function(data) {
        var $attachmentBlank, $mediaObjectBlank, $message, $pmAction, $ul, attachment, avatar, submessage, user, userName, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4, _ref5,
          _this = this;

        if (data.submission) {
          return this.buildSubmission(data);
        }
        $message = $("#message_blank").clone(true).attr('id', 'message_' + data.id);
        $message.data('id', data.id);
        $message.addClass(data.generated ? 'generated' : data.author_id === this.currentUser.id ? 'self' : 'other');
        $message.addClass('forwardable');
        user = this.userCache[data.author_id];
        if (avatar = user != null ? user.avatar_url : void 0) {
          $message.prepend($('<img />').attr('src', avatar).addClass('avatar'));
        }
        if (user) {
          if ((_ref = user.htmlName) == null) {
            user.htmlName = this.htmlNameForUser(user);
          }
        }
        userName = (_ref1 = user != null ? user.name : void 0) != null ? _ref1 : I18n.t('unknown_user', 'Unknown user');
        $message.find('.audience').html((user != null ? user.htmlName : void 0) || h(userName));
        $message.find('span.date').text($.parseFromISO(data.created_at).datetime_formatted);
        $message.find('p').html(TextHelper.formatMessage(data.body));
        $message.find("a.show_quoted_text_link").click(function(e) {
          var $target, $text;

          $target = $(e.currentTarget);
          $text = $target.parents(".quoted_text_holder").children(".quoted_text");
          if ($text.length) {
            event.stopPropagation();
            event.preventDefault();
            $text.show();
            return $target.hide();
          }
        });
        $pmAction = $message.find('a.send_private_message');
        $pmAction.on('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          user = _this.userCache[data.author_id];
          $('#action_compose_message').trigger('click');
          if (_this.addUserTokenCb) {
            clearTimeout(_this.addUserTokenCb);
          }
          return _this.addUserTokenCb = setTimeout(function() {
            delete _this.addUserTokenCb;
            return _this.formPane.form.addToken({
              value: user.id,
              text: user.name,
              data: user
            });
          }, 100);
        });
        if ((_ref2 = data.forwarded_messages) != null ? _ref2.length : void 0) {
          $ul = $('<ul class="messages"></ul>');
          _ref3 = data.forwarded_messages;
          for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
            submessage = _ref3[_i];
            $ul.append(this.buildMessage(submessage));
          }
          $message.append($ul);
        }
        $ul = $message.find('ul.message_attachments').first().detach();
        $mediaObjectBlank = $ul.find('.media_object_blank').detach();
        $attachmentBlank = $ul.find('.attachment_blank').detach();
        if ((data.media_comment != null) || ((_ref4 = data.attachments) != null ? _ref4.length : void 0)) {
          $message.append($ul);
          if (data.media_comment != null) {
            $ul.append(this.buildMediaObject($mediaObjectBlank, data.media_comment));
          }
          if (data.attachments != null) {
            _ref5 = data.attachments;
            for (_j = 0, _len1 = _ref5.length; _j < _len1; _j++) {
              attachment = _ref5[_j];
              $ul.append(this.buildAttachment($attachmentBlank, attachment));
            }
          }
        }
        return $message;
      };

      _Class.prototype.buildMediaObject = function(blank, data) {
        var $mediaObject;

        $mediaObject = blank.clone(true).attr('id', 'media_comment_' + data.media_id);
        $mediaObject.find('span.title').html(h(data.display_name));
        $mediaObject.find('span.media_comment_id').html(h(data.media_id));
        $mediaObject.find('.instructure_inline_media_comment').data('media_comment_type', data.media_type);
        return $mediaObject;
      };

      _Class.prototype.buildAttachment = function(blank, data) {
        var $attachment, $link,
          _this = this;

        $attachment = blank.clone(true).attr('id', 'attachment_' + data.id);
        $attachment.data('id', data.id);
        $attachment.find('span.title').html(h(data.display_name));
        $link = $attachment.find('a');
        $link.attr('href', data.url);
        $link.click(function(e) {
          return e.stopPropagation();
        });
        return $attachment;
      };

      _Class.prototype.buildSubmission = function(data) {
        var $comment, $commentBlank, $header, $inlineMore, $moreLink, $submission, $ul, comment, href, idx, index, initiallyShown, score, user, userName, _i, _ref, _ref1, _ref2, _ref3,
          _this = this;

        $submission = $("#submission_blank").clone(true).attr('id', data.id);
        $submission.data('id', data.id);
        data = data.submission;
        $ul = $submission.find('ul');
        $header = $ul.find('li.header');
        href = $.replaceTags($header.find('a').attr('href'), {
          course_id: data.assignment.course_id,
          assignment_id: data.assignment_id,
          id: data.user_id
        });
        $header.find('a').attr('href', href);
        user = this.userCache[data.user_id];
        if (user) {
          if ((_ref = user.htmlName) == null) {
            user.htmlName = this.htmlNameForUser(user);
          }
        }
        userName = (_ref1 = user != null ? user.name : void 0) != null ? _ref1 : I18n.t('unknown_user', 'Unknown user');
        $header.find('.title').html(h(data.assignment.name));
        $header.find('span.date').text(data.submitted_at ? $.parseFromISO(data.submitted_at).datetime_formatted : I18n.t('not_applicable', 'N/A'));
        $header.find('.audience').html((user != null ? user.htmlName : void 0) || h(userName));
        if (data.score && data.assignment.points_possible) {
          score = "" + data.score + " / " + data.assignment.points_possible;
        } else {
          score = (_ref2 = data.score) != null ? _ref2 : I18n.t('not_scored', 'no score');
        }
        $header.find('.score').html(score);
        $commentBlank = $ul.find('.comment').detach();
        index = 0;
        initiallyShown = 4;
        for (idx = _i = _ref3 = data.submission_comments.length - 1; _i >= 0; idx = _i += -1) {
          comment = data.submission_comments[idx];
          if (index >= 10) {
            break;
          }
          index++;
          $comment = this.buildSubmissionComment($commentBlank, comment);
          if (index > initiallyShown) {
            $comment.hide();
          }
          $ul.append($comment);
        }
        $moreLink = $ul.find('.more').detach();
        if (index > initiallyShown) {
          $inlineMore = $moreLink.clone(true);
          $inlineMore.find('.hidden').text(index - initiallyShown);
          $inlineMore.attr('title', h(I18n.t('titles.expand_inline', "Show more comments")));
          $inlineMore.click(function(e) {
            var $target;

            $target = $(e.currentTarget);
            $submission = $target.closest('.submission');
            $submission.find('.more:hidden').show();
            $target.hide();
            $submission.find('.comment:hidden').slideDown('fast');
            _this.resize();
            return false;
          });
          $ul.append($inlineMore);
        }
        if (data.submission_comments.length > index) {
          $moreLink.find('a').attr('href', href).attr('target', '_blank');
          $moreLink.find('.hidden').text(data.submission_comments.length - index);
          $moreLink.attr('title', h(I18n.t('titles.view_submission', "Open submission in new window.")));
          if (data.submission_comments.length > initiallyShown) {
            $moreLink.hide();
          }
          $ul.append($moreLink);
        }
        return $submission;
      };

      _Class.prototype.buildSubmissionComment = function(blank, data) {
        var $comment, avatar, user, userName, _ref, _ref1;

        $comment = blank.clone(true);
        user = this.userCache[data.author_id];
        if (avatar = user != null ? user.avatar_url : void 0) {
          $comment.prepend($('<img />').attr('src', avatar).addClass('avatar'));
        }
        if (user) {
          if ((_ref = user.htmlName) == null) {
            user.htmlName = this.htmlNameForUser(user);
          }
        }
        userName = (_ref1 = user != null ? user.name : void 0) != null ? _ref1 : I18n.t('unknown_user', 'Unknown user');
        $comment.find('.audience').html((user != null ? user.htmlName : void 0) || h(userName));
        $comment.find('span.date').text($.parseFromISO(data.created_at).datetime_formatted);
        $comment.find('p').html(h(data.comment).replace(/\n/g, '<br />'));
        return $comment;
      };

      _Class.prototype.closeMenus = function() {
        return $('#actions .menus > li, #conversation_actions, #conversations .actions').removeClass('selected');
      };

      _Class.prototype.openMenu = function($menu) {
        var $div, offset;

        this.closeMenus();
        if (!$menu.hasClass('disabled')) {
          $div = $menu.parent('li, span').addClass('selected').find('div');
          offset = -($div.parent().position().left + $div.parent().outerWidth() / 2) + 6;
          if (offset < -($div.outerWidth() / 2)) {
            offset = -($div.outerWidth() / 2);
          }
          return $div.css('margin-left', offset + 'px');
        }
      };

      _Class.prototype.resize = function(delay) {
        var _this = this;

        if (delay == null) {
          delay = 0;
        }
        if (this.resizeCb) {
          clearTimeout(this.resizeCb);
        }
        return this.resizeCb = setTimeout(function() {
          var availableHeight;

          delete _this.resizeCb;
          availableHeight = $(window).height() - $('#header').outerHeight(true) - ($('#wrapper-container').outerHeight(true) - $('#wrapper-container').height()) - ($('#main').outerHeight(true) - $('#main').height()) - $('#breadcrumbs').outerHeight(true) - $('#footer').outerHeight(true);
          if (availableHeight < _this.minHeight) {
            availableHeight = _this.minHeight;
          }
          $(document.body).toggleClass('too_small', availableHeight <= _this.minHeight);
          _this.$inbox.height(availableHeight);
          _this.$messageList.height(availableHeight - _this.formPane.height());
          return _this.conversations.resize(availableHeight);
        }, delay);
      };

      _Class.prototype.toggleMessageActions = function(state) {
        if (state != null) {
          this.$messageList.find('> li').removeClass('selected');
          this.$messageList.find('> li :checkbox').attr('checked', false);
        } else {
          state = !!this.$messageList.find('li.selected').length;
        }
        $('#action_forward').parent().showIf(state && this.$messageList.find('li.selected.forwardable').length);
        if (state) {
          $("#message_actions").slideDown(100);
        } else {
          $("#message_actions").slideUp(100);
        }
        return this.formPane.toggle(state);
      };

      _Class.prototype.updateHashData = function(changes) {
        var data, hash;

        data = $.extend(this.currentHashData(), changes);
        hash = $.encodeToHex(JSON.stringify(data));
        if (hash !== location.hash.substring(1)) {
          location.hash = hash;
          return $(document).triggerHandler('document_fragment_change', hash);
        }
      };

      _Class.prototype.initializeHelp = function() {
        var _this = this;

        return $('#help_crumb').click(function(e) {
          e.preventDefault();
          return introSlideshow();
        });
      };

      _Class.prototype.prepareTextareas = function($nodes) {
        var _this = this;

        $nodes.elastic();
        return $nodes.keypress(function(e) {
          if (e.which === 13 && e.shiftKey) {
            $(e.target).closest('form').submit();
            return false;
          }
        });
      };

      _Class.prototype.initializeForms = function() {
        var _this = this;

        this.$addForm = $('#add_recipients_form');
        this.$forwardForm = $('#forward_message_form');
        this.prepareTextareas(this.$forwardForm.find('textarea'));
        this.$addForm.submit(function(e) {
          var valid;

          valid = !!(_this.$addForm.find('.token_input li').length);
          if (!valid) {
            e.stopImmediatePropagation();
          }
          return valid;
        });
        this.$addForm.formSubmit({
          disableWhileLoading: true,
          success: function(data) {
            _this.updatedConversation(data);
            return _this.$addForm.dialog('close');
          },
          error: function(data) {
            return _this.$addForm.dialog('close');
          }
        });
        this.$forwardForm.submit(function(e) {
          var valid;

          valid = !!(_this.$forwardForm.find('#forward_body').val() && _this.$forwardForm.find('.token_input li').length);
          if (!valid) {
            e.stopImmediatePropagation();
          }
          return valid;
        });
        this.$forwardForm.formSubmit({
          disableWhileLoading: true,
          success: function(data) {
            _this.updatedConversation(data);
            return _this.$forwardForm.dialog('close');
          },
          error: function(data) {
            return _this.$forwardForm.dialog('close');
          }
        });
        return this.$messageList.click(function(e) {
          var $message;

          if ($(e.target).closest('a.instructure_inline_media_comment, .mejs-container').length) {

          } else {
            $message = $(e.target).closest('#messages > ul > li');
            if (!$message.hasClass('generated')) {
              $message.toggleClass('selected');
              $message.find('> :checkbox').attr('checked', $message.hasClass('selected'));
            }
            return _this.toggleMessageActions();
          }
        });
      };

      _Class.prototype.initializeMenus = function() {
        var _this = this;

        $('.menus > li > a').click(function(e) {
          e.preventDefault(e);
          return _this.openMenu($(e.currentTarget));
        }).focus(function(e) {
          return _this.openMenu($(e.currentTarget));
        });
        $(document).bind('mousedown', function(e) {
          if (!$(e.target).closest("#others_popup").length) {
            _this.$others.hide();
          }
          if (!$(e.target).closest(".menus > li, #conversation_actions, #conversations .actions").length) {
            return _this.closeMenus();
          }
        });
        this.$menuViews = $('#menu_views');
        this.$menuViewsList = this.$menuViews.parent();
        this.$menuViewsList.find('li a').click(function(e) {
          var scope;

          _this.closeMenus();
          if (scope = $(e.target).closest('li').data('scope')) {
            e.preventDefault();
            return _this.updateHashData({
              scope: scope
            });
          }
        });
        return $('#conversations ul, #create_message_form').on('click', '.others', function(e) {
          var $container, $this, offset;

          $this = $(e.currentTarget);
          $container = $this.closest('li').offsetParent();
          offset = $this.offsetFrom($container);
          _this.$others.empty().append($this.find('> span').clone()).css({
            left: offset.left,
            top: offset.top + $this.height() + $container.scrollTop(),
            fontSize: $this.css('fontSize')
          });
          $container.append(_this.$others.show());
          return false;
        });
      };

      _Class.prototype.setScope = function(scope) {
        var $item, $items;

        $items = this.$menuViewsList.find('li');
        $items.removeClass('checked');
        $item = $items.filter("[data-scope=" + scope + "]");
        if (!$item.length) {
          $item = $items.filter("[data-scope=inbox]");
        }
        $item.addClass('checked');
        return this.$menuViews.text($item.text());
      };

      _Class.prototype.initializeMessageActions = function() {
        var _this = this;

        $('#message_actions').find('a').click(function(e) {
          return e.preventDefault();
        });
        $('#cancel_bulk_message_action').click(function() {
          return _this.toggleMessageActions(false);
        });
        $('#action_delete').click(function(e) {
          var $selectedMessages, active, message;

          active = _this.conversations.active();
          if (active == null) {
            return;
          }
          $selectedMessages = _this.$messageList.find('.selected');
          message = $selectedMessages.length > 1 ? I18n.t('confirm.delete_messages', "Are you sure you want to delete your copy of these messages? This action cannot be undone.") : I18n.t('confirm.delete_message', "Are you sure you want to delete your copy of this message? This action cannot be undone.");
          if (confirm(message)) {
            $selectedMessages.fadeOut('fast');
            return _this.conversations.action($(e.currentTarget), {
              conversationId: active.id,
              data: {
                remove: (function() {
                  var _i, _len, _results;

                  _results = [];
                  for (_i = 0, _len = $selectedMessages.length; _i < _len; _i++) {
                    message = $selectedMessages[_i];
                    _results.push($(message).data('id'));
                  }
                  return _results;
                })()
              },
              success: function() {
                return _this.toggleMessageActions(false);
              },
              error: function() {
                return $selectedMessages.show();
              }
            });
          }
        });
        $('#action_forward').click(function(e) {
          var $preview;

          if (_this.conversations.active() == null) {
            return;
          }
          _this.$forwardForm.find("input[name!=authenticity_token], textarea").val('').change();
          $preview = _this.$forwardForm.find('ul.messages').first();
          $preview.html('');
          $preview.html(_this.$messageList.find('> li.selected.forwardable').clone(true).removeAttr('id').removeClass('self'));
          $preview.find('> li').removeClass('selected odd').find('> :checkbox').attr('checked', true).attr('name', 'forwarded_message_ids[]').val(function() {
            return $(this).closest('li').data('id');
          });
          $preview.find('> li').last().addClass('last');
          return _this.$forwardForm.css('max-height', ($(window).height() - 300) + 'px').dialog({
            position: 'center',
            height: 'auto',
            width: 510,
            title: I18n.t('title.forward_messages', 'Forward Messages'),
            buttons: [
              {
                text: I18n.t('#buttons.cancel', 'Cancel'),
                click: function() {
                  return $(this).dialog('close');
                }
              }, {
                text: I18n.t('buttons.send_message', 'Send'),
                click: function() {
                  return $(this).submit();
                },
                "class": 'btn-primary'
              }
            ],
            open: function() {
              return _this.$forwardForm.attr({
                action: '/conversations?' + $.param(_this.conversations.baseData())
              });
            },
            close: function() {
              return $('#forward_recipients').data('token_input').$input.blur();
            }
          });
        });
        return $('#action_compose_message').click(function(e) {
          e.preventDefault();
          return _this.updateHashData({
            id: null
          });
        });
      };

      _Class.prototype.addRecipients = function($node) {
        var _this = this;

        if (this.conversations.active() == null) {
          return;
        }
        return this.$addForm.attr('action', $node.prop('href')).dialog({
          width: 420,
          title: I18n.t('title.add_recipients', 'Add Recipients'),
          buttons: [
            {
              text: I18n.t('buttons.add_people', 'Add People'),
              click: function() {
                return _this.$addForm.submit();
              }
            }, {
              text: I18n.t('#buttons.cancel', 'Cancel'),
              click: function() {
                return _this.$addForm.dialog('close');
              }
            }
          ],
          open: function() {
            var tokenInput;

            tokenInput = $('#add_recipients').data('token_input');
            tokenInput.baseExclude = _this.conversations.active().get('audience');
            return _this.$addForm.find("input[name!=authenticity_token]").val('').change();
          },
          close: function() {
            return $('#add_recipients').data('token_input').$input.blur();
          }
        });
      };

      _Class.prototype.initializeTokenInputs = function($scope) {
        var everyoneText, filterInput, selectAllText,
          _this = this;

        everyoneText = I18n.t('enrollments_everyone', "Everyone");
        selectAllText = I18n.t('select_all', "Select All");
        ($scope != null ? $scope : $(document)).find('.recipients').contextSearch({
          contexts: this.contexts,
          added: function(data, $token, newToken) {
            var $details, currentData, _ref;

            data.id = "" + data.id;
            if (newToken && data.rootId) {
              $token.append("<input type='hidden' name='tags[]' value='" + data.rootId + "'>");
            }
            if (newToken && data.type) {
              $token.addClass(data.type);
              if (data.user_count != null) {
                $token.addClass('details');
                $details = $('<span />');
                $details.text(I18n.t('people_count', 'person', {
                  count: data.user_count
                }));
                $token.append($details);
                $token.data('user_count', data.user_count);
              }
            }
            if (!data.id.match(/^(course|group)_/)) {
              data = $.extend({}, data);
              delete data.avatar_url;
              currentData = (_ref = _this.userCache[data.id]) != null ? _ref : {};
              return _this.userCache[data.id] = $.extend(currentData, data);
            }
          },
          canToggle: function(data) {
            var _ref;

            return data.type === 'user' || ((_ref = data.permissions) != null ? _ref.send_messages_all : void 0);
          },
          selector: {
            showToggles: true,
            includeEveryoneOption: function(postData, parent) {
              var _ref;

              if ((_ref = postData.context) != null ? _ref.match(/^(course|section)_\d+$/) : void 0) {
                return everyoneText;
              }
            },
            includeSelectAllOption: function(postData, parent) {
              var _ref, _ref1, _ref2;

              if (((_ref = postData.context) != null ? _ref.match(/^((course|section)_\d+_.*|group_\d+)$/) : void 0) && !((_ref1 = postData.context) != null ? _ref1.match(/^(course|section)_\d+$/) : void 0) && !((_ref2 = postData.context) != null ? _ref2.match(/^course_\d+_(groups|sections)$/) : void 0) && parent.data('user_data').permissions.send_messages_all) {
                return selectAllText;
              }
            },
            baseData: {
              permissions: ["send_messages_all"]
            }
          }
        });
        if ($scope) {
          return;
        }
        this.filterNameMap = {};
        $('#context_tags').contextSearch({
          contexts: this.contexts,
          prefixUserIds: true,
          added: function(data, $token, newToken) {
            return $token.prevAll().remove();
          },
          tokenWrapBuffer: 80,
          selector: {
            includeEveryoneOption: function(postData, parent) {
              var _ref;

              if ((_ref = postData.context) != null ? _ref.match(/^course_\d+$/) : void 0) {
                return everyoneText;
              }
            },
            includeFilterOption: function(postData) {
              var _ref, _ref1;

              if ((_ref = postData.context) != null ? _ref.match(/^course_\d+$/) : void 0) {
                return I18n.t('filter_by_course', 'Filter by this course');
              } else if ((_ref1 = postData.context) != null ? _ref1.match(/^group_\d+$/) : void 0) {
                return I18n.t('filter_by_group', 'Filter by this group');
              }
            },
            baseData: {
              synthetic_contexts: 1,
              types: ['course', 'user', 'group'],
              include_inactive: true
            }
          }
        });
        filterInput = $('#context_tags').data('token_input');
        return filterInput.change = function(tokenValues) {
          var filters, pair;

          filters = (function() {
            var _i, _len, _ref, _results;

            _ref = filterInput.tokenPairs();
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              pair = _ref[_i];
              this.filterNameMap[pair[0]] = pair[1];
              _results.push(pair[0]);
            }
            return _results;
          }).call(_this);
          return _this.updateHashData({
            filter: filters
          });
        };
      };

      _Class.prototype.initializeConversationsPane = function() {
        return this.conversations = new ConversationsPane(this, this.$conversations);
      };

      _Class.prototype.initializeMessageFormPane = function() {
        return this.formPane = new MessageFormPane(this, {
          folderId: this.options.FOLDER_ID
        });
      };

      _Class.prototype.addedMessageForm = function($form) {
        this.prepareTextareas($form.find('textarea'));
        return this.initializeTokenInputs($form);
      };

      _Class.prototype.initializeAutoResize = function() {
        var _this = this;

        $(window).resize(function() {
          return _this.resize(50);
        });
        return this.resize();
      };

      _Class.prototype.currentHashData = function() {
        var data, e;

        try {
          data = $.parseJSON($.decodeFromHex(location.hash.substring(1))) || {};
        } catch (_error) {
          e = _error;
          data = {};
        }
        return data;
      };

      _Class.prototype.updateView = function(force) {
        var data, hash, id;

        if (force == null) {
          force = false;
        }
        hash = location.hash;
        data = this.currentHashData();
        data.force = force;
        if (data.filter) {
          data.filter = (function() {
            var _i, _len, _ref, _results;

            _ref = data.filter;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              id = _ref[_i];
              if (this.filterNameMap[id]) {
                _results.push(id);
              }
            }
            return _results;
          }).call(this);
          if (!data.filter.length) {
            return this.updateHashData({
              filter: null
            });
          }
        }
        this.setScope(data.scope);
        return this.conversations.updateView(data);
      };

      _Class.prototype.initializeHashChange = function() {
        var _this = this;

        return $(window).bind('hashchange', function() {
          return _this.updateView();
        }).triggerHandler('hashchange');
      };

      return _Class;

    })();
  });

}).call(this);
