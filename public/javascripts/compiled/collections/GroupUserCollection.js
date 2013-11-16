(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection'], function(PaginatedCollection) {
    var GroupUserCollection, _ref;

    return GroupUserCollection = (function(_super) {
      __extends(GroupUserCollection, _super);

      function GroupUserCollection() {
        this.updateGroupId = __bind(this.updateGroupId, this);        _ref = GroupUserCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUserCollection.collectionMap = {};

      GroupUserCollection.optionProperty('groupId');

      GroupUserCollection.prototype.initialize = function(options) {
        GroupUserCollection.__super__.initialize.apply(this, arguments);
        this.on('change:groupId', this.updateGroupId);
        return GroupUserCollection.collectionMap[this.groupId] = this;
      };

      GroupUserCollection.prototype.updateGroupId = function(model, groupId) {
        var _ref1;

        this.remove(model);
        return (_ref1 = GroupUserCollection.collectionMap[groupId]) != null ? _ref1.add(model) : void 0;
      };

      return GroupUserCollection;

    })(PaginatedCollection);
  });

}).call(this);
