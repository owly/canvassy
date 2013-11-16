define('jst/quizzes/fileUploadedOrRemoved', ["compiled/handlebars_helpers","i18n!quizzes.file_uploaded_or_removed"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/fileUploadedOrRemoved'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n\n  <div class=\"file-status file-uploaded\">\n    <em>\n    ";
  stack1 = "Your file has been successfully uploaded.";
  stack2 = "quizzes.file_successfully_uploaded";
  stack3 = {};
  stack4 = "quizzes.file_uploaded_or_removed";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </em>\n  </div>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"file-status file-removed\">\n    <em>\n      ";
  stack1 = "%{display_name} has been removed.";
  stack2 = "quizzes.files_removed";
  stack3 = {};
  stack4 = "quizzes.file_uploaded_or_removed";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </em>\n  </div>\n";
  return buffer;}

  foundHelper = helpers.fileUploaded;
  stack1 = foundHelper || depth0.fileUploaded;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
  return templates['quizzes/fileUploadedOrRemoved'];
});
