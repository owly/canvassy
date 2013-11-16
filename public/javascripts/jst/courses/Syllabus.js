define('jst/courses/Syllabus', ["compiled/handlebars_helpers","i18n!courses.syllabus"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/Syllabus'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <a id=\"toggle_special_dates_in_syllabus\" class=\"shown\" href=\"#\">\n      <span class=\"hide\">";
  stack1 = "Hide section, group, and person specific dates";
  stack2 = "syllabus.hide_specific_dates";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      <span class=\"show\">";
  stack1 = "Show section, group, and person specific dates";
  stack2 = "syllabus.show_specific_dates";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n    &nbsp;\n  ";}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <tr class=\"date";
  foundHelper = helpers.passed;
  stack1 = foundHelper || depth0.passed;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  foundHelper = helpers.date;
  stack1 = foundHelper || depth0.date;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <th scope=\"row\" class=\"day_date\" data-date=\"";
  foundHelper = helpers.date;
  stack1 = foundHelper || depth0.date;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  foundHelper = helpers.date;
  stack1 = foundHelper || depth0.date;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  foundHelper = helpers.date;
  stack1 = foundHelper || depth0.date;
  stack2 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </th>\n      <th scope=\"row\">";
  foundHelper = helpers.date;
  stack1 = foundHelper || depth0.date;
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(20, program20, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td class=\"details\">\n        <table class=\"detail_list\">\n          ";
  foundHelper = helpers.events;
  stack1 = foundHelper || depth0.events;
  stack2 = helpers.each;
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </table>\n      </td>\n    </tr>\n    ";
  return buffer;}
function program6(depth0,data) {
  
  
  return " date_passed";}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += " events_";
  stack1 = "%Y_%m_%d";
  foundHelper = helpers.date;
  stack2 = foundHelper || depth0.date;
  foundHelper = helpers.strftime;
  stack3 = foundHelper || depth0.strftime;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "strftime", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1);
  return buffer;}

function program10(depth0,data) {
  
  var stack1, stack2, stack3;
  stack1 = "%Y_%m_%d";
  foundHelper = helpers.date;
  stack2 = foundHelper || depth0.date;
  foundHelper = helpers.strftime;
  stack3 = foundHelper || depth0.strftime;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "strftime", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  return escapeExpression(stack1);}

function program12(depth0,data) {
  
  var stack1, stack2, stack3;
  stack1 = "short_weekday";
  foundHelper = helpers.date;
  stack2 = foundHelper || depth0.date;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  return escapeExpression(stack1);}

function program14(depth0,data) {
  
  var stack1, stack2, stack3, stack4;
  stack1 = "Other";
  stack2 = "syllabus.other_day";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n          ";
  stack1 = "short";
  foundHelper = helpers.date;
  stack2 = foundHelper || depth0.date;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n        ";
  return buffer;}

function program18(depth0,data) {
  
  var stack1, stack2, stack3;
  stack1 = "short_weekday";
  foundHelper = helpers.date;
  stack2 = foundHelper || depth0.date;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  return escapeExpression(stack1);}

function program20(depth0,data) {
  
  var stack1, stack2, stack3, stack4;
  stack1 = "Other";
  stack2 = "syllabus.other_day";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          <tr class=\"syllabus_";
  foundHelper = helpers.type;
  stack1 = foundHelper || depth0.type;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "type", { hash: {} }); }
  buffer += escapeExpression(stack1) + " related-";
  foundHelper = helpers.related_id;
  stack1 = foundHelper || depth0.related_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "related_id", { hash: {} }); }
  buffer += escapeExpression(stack1);
  foundHelper = helpers.override;
  stack1 = foundHelper || depth0.override;
  stack2 = helpers['if'];
  tmp1 = self.program(23, program23, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <td class=\"name";
  foundHelper = helpers.last;
  stack1 = foundHelper || depth0.last;
  stack2 = helpers.unless;
  tmp1 = self.program(25, program25, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              ";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  stack2 = helpers['if'];
  tmp1 = self.program(27, program27, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(29, program29, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  foundHelper = helpers.override;
  stack1 = foundHelper || depth0.override;
  stack2 = helpers['if'];
  tmp1 = self.program(31, program31, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n            <td class=\"dates";
  foundHelper = helpers.last;
  stack1 = foundHelper || depth0.last;
  stack2 = helpers.unless;
  tmp1 = self.program(33, program33, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              ";
  foundHelper = helpers.start_at;
  stack1 = foundHelper || depth0.start_at;
  stack2 = helpers['if'];
  tmp1 = self.program(35, program35, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(44, program44, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n          </tr>\n          ";
  return buffer;}
function program23(depth0,data) {
  
  
  return " special_date";}

function program25(depth0,data) {
  
  
  return " not_last";}

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <a href=\"";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n              ";
  return buffer;}

function program29(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n              ";
  return buffer;}

function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"special_date_title\">(";
  foundHelper = helpers.override;
  stack1 = foundHelper || depth0.override;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.title);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "override.title", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</div>\n              ";
  return buffer;}

function program33(depth0,data) {
  
  
  return " not_last";}

function program35(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                ";
  foundHelper = helpers.due_at;
  stack1 = foundHelper || depth0.due_at;
  stack2 = helpers['if'];
  tmp1 = self.program(36, program36, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(38, program38, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}
function program36(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                  due by ";
  foundHelper = helpers.due_at;
  stack1 = foundHelper || depth0.due_at;
  foundHelper = helpers.tTimeHours;
  stack2 = foundHelper || depth0.tTimeHours;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "tTimeHours", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n                ";
  return buffer;}

function program38(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                  ";
  foundHelper = helpers.start_at;
  stack1 = foundHelper || depth0.start_at;
  foundHelper = helpers.tTimeHours;
  stack2 = foundHelper || depth0.tTimeHours;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "tTimeHours", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n                  ";
  foundHelper = helpers.same_time;
  stack1 = foundHelper || depth0.same_time;
  stack2 = helpers.unless;
  tmp1 = self.program(39, program39, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;}
function program39(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    to\n                    ";
  foundHelper = helpers.same_day;
  stack1 = foundHelper || depth0.same_day;
  stack2 = helpers['if'];
  tmp1 = self.program(40, program40, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(42, program42, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                  ";
  return buffer;}
function program40(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                      ";
  foundHelper = helpers.end_at;
  stack1 = foundHelper || depth0.end_at;
  foundHelper = helpers.tTimeHours;
  stack2 = foundHelper || depth0.tTimeHours;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "tTimeHours", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n                    ";
  return buffer;}

function program42(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                      ";
  foundHelper = helpers.end_at;
  stack1 = foundHelper || depth0.end_at;
  foundHelper = helpers.tEventToString;
  stack2 = foundHelper || depth0.tEventToString;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "tEventToString", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n                    ";
  return buffer;}

function program44(depth0,data) {
  
  
  return "\n                &nbsp;\n              ";}

  buffer += "<div id=\"syllabus_links\">\n  ";
  foundHelper = helpers.overrides_present;
  stack1 = foundHelper || depth0.overrides_present;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<table id=\"syllabus\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 10%;\">";
  stack1 = "Date";
  stack2 = "headers.date";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <th scope=\"col\" style=\"width: 10%;\">";
  stack1 = "Day";
  stack2 = "headers.day";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <th scope=\"col\" style=\"width: 80%;\">\n      <div style=\"float: right;\"></div>\n      ";
  stack1 = "Details";
  stack2 = "headers.details";
  stack3 = {};
  stack4 = "courses.syllabus";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  foundHelper = helpers.dates;
  stack1 = foundHelper || depth0.dates;
  stack2 = helpers.each;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n";
  return buffer;});
  
  
  return templates['courses/Syllabus'];
});
