(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/PaginatedCollectionView', 'compiled/views/wiki/WikiPageIndexItemView', 'jst/wiki/WikiPageIndex'], function(PaginatedCollectionView, itemView, template) {
    var WikiPageIndexView, _ref;

    return WikiPageIndexView = (function(_super) {
      __extends(WikiPageIndexView, _super);

      function WikiPageIndexView() {
        _ref = WikiPageIndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageIndexView.mixin({
        el: '#content',
        template: template,
        itemView: itemView,
        events: {
          'click .new_page': 'createNewPage'
        }
      });

      WikiPageIndexView.prototype.createNewPage = function(ev) {
        if (ev != null) {
          ev.preventDefault();
        }
        return alert('This will eventually create a new page');
      };

      WikiPageIndexView.prototype.toJSON = function() {
        var json;

        json = WikiPageIndexView.__super__.toJSON.apply(this, arguments);
        json.fetched = this.fetched;
        return json;
      };

      return WikiPageIndexView;

    })(PaginatedCollectionView);
  });

}).call(this);
