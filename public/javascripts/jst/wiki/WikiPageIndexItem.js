define('jst/wiki/WikiPageIndexItem', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageIndexItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "text-success";}

function program3(depth0,data) {
  
  
  return "muted";}

function program5(depth0,data) {
  
  
  return " <span class=\"label\">Front Page</span>";}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " by ";
  foundHelper = helpers.last_edited_by;
  stack1 = foundHelper || depth0.last_edited_by;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.display_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "last_edited_by.display_name", { hash: {} }); }
  buffer += escapeExpression(stack1);
  return buffer;}

function program9(depth0,data) {
  
  
  return "text-success";}

function program11(depth0,data) {
  
  
  return "muted";}

function program13(depth0,data) {
  
  
  return "publish";}

function program15(depth0,data) {
  
  
  return "unpublished";}

  buffer += "<td><a href=\"";
  foundHelper = helpers.htmlUrl;
  stack1 = foundHelper || depth0.htmlUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "htmlUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"";
  foundHelper = helpers.published;
  stack1 = foundHelper || depth0.published;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>";
  foundHelper = helpers.front_page;
  stack1 = foundHelper || depth0.front_page;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n<td>";
  foundHelper = helpers.created_at;
  stack1 = foundHelper || depth0.created_at;
  foundHelper = helpers.friendlyDatetime;
  stack2 = foundHelper || depth0.friendlyDatetime;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "friendlyDatetime", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</td>\n<td>";
  foundHelper = helpers.updated_at;
  stack1 = foundHelper || depth0.updated_at;
  foundHelper = helpers.friendlyDatetime;
  stack2 = foundHelper || depth0.friendlyDatetime;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "friendlyDatetime", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1);
  foundHelper = helpers.last_edited_by;
  stack1 = foundHelper || depth0.last_edited_by;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n<td><span class=\"";
  foundHelper = helpers.published;
  stack1 = foundHelper || depth0.published;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-";
  foundHelper = helpers.published;
  stack1 = foundHelper || depth0.published;
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(15, program15, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i></span></td>";
  return buffer;});
  
  
  return templates['wiki/WikiPageIndexItem'];
});
