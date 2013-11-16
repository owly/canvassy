define('jst/_turnitinScore', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['_turnitinScore'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <img src=\"";
  foundHelper = helpers.icon;
  stack1 = foundHelper || depth0.icon;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "icon", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></img>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  foundHelper = helpers.score;
  stack1 = foundHelper || depth0.score;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  ";
  return buffer;}

  buffer += "<span class=\"turnitin_score_container_caret ";
  foundHelper = helpers.state;
  stack1 = foundHelper || depth0.state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "state", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span>\n<a class=\"turnitin_similarity_score ";
  foundHelper = helpers.state;
  stack1 = foundHelper || depth0.state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "state", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" href=\"";
  foundHelper = helpers.reportUrl;
  stack1 = foundHelper || depth0.reportUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "reportUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.tooltip;
  stack1 = foundHelper || depth0.tooltip;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tooltip", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">\n  ";
  foundHelper = helpers.icon;
  stack1 = foundHelper || depth0.icon;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;});
  
Handlebars.registerPartial('turnitinScore', templates['_turnitinScore']);

  
  return templates['_turnitinScore'];
});
