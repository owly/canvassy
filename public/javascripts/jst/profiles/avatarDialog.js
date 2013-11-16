define('jst/profiles/avatarDialog', ["compiled/handlebars_helpers","i18n!profiles.avatar_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/avatarDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div id=\"profile_pic_dialog\">\n  <a href=\"#\" class=\"profile_pics_url\" style=\"display: none;\">&nbsp;</a>\n\n  ";
  stack1 = "Select the image you would like to use as your profile, or upload a new image:";
  stack2 = "profile_pictures";
  stack3 = {};
  stack4 = "profiles.avatar_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"profile_pic_list\"\n       style=\"background: #eee; padding: 5px; -moz-border-radius: 5px; margin: 5px 10px;\">\n    <h3 style=\"padding-left: 10px; padding-top: 10px;\">\n      ";
  stack1 = "Loading Images...";
  stack2 = "headers.loading_images";
  stack3 = {};
  stack4 = "profiles.avatar_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h3>\n    <div class=\"clear\"></div>\n  </div>\n\n  <a href=\"#\" class=\"add_pic_link add\">";
  stack1 = "Upload a new Image";
  stack2 = "links.upload_new_image";
  stack3 = {};
  stack4 = "profiles.avatar_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n  <form id=\"add_pic_form\" method=\"POST\" action=\"#\" style=\"display: none;\">\n    <input type=\"hidden\" name=\"format\" value=\"text\" />\n\n    <input id=\"attachment_uploaded_data\"\n           name=\"attachment[uploaded_data]\"\n           size=\"30\"\n           type=\"file\" />\n\n    <button type=\"submit\" class=\"btn btn-small\">\n      ";
  stack1 = "Add File";
  stack2 = "butons.add_picture_file";
  stack3 = {};
  stack4 = "profiles.avatar_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </form>\n</div>\n";
  return buffer;});
  
  
  return templates['profiles/avatarDialog'];
});
