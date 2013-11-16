define('jst/discussions/_deleted_entry', ["compiled/handlebars_helpers","i18n!discussions.deleted_entry"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_deleted_entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "collapsable";}

function program3(depth0,data) {
  
  
  return "data-event=\"toggleCollapsed\"";}

  buffer += "<header class=\"entry-header discussion-section admin-link-hover-area ";
  foundHelper = helpers.read_state;
  stack1 = foundHelper || depth0.read_state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "read_state", { hash: {} }); }
  buffer += escapeExpression(stack1) + " clearfix ";
  foundHelper = helpers.collapsable;
  stack1 = foundHelper || depth0.collapsable;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  foundHelper = helpers.collapsable;
  stack1 = foundHelper || depth0.collapsable;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <div class=\"discussion-header-content right-of-avatar\">\n    <div class=\"discussion-header-right\">\n      <div class=\"headerBadges show-if-collapsed\"></div>\n    </div>\n    <div class=\"discussion-title\">";
  stack1 = "Deleted by *%{editor_name}* on %{edited_at}";
  stack2 = "deleted";
  stack3 = {};
  stack4 = "discussions.deleted_entry";
  stack3['scope'] = stack4;
  stack4 = "<a %{editor_href}>$1</a>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  </div>\n</header>\n\n";
  return buffer;});
  
Handlebars.registerPartial('discussions/deleted_entry', templates['discussions/_deleted_entry']);

  
  return templates['discussions/_deleted_entry'];
});
