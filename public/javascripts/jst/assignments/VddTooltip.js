define('jst/assignments/VddTooltip', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/VddTooltip'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "href=\"";
  foundHelper = helpers.link_href;
  stack1 = foundHelper || depth0.link_href;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "link_href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"clearfix\">\n        <dt>";
  foundHelper = helpers.due_for;
  stack1 = foundHelper || depth0.due_for;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "due_for", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dt>\n        <dd>";
  foundHelper = helpers.due_at;
  stack1 = foundHelper || depth0.due_at;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "due_at", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dd>\n      </div>\n    ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"clearfix\">\n        <dd>";
  foundHelper = helpers.more_message;
  stack1 = foundHelper || depth0.more_message;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "more_message", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dd>\n      </div>\n    ";
  return buffer;}

  buffer += "<a title class=\"vdd_tooltip_link\"\n  data-tooltip-selector=\"#vdd_tooltip_";
  foundHelper = helpers.selector;
  stack1 = foundHelper || depth0.selector;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selector", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n  ";
  foundHelper = helpers.link_href;
  stack1 = foundHelper || depth0.link_href;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  >";
  foundHelper = helpers.link_text;
  stack1 = foundHelper || depth0.link_text;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "link_text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n\n<div id=\"vdd_tooltip_";
  foundHelper = helpers.selector;
  stack1 = foundHelper || depth0.selector;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selector", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" style=\"display:none;\">\n  <dl class=\"vdd_tooltip_content dl-horizontal\">\n    ";
  foundHelper = helpers.due_dates;
  stack1 = foundHelper || depth0.due_dates;
  stack2 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  foundHelper = helpers.more_message;
  stack1 = foundHelper || depth0.more_message;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </dl>\n</div>";
  return buffer;});
  
  
  return templates['assignments/VddTooltip'];
});
