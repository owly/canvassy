(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'jquery', 'Backbone', 'jquery.instructure_forms'], function(_, $, Backbone) {
    var ContentMigration, _ref;

    return ContentMigration = (function(_super) {
      __extends(ContentMigration, _super);

      function ContentMigration() {
        this.addDaySubsitutions = __bind(this.addDaySubsitutions, this);
        this.save = __bind(this.save, this);
        this.urlRoot = __bind(this.urlRoot, this);        _ref = ContentMigration.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContentMigration.prototype.urlRoot = function() {
        return "/api/v1/courses/" + (this.get('course_id')) + "/content_migrations";
      };

      ContentMigration.dynamicDefaults = {};

      ContentMigration.prototype.initialize = function(attributes) {
        ContentMigration.__super__.initialize.apply(this, arguments);
        return this.dynamicDefaults = attributes;
      };

      ContentMigration.prototype.resetModel = function() {
        this.clear();
        this.resetDynamicDefaultCollections();
        return this.set(this.dynamicDefaults);
      };

      ContentMigration.prototype.resetDynamicDefaultCollections = function() {
        return _.each(this.dynamicDefaults, function(value, key, list) {
          var collection, models;

          if (value instanceof Backbone.Collection) {
            collection = value;
            models = collection.map(function(model) {
              return model;
            });
            return _.each(models, function(model) {
              return collection.remove(model);
            });
          }
        });
      };

      ContentMigration.prototype.save = function() {
        var dObject, fileElement,
          _this = this;

        if (!this.get('pre_attachment')) {
          return ContentMigration.__super__.save.apply(this, arguments);
        }
        dObject = $.Deferred();
        fileElement = this.get('pre_attachment').fileElement;
        delete this.get('pre_attachment').fileElement;
        ContentMigration.__super__.save.call(this, null, {
          error: function(xhr) {
            return dObject.rejectWith(_this, xhr.responseText);
          },
          success: function(model, xhr, options) {
            var tempModel;

            tempModel = new Backbone.Model(_this.get('pre_attachment').upload_params);
            tempModel.url = function() {
              return _this.get('pre_attachment').upload_url;
            };
            tempModel.set('attachment', fileElement);
            return tempModel.save(null, {
              multipart: fileElement,
              success: function(model, xhr) {
                if (xhr.message) {
                  return dObject.rejectWith(_this, xhr.message);
                }
                return _this.fetch({
                  success: function() {
                    return dObject.resolve();
                  }
                });
              },
              error: function(message) {
                return dObject.rejectWith(_this, message);
              }
            });
          }
        });
        return dObject;
      };

      ContentMigration.prototype.toJSON = function() {
        var json;

        json = ContentMigration.__super__.toJSON.apply(this, arguments);
        this.addDaySubsitutions(json);
        return json;
      };

      ContentMigration.prototype.addDaySubsitutions = function(json) {
        var collection;

        collection = this.get('daySubCollection');
        json.date_shift_options || (json.date_shift_options = {});
        if (collection) {
          return json.date_shift_options.day_substitutions = collection.toJSON();
        }
      };

      ContentMigration.prototype.setDateShiftOptions = function(_arg) {
        var date_data, property, silent, value;

        value = _arg.value, property = _arg.property, silent = _arg.silent;
        date_data = this.get('date_shift_options') || {};
        date_data[property] = value;
        return this.set('date_shift_options', date_data, {
          silent: silent
        });
      };

      return ContentMigration;

    })(Backbone.Model);
  });

}).call(this);
