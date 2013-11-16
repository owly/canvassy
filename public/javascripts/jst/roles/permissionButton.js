define('jst/roles/permissionButton', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!roles.permission_button"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/permissionButton'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "title=\"Default\"";}

function program3(depth0,data) {
  
  
  return "default_permission";}

function program5(depth0,data) {
  
  
  return "disabled=\"disabled\" data-tooltip title=\"You do not have permission to change this\" ";}

function program7(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program9(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program11(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program13(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program15(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program17(depth0,data) {
  
  
  return "checked=\"checked\"";}

  buffer += "<div class=\"btn-group\" ";
  foundHelper = helpers.addDefaultTitle;
  stack1 = foundHelper || depth0.addDefaultTitle;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <a class=\"btn btn-small dropdown-toggle ";
  foundHelper = helpers['default'];
  stack1 = foundHelper || depth0['default'];
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" data-toggle=\"dropdown\" ";
  foundHelper = helpers.readOnly;
  stack1 = foundHelper || depth0.readOnly;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"icon-check\"></i><i class=\"icon-lock\"></i></a>\n\n  <div class=\"dropdown-menu\" role=\"radiogroup\">\n    <input type=\"radio\" name=\"permission-for-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"0\" role=\"radio\" id=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-0\" ";
  foundHelper = helpers.enableChecked;
  stack1 = foundHelper || depth0.enableChecked;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " >\n    <label tabindex=\"0\" for=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-0\"><i class=\"icon-check\"></i></i><span class=\"text\">";
  stack1 = "Enable";
  stack2 = "rolebutton.enable";
  stack3 = {};
  stack4 = "roles.permission_button";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"0\" role=\"radio\" id=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-1\" ";
  foundHelper = helpers.enableAndLockChecked;
  stack1 = foundHelper || depth0.enableAndLockChecked;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=1 for=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-1\"><i class=\"icon-check\"></i><i class=\"icon-lock\"></i><span class=\"text\">";
  stack1 = "Enable and Lock";
  stack2 = "rolebutton.enable_and_lock";
  stack3 = {};
  stack4 = "roles.permission_button";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"0\" role=\"radio\" id=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-2\" ";
  foundHelper = helpers.disableChecked;
  stack1 = foundHelper || depth0.disableChecked;
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=2 for=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-2\"><i class=\"icon-x\"></i><span class=\"text\">";
  stack1 = "Disable";
  stack2 = "rolebutton.disable";
  stack3 = {};
  stack4 = "roles.permission_button";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"0\" role=\"radio\" id=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-3\" ";
  foundHelper = helpers.disableAndLockChecked;
  stack1 = foundHelper || depth0.disableAndLockChecked;
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=3 for=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-3\"><i class=\"icon-x\"></i><i class=\"icon-lock\"></i><span class=\"text\">";
  stack1 = "Disable and Lock";
  stack2 = "rolebutton.disable_and_lock";
  stack3 = {};
  stack4 = "roles.permission_button";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n    <li class=\"divider\"></li>\n\n    <input type=\"radio\" name=\"permission-for-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"0\" role=\"radio\" id=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-4\" ";
  foundHelper = helpers.systemDefaultChecked;
  stack1 = foundHelper || depth0.systemDefaultChecked;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=4 for=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-4\" class=\"clearfix\"><span class=\"text\">";
  stack1 = "Use Default";
  stack2 = "rolebutton.use_default";
  stack3 = {};
  stack4 = "roles.permission_button";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"0\" role=\"radio\" id=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-5\" ";
  foundHelper = helpers.systemDefaultLockedChecked;
  stack1 = foundHelper || depth0.systemDefaultLockedChecked;
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=5 for=\"button-";
  foundHelper = helpers.cid;
  stack1 = foundHelper || depth0.cid;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "cid", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-5\" class=\"clearfix\"><i class=\"icon-lock\"></i><span class=\"text\">";
  stack1 = "Use Default";
  stack2 = "rolebutton.use_default";
  stack3 = {};
  stack4 = "roles.permission_button";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n </div>\n</div>\n";
  return buffer;});
  
  
arguments[1]('roles/permissionButton', ".table td.permissionButtonView {\n  position: relative; }\n  .table td.permissionButtonView .default_permission {\n    opacity: .5; }\n  .table td.permissionButtonView .icon-x {\n    color: #9B0000; }\n  .table td.permissionButtonView .icon-check {\n    color: green; }\n  .table td.permissionButtonView .btn-group {\n    margin: 0 auto;\n    width: 40px;\n    position: relative; }\n    .table td.permissionButtonView .btn-group .btn.dropdown-toggle {\n      position: relative;\n      min-width: 35px; }\n      .table td.permissionButtonView .btn-group .btn.dropdown-toggle:disabled, .table td.permissionButtonView .btn-group .btn.dropdown-toggle[disabled] {\n        background: none;\n        border: none; }\n        .table td.permissionButtonView .btn-group .btn.dropdown-toggle:disabled .icon-lock, .table td.permissionButtonView .btn-group .btn.dropdown-toggle[disabled] .icon-lock {\n          display: none; }\n  .table td.permissionButtonView .dropdown-menu {\n    text-align: left;\n    /*left: 30%;*/ }\n    .table td.permissionButtonView .dropdown-menu input[type=radio] {\n      /* Display none breaks ie so we position it off the page */\n      position: absolute;\n      left: -9999px; }\n    .table td.permissionButtonView .dropdown-menu label {\n      display: block;\n      padding: 5px; }\n    .table td.permissionButtonView .dropdown-menu span.text {\n      float: right;\n      text-align: left !important;\n      width: 110px; }\n      .table td.permissionButtonView .dropdown-menu span.text:last {\n        float: none;\n        text-align: center;\n        display: block; }\n    .table td.permissionButtonView .dropdown-menu label:hover, .table td.permissionButtonView .dropdown-menu label:focus, .table td.permissionButtonView .dropdown-menu input:checked + label {\n      text-decoration: none;\n      color: white;\n      background-color: #08C;\n      background-color: #0081C2;\n      background-image: -moz-linear-gradient(top, #0088cc, #0077b3);\n      background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0077b3));\n      background-image: -webkit-linear-gradient(top, #0088cc, #0077b3);\n      background-image: -o-linear-gradient(top, #0088cc, #0077b3);\n      background-image: linear-gradient(to bottom, #0088cc, #0077b3);\n      background-repeat: repeat-x;\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF0088CC', endColorstr='#FF0077B3', GradientType=0); }\n\ntable#course_roles thead, table#account_roles thead {\n  background: #fff; }\n");

  return templates['roles/permissionButton'];
});
