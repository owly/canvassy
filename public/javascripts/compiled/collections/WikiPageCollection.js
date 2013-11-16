(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/WikiPage'], function(PaginatedCollection, WikiPage) {
    var WikiPageCollection, _ref;

    return WikiPageCollection = (function(_super) {
      __extends(WikiPageCollection, _super);

      function WikiPageCollection() {
        _ref = WikiPageCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageCollection.prototype.model = WikiPage;

      return WikiPageCollection;

    })(PaginatedCollection);
  });

}).call(this);
