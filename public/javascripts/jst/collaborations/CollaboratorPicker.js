define('jst/collaborations/CollaboratorPicker', ["compiled/handlebars_helpers","i18n!collaborations.collaborator_picker"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['collaborations/CollaboratorPicker'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"collaborator-picker\"\n     data-collaboration-id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  ";
  stack1 = "Collaborate With:";
  stack2 = "labels.collaborate_with";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"box-with-header\">\n    <header class=\"toolbar border border-round-t border-trbl\">\n      <div class=\"filters\">\n        <input type=\"radio\"\n               aria-controls=\"available-users\"\n               id=\"users-filter-btn-";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n               name=\"filter\"\n               value=\"available-users\"\n               checked=\"checked\" />\n        <label for=\"users-filter-btn-";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <i class=\"icon-user\" aria-hidden=\"true\"></i>\n          ";
  stack1 = "People";
  stack2 = "labels.people";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        <input type=\"radio\"\n               aria-controls=\"available-groups\"\n               id=\"groups-filter-btn-";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n               name=\"filter\"\n               value=\"available-groups\" />\n        <label for=\"groups-filter-btn-";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <i class=\"icon-group\" aria-hidden=\"true\"></i>\n          ";
  stack1 = "Groups";
  stack2 = "labels.groups";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </header>\n\n    <div class=\"box-content border border-round-b border-rbl\">\n      <div class=\"list-wrapper available-lists\">\n        <div class=\"list-view\">\n          <ul class=\"available-users\" aria-label=\"";
  stack1 = "Available users";
  stack2 = "labels.available_users";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=\"-1\">\n            <li class=\"loading-wrapper\">\n              <img src=\"/images/load.gif\" alt=\"";
  stack1 = "Loading";
  stack2 = "labels.loading";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n            </li>\n          </ul>\n          <ul class=\"available-groups\" aria-label=\"";
  stack1 = "Available groups";
  stack2 = "labels.available_groups";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=\"-1\">\n            <li class=\"loading-wrapper\">\n              <img src=\"/images/load.gif\" alt=\"";
  stack1 = "Loading";
  stack2 = "labels.loading";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"list-wrapper\">\n        <div class=\"members-list-wrapper list-view\">\n          <header class=\"remove-button\">\n            <a href=\"#\" class=\"remove-all\" role=\"button\">&times; ";
  stack1 = "Remove All";
  stack2 = "labels.remove_all";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </header>\n          <p class=\"member-instructions\">\n            ";
  stack1 = "Click or tap a user or group in the left-hand column to add Collaborators.";
  stack2 = "member_instructions";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </p>\n          <ul class=\"members-list\"\n              tabindex=\"-1\"\n              aria-label=\"";
  stack1 = "Collaboration members";
  stack2 = "labels.collaboration_members";
  stack3 = {};
  stack4 = "collaborations.collaborator_picker";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['collaborations/CollaboratorPicker'];
});
