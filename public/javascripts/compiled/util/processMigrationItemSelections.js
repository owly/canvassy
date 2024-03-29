(function() {
  var __hasProp = {}.hasOwnProperty;

  define(function() {
    var processMigrationItemSelections, reAllSelection, reAssetId;

    reAssetId = /copy\[([^\]]*)\]\[([^\]]*)\]/;
    reAllSelection = /copy\[all_([^\]]*)\]/;
    return processMigrationItemSelections = function(data) {
      var allSelection, allSelections, assetID, assetType, copyEverything, key, matchData, newData, value, _base, _i, _len;

      newData = {
        items_to_copy: {}
      };
      allSelections = [];
      copyEverything = data['copy[everything]'] === "1";
      for (key in data) {
        if (!__hasProp.call(data, key)) continue;
        value = data[key];
        if (matchData = key.match(reAssetId)) {
          assetType = matchData[1];
          assetID = matchData[2];
          if (assetType === "day_substitutions") {
            newData[key] = value;
            continue;
          }
          if (copyEverything) {
            continue;
          }
          if (value === "1") {
            (_base = newData.items_to_copy)[assetType] || (_base[assetType] = []);
            newData.items_to_copy[assetType].push(assetID);
          }
        } else {
          if (matchData = key.match(reAllSelection)) {
            if (copyEverything) {
              continue;
            }
            if (value === "1") {
              allSelections.push(matchData[1]);
            }
          }
          newData[key] = value;
        }
      }
      for (_i = 0, _len = allSelections.length; _i < _len; _i++) {
        allSelection = allSelections[_i];
        delete newData.items_to_copy[allSelection];
      }
      return newData;
    };
  });

}).call(this);
