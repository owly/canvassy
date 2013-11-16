define('jst/AssignmentDetailsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!assignment_details_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['AssignmentDetailsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div class=\"distribution\" style=\"display: block; \">\n      <div class=\"bar-left\"></div>\n      <div class=\"none-left\" title=\"";
  stack1 = "No one scored lower than %{min}";
  stack2 = "no_one_scored_lower";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  foundHelper = helpers.noneLeftWidth;
  stack1 = foundHelper || depth0.noneLeftWidth;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "noneLeftWidth", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; left: ";
  foundHelper = helpers.noneLeftLeft;
  stack1 = foundHelper || depth0.noneLeftLeft;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "noneLeftLeft", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; \"></div>\n      <div class=\"some-left\" title=\"";
  stack1 = "Scores lower than the average of %{average}";
  stack2 = "scores_lower_than_the_average";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  foundHelper = helpers.someLeftWidth;
  stack1 = foundHelper || depth0.someLeftWidth;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "someLeftWidth", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; left: ";
  foundHelper = helpers.someLeftLeft;
  stack1 = foundHelper || depth0.someLeftLeft;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "someLeftLeft", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; \"></div>\n      <div class=\"some-right\" title=\"";
  stack1 = "Scores higher than the average of %{average}";
  stack2 = "scores_higher_than_the_average";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  foundHelper = helpers.someRightWidth;
  stack1 = foundHelper || depth0.someRightWidth;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "someRightWidth", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; left: ";
  foundHelper = helpers.someRightLeft;
  stack1 = foundHelper || depth0.someRightLeft;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "someRightLeft", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; \"></div>\n      <div class=\"none-right\" title=\"";
  stack1 = "No one scored higher than %{max}";
  stack2 = "no_one_scored_higher";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  foundHelper = helpers.noneRightWidth;
  stack1 = foundHelper || depth0.noneRightWidth;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "noneRightWidth", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; left: ";
  foundHelper = helpers.noneRightLeft;
  stack1 = foundHelper || depth0.noneRightLeft;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "noneRightLeft", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%; \"></div>\n      <div class=\"bar-right\"></div>\n    </div>\n  ";
  return buffer;}

  buffer += "<div id=\"assignment-details-dialog\" title=\"";
  stack1 = "Grade statistics for: %{assignment.name}";
  stack2 = "grading_statistics_for_assignment";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  foundHelper = helpers.showDistribution;
  stack1 = foundHelper || depth0.showDistribution;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <table id=\"assignment-details-dialog-stats-table\">\n    <tr>\n      <th scope=\"row\">";
  stack1 = "Average Score:";
  stack2 = "average_score";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  foundHelper = helpers.average;
  stack1 = foundHelper || depth0.average;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "average", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">";
  stack1 = "High Score:";
  stack2 = "high_score";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  foundHelper = helpers.max;
  stack1 = foundHelper || depth0.max;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "max", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">";
  stack1 = "Low Score:";
  stack2 = "low_score";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  foundHelper = helpers.min;
  stack1 = foundHelper || depth0.min;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "min", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">";
  stack1 = "Total Submitted:";
  stack2 = "total_submitted";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  stack1 = "%{cnt} submissions";
  stack2 = "count_of_submissions";
  stack3 = {};
  stack4 = "assignment_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n    </tr>\n  </table>\n</div>\n";
  return buffer;});
  
  
arguments[1]('AssignmentDetailsDialog', "#assignment-details-dialog .distribution {\n  margin: 15px 0;\n  height: 30px;\n  position: relative; }\n  #assignment-details-dialog .distribution div {\n    position: absolute;\n    top: 0;\n    border-style: solid;\n    border-color: #aaaaaa;\n    overflow: hidden; }\n  #assignment-details-dialog .distribution .bar-left, #assignment-details-dialog .distribution .bar-right {\n    height: 10px;\n    width: 0px;\n    margin: 5px 0px; }\n  #assignment-details-dialog .distribution .bar-left {\n    left: 0;\n    border-width: 2px 0 2px 2px; }\n  #assignment-details-dialog .distribution .none-left, #assignment-details-dialog .distribution .none-right {\n    height: 11px;\n    border-bottom-width: 2px; }\n  #assignment-details-dialog .distribution .some-left {\n    height: 20px;\n    border-width: 2px 0pt 2px 2px;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    background: white;\n    z-index: 2; }\n  #assignment-details-dialog .distribution .some-right {\n    height: 20px;\n    border-width: 2px;\n    overflow: hidden;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n    background: white;\n    z-index: 2; }\n  #assignment-details-dialog .distribution .bar-right {\n    width: 0;\n    height: 10px;\n    margin: 5px 0;\n    right: 0;\n    border-width: 2px 2px 2px 0; }\n\n#assignment-details-dialog-stats-table {\n  font-size: 1.2em; }\n  #assignment-details-dialog-stats-table th, #assignment-details-dialog-stats-table td {\n    padding: 2px 5px;\n    white-space: nowrap; }\n  #assignment-details-dialog-stats-table td {\n    font-size: 1.1em;\n    font-weight: bold; }\n");

  return templates['AssignmentDetailsDialog'];
});
