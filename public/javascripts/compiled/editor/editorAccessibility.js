(function() {
  define(['i18n!editor_accessibility', 'jquery'], function(I18n, $) {
    var EditorAccessiblity;

    return EditorAccessiblity = (function() {
      function EditorAccessiblity(editor) {
        this.id_prepend = editor.editorId;
        this.$el = $("#" + editor.editorContainer);
      }

      EditorAccessiblity.prototype.accessiblize = function() {
        this._cacheElements();
        this._addTitles();
        return this._addLabels();
      };

      /* PRIVATE FUNCTIONS
      */


      EditorAccessiblity.prototype._cacheElements = function() {
        return this.$iframe = this.$el.find(".mceIframeContainer iframe");
      };

      EditorAccessiblity.prototype._addLabels = function() {
        this.$el.find("#" + this.id_prepend + "_fontsizeselect_voiceDesc").text(I18n.t('titles.font_size', "Font Size, press down to select"));
        this.$el.find("#" + this.id_prepend + "_formatselect_voiceDesc").text(I18n.t('titles.formatting', "Formatting, press down to select"));
        this.$el.find("#" + this.id_prepend + "_forecolor_voice").text(I18n.t('accessibles.forecolor', "Text Color, press down to select"));
        this.$el.find("#" + this.id_prepend + "_backcolor_voice").text(I18n.t('accessibles.background_color', "Background Color, press down to select"));
        this.$el.find("#" + this.id_prepend + "_instructure_record").attr('aria-disabled', 'true');
        this.$el.find("#" + this.id_prepend + "_instructure_record").removeAttr('role');
        this.$el.find("#" + this.id_prepend + "_instructure_record_voice").append('<br/>').append(I18n.t('accessibles.record', 'This feature is inaccessible for screen readers.'));
        return this.$el.find("#" + this.id_prepend + "_instructure_record img").attr('alt', this.$el.find("#" + this.id_prepend + "_instructure_record img").attr('alt') + ", " + I18n.t('accessibles.record', 'This feature is inaccessible for screen readers.'));
      };

      EditorAccessiblity.prototype._addTitles = function() {
        return this.$iframe.attr('title', I18n.t('titles.rte_help', 'Rich Text Area. Press ALT F10 for toolbar. Press ALT 0 for help.'));
      };

      return EditorAccessiblity;

    })();
  });

}).call(this);
