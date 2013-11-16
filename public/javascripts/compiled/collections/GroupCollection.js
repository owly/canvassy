(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/Group'], function(PaginatedCollection, Group) {
    var GroupCollection, _ref;

    return GroupCollection = (function(_super) {
      __extends(GroupCollection, _super);

      function GroupCollection() {
        _ref = GroupCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCollection.prototype.model = Group;

      GroupCollection.prototype.comparator = function(group) {
        return group.get('name');
      };

      return GroupCollection;

    })(PaginatedCollection);
  });

}).call(this);
