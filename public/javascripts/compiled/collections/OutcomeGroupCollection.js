(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/collections/PaginatedCollection', 'compiled/models/OutcomeGroup'], function(_, PaginatedCollection, OutcomeGroup) {
    var OutcomeGroupCollection, _ref;

    return OutcomeGroupCollection = (function(_super) {
      __extends(OutcomeGroupCollection, _super);

      function OutcomeGroupCollection() {
        _ref = OutcomeGroupCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeGroupCollection.prototype.model = OutcomeGroup;

      OutcomeGroupCollection.prototype.parse = function(response, xhr) {
        OutcomeGroupCollection.__super__.parse.call(this, response, xhr);
        return _.reject(response, function(groupObj) {
          return groupObj.id === ENV.COMMON_CORE_GROUP_ID;
        });
      };

      return OutcomeGroupCollection;

    })(PaginatedCollection);
  });

}).call(this);
