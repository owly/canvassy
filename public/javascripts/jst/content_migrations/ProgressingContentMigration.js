define('jst/content_migrations/ProgressingContentMigration', ["compiled/handlebars_helpers","i18n!content_migrations.progressing_content_migration"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ProgressingContentMigration'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "top-margin";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <button type='button' title=\"";
  stack1 = "Select Content";
  stack2 = "select_content";
  stack3 = {};
  stack4 = "content_migrations.progressing_content_migration";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class='btn btn-small btn-primary selectContentBtn'>";
  stack1 = "Select Content";
  stack2 = "select_content";
  stack3 = {};
  stack4 = "content_migrations.progressing_content_migration";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <form class=\"selectContentDialog form-dialog\" style=\"display:none\"></form>\n  ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.migration_issues;
  stack1 = foundHelper || depth0.migration_issues;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <a id='issueText";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "' class='showIssues' href='#issues";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'><span data-bind=\"migration_issues_count\">";
  foundHelper = helpers.issuesCount;
  stack1 = foundHelper || depth0.issuesCount;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "issuesCount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span> <span data-bind=\"issuesButtonText\">";
  stack1 = "issues";
  stack2 = "issues_text";
  stack3 = {};
  stack4 = "content_migrations.progressing_content_migration";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></a>\n    ";
  return buffer;}

  buffer += "<div class=\"span3 migrationName top-margin\">";
  foundHelper = helpers.display_name;
  stack1 = foundHelper || depth0.display_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n<div class=\"span3 top-margin centerText\">";
  foundHelper = helpers.created_at;
  stack1 = foundHelper || depth0.created_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</div>\n<div class=\"span2 top-margin rightAlign progressStatus\"></div>\n<div class=\"span3 changable ";
  foundHelper = helpers.migration_issues;
  stack1 = foundHelper || depth0.migration_issues;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  foundHelper = helpers.waiting_for_select;
  stack1 = foundHelper || depth0.waiting_for_select;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div id=\"#issues";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"migrationIssues clear\" style=\"display: none\"></div>\n<br />\n<hr />\n";
  return buffer;});
  
  
  return templates['content_migrations/ProgressingContentMigration'];
});
