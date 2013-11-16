define('jst/FileBrowserView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['FileBrowserView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<ul role=\"tree\" class=\"folderTree\"></ul>";});
  
  
arguments[1]('FileBrowserView', ".folderTree, .folderTree ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .folderTree li, .folderTree ul li {\n    margin: 0;\n    padding: 0; }\n.folderTree ul {\n  margin-left: 8px; }\n.folderTree li a {\n  padding: 1px 7px 1px 35px;\n  display: block;\n  background: url(/images/inst_tree/file_types/page_white.png) no-repeat 13px 3px;\n  position: relative; }\n  .folderTree li a.folderLabel {\n    background-image: url(/images/inst_tree/folder.png); }\n    .folderTree li a.folderLabel:before {\n      position: absolute;\n      top: 5px;\n      left: 4px;\n      border: solid transparent;\n      border-width: 5px;\n      border-left-color: #525252;\n      content: ''; }\n    .folderTree li a.folderLabel.expanded:before {\n      left: 0;\n      top: 7px;\n      border-left-color: transparent;\n      border-top-color: #525252; }\n  .folderTree li a.active {\n    background-color: #d6ecfc; }\n.folderTree .preview-thumbnail {\n  margin-left: -23px;\n  max-width: 200px;\n  height: 30px;\n  vertical-align: middle; }\n");

  return templates['FileBrowserView'];
});
