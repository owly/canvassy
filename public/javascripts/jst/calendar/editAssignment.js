define('jst/calendar/editAssignment', ["compiled/handlebars_helpers","i18n!calendar.edit_assignment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editAssignment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n              ";
  foundHelper = helpers.can_create_assignments;
  stack1 = foundHelper || depth0.can_create_assignments;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <option value=\"";
  foundHelper = helpers.asset_string;
  stack1 = foundHelper || depth0.asset_string;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "asset_string", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n              ";
  return buffer;}

  buffer += "<form action='#' id='edit_assignment_form' style='padding: 5px; width: 400px'>\n  <div class=\"event-details-content\">\n    <table class=\"formtable\" style=\"width: 100%;\">\n      <tr>\n        <td><label for=\"assignment_title\">";
  stack1 = "Title:";
  stack2 = "title";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input id=\"assignment_title\" name=\"assignment[title]\" size=\"30\" maxlength=\"255\" style=\"width: 200px;\" type=\"text\" value=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"/></td>\n      </tr>\n      <tr>\n        <td><label for=\"assignment_due_at\">";
  stack1 = "Due:";
  stack2 = "due";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td>\n          <input class=\"datetime_field\" id=\"assignment_due_at\" name=\"assignment[due_at]\" size=\"30\" style=\"width: 150px;\" type=\"text\"/>\n        </td>\n      </tr>\n      <tr class=\"context_select\">\n        <td><label for=\"assignment_context\">";
  stack1 = "Calendar:";
  stack2 = "calendar";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td>\n          <select id=\"assignment_context\" class=\"context_id\">\n            ";
  foundHelper = helpers.contexts;
  stack1 = foundHelper || depth0.contexts;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td><label for=\"assignment_group\">";
  stack1 = "Group:";
  stack2 = "group";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td class=\"assignment_group_select\">\n          <select id=\"assignment_group\" class=\"assignment_group\" name=\"assignment[assignment_group_id]\" aria-label=\"";
  stack1 = "Group:";
  stack2 = "group";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <option value=\"new\">[ New Group ]</option>\n          </select>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"popover-links-holder event-details-footer\">\n    <button type=\"submit\" class=\"event_button btn btn-primary pull-right\">";
  stack1 = "Submit";
  stack2 = "#buttons.submit";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <a href=\"#\" class=\"event_button btn btn-secondary pull-right more_options_link\">";
  stack1 = "More Options";
  stack2 = "links.more_options";
  stack3 = {};
  stack4 = "calendar.edit_assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['calendar/editAssignment'];
});
