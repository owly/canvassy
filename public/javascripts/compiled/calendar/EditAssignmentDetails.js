(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'compiled/calendar/commonEventFactory', 'jst/calendar/editAssignment', 'jst/calendar/editAssignmentOverride', 'jst/calendar/genericSelectOptions', 'jquery.instructure_date_and_time', 'jquery.instructure_forms', 'jquery.instructure_misc_helpers'], function($, commonEventFactory, editAssignmentTemplate, editAssignmentOverrideTemplate, genericSelectOptionsTemplate) {
    var EditAssignmentDetails;

    return EditAssignmentDetails = (function() {
      function EditAssignmentDetails(selector, event, contextChangeCB, closeCB) {
        var tpl;

        this.event = event;
        this.contextChangeCB = contextChangeCB;
        this.closeCB = closeCB;
        this.formSubmit = __bind(this.formSubmit, this);
        this.setupTimeAndDatePickers = __bind(this.setupTimeAndDatePickers, this);
        this.contextChange = __bind(this.contextChange, this);
        this.setContext = __bind(this.setContext, this);
        this.moreOptionsClick = __bind(this.moreOptionsClick, this);
        this.activate = __bind(this.activate, this);
        this.currentContextInfo = null;
        tpl = this.event.override ? editAssignmentOverrideTemplate : editAssignmentTemplate;
        this.form = $(tpl({
          title: this.event.title,
          contexts: this.event.possibleContexts()
        }));
        $(selector).append(this.form);
        this.setupTimeAndDatePickers();
        this.form.submit(this.formSubmit);
        this.form.find(".more_options_link").click(this.moreOptionsClick);
        this.form.find("select.context_id").change(this.contextChange);
        this.form.find("select.context_id").triggerHandler('change', false);
        if (!this.event.isNewEvent()) {
          this.form.find(".context_select").hide();
          this.form.attr('method', 'PUT');
          this.form.attr('action', $.replaceTags(this.event.contextInfo.assignment_url, 'id', this.event.object.id));
        }
      }

      EditAssignmentDetails.prototype.contextInfoForCode = function(code) {
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

      EditAssignmentDetails.prototype.activate = function() {
        var _ref;

        this.form.find("select.context_id").change();
        if ((_ref = this.event.assignment) != null ? _ref.assignment_group_id : void 0) {
          return this.form.find(".assignment_group_select .assignment_group").val(this.event.assignment.assignment_group_id);
        }
      };

      EditAssignmentDetails.prototype.moreOptionsClick = function(jsEvent) {
        var data, params, pieces;

        jsEvent.preventDefault();
        pieces = $(jsEvent.target).attr('href').split("#");
        data = this.form.getFormData({
          object_name: 'assignment'
        });
        params = {};
        if (data.title) {
          params['title'] = data.title;
        }
        if (data.due_at) {
          params['due_at'] = data.due_at;
        }
        if (data.assignment_group_id) {
          params['assignment_group_id'] = data.assignment_group_id;
        }
        params['return_to'] = window.location.href;
        pieces[0] += "?" + $.param(params);
        return window.location.href = pieces.join("#");
      };

      EditAssignmentDetails.prototype.setContext = function(newContext) {
        return this.form.find("select.context_id").val(newContext).triggerHandler('change', false);
      };

      EditAssignmentDetails.prototype.contextChange = function(jsEvent, propagate) {
        var assignmentGroupsSelectOptionsInfo, context, moreOptionsUrl;

        if (this.ignoreContextChange) {
          return;
        }
        context = $(jsEvent.target).val();
        this.currentContextInfo = this.contextInfoForCode(context);
        this.event.contextInfo = this.currentContextInfo;
        if (this.currentContextInfo === null) {
          return;
        }
        if (propagate !== false) {
          this.contextChangeCB(context);
        }
        assignmentGroupsSelectOptionsInfo = {
          collection: this.currentContextInfo.assignment_groups
        };
        this.form.find(".assignment_group").html(genericSelectOptionsTemplate(assignmentGroupsSelectOptionsInfo));
        this.form.attr('action', this.currentContextInfo.create_assignment_url);
        moreOptionsUrl = this.event.assignment ? "" + this.event.assignment.html_url + "/edit" : this.currentContextInfo.new_assignment_url;
        return this.form.find(".more_options_link").attr('href', moreOptionsUrl);
      };

      EditAssignmentDetails.prototype.setupTimeAndDatePickers = function() {
        var endDate, startDate;

        this.form.find(".datetime_field").datetime_field();
        startDate = this.event.startDate();
        endDate = this.event.endDate();
        if (this.event.allDay) {
          return this.form.find(".datetime_field").val(startDate.toString('MMM d, yyyy')).change();
        } else if (startDate) {
          return this.form.find(".datetime_field").val(startDate.toString('MMM d, yyyy h:mmtt')).change();
        }
      };

      EditAssignmentDetails.prototype.formSubmit = function(e) {
        var form;

        e.preventDefault();
        form = this.form.getFormData();
        if (form['assignment[due_at]'] != null) {
          return this.submitAssignment(form);
        } else {
          return this.submitOverride(form);
        }
      };

      EditAssignmentDetails.prototype.submitAssignment = function(form) {
        var dueAt, dueAtString, newEvent, objectData, params;

        dueAtString = form['assignment[due_at]'];
        if (dueAtString === '') {
          dueAt = null;
        } else {
          dueAt = this.form.find("#assignment_due_at").data('date');
        }
        params = {
          'assignment[name]': this.form.find("#assignment_title").val(),
          'assignment[due_at]': dueAt ? $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(dueAt)) : '',
          'assignment[assignment_group_id]': this.form.find(".assignment_group").val()
        };
        if (this.event.isNewEvent()) {
          objectData = {
            assignment: {
              title: params['assignment[name]'],
              due_at: dueAt ? $.dateToISO8601UTC(dueAt) : null,
              context_code: this.form.find(".context_id").val()
            }
          };
          newEvent = commonEventFactory(objectData, this.event.possibleContexts());
          newEvent.save(params);
        } else {
          this.event.title = params['assignment[name]'];
          this.event.start = dueAt;
          this.event.save(params);
        }
        return this.closeCB();
      };

      EditAssignmentDetails.prototype.submitOverride = function(form) {
        var dueAt, params;

        dueAt = form['assignment_override[due_at]'];
        dueAt = dueAt === '' ? null : this.form.find('#assignment_override_due_at').data('date');
        params = {
          'assignment_override[due_at]': dueAt ? $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(dueAt)) : ''
        };
        this.event.start = dueAt;
        this.event.save(params);
        return this.closeCB();
      };

      return EditAssignmentDetails;

    })();
  });

}).call(this);
