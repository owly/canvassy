define('jst/calendar/editCalendarEventFull', ["compiled/handlebars_helpers","i18n!calendar.edit_calendar_event_full"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editCalendarEventFull'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "use_section_dates";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <label class=\"label_with_checkbox\">\n      <input type=\"checkbox\"\n             name=\"use_section_dates\"\n             value=\"1\"\n             ";
  foundHelper = helpers.use_section_dates;
  stack1 = foundHelper || depth0.use_section_dates;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n      ";
  stack1 = "Use a different date for each section";
  stack2 = "different_date_for_each_section";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <input type=\"hidden\"\n           name=\"remove_child_events\"\n           value=\"";
  foundHelper = helpers.use_section_dates;
  stack1 = foundHelper || depth0.use_section_dates;
  stack2 = helpers.unless;
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n  ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "checked";}

function program6(depth0,data) {
  
  
  return "1";}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += " value=\"";
  stack1 = "tiny";
  foundHelper = helpers.start_at;
  stack2 = foundHelper || depth0.start_at;
  foundHelper = helpers.tTimeToString;
  stack3 = foundHelper || depth0.tTimeToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tTimeToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += " value=\"";
  stack1 = "tiny";
  foundHelper = helpers.end_at;
  stack2 = foundHelper || depth0.end_at;
  foundHelper = helpers.tTimeToString;
  stack3 = foundHelper || depth0.tTimeToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tTimeToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <table class=\"formtable show_if_using_sections\">\n      ";
  foundHelper = helpers.course_sections;
  stack1 = foundHelper || depth0.course_sections;
  stack2 = helpers.each;
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n  ";
  return buffer;}
function program13(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <tr class=\"date_start_end_row\">\n        <td colspan=\"4\"><label class=\"row_header\" for=\"section_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "_start_date\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</label></td>\n      </tr>\n      <tr class=\"date_start_end_row\">\n        <td>\n          <input type=\"text\"\n                 id=\"section_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "_start_date\"\n                 name=\"child_event_data[";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "][start_date]\"\n                 class=\"date_field\"\n                 value=\"";
  stack1 = "medium";
  foundHelper = helpers.event;
  stack2 = foundHelper || depth0.event;
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.start_at);
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\"\n                 aria-label=\"";
  stack1 = "Date";
  stack2 = "date";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 placeholder=\"";
  stack1 = "Date";
  stack2 = "date";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n        </td>\n        <td>\n          <input type=\"text\"\n                 name=\"child_event_data[";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "][start_time]\"\n                 class=\"time_field\"\n                 ";
  foundHelper = helpers.all_day;
  stack1 = foundHelper || depth0.all_day;
  stack2 = helpers.unless;
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 aria-label=\"";
  stack1 = "Start Time";
  stack2 = "start_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 placeholder=\"";
  stack1 = "Start Time";
  stack2 = "start_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n        </td>\n\n        <td><span class=\"time_separator\">-</span></td>\n\n        <td>\n          <input type=\"text\"\n                 name=\"child_event_data[";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "][end_time]\"\n                 class=\"time_field\"\n                 ";
  foundHelper = helpers.all_day;
  stack1 = foundHelper || depth0.all_day;
  stack2 = helpers.unless;
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 aria-label=\"";
  stack1 = "End Time";
  stack2 = "end_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 placeholder=\"";
  stack1 = "End Time";
  stack2 = "end_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          <input type=\"hidden\"\n                 name=\"child_event_data[";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "][context_code]\"\n                 value=\"course_section_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n        </td>\n      </tr>\n      ";
  return buffer;}
function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += " value=\"";
  stack1 = "tiny";
  foundHelper = helpers.event;
  stack2 = foundHelper || depth0.event;
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.start_at);
  foundHelper = helpers.tTimeToString;
  stack3 = foundHelper || depth0.tTimeToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tTimeToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += " value=\"";
  stack1 = "tiny";
  foundHelper = helpers.event;
  stack2 = foundHelper || depth0.event;
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.end_at);
  foundHelper = helpers.tTimeToString;
  stack3 = foundHelper || depth0.tTimeToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tTimeToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <button type=\"button\" class=\"btn delete_link\">";
  stack1 = "Delete";
  stack2 = "delete";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    ";
  return buffer;}

function program20(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <a href=\"";
  foundHelper = helpers.return_to_url;
  stack1 = foundHelper || depth0.return_to_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "return_to_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"btn\">";
  stack1 = "Cancel";
  stack2 = "#buttons.cancel";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;}

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        ";
  stack1 = "Create Event";
  stack2 = "buttons.create";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program24(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        ";
  stack1 = "Update Event";
  stack2 = "buttons.update";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

  buffer += "<form id=\"editCalendarEventFull\" class=\"";
  foundHelper = helpers.use_section_dates;
  stack1 = foundHelper || depth0.use_section_dates;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <input type=\"text\"\n         class=\"title input-block-level\"\n         aria-label=\"";
  stack1 = "Event Title";
  stack2 = "event_title";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         placeholder=\"";
  stack1 = "Event Title";
  stack2 = "event_title";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         value=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n         maxlength=\"255\" />\n\n  <textarea class=\"input-block-level\"\n            name=\"description\"\n            aria-label=\"";
  stack1 = "Event Description";
  stack2 = "event_description";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            style=\"width: 100%\">";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n\n  ";
  foundHelper = helpers.course_sections;
  stack1 = foundHelper || depth0.course_sections;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"hide_if_using_sections date_start_end_row\">\n    <table>\n      <tbody>\n        <tr>\n          <td>\n            <input type=\"text\"\n                   name=\"start_date\"\n                   class=\"date_field\"\n                   value=\"";
  stack1 = "medium";
  foundHelper = helpers.start_at;
  stack2 = foundHelper || depth0.start_at;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\"\n                   aria-label=\"";
  stack1 = "Date";
  stack2 = "date";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                   placeholder=\"";
  stack1 = "Date";
  stack2 = "date";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          </td>\n          <td>\n            <input type=\"text\"\n                   name=\"start_time\"\n                   class=\"time_field\"\n                   ";
  foundHelper = helpers.all_day;
  stack1 = foundHelper || depth0.all_day;
  stack2 = helpers.unless;
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   aria-label=\"";
  stack1 = "Start Time";
  stack2 = "start_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                   placeholder=\"";
  stack1 = "Start Time";
  stack2 = "start_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          </td>\n          <td><span class=\"time_separator\">-</span></td>\n          <td>\n            <input type=\"text\"\n                   name=\"end_time\"\n                   class=\"time_field\"\n                   ";
  foundHelper = helpers.all_day;
  stack1 = foundHelper || depth0.all_day;
  stack2 = helpers.unless;
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   aria-label=\"";
  stack1 = "End Time";
  stack2 = "end_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                   placeholder=\"";
  stack1 = "End Time";
  stack2 = "end_time";
  stack3 = {};
  stack4 = "calendar.edit_calendar_event_full";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  ";
  foundHelper = helpers.course_sections;
  stack1 = foundHelper || depth0.course_sections;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"form-actions\">\n    ";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  foundHelper = helpers.return_to_url;
  stack1 = foundHelper || depth0.return_to_url;
  stack2 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <button type=\"submit\" class=\"btn btn-primary\">\n      ";
  foundHelper = helpers.newRecord;
  stack1 = foundHelper || depth0.newRecord;
  stack2 = helpers['if'];
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(24, program24, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n\n</form>\n";
  return buffer;});
  
  
  return templates['calendar/editCalendarEventFull'];
});
