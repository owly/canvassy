define('jst/wiki/_wiki_page_buttons', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_buttons"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/_wiki_page_buttons'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div id=\"wiki_page_buttons\" class=\"clearfix\">\n  <div id=\"pages-toolbar-right-buttons\" style=\"float:right;\">\n    <button class=\"btn btn-primary new_page\">";
  stack1 = "New Page";
  stack2 = "buttons.new_page";
  stack3 = {};
  stack4 = "wiki.wiki_page_buttons";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</div>\n";
  return buffer;});
  
Handlebars.registerPartial('wiki/wiki_page_buttons', templates['wiki/_wiki_page_buttons']);

  
  return templates['wiki/_wiki_page_buttons'];
});
