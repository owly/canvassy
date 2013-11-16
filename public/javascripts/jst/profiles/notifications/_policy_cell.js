define('jst/profiles/notifications/_policy_cell', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/notifications/_policy_cell'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <i class=\"";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.icon);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selected.icon", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></i>\n        <i class='icon-mini-arrow-down drop-arrow'></i>\n        ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <select value='";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.code);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selected.code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "' class='mobile-select'>\n        ";
  foundHelper = helpers.allButtons;
  stack1 = foundHelper || depth0.allButtons;
  stack2 = helpers.each;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <option value='";
  foundHelper = helpers.code;
  stack1 = foundHelper || depth0.code;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "' ";
  foundHelper = helpers.active;
  stack1 = foundHelper || depth0.active;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  foundHelper = helpers.text;
  stack1 = foundHelper || depth0.text;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "text", { hash: {} }); }
  buffer += escapeExpression(stack1) + ": ";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n        ";
  return buffer;}
function program5(depth0,data) {
  
  
  return "selected='selected'";}

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <div class=\"btn-group-was event-option-buttons\">\n        ";
  foundHelper = helpers.allButtons;
  stack1 = foundHelper || depth0.allButtons;
  stack2 = helpers.each;
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;}
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <input type=\"radio\" class=\"";
  foundHelper = helpers.code;
  stack1 = foundHelper || depth0.code;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-button frequency\" id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"";
  foundHelper = helpers.coordinate;
  stack1 = foundHelper || depth0.coordinate;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "coordinate", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-value='";
  foundHelper = helpers.code;
  stack1 = foundHelper || depth0.code;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "' ";
  foundHelper = helpers.active;
  stack1 = foundHelper || depth0.active;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        <label for=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"";
  foundHelper = helpers.code;
  stack1 = foundHelper || depth0.code;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-label\" data-tooltip title=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ><i class=\"";
  foundHelper = helpers.icon;
  stack1 = foundHelper || depth0.icon;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "icon", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></i></label>\n        ";
  return buffer;}
function program9(depth0,data) {
  
  
  return "checked='checked'";}

  buffer += "<td class='comm-event-option' data-selection='";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.code);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selected.code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "' data-category='";
  foundHelper = helpers.category;
  stack1 = foundHelper || depth0.category;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "category", { hash: {} }); }
  buffer += escapeExpression(stack1) + "' data-channelId='";
  foundHelper = helpers.channelId;
  stack1 = foundHelper || depth0.channelId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "channelId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'>\n  <div class='comm-event-option-contents'>\n    <div class='event-option-selection'>\n      <a href=\"#\" class='change-selection'>\n        <i class=\"";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.icon);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selected.icon", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></i> <span class='img-text'>";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.text);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "selected.text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n        ";
  foundHelper = helpers.touch;
  stack1 = foundHelper || depth0.touch;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n    ";
  foundHelper = helpers.touch;
  stack1 = foundHelper || depth0.touch;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</td>\n";
  return buffer;});
  
Handlebars.registerPartial('profiles/notifications/policy_cell', templates['profiles/notifications/_policy_cell']);

  
  return templates['profiles/notifications/_policy_cell'];
});
