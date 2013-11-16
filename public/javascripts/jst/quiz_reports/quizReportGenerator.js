define('jst/quiz_reports/quizReportGenerator', ["compiled/handlebars_helpers","i18n!quiz_reports.quiz_report_generator"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quiz_reports/quizReportGenerator'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <a href=\"";
  foundHelper = helpers.file;
  stack1 = foundHelper || depth0.file;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "file.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"btn button-sidebar-wide \"target=\"_blank\">\n    <i class=\"icon-download\"></i>\n    ";
  stack1 = "Download %{report_name}";
  stack2 = "download_report_name";
  stack3 = {};
  stack4 = "quiz_reports.quiz_report_generator";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n    <small>";
  stack1 = "Generated %{dateAndTime}";
  stack2 = "generated_at_date_time";
  stack3 = {};
  stack4 = "quiz_reports.quiz_report_generator";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n  </a>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  ";
  foundHelper = helpers.progress;
  stack1 = foundHelper || depth0.progress;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(9, program9, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    ";
  stack1 = "Generating %{report_name}...";
  stack2 = "generating_report_name";
  stack3 = {};
  stack4 = "quiz_reports.quiz_report_generator";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"progress progress-small progress-striped ";
  foundHelper = helpers.progress;
  stack1 = foundHelper || depth0.progress;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.workflow_state);
  stack2 = "completed";
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"margin: 0 0 10px\">\n      <div class=\"bar\" style=\"width:";
  foundHelper = helpers.progress;
  stack1 = foundHelper || depth0.progress;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.completion);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "progress.completion", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%;\"></div>\n    </div>\n  ";
  return buffer;}
function program5(depth0,data) {
  
  
  return "progress-success";}

function program7(depth0,data) {
  
  
  return "active";}

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <a href=\"javascript:void(0)\" class=\"create-report btn button-sidebar-wide\">\n      <i class=\"icon-ms-excel\"></i>\n      ";
  stack1 = "Generate %{report_name}";
  stack2 = "generate_report_name";
  stack3 = {};
  stack4 = "quiz_reports.quiz_report_generator";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  ";
  return buffer;}

  foundHelper = helpers.file;
  stack1 = foundHelper || depth0.file;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;});
  
  
  return templates['quiz_reports/quizReportGenerator'];
});
