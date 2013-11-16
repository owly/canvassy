(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var Message, Model, _ref;

    Model = _arg.Model;
    return Message = (function(_super) {
      __extends(Message, _super);

      function Message() {
        _ref = Message.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Message.prototype.url = '/api/v1/conversations';

      return Message;

    })(Model);
  });

}).call(this);
