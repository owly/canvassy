(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery.ajaxJSON', 'jquery.disableWhileLoading'], function(Backbone) {
    var Conversation, _ref;

    return Conversation = (function(_super) {
      __extends(Conversation, _super);

      function Conversation() {
        _ref = Conversation.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Conversation.prototype.defaults = {
        audience: []
      };

      Conversation.prototype.inboxAction = function(options) {
        var ajaxRequest, defaults, _ref1, _ref2,
          _this = this;

        defaults = {
          url: this.url(),
          method: 'POST',
          success: function(data) {
            return _this.list.updateItem(data);
          }
        };
        options = $.extend(true, {}, defaults, options);
        options.data = $.extend(this.list.baseData(), (_ref1 = options.data) != null ? _ref1 : {});
        ajaxRequest = $.ajaxJSON(options.url, options.method, options.data, function(data) {
          if (typeof options.success === "function") {
            options.success(data);
          }
          return _this.list.updateItem(data);
        });
        return (_ref2 = this.list.$item(this.id)) != null ? _ref2.disableWhileLoading(ajaxRequest) : void 0;
      };

      Conversation.prototype.url = function(action) {
        if (action == null) {
          action = '';
        }
        return "/conversations/" + this.id + "/" + action + "?" + ($.param(this.list.baseData()));
      };

      return Conversation;

    })(Backbone.Model);
  });

}).call(this);
