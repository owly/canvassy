define('jst/assignments/_submission_types_form', ["compiled/handlebars_helpers","i18n!assignments.submission_types_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/_submission_types_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <label class=\"checkbox\">\n          <input id=\"assignment_media_recording\"\n            name=\"online_submission_types[media_recording]\"\n            type=\"checkbox\"\n            ";
  foundHelper = helpers.acceptsMediaRecording;
  stack1 = foundHelper || depth0.acceptsMediaRecording;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n            ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n          ";
  stack1 = "Allow Media Recordings";
  stack2 = "labels.allow_media_recordings";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;}

  buffer += "<fieldset>\n\n  <div class=\"control-group\" style=\"margin-bottom:9px\">\n    <label for=\"assignment_submission_type\" class=\"control-label\">\n      ";
  stack1 = "Submission Type";
  stack2 = "submission_type";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <select id=\"assignment_submission_type\"\n        name=\"submission_type\"\n        aria-controls=\"assignment_online_submission_types,assignment_external_tool_settings,assignment_group_selector,assignment_peer_reviews_fields\"\n        ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n        <option value=\"none\" ";
  stack1 = "none";
  foundHelper = helpers.submissionType;
  stack2 = foundHelper || depth0.submissionType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n          ";
  stack1 = "No Submission";
  stack2 = "submission_types.no_submission";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"online\" ";
  stack1 = "online";
  foundHelper = helpers.submissionType;
  stack2 = foundHelper || depth0.submissionType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n          ";
  stack1 = "Online";
  stack2 = "submission_types.online";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"on_paper\" ";
  stack1 = "on_paper";
  foundHelper = helpers.submissionType;
  stack2 = foundHelper || depth0.submissionType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n          ";
  stack1 = "On Paper";
  stack2 = "submission_types.on_paper";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"external_tool\" ";
  stack1 = "external_tool";
  foundHelper = helpers.submissionType;
  stack2 = foundHelper || depth0.submissionType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n          ";
  stack1 = "External Tool";
  stack2 = "submission_types.external_tool";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div id=\"assignment_online_submission_types\"\n    class=\"control-group\"\n    aria-enabled=\"";
  foundHelper = helpers.isOnlineSubmission;
  stack1 = foundHelper || depth0.isOnlineSubmission;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "isOnlineSubmission", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n    style=\"";
  foundHelper = helpers.isOnlineSubmission;
  stack1 = foundHelper || depth0.isOnlineSubmission;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n    <div class=\"controls\">\n      <label class=\"checkbox\">\n        <input id=\"assignment_text_entry\"\n          name=\"online_submission_types[online_text_entry]\"\n          type=\"checkbox\"\n          ";
  foundHelper = helpers.acceptsOnlineTextEntries;
  stack1 = foundHelper || depth0.acceptsOnlineTextEntries;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n          ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n        ";
  stack1 = "Allow Text Entry";
  stack2 = "labels.allow_text_entry";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n\n    <div class=\"controls\">\n      <label class=\"checkbox\">\n        <input id=\"assignment_online_url\"\n          name=\"online_submission_types[online_url]\"\n          type=\"checkbox\"\n          ";
  foundHelper = helpers.acceptsOnlineURL;
  stack1 = foundHelper || depth0.acceptsOnlineURL;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n          ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n        ";
  stack1 = "Allow Website URL";
  stack2 = "labels.allow_url";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n\n    <div class=\"controls\">\n      ";
  foundHelper = helpers.kalturaEnabled;
  stack1 = foundHelper || depth0.kalturaEnabled;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"controls\">\n      <label class=\"checkbox\" for=\"assignment_online_upload\">\n        <input id=\"assignment_online_upload\"\n          name=\"online_submission_types[online_upload]\"\n          type=\"checkbox\"\n          aria-controls=\"restrict_file_extensions_container\"\n          ";
  foundHelper = helpers.acceptsOnlineUpload;
  stack1 = foundHelper || depth0.acceptsOnlineUpload;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n          ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n        ";
  stack1 = "Allow File Uploads";
  stack2 = "labels.allow_file_uploads";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n\n    <div id=\"restrict_file_extensions_container\"\n      aria-expanded=\"";
  foundHelper = helpers.acceptsOnlineUpload;
  stack1 = foundHelper || depth0.acceptsOnlineUpload;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "acceptsOnlineUpload", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n      style=\"";
  foundHelper = helpers.acceptsOnlineUpload;
  stack1 = foundHelper || depth0.acceptsOnlineUpload;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"assignment_restrict_file_extensions\">\n          <input id=\"assignment_restrict_file_extensions\"\n            name=\"restrict_file_extensions\"\n            type=\"checkbox\"\n            aria-controls=\"allowed_extensions_container\"\n            ";
  foundHelper = helpers.restrictFileExtensions;
  stack1 = foundHelper || depth0.restrictFileExtensions;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n            ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n          ";
  stack1 = "Restrict Upload File Types";
  stack2 = "labels.restrict_file_extensions";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div id=\"allowed_extensions_container\"\n        aria-expanded=\"";
  foundHelper = helpers.restrictFileExtensions;
  stack1 = foundHelper || depth0.restrictFileExtensions;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "restrictFileExtensions", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n        style=\"";
  foundHelper = helpers.restrictFileExtensions;
  stack1 = foundHelper || depth0.restrictFileExtensions;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n        <label for=\"assignment_allowed_extensions\" class=\"hidden-readable\">\n          ";
  stack1 = "Allowed File Extensions";
  stack2 = "labels.allowed_extensions";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        <div class=\"controls\">\n          <input id=\"assignment_allowed_extensions\"\n            name=\"allowed_extensions\"\n            type=\"text\"\n            placeholder=\"";
  stack1 = "Allowed File Extensions";
  stack2 = "labels.allowed_extensions";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            value=\"";
  stack1 = ",";
  foundHelper = helpers.allowedExtensions;
  stack2 = foundHelper || depth0.allowedExtensions;
  foundHelper = helpers.join;
  stack3 = foundHelper || depth0.join;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "join", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\"\n            ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n            <div class=\"explanation\">\n              ";
  stack1 = "Enter a list of accepted extensions, for example: doc,xls,txt";
  stack2 = "descriptions.allowed_extensions";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"controls\" style=\"";
  foundHelper = helpers.turnitinAvailable;
  stack1 = foundHelper || depth0.turnitinAvailable;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n      <label for=\"assignment_turnitin_enabled\" class=\"checkbox\">\n        <input id=\"assignment_turnitin_enabled\"\n          name=\"turnitin_enabled\"\n          type=\"checkbox\"\n          aria-controls=\"advanced_turnitin_settings_link\"\n          ";
  foundHelper = helpers.turnitinEnabled;
  stack1 = foundHelper || depth0.turnitinEnabled;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n          ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n        ";
  stack1 = "Enable Turnitin Submissions";
  stack2 = "label.turnitin_enabled";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n\n      <a href=\"#\"\n        id=\"advanced_turnitin_settings_link\"\n        aria-expanded=\"";
  foundHelper = helpers.turnitinEnabled;
  stack1 = foundHelper || depth0.turnitinEnabled;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "turnitinEnabled", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n        style=\"";
  foundHelper = helpers.turnitinEnabled;
  stack1 = foundHelper || depth0.turnitinEnabled;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n        ";
  stack1 = "Advanced Turnitin Settings";
  stack2 = "advanced_turnitin_settings";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n\n  </div>\n\n  <div id=\"assignment_external_tool_settings\" style=\"";
  foundHelper = helpers.isExternalTool;
  stack1 = foundHelper || depth0.isExternalTool;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n    <div class=\"control-group\" style=\"margin-bottom:9px\">\n      <label for=\"assignment_external_tool_tag_attributes_url\" class=\"control-label\">\n        ";
  stack1 = "External Tool URL";
  stack2 = "label.external_tool_url";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <input id=\"assignment_external_tool_tag_attributes_url\"\n          name=\"external_tool_tag_attributes[url]\"\n          type=\"text\"\n          value=\"";
  foundHelper = helpers.externalToolUrl;
  stack1 = foundHelper || depth0.externalToolUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "externalToolUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n          ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label for=\"assignment_external_tool_tag_attributes_new_tab\" class=\"checkbox\">\n          <input id=\"assignment_external_tool_tag_attributes_new_tab\"\n            name=\"external_tool_tag_attributes[new_tab]\"\n            type=\"checkbox\"\n            ";
  foundHelper = helpers.externalToolNewTab;
  stack1 = foundHelper || depth0.externalToolNewTab;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n            ";
  stack1 = "submission_types";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n          ";
  stack1 = "Load This Tool In A New Tab";
  stack2 = "label.external_tool_new_tab";
  stack3 = {};
  stack4 = "assignments.submission_types_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n\n  </div>\n\n</fieldset>\n";
  return buffer;});
  
Handlebars.registerPartial('assignments/submission_types_form', templates['assignments/_submission_types_form']);

  
  return templates['assignments/_submission_types_form'];
});
