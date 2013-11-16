define('jst/content_migrations/subviews/QuestionBank', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.question_bank"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/QuestionBank'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=";
  foundHelper = helpers.assessment_question_bank;
  stack1 = foundHelper || depth0.assessment_question_bank;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.id);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "assessment_question_bank.id", { hash: {} }); }
  buffer += escapeExpression(stack1) + ">";
  foundHelper = helpers.assessment_question_bank;
  stack1 = foundHelper || depth0.assessment_question_bank;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.title);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "assessment_question_bank.title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n    ";
  return buffer;}

  buffer += "<label class=\"control-label\"><strong>";
  stack1 = "Question bank";
  stack2 = "question_bank_label";
  stack3 = {};
  stack4 = "content_migrations.subviews.question_bank";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls\">\n  <select class=\"questionBank span3\">\n    <option value=\"\">";
  stack1 = "Select question bank";
  stack2 = "select_question_bank";
  stack3 = {};
  stack4 = "content_migrations.subviews.question_bank";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    <option value=\"new_question_bank\" id=\"createQuestion\">";
  stack1 = "-- Create new question bank --";
  stack2 = "create_new_question";
  stack3 = {};
  stack4 = "content_migrations.subviews.question_bank";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    ";
  foundHelper = helpers.questionBanks;
  stack1 = foundHelper || depth0.questionBanks;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n</div>\n<br />\n<div class=\"controls\">\n  <input placeholder=\"Question bank name\" type=\"text\" style=\"display:none\" id=\"createQuestionInput\"/>\n</div>\n";
  return buffer;});
  
  
  return templates['content_migrations/subviews/QuestionBank'];
});
