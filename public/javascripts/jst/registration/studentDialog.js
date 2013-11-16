define('jst/registration/studentDialog', ["compiled/handlebars_helpers","i18n!registration.student_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['registration/studentDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"registration-dialog\">\n  <form class=\"form-horizontal bootstrap-form\" method=\"post\" action=\"/users\">\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"student_join_code\">";
  stack1 = "Join Code";
  stack2 = "labels.join_code";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"student_join_code\" name=\"user[self_enrollment_code]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"student_name\">";
  stack1 = "Full Name";
  stack2 = "labels.name";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"student_name\" name=\"user[name]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"student_username\">";
  stack1 = "Username";
  stack2 = "labels.username";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"student_username\" name=\"pseudonym[unique_id]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"student_password\">";
  stack1 = "Password";
  stack2 = "labels.password";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"password\" id=\"student_password\" name=\"pseudonym[password]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"student_password_confirmation\">";
  stack1 = "Confirm Password";
  stack2 = "labels.password_confirmation";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"password\" id=\"student_password_confirmation\" name=\"pseudonym[password_confirmation]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"user[terms_of_use]\" value=\"1\">\n          ";
  stack1 = "You agree to the *terms of use* and the **privacy policy**.";
  stack2 = "agree_to_terms_and_pp";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  stack4 = "<a href=\"%{terms_url}\" target=\"_blank\">$1</a>";
  stack3['w0'] = stack4;
  stack4 = "<a href=\"%{privacy_url}\" target=\"_blank\">$1</a>";
  stack3['w1'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input type=\"hidden\" name=\"user[initial_enrollment_type]\" value=\"student\">\n        <input type=\"hidden\" name=\"self_enrollment\" value=\"1\">\n        <input type=\"hidden\" name=\"pseudonym_type\" value=\"username\">\n        <button class=\"btn btn-primary\" type=\"submit\">";
  stack1 = "Start Learning";
  stack2 = "buttons.start_learning";
  stack3 = {};
  stack4 = "registration.student_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n    </div>\n  </form>\n</div>\n";
  return buffer;});
  
  
  return templates['registration/studentDialog'];
});
