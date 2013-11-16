define('jst/outcomes/_criterion', ["compiled/handlebars_helpers","i18n!outcomes.criterion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/_criterion'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<td class=\"rating\">\n  <div class=\"rating-wrap\">\n    <div class=\"show\">\n      <h5>";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h5>\n      <span class=\"points\">";
  foundHelper = helpers.points;
  stack1 = foundHelper || depth0.points;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "points", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span> ";
  stack1 = "Points";
  stack2 = "points";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <a\n        href=\"#\"\n        class=\"edit_rating active element_toggler\"\n        title='";
  stack1 = "Edit \"%{description} criterion rating";
  stack2 = "edit_criterion_rating_title";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        aria-label='";
  stack1 = "Edit \"%{description} criterion rating";
  stack2 = "edit_criterion_rating_title";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        role=button\n        tabindex=0\n        aria-controls=\"edit_rating_";
  foundHelper = helpers._index;
  stack1 = foundHelper || depth0._index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "_index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-edit\"></i></a>\n    </div>\n    <div class=\"edit\" id=\"edit_rating_";
  foundHelper = helpers._index;
  stack1 = foundHelper || depth0._index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "_index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" role=region tabindex=-1>\n      <div class=\"row-fluid\" class=\"outcomes-edit-row\">\n        <div class=\"span7\">\n          <input type=\"text\" name=\"ratings[";
  foundHelper = helpers._index;
  stack1 = foundHelper || depth0._index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "_index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "][description]\" class=\"outcome_rating_description\" value=\"";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" aria-label=\"";
  stack1 = "Criterion rating description";
  stack2 = "rating_description";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        </div>\n        <div class=\"span4 offset1\">\n          <input type=\"text\" name=\"ratings[";
  foundHelper = helpers._index;
  stack1 = foundHelper || depth0._index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "_index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "][points]\" style=\"width: 20px;\" class=\"outcome_rating_points\" value=\"";
  foundHelper = helpers.points;
  stack1 = foundHelper || depth0.points;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "points", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" aria-label=\"";
  stack1 = "Criterion rating points";
  stack2 = "criterion_rating_points";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"> <span class=\"outcomes-points-label\">";
  stack1 = "pts";
  stack2 = "pts";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n\n      <div class=\"buttons row-fluid\">\n        <div class=\"span12\">\n          <button\n            class=\"btn btn-small btn-primary save_rating_link\"\n            aria-controls=\"edit_rating_";
  foundHelper = helpers._index;
  stack1 = foundHelper || depth0._index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "_index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n            type=\"button\"\n          >";
  stack1 = "Ok";
  stack2 = "close_rating";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n          <button class=\"btn btn-small delete_rating_link\" type=\"button\">";
  stack1 = "Delete";
  stack2 = "delete_criterion";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"insert\">\n      <a href=\"#\" class=\"insert_rating\" title=\"";
  stack1 = "Insert criterion rating";
  stack2 = "insert_criterion_rating";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=0 role=button>\n        ";
  stack1 = "Insert";
  stack2 = "insert_rating";
  stack3 = {};
  stack4 = "outcomes.criterion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <span class=\"arrow-icon\"></span>\n      </a>\n    </div>\n  </div>\n</td>\n";
  return buffer;});
  
Handlebars.registerPartial('outcomes/criterion', templates['outcomes/_criterion']);

  
  return templates['outcomes/_criterion'];
});
