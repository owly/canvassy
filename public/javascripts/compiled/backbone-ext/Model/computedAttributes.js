(function() {
  define(['use!vendor/backbone', 'underscore'], function(Backbone, _) {
    _.extend(Backbone.Model.prototype, {
      initialize: function() {
        if (this.computedAttributes != null) {
          return this._configureComputedAttributes();
        }
      },
      _configureComputedAttributes: function() {
        var set,
          _this = this;

        set = function(methodName) {
          return _this.set(methodName, _this[methodName]());
        };
        return _.each(this.computedAttributes, function(methodName) {
          var eventName;

          if (typeof methodName === 'string') {
            return set(methodName);
          } else {
            set(methodName.name);
            eventName = _.map(methodName.deps, function(name) {
              return "change:" + name;
            }).join(' ');
            return _this.bind(eventName, function() {
              return set(methodName.name);
            });
          }
        });
      }
    });
    return Backbone.Model;
  });

}).call(this);
