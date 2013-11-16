define('jst/conferences/concludedConference', ["compiled/handlebars_helpers","i18n!conferences.concluded_conference"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conferences/concludedConference'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <div class=\"conference-length align-center ";
  foundHelper = helpers.has_actions;
  stack1 = foundHelper || depth0.has_actions;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  foundHelper = helpers.recording;
  stack1 = foundHelper || depth0.recording;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.duration_minutes);
  foundHelper = helpers.minutesToHM;
  stack2 = foundHelper || depth0.minutesToHM;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "minutesToHM", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n      </div>\n    ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "has_actions";}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a class=\"icon-trash delete_conference_link\" href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" aria-label=\"";
  stack1 = "Delete";
  stack2 = "delete";
  stack3 = {};
  stack4 = "conferences.concluded_conference";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n      ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <a href=\"";
  foundHelper = helpers.recording;
  stack1 = foundHelper || depth0.recording;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.playback_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "recording.playback_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"btn btn-small\" target=\"_blank\">\n        ";
  stack1 = "View";
  stack2 = "view";
  stack3 = {};
  stack4 = "conferences.concluded_conference";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    ";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      ";
  foundHelper = helpers.user_settings;
  stack1 = foundHelper || depth0.user_settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.record);
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        ";
  stack1 = "Preparing Video";
  stack2 = "preparing_video";
  stack3 = {};
  stack4 = "conferences.concluded_conference";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        ";
  stack1 = "No Recording";
  stack2 = "no_recording";
  stack3 = {};
  stack4 = "conferences.concluded_conference";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

  buffer += "<div class=\"conference table-row\">\n  <div class=\"table-cell conference-title ellipsis\" title=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    ";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  </div>\n  <div class=\"table-cell conference-description\">\n    ";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  foundHelper = helpers.newlinesToBreak;
  stack2 = foundHelper || depth0.newlinesToBreak;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "newlinesToBreak", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n  </div>\n\n  <div class=\"table-cell conference-day align-center\">\n    ";
  foundHelper = helpers.ended_at;
  stack1 = foundHelper || depth0.ended_at;
  foundHelper = helpers.dateString;
  stack2 = foundHelper || depth0.dateString;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "dateString", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n  </div>\n\n  <div class=\"table-cell conference-actions align-center\">\n    ";
  foundHelper = helpers.recording;
  stack1 = foundHelper || depth0.recording;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"actions\">\n      ";
  foundHelper = helpers.permissions;
  stack1 = foundHelper || depth0.permissions;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['delete']);
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n\n  <div class=\"table-cell conference-recording align-right\">\n    ";
  foundHelper = helpers.recording;
  stack1 = foundHelper || depth0.recording;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['conferences/concludedConference'];
});
