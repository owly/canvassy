define('jst/profiles/notifications/privacyNotice', ["compiled/handlebars_helpers","i18n!profiles.notifications.privacy_notice"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/notifications/privacyNotice'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div id=\"privacy-notice\" data-title=\"";
  stack1 = "Privacy Notice";
  stack2 = "privacy_notice_title";
  stack3 = {};
  stack4 = "profiles.notifications.privacy_notice";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <p>";
  stack1 = "Notice: Some notifications may contain confidential information. Selecting to receive notifications at an email other than your institution provided address may result in sending sensitive Canvas course and group information outside of the institutional system.";
  stack2 = "privacy_notice";
  stack3 = {};
  stack4 = "profiles.notifications.privacy_notice";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n  <div class=\"button-container\">\n    <button class=\"btn btn-primary dialog_closer\">";
  stack1 = "Ok";
  stack2 = "ok";
  stack3 = {};
  stack4 = "profiles.notifications.privacy_notice";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['profiles/notifications/privacyNotice'];
});
