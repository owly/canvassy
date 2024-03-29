(function() {
  define(['compiled/util/hsvToRgb', 'vendor/murmurhash'], function(hsvToRgb, murmurhash) {
    var bgBrightness, bgSaturation, seed, strokeBrightness, strokeSaturation, textBrightness, textSaturation, _ref, _ref1, _ref2;

    seed = 1;
    _ref = [30, 96], bgSaturation = _ref[0], bgBrightness = _ref[1];
    _ref1 = [60, 40], textSaturation = _ref1[0], textBrightness = _ref1[1];
    _ref2 = [70, 70], strokeSaturation = _ref2[0], strokeBrightness = _ref2[1];
    return {
      codeToHue: function(code) {
        return murmurhash(code, seed) % 360;
      },
      hueToRGBs: function(hue) {
        return {
          text: hsvToRgb(hue, textSaturation, textBrightness),
          stroke: hsvToRgb(hue, strokeSaturation, strokeBrightness),
          background: hsvToRgb(hue, bgSaturation, bgBrightness)
        };
      },
      codeToRGBs: function(code) {
        return this.hueToRGBs(this.codeToHue(code));
      },
      injectStyleSheet: function(codes) {
        var background, code, css, index, stroke, text;

        css = (function() {
          var _i, _len, _ref3, _results;

          _results = [];
          for (index = _i = 0, _len = codes.length; _i < _len; index = ++_i) {
            code = codes[index];
            _ref3 = this.codeToRGBs(code), text = _ref3.text, background = _ref3.background, stroke = _ref3.stroke;
            _results.push(".contextCode-" + code + " {\n  color: rgb(" + (text.join(' ,')) + ");\n  background-color: rgb(" + (background.join(' ,')) + ");\n  border-color: rgb(" + (stroke.join(' ,')) + ");\n}\n");
          }
          return _results;
        }).call(this);
        return $('<div/>').html("<style>" + (css.join('')) + "</style>").appendTo(document.body);
      }
    };
  });

}).call(this);
