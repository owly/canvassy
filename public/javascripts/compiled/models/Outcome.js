(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var Outcome, _ref;

    return Outcome = (function(_super) {
      __extends(Outcome, _super);

      function Outcome() {
        _ref = Outcome.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Outcome.prototype.name = function() {
        return this.get('title');
      };

      Outcome.prototype.isAbbreviated = function() {
        return !this.has('description');
      };

      Outcome.prototype.parse = function(resp, xhr) {
        if (resp.outcome) {
          this.outcomeLink = resp;
          this.outcomeGroup = resp.outcome_group;
          return resp.outcome;
        } else {
          return resp;
        }
      };

      Outcome.prototype.setUrlTo = function(action) {
        return this.url = (function() {
          switch (action) {
            case 'add':
              return this.outcomeGroup.outcomes_url;
            case 'edit':
              return this.get('url');
            case 'delete':
              return this.outcomeLink.url;
          }
        }).call(this);
      };

      return Outcome;

    })(Backbone.Model);
  });

}).call(this);
