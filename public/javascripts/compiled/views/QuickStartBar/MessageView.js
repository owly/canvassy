(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!dashboard', 'compiled/views/QuickStartBar/BaseItemView', 'compiled/models/Message', 'jst/quickStartBar/message', 'compiled/jquery.rails_flash_notifications', 'jquery.disableWhileLoading'], function(I18n, BaseItemView, Message, template) {
    var MessageView, _ref;

    return MessageView = (function(_super) {
      __extends(MessageView, _super);

      function MessageView() {
        _ref = MessageView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageView.prototype.template = template;

      MessageView.prototype.contextSearchOptions = {
        fakeInputWidth: '100%',
        contexts: ENV.CONTEXTS,
        placeholder: "Type the name of the person to send this to...",
        selector: {
          noExpand: true,
          browser: false
        }
      };

      MessageView.prototype.initialize = function() {
        return this.model || (this.model = new Message);
      };

      MessageView.prototype.save = function(json) {
        return this.model.save(json).done(function() {
          return $.flashMessage(I18n.t('message_sent', 'Message Sent'));
        });
      };

      MessageView.type = 'message';

      MessageView.title = function() {
        return MessageView.__super__.constructor.title.call(this, 'message', 'Message');
      };

      return MessageView;

    })(BaseItemView);
  });

}).call(this);
