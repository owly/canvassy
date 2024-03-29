(function() {
  define(['use!vendor/backbone', 'underscore'], function(Backbone, _) {
    var _parse;

    _parse = Backbone.Model.prototype.parse;
    Backbone.Model.prototype.parse = function() {
      var res;

      res = _parse.apply(this, arguments);
      _.each(this.dateAttributes, function(attr) {
        if (res[attr]) {
          return res[attr] = Date.parse(res[attr]);
        }
      });
      return res;
    };
    return Backbone.Model;
  });

}).call(this);
