define('jst/assignments/homework_submission_tool', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/homework_submission_tool'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <img style=\"max-width: 25px; max-height: 25px;\" src='";
  foundHelper = helpers.homework_submission;
  stack1 = foundHelper || depth0.homework_submission;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.icon_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "homework_submission.icon_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      ";
  foundHelper = helpers.icon_url;
  stack1 = foundHelper || depth0.icon_url;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img style=\"max-width: 25px; max-height: 25px;\" src='";
  foundHelper = helpers.icon_url;
  stack1 = foundHelper || depth0.icon_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "icon_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n      ";
  return buffer;}

function program6(depth0,data) {
  
  
  return "\n        <img src='/images/link.png'/>\n      ";}

  buffer += "<li class='tool'>\n  <a href='#'>\n    ";
  foundHelper = helpers.homework_submission;
  stack1 = foundHelper || depth0.homework_submission;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.icon_url);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  foundHelper = helpers.display_text;
  stack1 = foundHelper || depth0.display_text;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  </a>\n</li>";
  return buffer;});
  
  
  return templates['assignments/homework_submission_tool'];
});
