define('jst/accounts/settings/Quotas', ["compiled/handlebars_helpers","i18n!accounts.settings.quotas"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/settings/Quotas'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<fieldset class=\"quota_settings\">\n  <legend>";
  stack1 = "Default Account Quotas";
  stack2 = "default_account_quota_title";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"default_course_storage_mb\">";
  stack1 = "Course Quota";
  stack2 = "default_course_storage_quota";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <div class=\"input-append\">\n        <input name=\"default_storage_quota_mb\" type=\"text\" class=\"span2\" title=\"";
  stack1 = "megabytes";
  stack2 = "megabytes_tooltip";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\" value=\"";
  foundHelper = helpers.default_storage_quota_mb;
  stack1 = foundHelper || depth0.default_storage_quota_mb;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "default_storage_quota_mb", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n        <span class=\"add-on\">";
  stack1 = "megabytes";
  stack2 = "megabytes";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"default_user_storage_mb\">";
  stack1 = "User Quota";
  stack2 = "default_user_storage_quota";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <div class=\"input-append\">\n        <input name=\"default_user_storage_quota_mb\" type=\"text\" class=\"span2\" title=\"";
  stack1 = "megabytes";
  stack2 = "megabytes_tooltip";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\" value=\"";
  foundHelper = helpers.default_user_storage_quota_mb;
  stack1 = foundHelper || depth0.default_user_storage_quota_mb;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "default_user_storage_quota_mb", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n        <span class=\"add-on\">";
  stack1 = "megabytes";
  stack2 = "megabytes";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"control-group\">\n      <label class=\"control-label\" for=\"default_group_storage_mb\">";
  stack1 = "Group Quota";
  stack2 = "default_group_storage_quota";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <div class=\"input-append\">\n          <input name=\"default_group_storage_quota_mb\" type=\"text\" class=\"span2\" title=\"";
  stack1 = "megabytes";
  stack2 = "megabytes_tooltip";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\" value=\"";
  foundHelper = helpers.default_group_storage_quota_mb;
  stack1 = foundHelper || depth0.default_group_storage_quota_mb;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "default_group_storage_quota_mb", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <span class=\"add-on\">";
  stack1 = "megabytes";
  stack2 = "megabytes";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n    </div>\n\n  <div class=\"button-container\">\n    <div class=\"controls\">\n      <button type=\"submit\" class=\"btn\">";
  stack1 = "Update";
  stack2 = "update_button";
  stack3 = {};
  stack4 = "accounts.settings.quotas";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </div>\n</fieldset>\n";
  return buffer;});
  
  
  return templates['accounts/settings/Quotas'];
});
