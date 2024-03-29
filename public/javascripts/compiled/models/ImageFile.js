(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['i18n!images', 'underscore', 'compiled/models/File', 'use!vendor/FileAPI/FileAPI.min'], function(I18n, _, File, FileAPI) {
    var ImageFile, _ref;

    return ImageFile = (function(_super) {
      __extends(ImageFile, _super);

      function ImageFile() {
        this.present = __bind(this.present, this);
        this.save = __bind(this.save, this);        _ref = ImageFile.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ImageFile.prototype.initialize = function(attrs, options) {
        var _ref1;

        if (attrs == null) {
          attrs = {};
        }
        if (options == null) {
          options = {};
        }
        this.validations = {
          maxSize: 32000,
          width: 100,
          height: 100,
          types: ["jpeg", "png", "gif"]
        };
        _.extend(this.validations, (_ref1 = options.validations) != null ? _ref1 : {});
        return ImageFile.__super__.initialize.apply(this, arguments);
      };

      ImageFile.prototype.loadFile = function() {
        var dfrd, file,
          _this = this;

        this.valid = false;
        file = FileAPI.getFiles(this.get('file'))[0];
        if (!file) {
          return;
        }
        dfrd = $.Deferred();
        FileAPI.filterFiles([file], function(file, info) {
          return _this.validateFile(file, info, dfrd);
        }, function() {});
        return dfrd.then(function() {
          var args;

          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return _this.trigger.apply(_this, ['loaded'].concat(__slice.call(args)));
        }, function(err) {
          _this.error = err;
          return _this.trigger('load_failed', err);
        });
      };

      ImageFile.prototype.validateFile = function(file, info, dfrd) {
        var type;

        type = file.type.replace(/^image\//, '');
        if (file.type === type) {
          return dfrd.reject(I18n.t("not_an_image", "Selected file is not an image"));
        } else if ((this.validations.types != null) && this.validations.types.indexOf(type) < 0) {
          return dfrd.reject(I18n.t("invalid_file_type", "Invalid file type %{type}. Allowed types include: %{type_list}", {
            type: type,
            type_list: this.validations.types.join(', ')
          }));
        } else if ((this.validations.width != null) && (this.validations.height != null) && (info.width !== this.validations.width || info.height !== this.validations.height)) {
          return dfrd.reject(I18n.t("invalid_dimensions", "Invalid image dimensions (got %{actual}, expected: %{expected})", {
            actual: "" + info.width + "x" + info.height,
            expected: "" + this.validations.width + "x" + this.validations.height
          }));
        } else if (this.validations.maxSize && file.size > this.validations.maxSize) {
          return dfrd.reject(I18n.t("invalid_file_size", "Image file size is too large (max %{max} bytes, got %{actual})", {
            actual: file.size,
            max: this.validations.maxSize
          }));
        } else if (this.validations.backgroundColor) {
          return this.validateBackground(file, info, dfrd);
        } else {
          this.valid = true;
          return dfrd.resolve(file, info);
        }
      };

      ImageFile.prototype.validateBackground = function(file, info, dfrd) {
        var _this = this;

        return FileAPI.Image(file).preview(file.width, file.height).get(function(err, canvas) {
          if (err) {
            return dfrd.reject(I18n.t("error_checking_color", "Error checking image color"));
          } else if (_.any(_this.cornerColors(canvas), function(color) {
            return color !== _this.validations.backgroundColor;
          })) {
            return dfrd.reject(I18n.t("invalid_background_color", "Background color must be %{color}", {
              color: _this.validations.backgroundColor
            }));
          } else {
            _this.valid = true;
            return dfrd.resolve(file, info);
          }
        });
      };

      ImageFile.prototype.cornerColors = function(canvas) {
        var context;

        context = canvas.getContext('2d');
        return [this.rgbToHex.apply(this, context.getImageData(0, 0, 1, 1).data), this.rgbToHex.apply(this, context.getImageData(canvas.width - 1, 0, 1, 1).data), this.rgbToHex.apply(this, context.getImageData(canvas.width - 1, canvas.height - 1, 1, 1).data), this.rgbToHex.apply(this, context.getImageData(0, canvas.height - 1, 1, 1).data)];
      };

      ImageFile.prototype.toHex = function(c) {
        var hex;

        hex = c.toString(16);
        if (hex.length === 1) {
          hex = "0" + hex;
        }
        return hex;
      };

      ImageFile.prototype.rgbToHex = function(r, g, b) {
        return "#" + (this.toHex(r)) + (this.toHex(g)) + (this.toHex(b));
      };

      ImageFile.prototype.save = function() {
        if (this.valid != null) {
          if (this.valid) {
            return ImageFile.__super__.save.apply(this, arguments);
          } else {
            return false;
          }
        } else {
          return this.load().then(this.save);
        }
      };

      ImageFile.prototype.present = function() {
        return _.extend(ImageFile.__super__.present.apply(this, arguments), this.validations, {
          error: this.error,
          valid: this.valid
        });
      };

      return ImageFile;

    })(File);
  });

}).call(this);
