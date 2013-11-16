define('jst/content_migrations/SelectContent', ["compiled/handlebars_helpers","i18n!content_migrations.select_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/SelectContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"form-dialog-content\"></div>\n<div class=\"form-controls\">\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"";
  stack1 = "Select Content";
  stack2 = "select_content_btn";
  stack3 = {};
  stack4 = "content_migrations.select_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"/>\n</div>\n";
  return buffer;});
  
  
  return templates['content_migrations/SelectContent'];
});
