define('jst/collaborations/edit', ["compiled/handlebars_helpers","i18n!collaborations.edit"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['collaborations/edit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<form action=\"";
  foundHelper = helpers.action;
  stack1 = foundHelper || depth0.action;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "action", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n      class=\"edit_collaboration communication_message\"\n      method=\"POST\">\n  <input type=\"hidden\" name=\"_method\" value=\"put\" />\n  <input type=\"hidden\" name=\"authenticity_token\" value=\"";
  foundHelper = helpers.token;
  stack1 = foundHelper || depth0.token;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "token", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n  <div class=\"header\">\n    <input name=\"collaboration[title]\"\n           aria-label=\"";
  stack1 = "Collaboration title";
  stack2 = "labels.title";
  stack3 = {};
  stack4 = "collaborations.edit";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           style=\"width: 300px;\"\n           type=\"text\"\n           value=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n  </div>\n\n  <div class=\"content\">\n    <label for=\"collaboration_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "_description\">\n      ";
  stack1 = "Description";
  stack2 = "labels.description";
  stack3 = {};
  stack4 = "collaborations.edit";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label><br />\n    <textarea id=\"collaboration_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "_description\"\n              name=\"collaboration[description]\"\n              style=\"height: 50px; width: 400px;\">\n      ";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n    </textarea>\n  </div>\n\n  <div class=\"footer\">\n    <div class=\"collaborator_list\"></div>\n  </div>\n\n  <div class=\"collaboration-actions form-actions\">\n    <button type=\"button\" class=\"btn cancel_button\">\n      ";
  stack1 = "Cancel";
  stack2 = "buttons.cancel";
  stack3 = {};
  stack4 = "collaborations.edit";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n    <button type=\"submit\" class=\"btn btn-primary\">\n      ";
  stack1 = "Update collaboration";
  stack2 = "buttons.update";
  stack3 = {};
  stack4 = "collaborations.edit";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['collaborations/edit'];
});
