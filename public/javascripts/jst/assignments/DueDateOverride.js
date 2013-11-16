define('jst/assignments/DueDateOverride', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!assignments.due_date_override"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/DueDateOverride'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<hr>\n\n<div class=\"due-date-override-headers clearfix\">\n  <div class=\"section-header\">\n    ";
  stack1 = "For";
  stack2 = "overrides.for";
  stack3 = {};
  stack4 = "assignments.due_date_override";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"due-date-header\">\n    ";
  stack1 = "Due Date";
  stack2 = "overrides.due_date";
  stack3 = {};
  stack4 = "assignments.due_date_override";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"lock-header\">\n    ";
  stack1 = "Available From";
  stack2 = "overrides.available_from";
  stack3 = {};
  stack4 = "assignments.due_date_override";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"unlock-header\">\n    ";
  stack1 = "Until";
  stack2 = "until";
  stack3 = {};
  stack4 = "assignments.due_date_override";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n</div>\n\n<ul class=\"due-date-overrides\"></ul>\n\n<div class=\"due-date-override-footer\">\n  <button class=\"btn\" id=\"add_due_date\" style=\"";
  foundHelper = helpers.shouldHideDueDate;
  stack1 = foundHelper || depth0.shouldHideDueDate;
  foundHelper = helpers.hiddenIf;
  stack2 = foundHelper || depth0.hiddenIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n    <i class=\"icon-add\"></i> ";
  stack1 = "Due Date";
  stack2 = "overrides.due_date";
  stack3 = {};
  stack4 = "assignments.due_date_override";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</div>\n";
  return buffer;});
  
  
arguments[1]('assignments/DueDateOverride', ".js-assignment-overrides {\n  overflow: auto; }\n  .js-assignment-overrides .remove-link .icon-end:hover {\n    opacity: 1.0; }\n  .js-assignment-overrides .remove-link .icon-end {\n    opacity: 0.5;\n    color: black;\n    vertical-align: middle; }\n  .js-assignment-overrides .due-date-override-headers {\n    min-width: 900px; }\n    .js-assignment-overrides .due-date-override-headers div {\n      width: 210px;\n      float: left;\n      margin-right: 10px; }\n  .js-assignment-overrides .due-date-overrides {\n    margin: 0; }\n    .js-assignment-overrides .due-date-overrides li.due-date-row {\n      list-style-type: none;\n      overflow: hidden;\n      min-width: 900px; }\n      .js-assignment-overrides .due-date-overrides li.due-date-row select {\n        float: left;\n        margin: 0px 10px 0px 0px;\n        width: 210px; }\n      .js-assignment-overrides .due-date-overrides li.due-date-row .date_field_container {\n        float: left;\n        position: relative;\n        margin-right: 10px; }\n        .js-assignment-overrides .due-date-overrides li.due-date-row .date_field_container input {\n          width: 155px; }\n        .js-assignment-overrides .due-date-overrides li.due-date-row .date_field_container .datetime_suggest {\n          height: 20px; }\n");

  return templates['assignments/DueDateOverride'];
});
