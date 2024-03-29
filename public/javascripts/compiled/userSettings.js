(function() {
  var __slice = [].slice;

  define(['underscore', 'jquery', 'jquery.instructure_misc_helpers'], function(_, $) {
    var addTokens, method, userSettings, _i, _len, _ref;

    userSettings = {};
    addTokens = function() {
      var method, tokens;

      method = arguments[0], tokens = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return function(key, value) {
        var joinedTokens, res, stringifiedValue;

        stringifiedValue = JSON.stringify(value);
        joinedTokens = _(tokens).map(function(token) {
          return ENV[token];
        }).join('_');
        res = localStorage["" + method + "Item"]("_" + joinedTokens + "_" + key, stringifiedValue);
        if (res) {
          return JSON.parse(res);
        }
      };
    };
    _ref = ['get', 'set', 'remove'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      method = _ref[_i];
      userSettings[method] = addTokens(method, 'current_user_id');
      userSettings["context" + ($.capitalize(method))] = addTokens(method, 'current_user_id', 'context_asset_string');
    }
    return userSettings;
  });

}).call(this);
