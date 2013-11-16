define('jst/registration/login', ["compiled/handlebars_helpers","i18n!registration.login"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['registration/login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<form method=\"post\" action=\"/login\" id=\"login_form\" class=\"bootstrap-form\">\n  <input type=\"hidden\" name=\"redirect_to_ssl\" value=\"1\"/>\n  <div>\n    <input name=\"pseudonym_session[unique_id]\" class=\"login-input\" type=\"text\" placeholder=\"";
  foundHelper = helpers.login_handle_name;
  stack1 = foundHelper || depth0.login_handle_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login_handle_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  </div>\n  <div>\n    <input name=\"pseudonym_session[password]\" class=\"login-input\" type=\"password\" placeholder=\"";
  stack1 = "Password";
  stack2 = "password";
  stack3 = {};
  stack4 = "registration.login";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  </div>\n  <div>\n    <button type=\"submit\">";
  stack1 = "Sign In";
  stack2 = "sign_in";
  stack3 = {};
  stack4 = "registration.login";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button> \n  </div>\n  <label class=\"checkbox\">\n    <input name=\"pseudonym_session[remember_me]\" type=\"checkbox\">\n    ";
  stack1 = "Remember Me";
  stack2 = "remember_me";
  stack3 = {};
  stack4 = "registration.login";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</form>";
  return buffer;});
  
  
  return templates['registration/login'];
});
