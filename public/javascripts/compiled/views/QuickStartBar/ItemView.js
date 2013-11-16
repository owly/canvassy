(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var ItemView, View, _ref;

    View = _arg.View;
    return ItemView = (function(_super) {
      __extends(ItemView, _super);

      function ItemView() {
        _ref = ItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ItemView.prototype.render = function() {
        var html;

        html = this.template(this.present());
        this.$el.html(html);
        return ItemView.__super__.render.apply(this, arguments);
      };

      return ItemView;

    })(View);
  });

}).call(this);
