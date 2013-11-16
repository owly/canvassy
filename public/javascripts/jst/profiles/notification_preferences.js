define('jst/profiles/notification_preferences', ["compiled/handlebars_helpers","i18n!profiles.notification_preferences"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/notification_preferences'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <table cellspacing=\"0\"\n         class=\"notification-prefs-table table\n                table-columns-striped table-bordered\">\n    <caption class=\"screenreader-only\">\n      ";
  stack1 = "%{name} notification events and settings";
  stack2 = "captions.notification_preferences";
  stack3 = {};
  stack4 = "profiles.notification_preferences";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </caption>\n\n    <thead>\n      <tr class=\"grouping\">\n        <th scope=\"col\"><h3 class=\"group-name\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h3></th>\n        ";
  foundHelper = helpers.channels;
  stack1 = foundHelper || depth1.channels;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tr>\n    </thead>\n\n    <tbody>\n      ";
  foundHelper = helpers.items;
  stack1 = foundHelper || depth0.items;
  stack2 = helpers.each;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <th class=\"comm-channel\" scope=\"col\">\n            <div class=\"channel-name\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"channel-addr\">";
  foundHelper = helpers.address;
  stack1 = foundHelper || depth0.address;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "address", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n          </th>\n        ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <tr>\n          <th class=\"comm-event\" scope=\"row\">\n            <div class=\"row-title-cell\">\n              <span class=\"category-name show-popover\"\n                    title=\"<div class='arrow'></div>\n                           <div class='popover-title'>";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n                           <div class='popover-content'>\n                             <p>";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n                           </div>\">\n                ";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n              </span>\n\n              ";
  foundHelper = helpers.checkName;
  stack1 = foundHelper || depth0.checkName;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n          </th>\n\n          ";
  foundHelper = helpers.policyCells;
  stack1 = foundHelper || depth0.policyCells;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "policyCells", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tr>\n      ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <div class=\"user-preference\">\n                  <label class=\"checkbox\" for=\"";
  foundHelper = helpers.checkID;
  stack1 = foundHelper || depth0.checkID;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "checkID", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n                    <input type=\"checkbox\"\n                           id=\"";
  foundHelper = helpers.checkID;
  stack1 = foundHelper || depth0.checkID;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "checkID", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n                           class=\"user-pref-check\"\n                           name=\"";
  foundHelper = helpers.checkName;
  stack1 = foundHelper || depth0.checkName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "checkName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n                           ";
  foundHelper = helpers.checkedState;
  stack1 = foundHelper || depth0.checkedState;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n                    ";
  foundHelper = helpers.checkLabel;
  stack1 = foundHelper || depth0.checkLabel;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "checkLabel", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n                  </label>\n                </div>\n              ";
  return buffer;}
function program6(depth0,data) {
  
  
  return "checked=\"checked\"";}

  foundHelper = helpers.eventGroups;
  stack1 = foundHelper || depth0.eventGroups;
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program1, data, depth0);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
  return templates['profiles/notification_preferences'];
});
