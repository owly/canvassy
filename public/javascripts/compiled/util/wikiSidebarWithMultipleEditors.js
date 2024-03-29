(function() {
  define(['wikiSidebar', 'tinymce.editor_box', 'compiled/tinymce'], function(wikiSidebar) {
    $.subscribe('editorBox/focus', function($editor) {
      if (!wikiSidebar.inited) {
        wikiSidebar.init();
      }
      wikiSidebar.show();
      return wikiSidebar.attachToEditor($editor);
    });
    return $.subscribe('editorBox/removeAll', function() {
      return wikiSidebar.hide();
    });
  });

}).call(this);
