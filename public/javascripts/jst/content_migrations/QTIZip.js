define('jst/content_migrations/QTIZip', ["compiled/handlebars_helpers","i18n!content_migrations.qti_zip"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/QTIZip'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"control-group chooseMigrationFile\"></div>\n<div class=\"control-group options\">\n  <label class=\"control-label\"><strong>";
  stack1 = "Options";
  stack2 = "options";
  stack3 = {};
  stack4 = "content_migrations.qti_zip";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n  <div class=\"controls overwriteAssessmentContent\"></div>\n</div>\n<div class=\"control-group selectQuestionBank\"></div>\n";
  return buffer;});
  
  
  return templates['content_migrations/QTIZip'];
});
