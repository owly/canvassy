(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'i18n!calendar', 'underscore', 'compiled/calendar/CommonEvent', 'compiled/calendar/EditCalendarEventDetails', 'compiled/calendar/EditAssignmentDetails', 'compiled/calendar/EditApptCalendarEventDialog', 'compiled/calendar/EditAppointmentGroupDetails', 'jst/calendar/editEvent', 'jqueryui/dialog', 'jqueryui/tabs'], function($, I18n, _, CommonEvent, EditCalendarEventDetails, EditAssignmentDetails, EditApptCalendarEventDialog, EditAppointmentGroupDetails, editEventTemplate) {
    var dialog;

    dialog = $('<div id="edit_event"><div /></div>').appendTo('body').dialog({
      autoOpen: false,
      width: 'auto',
      resizable: false,
      title: I18n.t('titles.edit_event', "Edit Event")
    });
    return (function() {
      function _Class(event) {
        this.event = event;
        this.show = __bind(this.show, this);
        this.closeCB = __bind(this.closeCB, this);
        this.contextChange = __bind(this.contextChange, this);
        this.setupTabs = __bind(this.setupTabs, this);
        this.currentContextInfo = null;
      }

      _Class.prototype.contextInfoForCode = function(code) {
        var context, _i, _len, _ref;

        _ref = this.event.possibleContexts();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          context = _ref[_i];
          if (context.asset_string === code) {
            return context;
          }
        }
        return null;
      };

      _Class.prototype.setupTabs = function() {
        var can_create_assignments, tabs;

        tabs = dialog.find("#edit_event_tabs");
        tabs.tabs().bind('tabsselect', function(event, ui) {
          return $(ui.panel).closest(".tab_holder").data('form-widget').activate();
        });
        if (this.event.eventType === 'calendar_event') {
          tabs.tabs('select', 0);
          tabs.tabs('remove', 1);
          return this.calendarEventForm.activate();
        } else if (this.event.eventType.match(/assignment/)) {
          tabs.tabs('select', 1);
          tabs.tabs('remove', 0);
          return this.assignmentDetailsForm.activate();
        } else {
          can_create_assignments = _.any(this.event.allPossibleContexts, function(c) {
            return c.can_create_assignments;
          });
          if (!can_create_assignments) {
            tabs.tabs('remove', 1);
          }
          return this.calendarEventForm.activate();
        }
      };

      _Class.prototype.contextChange = function(newContext) {
        dialog.removeClass(dialog.data('group_class'));
        dialog.addClass("group_" + newContext).data('group_class', "group_" + newContext);
        if (this.calendarEventForm) {
          this.calendarEventForm.setContext(newContext);
        }
        if (this.assignmentDetailsForm) {
          return this.assignmentDetailsForm.setContext(newContext);
        }
      };

      _Class.prototype.closeCB = function() {
        return dialog.dialog('close');
      };

      _Class.prototype.show = function() {
        var formHolder, html;

        if (this.event.isAppointmentGroupEvent()) {
          return new EditApptCalendarEventDialog(this.event).show();
        } else {
          html = editEventTemplate();
          dialog.children().replaceWith(html);
          if (this.event.isNewEvent() || this.event.eventType === 'calendar_event') {
            formHolder = dialog.find('#edit_calendar_event_form_holder');
            this.calendarEventForm = new EditCalendarEventDetails(formHolder, this.event, this.contextChange, this.closeCB);
            formHolder.data('form-widget', this.calendarEventForm);
          }
          if (this.event.isNewEvent() || this.event.eventType.match(/assignment/)) {
            this.assignmentDetailsForm = new EditAssignmentDetails($('#edit_assignment_form_holder'), this.event, this.contextChange, this.closeCB);
            dialog.find("#edit_assignment_form_holder").data('form-widget', this.assignmentDetailsForm);
          }
          this.setupTabs();
          return dialog.dialog('open');
        }
      };

      return _Class;

    })();
  });

}).call(this);
