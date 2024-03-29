(function() {
  var __hasProp = {}.hasOwnProperty;

  define(function() {
    var processItemSelections;

    return processItemSelections = function(data) {
      var assetString, key, matchData, newData, reAssetString, value;

      newData = {
        items_to_copy: []
      };
      reAssetString = /copy\[([^\]]*)\]$/;
      for (key in data) {
        if (!__hasProp.call(data, key)) continue;
        value = data[key];
        matchData = key.match(reAssetString);
        if (matchData) {
          assetString = matchData[1];
          if (value === "1") {
            newData.items_to_copy.push(assetString);
          } else if (value !== "0") {
            newData[key] = value;
          }
        } else {
          newData[key] = value;
        }
      }
      return newData;
    };
  });

}).call(this);
