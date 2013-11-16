define('jst/outcomes/outcomeForm', ["compiled/handlebars_helpers","i18n!outcomes.outcome_form","jst/outcomes/_criterion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/outcomeForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials['outcomes/criterion'], 'outcomes/criterion', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

  buffer += "<form action=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"learning_outcome\" method=\"post\">\n  <label for=\"title\">";
  stack1 = "Name this outcome";
  stack2 = "title";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <input class=\"outcome_title\" name=\"title\" id=title size=\"50\" type=\"text\" value=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <label for=\"description\">";
  stack1 = "Describe this outcome";
  stack2 = "description";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <textarea cols=\"40\" name=\"description\" id=description rows=\"20\" style=\"width: 100%; height: 150px;\">";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n  <div id=\"outcome_criterion_dialog\" style=\"display: none;\">\n    ";
  stack1 = "Learning outcomes can be included in assignment rubrics as an easy way to assess mastery of outcomes aligned to specific assignments. When you define a learning outcome, you should also define a criterion that can be used when building assignment rubrics. Define as many rubric columns as you need, and specify a point threshold that will be used to define mastery of this outcome.";
  stack2 = "criterion_dialog";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>\n    ";
  stack1 = "Criterion ratings";
  stack2 = "criterion";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":\n    <a class=\"outcome_information_link\" title=\"";
  stack1 = "Click to learn about criterion ratings";
  stack2 = "criterion_info_link";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=0 href=\"#\"><i class=\"icon-question\"></i></a>\n  </label>\n  <table class=\"criterion\">\n    <tbody>\n      <tr>\n        ";
  foundHelper = helpers.ratings;
  stack1 = foundHelper || depth0.ratings;
  foundHelper = helpers.eachWithIndex;
  stack2 = foundHelper || depth0.eachWithIndex;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       <td class=\"total\">\n         <h5 class=\"total\">";
  stack1 = "Total Points";
  stack2 = "total_points";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n         <div class=\"points_possible\">\n           ";
  stack1 = "%{points_possible} Points";
  stack2 = "points";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         </div>\n       </td>\n      </tr>\n    </tbody>\n  </table>\n  <div>\n    <label for=\"mastery_points\" style=\"display:inline\">";
  stack1 = "Mastery at";
  stack2 = "mastery";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n    <input type=\"text\" name=\"mastery_points\" style=\"width: 20px;\" class=\"mastery_points\" id=\"mastery_points\" value=\"";
  foundHelper = helpers.mastery_points;
  stack1 = foundHelper || depth0.mastery_points;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "mastery_points", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  </div>\n  <div class=\"align-right\">\n    <button type=\"button\" class=\"btn cancel_button\">";
  stack1 = "Cancel";
  stack2 = "#buttons.cancel";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <button type=\"submit\" class=\"btn btn-primary submit_button\">";
  stack1 = "Save";
  stack2 = "#buttons.save";
  stack3 = {};
  stack4 = "outcomes.outcome_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['outcomes/outcomeForm'];
});
