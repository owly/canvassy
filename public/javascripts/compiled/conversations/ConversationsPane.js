(function() {
  define(['i18n!conversations.conversations_pane', 'compiled/conversations/ConversationsList', 'str/htmlEscape', 'compiled/util/shortcut', 'compiled/jquery/offsetFrom'], function(I18n, ConversationsList, h, shortcut) {
    return (function() {
      shortcut(_Class, 'list', 'baseData', 'updateItems', 'isActive');

      function _Class(app, $pane) {
        this.app = app;
        this.$pane = $pane;
        this.list = new ConversationsList(this, this.$pane.find('> div.conversations'));
        this.selected = [];
        this.initializeActions();
      }

      _Class.prototype.initializeActions = function() {
        var _this = this;

        return $('#menu-wrapper').on('click', 'a.action_delete_all', function(e) {
          e.preventDefault();
          if (confirm(I18n.t('confirm.delete_conversation', "Are you sure you want to delete your copy of this conversation? This action cannot be undone."))) {
            return _this.action($(e.currentTarget), {
              method: 'DELETE'
            });
          }
        });
      };

      _Class.prototype.updateView = function(params) {
        return this.list.load(params);
      };

      _Class.prototype.action = function($actionNode, options) {
        var conversation, conversationId, origCb,
          _this = this;

        conversationId = options.conversationId || $actionNode.closest('div.conversations li').data('id') || $actionNode.parents('ul[data-id]:first').data('id');
        conversation = this.list.item(conversationId);
        options = $.extend(true, {}, {
          url: this.actionUrlFor($actionNode, conversationId)
        }, options);
        origCb = options.success;
        options.success = function(data) {
          var _ref;

          if ((_ref = data.messages) != null ? _ref.length : void 0) {
            _this.app.addMessage(data.messages[0]);
          }
          return typeof origCb === "function" ? origCb(data) : void 0;
        };
        return conversation.inboxAction(options);
      };

      _Class.prototype.actionUrlFor = function($actionNode, conversationId) {
        var url;

        url = $.replaceTags($actionNode.attr('href'), 'id', conversationId);
        return url + (url.match(/\?/) ? '&' : '?') + $.param(this.baseData());
      };

      _Class.prototype.active = function() {
        return this.list.active;
      };

      _Class.prototype.filterMenu = function(e) {
        var $conversation, $list, isArchived, isPrivate, isRead, isStarred, isSubscribed;

        $conversation = $(e.currentTarget).parents('li:first');
        $list = $(e.currentTarget).siblings('ul:first');
        $list.find('li').show();
        isRead = $conversation.hasClass('read');
        isStarred = $conversation.hasClass('starred');
        isPrivate = $conversation.hasClass('private');
        isSubscribed = !$conversation.hasClass('unsubscribed');
        isArchived = $conversation.hasClass('archived');
        if (isRead) {
          $list.find('.action_mark_as_read').parent().remove();
        }
        if (!isRead) {
          $list.find('.action_mark_as_unread').parent().remove();
        }
        if (isStarred) {
          $list.find('.action_star').parent().remove();
        }
        if (!isStarred) {
          $list.find('.action_unstar').parent().remove();
        }
        if (isArchived) {
          $list.find('.action_archive').parent().remove();
        }
        if (!isArchived) {
          $list.find('.action_unarchive').parent().remove();
        }
        if (isArchived) {
          $list.find('.action_mark_as_read').parent().remove();
          $list.find('.action_mark_as_unread').parent().remove();
        }
        if (isPrivate) {
          return $list.find('.action_subscribe, .action_unsubscribe').parent().remove();
        } else {
          if (isSubscribed) {
            $list.find('.action_subscribe').parent().remove();
          }
          if (!isSubscribed) {
            return $list.find('.action_unsubscribe').parent().remove();
          }
        }
      };

      _Class.prototype.resize = function(newHeight) {
        this.list.$scroller.height(newHeight - $('#actions').outerHeight(true));
        return this.list.fetchVisible();
      };

      return _Class;

    })();
  });

}).call(this);
