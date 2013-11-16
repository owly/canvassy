define('jst/ExternalTools/IndexView', ["compiled/handlebars_helpers","i18n!external_tools.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<h2 class=\"page-header\">";
  stack1 = "External Apps";
  stack2 = "app_headder";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <button class=\"btn view_tools_link lm pull-right\">\n    ";
  stack1 = "View Installed Apps";
  stack2 = "view_installed_tools";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button class=\"btn view_app_center_link lm pull-right\">\n    ";
  stack1 = "View App Center";
  stack2 = "view_app_center";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button class=\"btn btn-primary add_tool_link lm pull-right\">\n    ";
  stack1 = "Add New App";
  stack2 = "add_new_tool";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n\n  <input type=\"text\" id=\"app_center_filter\" class=\"input-large search-query pull-right\" placeholder=\"";
  stack1 = "Filter by name";
  stack2 = "search_filter";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n</h2>\n\n<p class=\"well well-small\">\n  ";
  stack1 = "Apps are an easy way to add new features to Canvas. They can be added to individual courses, or to all courses in an account. Once configured, you can link to them through course modules and create assignments for assessment tools.";
  stack2 = "external_tools_note";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br/><br/>";
  stack1 = "Click *here* to see some LTI tools that work great with Canvas. You can also check out the Canvas Community topics about LTI tools **here**";
  stack2 = "external_tools_references";
  stack3 = {};
  stack4 = "external_tools.index_view";
  stack3['scope'] = stack4;
  stack4 = "<a href=\"https://www.edu-apps.org\">$1</a>";
  stack3['w0'] = stack4;
  stack4 = "<a href=\"http://help.instructure.com/entries/20878626-lti-tools-and-examples\"> $1</a>";
  stack3['w1'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n\n<div data-view=\"appCenter\"></div>\n<div data-view=\"externalTools\"></div>\n<div data-view=\"appFull\"></div>\n";
  return buffer;});
  
  
  return templates['ExternalTools/IndexView'];
});
