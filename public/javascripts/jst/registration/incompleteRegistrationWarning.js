define('jst/registration/incompleteRegistrationWarning', ["compiled/handlebars_helpers","i18n!registration.incomplete_registration_warning"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['registration/incompleteRegistrationWarning'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div style=\"margin:1em 2em;font-size:1.1em\">\n  <p>\n    ";
  stack1 = "Your account is almost set up. To finish, please check your email at *%{email}* to set your password.";
  stack2 = "set_up_account";
  stack3 = {};
  stack4 = "registration.incomplete_registration_warning";
  stack3['scope'] = stack4;
  stack4 = "<b>$1</b>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  <p>\n    ";
  stack1 = "You can start participating now, but you must set a password before you can log back in.";
  stack2 = "start_participating";
  stack3 = {};
  stack4 = "registration.incomplete_registration_warning";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n</div>";
  return buffer;});
  
  
  return templates['registration/incompleteRegistrationWarning'];
});
