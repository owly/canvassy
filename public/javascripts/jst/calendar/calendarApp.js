define('jst/calendar/calendarApp', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!calendar.calendar_app"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/calendarApp'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  
  return "class=\"with-scheduler\"";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <a id=\"change-calendar-version\" href=\"/switch_calendar/1\" data-method=\"post\" rel=\"nofollow\" class=\"btn\">";
  stack1 = "Old Calendar";
  stack2 = "use_old_calendar";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <input type=\"radio\" id=\"scheduler\" name=\"calendar_view\" /><label for=\"scheduler\">";
  stack1 = "Scheduler";
  stack2 = "links.calendar_scheduler";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <span stye=\"display: none\" class=\"counter-badge\"></span></label>\n    ";
  return buffer;}

  buffer += "<div id=\"calendar-header\" ";
  foundHelper = helpers.showScheduler;
  stack1 = foundHelper || depth0.showScheduler;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <a href=\"#\" id=\"refresh_calendar_link\" title=\"";
  stack1 = "Refresh";
  stack2 = "refresh";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-tooltip>";
  stack1 = "Refresh";
  stack2 = "refresh";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"#\" id=\"create_new_event_link\" class=\"icon-add\" title=\"";
  stack1 = "Create New Event";
  stack2 = "create_event";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-tooltip></a>\n\n  ";
  foundHelper = helpers.calendar2Only;
  stack1 = foundHelper || depth0.calendar2Only;
  stack2 = helpers.unless;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <a href=\"http://guides.instructure.com/s/2204/m/4152/l/59600-how-is-the-new-calendar-different-from-the-old-calendar\" class=\"whats-new\">What's new?</a>\n\n  <span id=\"calendar_views\">\n    <input type=\"radio\" id=\"week\"      name=\"calendar_view\" /><label for=\"week\">";
  stack1 = "Week";
  stack2 = "links.calendar_week";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <input type=\"radio\" id=\"month\"     name=\"calendar_view\" checked=\"checked\" /><label for=\"month\">";
  stack1 = "Month";
  stack2 = "links.calendar_month";
  stack3 = {};
  stack4 = "calendar.calendar_app";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    ";
  foundHelper = helpers.showScheduler;
  stack1 = foundHelper || depth0.showScheduler;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </span>\n</div>\n\n<div class=\"scheduler-wrapper\" style=\"display: none\">\n  <div class=\"appointment-list\">\n    <div class=\"list-wrapper\"></div>\n  </div>\n</div>\n<div class=\"calendar\"></div>\n";
  return buffer;});
  
  
arguments[1]('calendar/calendarApp', "#main {\n  background-color: transparent;\n  border: none; }\n\n#content {\n  padding-right: 0; }\n\n#calendar-app {\n  position: relative; }\n\n#calendar-header {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 55%; }\n  #calendar-header.with-scheduler {\n    width: 58%; }\n\n#change-calendar-version {\n  float: right; }\n\n.calendar .fc-content {\n  background-color: white; }\n.calendar .fc-view-month .fc-widget-header {\n  color: #627382;\n  font-size: 14px;\n  background-color: #f6f7f9;\n  line-height: 35px; }\n.calendar .fc-widget-header, .calendar .fc-widget-content {\n  border-color: #dadada; }\n.calendar .fc-header h2, .calendar .fc-header .h2 {\n  font-size: 18px;\n  padding: 0 16px;\n  line-height: 32px; }\n.calendar .fc-other-month {\n  color: #b4b3b3;\n  background-color: #f8f9f9; }\n.calendar .fc-state-highlight {\n  background-color: #ecf3f6;\n  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3); }\n.calendar .fc-event-inner {\n  border-color: inherit;\n  width: auto;\n  padding-left: 3px; }\n.calendar .fc-event-time {\n  font-weight: bold; }\n.calendar .fc-agenda .fc-agenda-slots .fc-agenda-axis {\n  border-top-color: transparent; }\n.calendar .fc-agenda .fc-widget-header {\n  background-color: #f6f7f9; }\n.calendar .fc-agenda .scheduler-reserved {\n  font-weight: bold; }\n.calendar .fc-agenda .scheduler-full {\n  background-color: #eeeeee !important; }\n.calendar .agenda-col-wrapper {\n  overflow: hidden;\n  display: inline-block;\n  color: #617582;\n  font-size: 9px;\n  font-weight: bold;\n  padding: 10px 0;\n  text-transform: uppercase;\n  text-align: left; }\n  .calendar .agenda-col-wrapper .day-num {\n    font-size: 24px;\n    float: left;\n    padding-right: 5px;\n    line-height: 23px;\n    text-shadow: -1px -1px 1px white; }\n  .calendar .agenda-col-wrapper .day-name {\n    float: left;\n    line-height: 13px; }\n  .calendar .agenda-col-wrapper .month-name {\n    line-height: 10px;\n    float: left;\n    color: #9da5ab; }\n\n.fc-event.assignment, .fc-event.assignment_override {\n  background-color: white; }\n  .fc-event.assignment .fc-event-inner div, .fc-event.assignment_override .fc-event-inner div {\n    display: inline; }\n\n.counter-badge {\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  border-radius: 8px;\n  background-color: #3cb5fb;\n  color: white;\n  text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 1px 0px 1px rgba(0, 0, 0, 0.3);\n  padding: 1px 6px; }\n\n#refresh_calendar_link {\n  text-indent: -119988px;\n  overflow: hidden;\n  text-align: left;\n  width: 16px;\n  height: 16px;\n  float: right;\n  background-image: url(\"/images/ajax-loader-black-on-white-static.gif\");\n  background-position: 50% 50%;\n  margin-left: 3px;\n  position: relative;\n  top: 7px; }\n  #refresh_calendar_link.loading {\n    background-image: url(\"/images/ajax-loader-black-on-white.gif\"); }\n\n#create_new_event_link {\n  float: right;\n  position: relative;\n  top: 3px;\n  color: #444444;\n  margin-left: 5px; }\n\n.event-details {\n  position: absolute;\n  z-index: 1000;\n  border: 1px solid #b0afaf;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);\n  background-color: white;\n  min-width: 250px;\n  max-width: 500px; }\n  .event-details h3, .event-details .h3 {\n    margin-bottom: 0; }\n  .event-details.carat-bottom .ui-menu-carat span {\n    border-color: white transparent; }\n  .event-details ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n    .event-details ul li {\n      margin: 0;\n      padding: 0; }\n  .event-details th {\n    font-weight: bold;\n    padding-bottom: 3px;\n    padding-right: 8px; }\n  .event-details td, .event-details th {\n    vertical-align: top; }\n  .event-details .delete_event_link {\n    float: right !important; }\n  .event-details .event-details-content {\n    overflow: auto; }\n\n.event-details-timestring {\n  margin: 5px 0 10px;\n  color: #666666;\n  font-size: 14px; }\n\n.event-details-links a {\n  padding-right: 6px;\n  line-height: 28px;\n  border-right: 1px solid #333333; }\n.event-details-links a:last-child {\n  border-right: none; }\n\n.event-details-header,\n.event-details-content,\n.event-details-footer {\n  overflow: hidden;\n  *zoom: 1;\n  padding: 10px;\n  border-bottom: 1px solid #eeeeee;\n  word-wrap: normal;\n  max-height: 225px; }\n  .event-details-header:last-child,\n  .event-details-content:last-child,\n  .event-details-footer:last-child {\n    border-bottom: none; }\n\n.event-details-header {\n  max-width: 460px;\n  overflow: auto; }\n\n.event-details-content table th[scope=row] {\n  width: 55px; }\n\n.event-details-actual-context {\n  font-size: 0.8em;\n  font-style: italic;\n  color: #666666; }\n\n.event-detail-overflow {\n  min-height: 30px;\n  max-width: 395px;\n  margin-bottom: 6px;\n  overflow: auto; }\n\n.x-close-link {\n  padding-right: 5px;\n  opacity: 0.5; }\n\n#attendees li {\n  white-space: nowrap;\n  float: left;\n  margin: 1px 2px 1px 4px;\n  color: black;\n  background-color: #85ace0;\n  border: 1px solid #a5bcf0;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n  border-radius: 10px;\n  cursor: default;\n  position: relative; }\n  #attendees li div {\n    background-color: #dee7fa;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    -ms-border-radius: 10px;\n    -o-border-radius: 10px;\n    border-radius: 10px;\n    padding: 0 14px 0 11px;\n    display: inline-block;\n    overflow: hidden; }\n  #attendees li span {\n    color: white;\n    font-size: 0.8em;\n    vertical-align: top;\n    display: inline-block; }\n  #attendees li a {\n    position: absolute;\n    right: 1px;\n    top: 1px;\n    width: 13px;\n    height: 100%;\n    color: #c4cbcf;\n    vertical-align: top;\n    cursor: pointer;\n    background: transparent url(/images/messages/token-delete.png) 12px center no-repeat; }\n  #attendees li:hover {\n    border-color: #6f94e6; }\n    #attendees li:hover div {\n      background-color: #bccef4; }\n    #attendees li:hover a {\n      background-position: 1px center; }\n\n/*replicate button styles to work for fullcalendar */\n.calendar .fc-button {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  padding: 4px 10px;\n  font-size: 12px;\n  border: 1px solid #cccccc;\n  color: #333333;\n  font-weight: normal;\n  background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(25%, #ffffff), color-stop(100%, #e6e6e6));\n  background-image: -webkit-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);\n  background-image: -moz-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);\n  background-image: -o-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);\n  background-image: linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  border-bottom-color: #bbbbbb;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); }\n  .calendar .fc-button ~ .fc-button {\n    border-left: 0;\n    margin-left: 0; }\n  .calendar .fc-button.fc-state-hover {\n    background-color: #efefef;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#dfdfdf));\n    background-image: -webkit-linear-gradient(top, white, #dfdfdf);\n    background-image: -moz-linear-gradient(top, white, #dfdfdf);\n    background-image: -ms-linear-gradient(top, white, #dfdfdf);\n    background-image: -o-linear-gradient(top, white, #dfdfdf);\n    background-image: linear-gradient(top, #ffffff, #dfdfdf);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorStr='white',EndColorStr='#dfdfdf')\";\n    zoom: 1; }\n    .ie9 .calendar .fc-button.fc-state-hover {\n      border-radius: 0 !important; }\n  .calendar .fc-button.fc-state-down {\n    background-color: #b7b7b7;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#a8a8a8), to(#c6c6c6));\n    background-image: -webkit-linear-gradient(top, #a8a8a8, #c6c6c6);\n    background-image: -moz-linear-gradient(top, #a8a8a8, #c6c6c6);\n    background-image: -ms-linear-gradient(top, #a8a8a8, #c6c6c6);\n    background-image: -o-linear-gradient(top, #a8a8a8, #c6c6c6);\n    background-image: linear-gradient(top, #a8a8a8, #c6c6c6);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorStr='#a8a8a8',EndColorStr='#c6c6c6')\";\n    zoom: 1; }\n    .ie9 .calendar .fc-button.fc-state-down {\n      border-radius: 0 !important; }\n  .calendar .fc-button.fc-state-disabled {\n    opacity: 0.7; }\n  .calendar .fc-button .fc-button-content {\n    color: #333333;\n    text-shadow: white 0 1px 1px; }\n  .calendar .fc-button.fc-corner-left {\n    -moz-border-radius-topleft: 4px;\n    -webkit-border-top-left-radius: 4px;\n    border-top-left-radius: 4px;\n    -moz-border-radius-bottomleft: 4px;\n    -webkit-border-bottom-left-radius: 4px;\n    border-bottom-left-radius: 4px; }\n  .calendar .fc-button.fc-corner-right {\n    -moz-border-radius-topright: 4px;\n    -webkit-border-top-right-radius: 4px;\n    border-top-right-radius: 4px;\n    -moz-border-radius-bottomright: 4px;\n    -webkit-border-bottom-right-radius: 4px;\n    border-bottom-right-radius: 4px; }\n\n#edit_appt_calendar_event_form p {\n  margin-bottom: 0.5em; }\n#edit_appt_calendar_event_form textarea {\n  width: 500px;\n  height: 100px; }\n#edit_appt_calendar_event_form .max-participants {\n  width: 40px; }\n\n.whats-new {\n  float: right;\n  margin-right: 10px;\n  line-height: 32px;\n  font-size: 11px; }\n\n.event_button {\n  margin-left: 3px; }\n");

  return templates['calendar/calendarApp'];
});
