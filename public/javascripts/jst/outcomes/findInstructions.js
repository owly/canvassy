define('jst/outcomes/findInstructions', ["compiled/handlebars_helpers","i18n!outcomes.find_instructions"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/findInstructions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"wrapper\">\n  <h3 class=\"title\">\n    ";
  stack1 = "Finding Outcomes";
  stack2 = "instructions.find.title";
  stack3 = {};
  stack4 = "outcomes.find_instructions";
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
  stack1 = "*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*";
  stack2 = "instructions.find.description";
  stack3 = {};
  stack4 = "outcomes.find_instructions";
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
  
  
  return templates['outcomes/findInstructions'];
});
