define('jst/ExternalTools/RateToolView', ["compiled/handlebars_helpers","i18n!external_tools.rate_tool_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/RateToolView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<fieldset class=\"rate_app_wrapper\">\n  <div class=\"row-fluid\">\n    <h5 class=\"span12\">";
  stack1 = "How do you rate this tool?";
  stack2 = "rate_tool";
  stack3 = {};
  stack4 = "external_tools.rate_tool_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div id=\"rate-app-star\" class=\"pull-right\"></div>\n    </h5>\n  </div>\n  <div class=\"row-fluid\">\n    <textarea name=\"review_text\" class=\"span12\" rows=\"6\"></textarea>\n  </div>\n</fieldset>";
  return buffer;});
  
  
  return templates['ExternalTools/RateToolView'];
});
