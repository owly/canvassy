define('jst/calendar/TimeBlockRow', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/TimeBlockRow'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "class=\"locked\"";}

function program3(depth0,data) {
  
  
  return " disabled";}

function program5(depth0,data) {
  
  
  return " disabled";}

function program7(depth0,data) {
  
  
  return " disabled";}

function program9(depth0,data) {
  
  
  return "\n      <a href=\"#\" class=\"delete-block-link icon-end\"></a>\n    ";}

  buffer += "<tr ";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <td class=\"date-column\"><input name=\"date\" class=\"date_field\" value=\"";
  stack1 = "medium_with_weekday";
  foundHelper = helpers.start;
  stack2 = foundHelper || depth0.start;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\"";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\"/></td>\n  <td class=\"start-time-column\"><input name=\"start_time\" class=\"time_field start_time\" value=\"";
  stack1 = "tiny";
  foundHelper = helpers.start;
  stack2 = foundHelper || depth0.start;
  foundHelper = helpers.tTimeToString;
  stack3 = foundHelper || depth0.tTimeToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tTimeToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\"";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\"/></td>\n  <td class=\"separator-column\">-</td>\n  <td class=\"end-time-column\"><input name=\"end_time\" class=\"time_field end_time\" value=\"";
  stack1 = "tiny";
  foundHelper = helpers.end;
  stack2 = foundHelper || depth0.end;
  foundHelper = helpers.tTimeToString;
  stack3 = foundHelper || depth0.tTimeToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tTimeToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\"";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\"/></td>\n  <td class=\"delete-column\">\n    ";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers.unless;
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </td>\n</tr>\n";
  return buffer;});
  
  
  return templates['calendar/TimeBlockRow'];
});
