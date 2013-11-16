define('jst/calendar/editAppointmentGroup', ["compiled/handlebars_helpers","i18n!calendar.edit_appointment_group"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editAppointmentGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "checked";}

function program3(depth0,data) {
  
  
  return " ";}

function program5(depth0,data) {
  
  
  return " style=\"display:none;\" ";}

function program7(depth0,data) {
  
  
  return " style=\"display:none;\" ";}

  buffer += "<form action='#' id='edit_appointment_form'>\n  <div class=\"left-column-wrapper\">\n    <p>\n      <b>";
  stack1 = "Name";
  stack2 = "name";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><br />\n      <input type=\"text\" name=\"title\" value=\"";
  foundHelper = helpers.appointment_group;
  stack1 = foundHelper || depth0.appointment_group;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.title);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "appointment_group.title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    </p>\n    <p>\n      <b>";
  stack1 = "Location";
  stack2 = "location";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><br />\n      <input type=\"text\" name=\"location\" value=\"";
  foundHelper = helpers.appointment_group;
  stack1 = foundHelper || depth0.appointment_group;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.location_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "appointment_group.location_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    </p>\n    <div class=\"select-calendar-container\">\n      <b>";
  stack1 = "Calendar";
  stack2 = "calendar";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><br />\n      <button class=\"btn ag_contexts_selector\"></button>\n      <div class=\"ag-menu-container\"></div>\n    </div>\n    <p>\n      <input type=\"checkbox\" class=\"group-signup-checkbox\" id=\"group-signup-checkbox\" name=\"use_group_signup\" value=\"1\" ";
  stack1 = "Group";
  foundHelper = helpers.participant_type;
  stack2 = foundHelper || depth0.participant_type;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      <label for=\"group-signup-checkbox\">";
  stack1 = "Have students sign up in groups.";
  stack2 = "group_signup";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    </p>\n    <div class=\"group-signup\" style=\"display: none\">\n      <b>";
  stack1 = "Group Category";
  stack2 = "group_category";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><br />\n      <div class=\"group_select\">\n        <select name=\"group_category_id\"></select>\n      </div>\n    </div>\n  </div>\n  <div class=\"right-column-wrapper\">\n    <div class=\"time-block-list-wrapper\">\n      <div class=\"time-block-list\">\n        <table class=\"time-block-list-header\">\n          <tr>\n            <th class=\"date-column\">";
  stack1 = "Date";
  stack2 = "date";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n            <th class=\"time-range-column\" colspan=\"4\">";
  stack1 = "Time Range";
  stack2 = "time_range";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          </tr>\n        </table>\n        <div class=\"time-block-list-body-wrapper form-inline\">\n          <table class=\"time-block-list-body\"></table>\n        </div>\n        <div class=\"splitter\">\n          <p>\n            <a class=\"split-link btn\" href=\"#\">Split</a>into slots of <input type=\"number\" name=\"duration\" value=\"30\" style=\"width: 40px\" /> minutes each.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div style=\"margin-top: 1.5em\">\n      <div id=\"options_help_dialog\" style=\"display: none;\">\n        <p>";
  stack1 = "Some existing reservations are over the limit you have added. These will not be affected, this change only prevents new reservations from being made.";
  stack2 = "appt_group_options_help1";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n        <p>";
  stack1 = "You can, however, manually remove any existing reservations.";
  stack2 = "appt_group_options_help2";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      </div>\n      <b>Options</b>\n      <ul class=\"ag-options\">\n        <li>\n          <input type=\"checkbox\" id=\"appointment-blocks-per-slot-option-button\" name=\"per_slot_option\" value=\"1\" />\n          <label for=\"appointment-blocks-per-slot-option-button\">Limit each time slot to</label>\n          <input type=\"number\" name=\"participants_per_appointment\" value=\"";
  foundHelper = helpers.appointment_group;
  stack1 = foundHelper || depth0.appointment_group;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.participants_per_appointment);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "appointment_group.participants_per_appointment", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" min=\"1\" style=\"width: 40px;\" />\n          <label for=\"appointment-blocks-per-slot-option-button\">\n            <span ";
  stack1 = "Group";
  foundHelper = helpers.participant_type;
  stack2 = foundHelper || depth0.participant_type;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"per_appointment_groups_label\">groups.</span>\n            <span ";
  stack1 = "Group";
  foundHelper = helpers.participant_type;
  stack2 = foundHelper || depth0.participant_type;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"per_appointment_users_label\">users.</span>\n          </label>\n          <a href=\"#\" class=\"reservation_help hidden\" title=\"";
  stack1 = "How will this affect reservations?";
  stack2 = "affect_reservations";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <img alt=\"Help\" src=\"/images/help.png\">\n          </a>\n        </li>\n        <li>\n          <label for=\"appointment-blocks-participant-visibility-button\"><input type=\"checkbox\" id=\"appointment-blocks-participant-visibility-button\" name=\"participant_visibility\" value=\"1\" /> Allow students to see who has signed up for time slots.</label>\n        </li>\n        <li>\n          <input type=\"checkbox\" id=\"max-per-student-option\" name=\"max_appointments_per_participant_option\" value=\"1\">\n          <label for=\"max-per-student-option\">Limit participants to attend</label>\n          <input type=\"number\" name=\"max_appointments_per_participant\" value=\"";
  foundHelper = helpers.appointment_group;
  stack1 = foundHelper || depth0.appointment_group;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.max_appointments_per_participant);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "appointment_group.max_appointments_per_participant", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" min=\"1\" style=\"width: 40px\">\n          <label for=\"max-per-student-option\">appointment(s).</label>\n          <a href=\"#\" class=\"reservation_help hidden\" title=\"";
  stack1 = "How will this affect reservations?";
  stack2 = "affect_reservations";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <img alt=\"Help\" src=\"/images/help.png\">\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"details-wrapper\">\n    <b>";
  stack1 = "Details:";
  stack2 = "details";
  stack3 = {};
  stack4 = "calendar.edit_appointment_group";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><br />\n    <textarea name=\"description\" class=\"input-block-level\">";
  foundHelper = helpers.appointment_group;
  stack1 = foundHelper || depth0.appointment_group;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.description);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "appointment_group.description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['calendar/editAppointmentGroup'];
});
