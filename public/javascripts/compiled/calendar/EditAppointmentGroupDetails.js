(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'underscore', 'i18n!EditAppointmentGroupDetails', 'compiled/calendar/TimeBlockList', 'jst/calendar/editAppointmentGroup', 'jst/calendar/genericSelect', 'jst/calendar/sectionCheckboxes', 'compiled/calendar/ContextSelector', 'compiled/fn/preventDefault', 'jquery.ajaxJSON', 'jquery.disableWhileLoading', 'jquery.instructure_forms'], function($, _, I18n, TimeBlockList, editAppointmentGroupTemplate, genericSelectTemplate, sectionCheckboxesTemplate, ContextSelector, preventDefault) {
    var EditAppointmentGroupDetails;

    return EditAppointmentGroupDetails = (function() {
      function EditAppointmentGroupDetails(selector, apptGroup, contexts, closeCB) {
        var $maxPerStudentCheckbox, $maxPerStudentInput, $perSlotCheckbox, $perSlotInput, appt, c, maxAppointmentsPerStudent, maxApptHandler, slotChangeHandler, timeBlocks, _i, _len, _ref,
          _this = this;

        this.apptGroup = apptGroup;
        this.contexts = contexts;
        this.closeCB = closeCB;
        this.toggleContextsMenu = __bind(this.toggleContextsMenu, this);
        this.contextsChanged = __bind(this.contextsChanged, this);
        this.save = __bind(this.save, this);
        this.saveClick = __bind(this.saveClick, this);
        this.saveWithoutPublishingClick = __bind(this.saveWithoutPublishingClick, this);
        this.openHelpDialog = __bind(this.openHelpDialog, this);
        this.currentContextInfo = null;
        $(selector).html(editAppointmentGroupTemplate({
          title: this.apptGroup.title,
          contexts: this.contexts,
          appointment_group: this.apptGroup
        }));
        this.contextsHash = {};
        _ref = this.contexts;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          this.contextsHash[c.asset_string] = c;
        }
        this.form = $(selector).find("form");
        this.contextSelector = new ContextSelector('.ag-menu-container', this.apptGroup, this.contexts, this.contextsChanged, this.toggleContextsMenu);
        if (this.editing()) {
          this.form.attr('action', this.apptGroup.url);
          this.form.find(".context_id").val(this.apptGroup.context_code).attr('disabled', true);
          this.form.find("select.context_id").change();
          this.disableGroups();
          if (this.apptGroup.participant_type === 'Group') {
            this.form.find(".group-signup-checkbox").prop('checked', true);
            this.form.find(".group_category").val(this.apptGroup.sub_context_codes[0]);
          } else {
            this.form.find(".group-signup-checkbox").prop('checked', false);
          }
          $(".reservation_help").click(this.openHelpDialog);
        } else {
          this.form.attr('action', '/api/v1/appointment_groups');
        }
        this.form.find('.ag_contexts_selector').click(preventDefault(this.toggleContextsMenu));
        timeBlocks = (function() {
          var _j, _len1, _ref1, _results;

          _ref1 = this.apptGroup.appointmentEvents || [];
          _results = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            appt = _ref1[_j];
            _results.push([appt.start, appt.end, true]);
          }
          return _results;
        }).call(this);
        this.timeBlockList = new TimeBlockList(this.form.find(".time-block-list-body"), this.form.find(".splitter"), timeBlocks);
        this.form.find('[name="slot_duration"]').change(function(e) {
          if (_this.form.find('[name="autosplit_option"]').is(":checked")) {
            _this.timeBlockList.split(e.target.value);
            return _this.timeBlockList.render();
          }
        });
        this.form.find('[name="participant_visibility"]').prop('checked', this.apptGroup.participant_visibility === 'protected');
        this.form.find(".group-signup-checkbox").change(function(jsEvent) {
          var checked;

          checked = !!jsEvent.target.checked;
          _this.form.find('.per_appointment_groups_label').toggle(checked);
          _this.form.find('.per_appointment_users_label').toggle(!checked);
          return _this.form.find(".group-signup").toggle(checked);
        });
        this.form.find(".group-signup-checkbox").change();
        $perSlotCheckbox = this.form.find('[name="per_slot_option"]');
        $perSlotInput = this.form.find('[name="participants_per_appointment"]');
        slotChangeHandler = function(e) {
          return _this.perSlotChange($perSlotCheckbox, $perSlotInput);
        };
        $.merge($perSlotCheckbox, $perSlotInput).on('change', slotChangeHandler);
        if (this.apptGroup.participants_per_appointment > 0) {
          $perSlotCheckbox.prop('checked', true);
          $perSlotInput.val(this.apptGroup.participants_per_appointment);
        } else {
          $perSlotInput.attr('disabled', true);
        }
        $maxPerStudentCheckbox = this.form.find('#max-per-student-option');
        $maxPerStudentInput = this.form.find('[name="max_appointments_per_participant"]');
        maxApptHandler = function(e) {
          return _this.maxStudentAppointmentsChange($maxPerStudentCheckbox, $maxPerStudentInput);
        };
        $.merge($maxPerStudentCheckbox, $maxPerStudentInput).on('change', maxApptHandler);
        maxAppointmentsPerStudent = this.apptGroup.max_appointments_per_participant;
        $maxPerStudentInput.val(maxAppointmentsPerStudent);
        if (maxAppointmentsPerStudent > 0 || this.creating()) {
          $maxPerStudentCheckbox.prop('checked', true);
          if (this.creating() && $maxPerStudentInput.val() === '') {
            $maxPerStudentInput.val('1');
          }
        } else {
          $maxPerStudentInput.attr('disabled', true);
        }
        if (this.apptGroup.workflow_state === 'active') {
          this.form.find("#appointment-blocks-active-button").attr('disabled', true).prop('checked', true);
        }
      }

      EditAppointmentGroupDetails.prototype.creating = function() {
        return !this.editing();
      };

      EditAppointmentGroupDetails.prototype.editing = function() {
        return this.apptGroup.id != null;
      };

      EditAppointmentGroupDetails.prototype.perSlotChange = function(checkbox, input) {
        var slotLimit;

        this.checkBoxInputChange(checkbox, input);
        slotLimit = parseInt(input.val());
        return this.helpIconShowIf(checkbox, _.any(this.apptGroup.appointments, function(a) {
          return a.child_events_count > slotLimit;
        }));
      };

      EditAppointmentGroupDetails.prototype.maxStudentAppointmentsChange = function(checkbox, input) {
        var a, apptCounts, apptLimit, e, _i, _j, _len, _len1, _name, _ref, _ref1;

        this.checkBoxInputChange(checkbox, input);
        apptLimit = parseInt(input.val());
        apptCounts = {};
        _ref = this.apptGroup.appointments;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          a = _ref[_i];
          _ref1 = a.child_events;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            e = _ref1[_j];
            apptCounts[_name = e.user.id] || (apptCounts[_name] = 0);
            apptCounts[e.user.id] += 1;
          }
        }
        return this.helpIconShowIf(checkbox, _.any(apptCounts, function(count, userId) {
          return count > apptLimit;
        }));
      };

      EditAppointmentGroupDetails.prototype.helpIconShowIf = function(checkbox, show) {
        var helpIcon;

        helpIcon = checkbox.closest('li').find('.reservation_help');
        if (show && checkbox.is(':checked')) {
          return helpIcon.removeClass('hidden');
        } else {
          return helpIcon.addClass('hidden');
        }
      };

      EditAppointmentGroupDetails.prototype.checkBoxInputChange = function(checkbox, input) {
        if (checkbox.prop('checked') && input.val() === '') {
          input.val('1');
        }
        return input.prop('disabled', !checkbox.prop('checked'));
      };

      EditAppointmentGroupDetails.prototype.openHelpDialog = function(e) {
        e.preventDefault();
        return $("#options_help_dialog").dialog({
          title: I18n.t('affect_reservations', "How will this affect reservations?"),
          width: 400
        });
      };

      EditAppointmentGroupDetails.prototype.saveWithoutPublishingClick = function(jsEvent) {
        jsEvent.preventDefault();
        return this.save(false);
      };

      EditAppointmentGroupDetails.prototype.saveClick = function(jsEvent) {
        jsEvent.preventDefault();
        return this.save(true);
      };

      EditAppointmentGroupDetails.prototype.save = function(publish) {
        var contextCodes, data, deferred, method, onError, onSuccess, params, range, sections, _i, _len, _ref,
          _this = this;

        data = this.form.getFormData({
          object_name: 'appointment_group'
        });
        params = {
          'appointment_group[title]': data.title,
          'appointment_group[description]': data.description,
          'appointment_group[location_name]': data.location
        };
        if (data.max_appointments_per_participant_option) {
          if (data.max_appointments_per_participant < 1) {
            $('[name="max_appointments_per_participant"]').errorBox(I18n.t('bad_max_appts', 'You must allow at least one appointment per participant'));
            return false;
          } else {
            params['appointment_group[max_appointments_per_participant]'] = data.max_appointments_per_participant;
          }
        } else {
          params['appointment_group[max_appointments_per_participant]'] = "";
        }
        params['appointment_group[new_appointments]'] = [];
        if (!this.timeBlockList.validate()) {
          return false;
        }
        _ref = this.timeBlockList.blocks();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          range = _ref[_i];
          params['appointment_group[new_appointments]'].push([$.dateToISO8601UTC($.unfudgeDateForProfileTimezone(range[0])), $.dateToISO8601UTC($.unfudgeDateForProfileTimezone(range[1]))]);
        }
        if (data.per_slot_option) {
          if (data.participants_per_appointment < 1) {
            $('[name="participants_per_appointment"]').errorBox(I18n.t('bad_per_slot', 'You must allow at least one appointment per time slot'));
            return false;
          } else {
            params['appointment_group[participants_per_appointment]'] = data.participants_per_appointment;
          }
        } else {
          params['appointment_group[participants_per_appointment]'] = "";
        }
        if (publish && this.apptGroup.workflow_state !== 'active') {
          params['appointment_group[publish]'] = '1';
        }
        params['appointment_group[participant_visibility]'] = data.participant_visibility === '1' ? 'protected' : 'private';
        delete data['context_codes[]'];
        delete data['sections[]'];
        contextCodes = this.contextSelector.selectedContexts();
        if (contextCodes.length === 0) {
          $('.ag_contexts_selector').errorBox(I18n.t('context_required', 'You need to select a calendar'));
          return;
        } else {
          params['appointment_group[context_codes]'] = contextCodes;
        }
        if (this.creating()) {
          if (data.use_group_signup === '1' && data.group_category_id) {
            params['appointment_group[sub_context_codes]'] = [data.group_category_id];
          } else {
            sections = this.contextSelector.selectedSections();
            if (sections) {
              params['appointment_group[sub_context_codes]'] = sections;
            }
          }
          params['appointment_group[min_appointments_per_participant]'] = 1;
        }
        onSuccess = function() {
          return _this.closeCB(true);
        };
        onError = function() {};
        method = this.editing() ? 'PUT' : 'POST';
        deferred = $.ajaxJSON(this.form.attr('action'), method, params, onSuccess, onError);
        return this.form.disableWhileLoading(deferred);
      };

      EditAppointmentGroupDetails.prototype.contextsChanged = function(contextCodes, sectionCodes) {
        var context, contextCode, section, sectionCode, text, _ref;

        if (sectionCodes.length === 0 && contextCodes.length === 0) {
          this.form.find('.ag_contexts_selector').text(I18n.t('select_calendars', 'Select Calendars'));
        } else {
          if (contextCodes.length > 0) {
            contextCode = contextCodes[0];
            text = this.contextsHash[contextCode].name;
            if (contextCodes.length > 1) {
              text += I18n.t('and_n_contexts', ' and %{n} others', {
                n: contextCodes.length - 1
              });
            }
            this.form.find('.ag_contexts_selector').text(text);
          }
          if (sectionCodes.length > 0) {
            sectionCode = sectionCodes[0];
            section = _.chain(this.contexts).pluck('course_sections').flatten().find(function(s) {
              return s.asset_string === sectionCode;
            }).value();
            text = section.name;
            if (sectionCodes.length > 1) {
              text += I18n.t('and_n_sectionCodes', ' and %{n} others', {
                n: sectionCodes.length - 1
              });
            }
            this.form.find('.ag_contexts_selector').text(text);
          }
        }
        context = this.contextsHash[contextCodes[0]];
        if (contextCodes.length === 1 && sectionCodes.length === 0 && ((_ref = context.group_categories) != null ? _ref.length : void 0) > 0) {
          this.enableGroups(context);
          if (this.apptGroup.sub_context_codes.length > 0) {
            return this.form.find('[name=group_category_id]').prop('disabled', true);
          }
        } else {
          return this.disableGroups();
        }
      };

      EditAppointmentGroupDetails.prototype.disableGroups = function() {
        this.form.find(".group-signup-checkbox").attr('disabled', true).prop('checked', false);
        return this.form.find(".group-signup").hide();
      };

      EditAppointmentGroupDetails.prototype.enableGroups = function(contextInfo) {
        var groupsInfo;

        this.form.find(".group-signup-checkbox").attr('disabled', false);
        groupsInfo = {
          cssClass: 'group_category',
          name: 'group_category_id',
          collection: contextInfo.group_categories
        };
        return this.form.find(".group_select").html(genericSelectTemplate(groupsInfo));
      };

      EditAppointmentGroupDetails.prototype.toggleContextsMenu = function(jsEvent) {
        return $('.ag_contexts_menu').toggleClass('hidden');
      };

      return EditAppointmentGroupDetails;

    })();
  });

}).call(this);
