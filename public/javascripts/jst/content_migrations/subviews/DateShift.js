define('jst/content_migrations/subviews/DateShift', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.date_shift"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/DateShift'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"controls\">\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" id=\"dateShiftCheckbox\">\n    ";
  stack1 = "Adjust events and due dates";
  stack2 = "checkbox_label";
  stack3 = {};
  stack4 = "content_migrations.subviews.date_shift";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n<div class=\"dateShiftContent\" style=\"display:none\">\n  <br />\n  <div class=\"control-group\">\n    <label class=\"control-label\"><strong>";
  stack1 = "Beginning date";
  stack2 = "beginning_date";
  stack3 = {};
  stack4 = "content_migrations.subviews.date_shift";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n    <div class=\"controls\">\n      <div class=\"pull-left\"><input type=\"text\" id=\"oldStartDate\" class=\"span2\"></div>\n      <div class=\"pull-left\">&nbsp; ";
  stack1 = "change to";
  stack2 = "beginning_change_to";
  stack3 = {};
  stack4 = "content_migrations.subviews.date_shift";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <input type=\"text\" id=\"newStartDate\" class=\"span2\"></div>\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <label class=\"control-label\"><strong>";
  stack1 = "Ending date";
  stack2 = "ending_date";
  stack3 = {};
  stack4 = "content_migrations.subviews.date_shift";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n    <div class=\"controls\">\n      <div class=\"pull-left\"><input type=\"text\" id=\"oldEndDate\" class=\"span2\"></div>\n      <div class=\"pull-left\">&nbsp; ";
  stack1 = "change to";
  stack2 = "ending_change_to";
  stack3 = {};
  stack4 = "content_migrations.subviews.date_shift";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <input type=\"text\" id=\"newEndDate\" class=\"span2\"></div>\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <div id=\"daySubstitution\"></div>\n    <div class=\"controls\">\n      <button href=\"#\" id='addDaySubstitution' class=\"btn top-margin bottomMargin\"><i class=\"icon-add\"></i> ";
  stack1 = "Substitution";
  stack2 = "substitution";
  stack3 = {};
  stack4 = "content_migrations.subviews.date_shift";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['content_migrations/subviews/DateShift'];
});
