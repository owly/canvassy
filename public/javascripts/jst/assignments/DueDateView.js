define('jst/assignments/DueDateView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/DueDateView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <select class=\"section-list input-small\" name=\"course_section_id\">\n  </select>\n\n  <div class=\"date_field_container\">\n    <input value=\"";
  foundHelper = helpers.due_at;
  stack1 = foundHelper || depth0.due_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\" name=\"due_at\" type=\"text\"\n    class=\"input-small date_field\">\n  </div>\n\n  <div class=\"date_field_container\">\n    <input name=\"unlock_at\" value=\"";
  foundHelper = helpers.unlock_at;
  stack1 = foundHelper || depth0.unlock_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\" type=\"text\"\n    class=\"date_field\">\n  </div>\n\n  <div class=\"date_field_container to\">\n    <input name=\"lock_at\" value=\"";
  foundHelper = helpers.lock_at;
  stack1 = foundHelper || depth0.lock_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\" type=\"text\"\n    class=\"date_field\">\n  </div>\n\n  <div>\n    <a href=\"#\" class=\"remove-link\"><i class=\"icon-end\"></i></a>\n  </div>\n  ";
  return buffer;}

  buffer += "<form>\n  ";
  foundHelper = helpers.assignment_override;
  stack1 = foundHelper || depth0.assignment_override;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</form>\n";
  return buffer;});
  
  
  return templates['assignments/DueDateView'];
});
