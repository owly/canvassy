define('jst/outcomes/browser', ["compiled/handlebars_helpers","i18n!outcomes.browser"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/browser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"toolbar\">\n    <a href=\"#\" class=\"go_back ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\" style=\"display:none\">\n      ";
  stack1 = "Back";
  stack2 = "links.back";
  stack3 = {};
  stack4 = "outcomes.browser";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n\n    ";
  foundHelper = helpers.canManageOutcomes;
  stack1 = foundHelper || depth0.canManageOutcomes;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <a href=\"#\" class=\"add_outcome_link ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-add\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = "New Outcome";
  stack2 = "links.new_outcome";
  stack3 = {};
  stack4 = "outcomes.browser";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    <a href=\"#\" class=\"add_outcome_group ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-add\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = "New Group";
  stack2 = "links.new_group";
  stack3 = {};
  stack4 = "outcomes.browser";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    <a href=\"#\" class=\"find_outcome ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-search\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = "Find";
  stack2 = "links.find";
  stack3 = {};
  stack4 = "outcomes.browser";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    <a href=\"";
  foundHelper = helpers.contextUrlRoot;
  stack1 = foundHelper || depth0.contextUrlRoot;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "contextUrlRoot", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/rubrics\" class=\"manage_rubrics ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-rubric\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = "Manage Rubrics";
  stack2 = "#buttons.manage_rubrics";
  stack3 = {};
  stack4 = "outcomes.browser";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    ";
  return buffer;}

  buffer += "<div class=\"outcomes-browser content-box\">\n\n  ";
  foundHelper = helpers.skipToolbar;
  stack1 = foundHelper || depth0.skipToolbar;
  stack2 = helpers.unless;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"outcomes-main border border-rbl\">\n    <div class=\"outcomes-sidebar\" role=\"application\">\n      <div class=\"wrapper\"></div>\n    </div>\n    <div class=\"outcomes-content\">\n    </div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['outcomes/browser'];
});
