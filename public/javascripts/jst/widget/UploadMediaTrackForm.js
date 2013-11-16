define('jst/widget/UploadMediaTrackForm', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!widget.upload_media_track_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['widget/UploadMediaTrackForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <p class=\"alert alert-info\">";
  stack1 = "*Instructions:* Follow these three steps to create a subtitle file for your video, then upload it here. If you already have an SRT subtitle file you can skip to step 3.";
  stack2 = "upload_media_track_info";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  stack4 = "<strong>$1</strong>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <div class=\"media-track-step\">\n        <p class=\"uploadMediaTrackFormDescription\">\n        <strong>";
  stack1 = "Step 1:";
  stack2 = "upload_media_track_form_step1_label";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  stack1 = "Copy this video url:";
  stack2 = "upload_media_track_form_description_1";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </p>\n        <div class=\"content-callout media-track-video-url\">";
  foundHelper = helpers.video_url;
  stack1 = foundHelper || depth0.video_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "video_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n      </div><!-- media track step -->\n\n      <div class=\"media-track-step\">\n        <p class=\"uploadMediaTrackFormDescription\">\n        <strong>";
  stack1 = "Step 2:";
  stack2 = "upload_media_track_form_step2_label";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  stack1 = "Create a subtitle file by clicking this link and following the instructions.";
  stack2 = "upload_media_track_form_description_2";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </p>\n\n        <div class=\"content-box media-track-content-box\">\n          <form action=\"http://www.universalsubtitles.org/en/videos/create/\" method=\"POST\" target=\"_blank\" >\n            <input type=\"hidden\" name=\"video_url\" value=\"";
  foundHelper = helpers.video_url;
  stack1 = foundHelper || depth0.video_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "video_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n            <button class=\"btn btn-small media-track-form-button\" type=\"submit\" value=\"Begin\">";
  stack1 = "Go to subtitle creation tool";
  stack2 = "media_track_form_button";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n          </form>\n        </div>\n      </div><!-- media track step -->\n    ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <strong>";
  stack1 = "Step 3:";
  stack2 = "upload_media_track_form_step3_label";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  stack1 = "Once you have a subtitle track in either the SRT or *WebVTT* format, you can upload it here.";
  stack2 = "upload_media_track_form_description";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  stack4 = "<a target=\"_blank\" href=\"http://dev.w3.org/html5/webvtt/\">$1</a>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          ";
  stack1 = "Upload a subtitle track in either the SRT or *WebVTT* format.";
  stack2 = "upload_media_track_form_description_3";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  stack4 = "<a target=\"_blank\" href=\"http://dev.w3.org/html5/webvtt/\">$1</a>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <option value=\"";
  foundHelper = helpers.code;
  stack1 = foundHelper || depth0.code;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n              ";
  return buffer;}

  buffer += "<div title=\"Create/Add Subtitles\" class=\"uploadMediaTrackForm bootstrap-form form-horizontal\">\n  \n  ";
  foundHelper = helpers.is_amazon_url;
  stack1 = foundHelper || depth0.is_amazon_url;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"content-box border border-trbl border-round\">\n    ";
  foundHelper = helpers.is_amazon_url;
  stack1 = foundHelper || depth0.is_amazon_url;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"media-track-step\">\n\n      <p class=\"uploadMediaTrackFormDescription\">\n        ";
  foundHelper = helpers.is_amazon_url;
  stack1 = foundHelper || depth0.is_amazon_url;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n\n      <div class=\"content-box media-track-content-box\">\n        <div class=\"invalidInputMsg alert alert-error\" style=\"display:none;\">\n          ";
  stack1 = "*Error:* You must choose a language and a valid track file.";
  stack2 = "error_message";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  stack4 = "<strong>$1</strong>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"umtf_locale\">";
  stack1 = "Language";
  stack2 = "language";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <div class=\"controls\">\n            <select name=\"locale\" id=\"umtf_locale\">\n              <option value=''>";
  stack1 = "--Choose a Language--";
  stack2 = "choose_a_language";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n              ";
  foundHelper = helpers.languages;
  stack1 = foundHelper || depth0.languages;
  stack2 = helpers.each;
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n          </div>\n        </div><!-- control group end -->\n\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"umtf_content\">";
  stack1 = "File";
  stack2 = "file";
  stack3 = {};
  stack4 = "widget.upload_media_track_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <div class=\"controls\">\n            <input class=\"input-file\" id=\"umtf_content\" name=\"content\" type=\"file\">\n          </div>\n        </div><!-- control group end -->\n      </div><!-- content-box end -->\n    </div><!-- media track step -->\n   </div><!-- end border border-tbl -->\n</div>\n";
  return buffer;});
  
  
arguments[1]('widget/UploadMediaTrackForm', ".uploadMediaTrackForm .media-track-video-url {\n  background-color: #F4F3EE;\n  display: block;\n  text-align: center;\n  padding: 10px;\n  margin-bottom: 10px; }\n.uploadMediaTrackForm .media-track-content-box {\n  padding: 10px;\n  margin: 0 auto;\n  display: block;\n  margin-bottom: 10px; }\n  .uploadMediaTrackForm .media-track-content-box form {\n    padding: 0px; }\n.uploadMediaTrackForm .media-track-form-button {\n  padding: 10px;\n  display: block;\n  margin: 0 auto;\n  width: 100%; }\n");

  return templates['widget/UploadMediaTrackForm'];
});
