define('jst/accounts/settings/ManualQuotas', ["compiled/handlebars_helpers","i18n!accounts.settings.manual_quotas"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/settings/ManualQuotas'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<fieldset class=\"quota_settings\">\n  <legend>";
  stack1 = "Manually Settable Quotas";
  stack2 = "manual_quotas_title";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"manual_quotas_type\">";
  stack1 = "Find course or group";
  stack2 = "select_type_label";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <select id=\"manual_quotas_type\" class=\"span2\">\n        <option value=\"course\">";
  stack1 = "Course ID";
  stack2 = "select_type_courses";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option value=\"group\">";
  stack1 = "Group ID";
  stack2 = "select_type_groups";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      </select>\n      <input id=\"manual_quotas_id\" type=\"text\" class=\"span2\" maxlength=\"13\">\n      <button id=\"manual_quotas_find_button\" type=\"button\" class=\"btn\">";
  stack1 = "Find";
  stack2 = "find_button";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </div>\n  <div id=\"manual_quotas_result\">\n    <hr/>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"manual_quotas_quota\">\n        <a id=\"manual_quotas_link\" href=\"#\" target=\"_blank\"></a>\n      </label>\n      <div class=\"controls\">\n        <div class=\"input-append\">\n          <input id=\"manual_quotas_quota\" type=\"text\" class=\"span2\" title=\"";
  stack1 = "megabytes";
  stack2 = "megabytes_tooltip";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\">\n          <span class=\"add-on\">";
  stack1 = "megabytes";
  stack2 = "megabytes";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"button-container\">\n      <div class=\"controls\">\n        <button id=\"manual_quotas_submit_button\" type=\"submit\" class=\"btn\">";
  stack1 = "Update Quota";
  stack2 = "update_button";
  stack3 = {};
  stack4 = "accounts.settings.manual_quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n    </div>\n  </div>\n</fieldset>\n";
  return buffer;});
  
  
  return templates['accounts/settings/ManualQuotas'];
});
