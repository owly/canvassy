define('jst/contexts/PageView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['contexts/PageView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <a href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.truncatedURL;
  stack1 = foundHelper || depth0.truncatedURL;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "truncatedURL", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  foundHelper = helpers.truncatedURL;
  stack1 = foundHelper || depth0.truncatedURL;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "truncatedURL", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n    ";
  return buffer;}

function program5(depth0,data) {
  
  
  return "<img src=\"/images/checked.png\" width=12 />";}

  buffer += "<tr>\n\n  <td>\n    ";
  foundHelper = helpers.isLinkable;
  stack1 = foundHelper || depth0.isLinkable;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </td>\n\n  <td>";
  stack1 = "date_at_time";
  foundHelper = helpers.created_at;
  stack2 = foundHelper || depth0.created_at;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.participated;
  stack1 = foundHelper || depth0.participated;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  <td>";
  foundHelper = helpers.readableInteractionTime;
  stack1 = foundHelper || depth0.readableInteractionTime;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "readableInteractionTime", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td title=\"";
  foundHelper = helpers.user_agent;
  stack1 = foundHelper || depth0.user_agent;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_agent", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"user_agent\">";
  foundHelper = helpers.summarizedUserAgent;
  stack1 = foundHelper || depth0.summarizedUserAgent;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "summarizedUserAgent", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n</tr>\n\n";
  return buffer;});
  
  
  return templates['contexts/PageView'];
});
