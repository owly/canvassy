(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['jquery', 'underscore', 'Backbone', 'jquery.ajaxJSON'], function($, _, _arg) {
    var File, Model, _ref;

    Model = _arg.Model;
    return File = (function(_super) {
      __extends(File, _super);

      function File() {
        this.saveFrd = __bind(this.saveFrd, this);        _ref = File.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      File.prototype.initialize = function(attributes, options) {
        this.preflightUrl = options.preflightUrl;
        return File.__super__.initialize.apply(this, arguments);
      };

      File.prototype.save = function(attrs, options) {
        var dfrd, el, name,
          _this = this;

        if (attrs == null) {
          attrs = {};
        }
        if (options == null) {
          options = {};
        }
        this.set(attrs);
        dfrd = $.Deferred();
        el = this.get('file');
        name = (el.value || el.name).split(/[\/\\]/).pop();
        $.ajaxJSON(this.preflightUrl, 'POST', {
          name: name,
          on_duplicate: 'rename'
        }, function(data) {
          return _this.saveFrd(data, dfrd, el, options);
        }, function(error) {
          dfrd.reject(error);
          return typeof options.error === "function" ? options.error(error) : void 0;
        });
        return dfrd;
      };

      File.prototype.saveFrd = function(data, dfrd, el, options) {
        var _this = this;

        this.uploadParams = data.upload_params;
        this.set(this.uploadParams);
        el.name = data.file_param;
        this.url = function() {
          return data.upload_url;
        };
        return Model.prototype.save.call(this, null, {
          multipart: true,
          success: function(data) {
            dfrd.resolve(data);
            return typeof options.success === "function" ? options.success(data) : void 0;
          },
          error: function(error) {
            dfrd.reject(error);
            return typeof options.error === "function" ? options.error(error) : void 0;
          }
        });
      };

      File.prototype.toJSON = function() {
        var _ref1;

        return _.pick.apply(_, [this.attributes, 'file'].concat(__slice.call(_.keys((_ref1 = this.uploadParams) != null ? _ref1 : {}))));
      };

      File.prototype.present = function() {
        return _.clone(this.attributes);
      };

      return File;

    })(Model);
  });

}).call(this);
