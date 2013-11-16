(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'jst/content_migrations/MigrationConverter', 'compiled/views/ValidatedFormView', 'vendor/jquery.ba-tinypubsub', 'jquery.disableWhileLoading'], function($, _, template, ValidatedFormView) {
    var MigrationConverterView, _ref;

    return MigrationConverterView = (function(_super) {
      __extends(MigrationConverterView, _super);

      function MigrationConverterView() {
        _ref = MigrationConverterView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MigrationConverterView.optionProperty('selectOptions');

      MigrationConverterView.prototype.template = template;

      MigrationConverterView.prototype.els = {
        '#converter': '$converter',
        '#chooseMigrationConverter': '$chooseMigrationConverter',
        '.form-container': '$formActions'
      };

      MigrationConverterView.prototype.events = _.extend({}, MigrationConverterView.prototype.events, {
        'change #chooseMigrationConverter': 'selectConverter',
        'click .cancelBtn': 'resetForm'
      });

      MigrationConverterView.prototype.toJSON = function(json) {
        json = MigrationConverterView.__super__.toJSON.apply(this, arguments);
        json.selectOptions = this.selectOptions || ENV.SELECT_OPTIONS;
        return json;
      };

      MigrationConverterView.prototype.renderConverter = function(converter) {
        if (converter) {
          converter.setElement(this.$converter);
          return converter.render();
        } else {
          return this.resetForm();
        }
      };

      MigrationConverterView.prototype.selectConverter = function(event) {
        this.$formActions.show();
        this.model.resetModel();
        this.model.set('migration_type', this.$chooseMigrationConverter.val());
        return $.publish('contentImportChange', {
          value: this.$chooseMigrationConverter.val(),
          migrationConverter: this
        });
      };

      MigrationConverterView.prototype.submit = function(event) {
        var dfd,
          _this = this;

        dfd = MigrationConverterView.__super__.submit.apply(this, arguments);
        return dfd != null ? dfd.done(function() {
          $.publish('migrationCreated', _this.model.attributes);
          _this.model.resetModel();
          return _this.resetForm();
        }) : void 0;
      };

      MigrationConverterView.prototype.resetForm = function() {
        this.$formActions.hide();
        this.$converter.empty();
        return this.$chooseMigrationConverter.val('none');
      };

      return MigrationConverterView;

    })(ValidatedFormView);
  });

}).call(this);
