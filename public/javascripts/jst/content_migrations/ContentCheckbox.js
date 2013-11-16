define('jst/content_migrations/ContentCheckbox', ["compiled/handlebars_helpers","i18n!content_migrations.content_checkbox"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ContentCheckbox'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n<i class=\"";
  foundHelper = helpers.iconClass;
  stack1 = foundHelper || depth0.iconClass;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "iconClass", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></i>\n<label class=\"control-label\" data-tooltip title=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = 60;
  foundHelper = helpers.title;
  stack2 = foundHelper || depth0.title;
  foundHelper = helpers.truncate_left;
  stack3 = foundHelper || depth0.truncate_left;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "truncate_left", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <label class=\"checkbox\">\n    <i class=\"";
  foundHelper = helpers.iconClass;
  stack1 = foundHelper || depth0.iconClass;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "iconClass", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></i>\n    <input type=\"checkbox\" name=\"";
  foundHelper = helpers.property;
  stack1 = foundHelper || depth0.property;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "property", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" id=\"checkbox-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  foundHelper = helpers.checked;
  stack1 = foundHelper || depth0.checked;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/> <span data-bind=\"title\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span> ";
  foundHelper = helpers.count;
  stack1 = foundHelper || depth0.count;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n";
  return buffer;}
function program4(depth0,data) {
  
  
  return "checked";}

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span data-bind=\"count\">(";
  foundHelper = helpers.count;
  stack1 = foundHelper || depth0.count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "count", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</span>";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "<div style=\"margin-left:20px\" class=\"showHide ";
  foundHelper = helpers.checked;
  stack1 = foundHelper || depth0.checked;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"#\" id=\"selectAll-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = "Select All";
  stack2 = "select_all";
  stack3 = {};
  stack4 = "content_migrations.content_checkbox";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a> | <a href=\"#\" id=\"selectNone-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = "Select None";
  stack2 = "select_non";
  stack3 = {};
  stack4 = "content_migrations.content_checkbox";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></div>";
  return buffer;}
function program9(depth0,data) {
  
  
  return "hide";}

function program11(depth0,data) {
  
  
  return "\n  <ul data-content=\"sublevelCheckboxes\"><ul>\n";}

  foundHelper = helpers.onlyLabel;
  stack1 = foundHelper || depth0.onlyLabel;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  foundHelper = helpers.showHide;
  stack1 = foundHelper || depth0.showHide;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  foundHelper = helpers.hasSubCheckboxes;
  stack1 = foundHelper || depth0.hasSubCheckboxes;
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
  return templates['content_migrations/ContentCheckbox'];
});
