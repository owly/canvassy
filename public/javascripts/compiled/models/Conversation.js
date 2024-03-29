(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'Backbone', 'underscore', 'jquery'], function(I18n, _arg, _, $) {
    var Conversation, Model, _ref;

    Model = _arg.Model;
    return Conversation = (function(_super) {
      var BLANK_BODY_ERR, NO_RECIPIENTS_ERR;

      __extends(Conversation, _super);

      function Conversation() {
        _ref = Conversation.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Conversation.prototype.url = '/api/v1/conversations';

      BLANK_BODY_ERR = I18n.t('cannot_be_empty', 'Message cannot be blank');

      NO_RECIPIENTS_ERR = I18n.t('no_recipients_choose_another_group', 'No recipients are in this group. Please choose another group.');

      Conversation.prototype.validate = function(attrs, options) {
        var errors;

        errors = {};
        if (!attrs.body || !$.trim(attrs.body.toString())) {
          errors.body = [
            {
              message: BLANK_BODY_ERR
            }
          ];
        }
        if (!attrs.recipients || !attrs.recipients.length) {
          errors.recipients = [
            {
              message: NO_RECIPIENTS_ERR
            }
          ];
        }
        if (_.keys(errors).length) {
          return errors;
        } else {
          return void 0;
        }
      };

      return Conversation;

    })(Model);
  });

}).call(this);
