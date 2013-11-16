define('jst/content_migrations/subviews/OverwriteAssessmentContent', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.overwrite_assessment_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/OverwriteAssessmentContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<label class=\"checkbox\" for=\"overwriteAssessmentContent\">\n  <input type=\"checkbox\" id=\"overwriteAssessmentContent\" />\n    ";
  stack1 = "Overwrite assessment content with matching IDs";
  stack2 = "overwrite_assessment_content";
  stack3 = {};
  stack4 = "content_migrations.subviews.overwrite_assessment_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</label>\n";
  return buffer;});
  
  
  return templates['content_migrations/subviews/OverwriteAssessmentContent'];
});
