(function() {
  define(['jquery', 'compiled/calendar/CommonEvent', 'compiled/calendar/CommonEvent.Assignment', 'compiled/calendar/CommonEvent.AssignmentOverride', 'compiled/calendar/CommonEvent.CalendarEvent', 'compiled/str/splitAssetString'], function($, CommonEvent, Assignment, AssignmentOverride, CalendarEvent, splitAssetString) {
    return function(data, contexts) {
      var actualContextCode, actualContextInfo, context, contextCode, contextInfo, item, items, obj, parts, type, _i, _len;

      if (data === null) {
        obj = new CommonEvent();
        obj.allPossibleContexts = contexts;
        return obj;
      }
      actualContextCode = data.context_code;
      contextCode = data.effective_context_code || actualContextCode;
      type = data.assignment_overrides ? 'assignment_override' : data.assignment || data.assignment_group_id ? 'assignment' : 'calendar_event';
      data = data.assignment_overrides ? {
        assignment: data.assignment,
        assignment_override: data.assignment_overrides[0]
      } : data.assignment || data.calendar_event || data;
      if (data.hidden) {
        return null;
      }
      if (actualContextCode == null) {
        actualContextCode = data.context_code;
      }
      if (contextCode == null) {
        contextCode = data.effective_context_code || data.context_code;
      }
      contextInfo = null;
      for (_i = 0, _len = contexts.length; _i < _len; _i++) {
        context = contexts[_i];
        if (context.asset_string === contextCode) {
          contextInfo = context;
          break;
        }
      }
      if (contextInfo === null) {
        return null;
      }
      if (actualContextCode !== contextCode) {
        parts = splitAssetString(actualContextCode);
      }
      actualContextInfo = parts && (items = contextInfo[parts[0]]) ? ((function() {
        var _j, _len1, _results;

        _results = [];
        for (_j = 0, _len1 = items.length; _j < _len1; _j++) {
          item = items[_j];
          if (item.id === parts[1]) {
            _results.push(item);
          }
        }
        return _results;
      })())[0] : void 0;
      if (type === 'assignment') {
        obj = new Assignment(data, contextInfo);
      } else if (type === 'assignment_override') {
        obj = new AssignmentOverride(data, contextInfo);
      } else {
        obj = new CalendarEvent(data, contextInfo, actualContextInfo);
      }
      obj.can_edit = false;
      obj.can_delete = false;
      if (contextInfo.can_create_calendar_events) {
        obj.can_edit = true;
        obj.can_delete = true;
      }
      if (obj.object.workflow_state === 'locked') {
        obj.can_edit = false;
      }
      if (obj.object.appointment_group_id && contextInfo.can_create_calendar_events) {
        obj.can_edit = true;
      }
      if (type === 'assignment') {
        obj.can_edit = true;
      }
      return obj;
    };
  });

}).call(this);
