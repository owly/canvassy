(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/DiscussionTopic'], function(PaginatedCollection, DiscussionTopic) {
    var DiscussionTopicsCollection, _ref;

    return DiscussionTopicsCollection = (function(_super) {
      __extends(DiscussionTopicsCollection, _super);

      function DiscussionTopicsCollection() {
        _ref = DiscussionTopicsCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionTopicsCollection.prototype.model = DiscussionTopic;

      DiscussionTopicsCollection.prototype.comparator = DiscussionTopicsCollection.dateComparator;

      DiscussionTopicsCollection.dateComparator = function(a, b) {
        var aDate, bDate;

        aDate = new Date(a.get('last_reply_at')).getTime();
        bDate = new Date(b.get('last_reply_at')).getTime();
        if (aDate < bDate) {
          return 1;
        } else if (aDate === bDate) {
          return 0;
        } else {
          return -1;
        }
      };

      DiscussionTopicsCollection.positionComparator = function(a, b) {
        var aPosition, bPosition;

        aPosition = a.get('position');
        bPosition = b.get('position');
        if (aPosition < bPosition) {
          return -1;
        } else if (aPosition === bPosition) {
          return 0;
        } else {
          return 1;
        }
      };

      return DiscussionTopicsCollection;

    })(PaginatedCollection);
  });

}).call(this);
