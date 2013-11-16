define('jst/discussions/entryStats', ["compiled/handlebars_helpers","i18n!discussions.entry_stats"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/entryStats'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<a href='#'>\n";
  foundHelper = helpers.moreText;
  stack1 = foundHelper || depth0.moreText;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  foundHelper = helpers.moreText;
  stack1 = foundHelper || depth0.moreText;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "moreText", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  ";
  stack1 = "Show more";
  stack2 = "show_more";
  stack3 = {};
  stack4 = "discussions.entry_stats";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  foundHelper = helpers.showMore;
  stack1 = foundHelper || depth0.showMore;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class='new-and-total-badge'>\n  <span class=\"new-items\">";
  foundHelper = helpers.stats;
  stack1 = foundHelper || depth0.stats;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.unread);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "stats.unread", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n  <span class=\"total-items\">";
  foundHelper = helpers.stats;
  stack1 = foundHelper || depth0.stats;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.total);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "stats.total", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n</div>\n";
  return buffer;});
  
  
  return templates['discussions/entryStats'];
});
