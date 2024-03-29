(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'jst/quizzes/fileUploadQuestionState', 'jst/quizzes/fileUploadedOrRemoved', 'underscore', 'jquery.instructure_forms', 'jquery.disableWhileLoading'], function(_arg, $, template, uploadedOrRemovedTemplate, _) {
    var FileUploadQuestion, View, _ref;

    View = _arg.View;
    return FileUploadQuestion = (function(_super) {
      __extends(FileUploadQuestion, _super);

      function FileUploadQuestion() {
        this.deleteAttachment = __bind(this.deleteAttachment, this);
        this.processAttachment = __bind(this.processAttachment, this);
        this.removeFileStatusMessage = __bind(this.removeFileStatusMessage, this);
        this.render = __bind(this.render, this);
        this.openFileBrowser = __bind(this.openFileBrowser, this);
        this.checkForFileChange = __bind(this.checkForFileChange, this);        _ref = FileUploadQuestion.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FileUploadQuestion.prototype.els = {
        '.file-upload': '$fileUpload',
        '.file-upload-btn': '$fileDialogButton',
        '.attachment-id': '$attachmentID',
        '.file-upload-box': '$fileUploadBox'
      };

      FileUploadQuestion.prototype.events = {
        'change input[type=file]': 'checkForFileChange',
        'click .file-upload-btn': 'openFileBrowser',
        'click .delete-attachment': 'deleteAttachment'
      };

      FileUploadQuestion.prototype.checkForFileChange = function(event) {
        var dfrd, val;

        event.preventDefault();
        event.stopPropagation();
        if (val = this.$fileUpload.val()) {
          this.removeFileStatusMessage();
          this.model.set('file', this.$fileUpload[0]);
          dfrd = this.model.save(null, {
            success: this.processAttachment
          });
          return this.$fileUploadBox.disableWhileLoading(dfrd);
        }
      };

      FileUploadQuestion.prototype.openFileBrowser = function(event) {
        event.preventDefault();
        return this.$fileUpload.click();
      };

      FileUploadQuestion.prototype.render = function() {
        var isIE;

        FileUploadQuestion.__super__.render.apply(this, arguments);
        isIE = !!$.browser.msie;
        if (isIE) {
          this.$fileUpload.remove();
        }
        this.$fileUploadBox.html(template(_.extend({}, this.model.present(), {
          isIE: isIE
        })));
        return this;
      };

      FileUploadQuestion.prototype.removeFileStatusMessage = function() {
        return this.$fileUploadBox.siblings('.file-status').remove();
      };

      FileUploadQuestion.prototype.processAttachment = function(attachment) {
        this.$attachmentID.val(this.model.id).trigger('change');
        this.$fileUploadBox.addClass('file-upload-box-with-file');
        this.render();
        return this.$fileUploadBox.parent().append(uploadedOrRemovedTemplate(_.extend({}, this.model.present(), {
          fileUploaded: true
        })));
      };

      FileUploadQuestion.prototype.deleteAttachment = function(event) {
        var oldModel;

        event.preventDefault();
        this.$attachmentID.val("").trigger('change');
        this.$fileUploadBox.removeClass('file-upload-box-with-file');
        oldModel = this.model.present();
        this.model.clear();
        this.removeFileStatusMessage();
        this.render();
        return this.$fileUploadBox.parent().append(uploadedOrRemovedTemplate(oldModel));
      };

      return FileUploadQuestion;

    })(View);
  });

}).call(this);
