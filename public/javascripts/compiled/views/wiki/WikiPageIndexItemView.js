(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/wiki/WikiPageIndexItem'], function(Backbone, template) {
    var WikiPageIndexItemView, _ref;

    return WikiPageIndexItemView = (function(_super) {
      __extends(WikiPageIndexItemView, _super);

      function WikiPageIndexItemView() {
        _ref = WikiPageIndexItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageIndexItemView.prototype.template = template;

      WikiPageIndexItemView.prototype.tagName = 'tr';

      return WikiPageIndexItemView;

    })(Backbone.View);
  });

}).call(this);
