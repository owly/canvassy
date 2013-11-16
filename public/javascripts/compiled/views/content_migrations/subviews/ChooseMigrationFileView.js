(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/subviews/ChooseMigrationFile'], function(Backbone, template) {
    var ChooseMigrationFile, _ref;

    return ChooseMigrationFile = (function(_super) {
      __extends(ChooseMigrationFile, _super);

      function ChooseMigrationFile() {
        _ref = ChooseMigrationFile.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ChooseMigrationFile.prototype.template = template;

      ChooseMigrationFile.prototype.els = {
        '#migrationFileUpload': '$migrationFileUpload'
      };

      ChooseMigrationFile.prototype.events = {
        'change #migrationFileUpload': 'setAttributes'
      };

      ChooseMigrationFile.optionProperty('fileSizeLimit');

      ChooseMigrationFile.prototype.setAttributes = function(event) {
        var fileElement, filename;

        filename = event.target.value.replace(/^.*\\/, '');
        fileElement = this.$migrationFileUpload[0];
        return this.model.set('pre_attachment', {
          file_size: this.fileSize(fileElement),
          name: filename,
          fileElement: fileElement
        });
      };

      ChooseMigrationFile.prototype.fileSize = function(fileElement) {
        return fileElement.files[0].size;
      };

      ChooseMigrationFile.prototype.validations = function() {
        var errors, fileElement, fileErrors, preAttachment;

        errors = {};
        preAttachment = this.model.get('pre_attachment');
        fileErrors = [];
        fileElement = preAttachment != null ? preAttachment.fileElement : void 0;
        if (!((preAttachment != null ? preAttachment.name : void 0) && fileElement)) {
          fileErrors.push({
            type: "required",
            message: "You must select a file to import content from"
          });
        }
        if ((fileElement != null ? fileElement.files[0].size : void 0) > this.fileSizeLimit) {
          fileErrors.push({
            type: "upload_limit_exceeded",
            message: "You're migration cannot exceed " + (this.humanReadableSize(this.fileSizeLimit))
          });
        }
        if (fileErrors.length) {
          errors.file = fileErrors;
        }
        return errors;
      };

      ChooseMigrationFile.prototype.humanReadableSize = function(size) {
        var i, units;

        size = parseFloat(size);
        units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        i = 0;
        while (size >= 1024) {
          size /= 1024;
          ++i;
        }
        return size.toFixed(1) + ' ' + units[i];
      };

      return ChooseMigrationFile;

    })(Backbone.View);
  });

}).call(this);
