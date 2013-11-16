define('jst/outcomes/mainInstructions', ["compiled/handlebars_helpers","i18n!outcomes.main_instructions"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/mainInstructions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"wrapper\">\n  <h3 class=\"title\">\n    ";
  stack1 = "Setting up Outcomes";
  stack2 = "instructions.main.manage.title";
  stack3 = {};
  stack4 = "outcomes.main_instructions";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h3>\n  <div class=\"description\">\n    ";
  stack1 = "*Outcomes are created here to track mastery in a course. To get started, checkout the menu bar along the top. Click on the New button to create a new outcome, or the New Group button to create a new group to organize your outcomes into. The Find button will allow you to use outcomes that have been created by your state or institution. As you create and use outcomes you will be able to use the panel to the left to navigate through your outcomes. You can drag and drop outcomes between the different levels to create structure.* *More importantly, Canvas allows you to add outcomes to your grading rubrics so that you can evaluate mastery as you grade assignments. Once you've set up outcomes, click Manage Rubrics to start using your outcomes for grading.*";
  stack2 = "instructions.main.manage.description";
  stack3 = {};
  stack4 = "outcomes.main_instructions";
  stack3['scope'] = stack4;
  stack4 = "<p>$1</p>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['outcomes/mainInstructions'];
});
