(function() {
  define(['underscore', 'i18n!editor', 'jquery', 'Backbone', 'compiled/fn/preventDefault', 'tinymce.editor_box'], function(_, I18n, $, Backbone, preventDefault) {
    var EditorToggle;

    EditorToggle = (function() {
      EditorToggle.prototype.options = {
        doneText: I18n.t('done_as_in_finished', 'Done'),
        switchViews: false
      };

      function EditorToggle(elem, options) {
        this.editingElement(elem);
        this.options = $.extend({}, this.options, options);
        this.textArea = this.createTextArea();
        if (this.options.switchViews) {
          this.switchViews = this.createSwitchViews();
        }
        this.done = this.createDone();
        this.content = this.getContent();
        this.editing = false;
      }

      EditorToggle.prototype.toggle = function() {
        if (!this.editing) {
          return this.edit();
        } else {
          return this.display();
        }
      };

      EditorToggle.prototype.edit = function() {
        var opts;

        this.textArea.val(this.getContent());
        this.textArea.insertBefore(this.el);
        this.el.detach();
        if (this.options.switchViews) {
          this.switchViews.insertBefore(this.textArea);
        }
        this.done.insertAfter(this.textArea);
        if (this.options.editorBoxLabel) {
          opts = {
            tinyOptions: {
              aria_label: this.options.editorBoxLabel
            }
          };
        }
        this.textArea.editorBox(opts);
        this.editing = true;
        return this.trigger('edit');
      };

      EditorToggle.prototype.display = function(opts) {
        if (!(opts != null ? opts.cancel : void 0)) {
          this.content = this.textArea._justGetCode();
          this.textArea.val(this.content);
          this.el.html(this.content);
        }
        this.el.insertBefore(this.textArea);
        this.textArea._removeEditor();
        this.textArea.detach();
        if (this.options.switchViews) {
          this.switchViews.detach();
        }
        this.done.detach();
        this.textArea.attr('id', '');
        this.editing = false;
        return this.trigger('display');
      };

      EditorToggle.prototype.editingElement = function(elem) {
        return this.el = elem;
      };

      EditorToggle.prototype.getContent = function() {
        return $.trim(this.el.html());
      };

      EditorToggle.prototype.createTextArea = function() {
        return $('<textarea/>').css({
          width: '100%',
          minHeight: '110px'
        }).addClass('editor-toggle');
      };

      EditorToggle.prototype.createDone = function() {
        var _this = this;

        return $('<a/>').html(this.options.doneText).attr('href', '#').addClass('btn edit-html-done edit_html_done').attr('title', I18n.t('done.title', 'Click to finish editing the rich text area')).click(preventDefault(function() {
          return _this.display();
        }));
      };

      EditorToggle.prototype.createSwitchViews = function() {
        var _this = this;

        return $('<a/>', {
          style: "float: right",
          href: "#"
        }).text(I18n.t('switch_views', 'Switch Views')).click(preventDefault(function() {
          return _this.textArea.editorBox('toggle');
        }));
      };

      return EditorToggle;

    })();
    _.extend(EditorToggle.prototype, Backbone.Events);
    return EditorToggle;
  });

}).call(this);
