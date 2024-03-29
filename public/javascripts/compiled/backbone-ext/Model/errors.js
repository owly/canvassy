(function() {
  define(['underscore', 'use!vendor/backbone'], function(_, Backbone) {
    _.extend(Backbone.Model.prototype, {
      normalizeErrors: function(errors, validationPolicy) {
        var attr, attrErrors, error, errorMap, result, _i, _len, _ref, _ref1, _ref2;

        result = {};
        errorMap = (_ref = (_ref1 = this.errorMap) != null ? _ref1 : this.constructor.prototype.errorMap) != null ? _ref : {};
        if (_.isFunction(errorMap)) {
          errorMap = errorMap(validationPolicy);
        }
        if (errors) {
          for (attr in errors) {
            attrErrors = errors[attr];
            if (errorMap[attr]) {
              for (_i = 0, _len = attrErrors.length; _i < _len; _i++) {
                error = attrErrors[_i];
                if (!errorMap[attr][error.type]) {
                  continue;
                }
                if ((_ref2 = result[attr]) == null) {
                  result[attr] = [];
                }
                result[attr].push(errorMap[attr][error.type]);
              }
            }
          }
        }
        return result;
      }
    });
    return Backbone.Model;
  });

}).call(this);
