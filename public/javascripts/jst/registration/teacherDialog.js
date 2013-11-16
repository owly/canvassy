define('jst/registration/teacherDialog', ["compiled/handlebars_helpers","i18n!registration.teacher_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['registration/teacherDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"registration-dialog\">\n  <form class=\"form-horizontal bootstrap-form\" method=\"post\" action=\"/users\">\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"teacher_name\">";
  stack1 = "Name";
  stack2 = "labels.name";
  stack3 = {};
  stack4 = "registration.teacher_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"teacher_name\" name=\"user[name]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"teacher_email\">";
  stack1 = "Email";
  stack2 = "labels.email";
  stack3 = {};
  stack4 = "registration.teacher_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"teacher_email\" name=\"pseudonym[unique_id]\">\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"user[terms_of_use]\" value=\"1\">\n          ";
  stack1 = "You agree to the *terms of use* and the **privacy policy**.";
  stack2 = "agree_to_terms_and_pp";
  stack3 = {};
  stack4 = "registration.teacher_dialog";
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
  buffer += "\n        </label>\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input type=\"hidden\" name=\"user[initial_enrollment_type]\" value=\"teacher\">\n        <button class=\"btn btn-primary\" type=\"submit\">";
  stack1 = "Start Teaching";
  stack2 = "buttons.start_teaching";
  stack3 = {};
  stack4 = "registration.teacher_dialog";
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
  
  
  return templates['registration/teacherDialog'];
});
