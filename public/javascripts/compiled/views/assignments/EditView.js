(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['INST', 'i18n!assignment', 'compiled/views/ValidatedFormView', 'underscore', 'jquery', 'wikiSidebar', 'jst/assignments/EditView', 'compiled/models/TurnitinSettings', 'compiled/views/assignments/TurnitinSettingsDialog', 'compiled/fn/preventDefault', 'compiled/views/calendar/MissingDateDialogView', 'compiled/views/assignments/AssignmentGroupSelector', 'compiled/views/assignments/GroupCategorySelector', 'compiled/tinymce', 'tinymce.editor_box', 'jqueryui/dialog', 'jquery.toJSON', 'compiled/jquery.rails_flash_notifications', 'compiled/jquery/toggleAccessibly'], function(INST, I18n, ValidatedFormView, _, $, wikiSidebar, template, TurnitinSettings, TurnitinSettingsDialog, preventDefault, MissingDateDialog, AssignmentGroupSelector, GroupCategorySelector, toggleAccessibly) {
    var EditView, _ref;

    return EditView = (function(_super) {
      var ADVANCED_ASSIGNMENT_OPTIONS, ADVANCED_TURNITIN_SETTINGS, ALLOWED_EXTENSIONS, ALLOW_FILE_UPLOADS, ASSIGNMENT_GROUP_SELECTOR, ASSIGNMENT_TOGGLE_ADVANCED_OPTIONS, DESCRIPTION, DUE_AT, DUE_DATE_AREA, EXTERNAL_TOOLS_NEW_TAB, EXTERNAL_TOOLS_URL, EXTERNAL_TOOL_SETTINGS, GRADED_ASSIGNMENT_FIELDS, GRADING_TYPE_SELECTOR, GROUP_CATEGORY_SELECTOR, NAME, ONLINE_SUBMISSION_TYPES, PEER_REVIEWS_FIELDS, RESTRICT_FILE_UPLOADS, SUBMISSION_TYPE, TURNITIN_ENABLED;

      __extends(EditView, _super);

      function EditView() {
        this._validateAdvancedOptions = __bind(this._validateAdvancedOptions, this);
        this._validateAllowedExtensions = __bind(this._validateAllowedExtensions, this);
        this._validateSubmissionTypes = __bind(this._validateSubmissionTypes, this);
        this._validateTitle = __bind(this._validateTitle, this);
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);
        this._filterAllowedExtensions = __bind(this._filterAllowedExtensions, this);
        this._inferSubmissionTypes = __bind(this._inferSubmissionTypes, this);
        this.submit = __bind(this.submit, this);
        this.getFormData = __bind(this.getFormData, this);
        this._initializeWikiSidebar = __bind(this._initializeWikiSidebar, this);
        this._attachDatepickerToDateFields = __bind(this._attachDatepickerToDateFields, this);
        this._attachEditorToDescription = __bind(this._attachEditorToDescription, this);
        this.toJSON = __bind(this.toJSON, this);
        this.afterRender = __bind(this.afterRender, this);
        this.handleSubmissionTypeChange = __bind(this.handleSubmissionTypeChange, this);
        this.handleGradingTypeChange = __bind(this.handleGradingTypeChange, this);
        this.handleRestrictFileUploadsChange = __bind(this.handleRestrictFileUploadsChange, this);
        this.toggleAdvancedTurnitinSettings = __bind(this.toggleAdvancedTurnitinSettings, this);
        this.toggleRestrictFileUploads = __bind(this.toggleRestrictFileUploads, this);
        this.showExternalToolsDialog = __bind(this.showExternalToolsDialog, this);
        this.showTurnitinDialog = __bind(this.showTurnitinDialog, this);
        this.toggleAdvancedOptions = __bind(this.toggleAdvancedOptions, this);
        this.showingAdvancedOptions = __bind(this.showingAdvancedOptions, this);
        this.handleCancel = __bind(this.handleCancel, this);        _ref = EditView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditView.prototype.template = template;

      EditView.prototype.dontRenableAfterSaveSuccess = true;

      ASSIGNMENT_GROUP_SELECTOR = '#assignment_group_selector';

      DUE_DATE_AREA = '#assignment_due_date_controls';

      DUE_AT = '[name="due_at"]';

      DESCRIPTION = '[name="description"]';

      SUBMISSION_TYPE = '[name="submission_type"]';

      ONLINE_SUBMISSION_TYPES = '#assignment_online_submission_types';

      NAME = '[name="name"]';

      ALLOW_FILE_UPLOADS = '[name="online_submission_types[online_upload]"]';

      RESTRICT_FILE_UPLOADS = '#restrict_file_extensions_container';

      ALLOWED_EXTENSIONS = '#allowed_extensions_container';

      ADVANCED_ASSIGNMENT_OPTIONS = '#advanced_assignment_options';

      TURNITIN_ENABLED = '[name="turnitin_enabled"]';

      ADVANCED_TURNITIN_SETTINGS = '#advanced_turnitin_settings_link';

      ASSIGNMENT_TOGGLE_ADVANCED_OPTIONS = '#assignment_toggle_advanced_options';

      GRADING_TYPE_SELECTOR = '#grading_type_selector';

      GRADED_ASSIGNMENT_FIELDS = '#graded_assignment_fields';

      EXTERNAL_TOOL_SETTINGS = '#assignment_external_tool_settings';

      GROUP_CATEGORY_SELECTOR = '#group_category_selector';

      PEER_REVIEWS_FIELDS = '#assignment_peer_reviews_fields';

      EXTERNAL_TOOLS_URL = '#assignment_external_tool_tag_attributes_url';

      EXTERNAL_TOOLS_NEW_TAB = '#assignment_external_tool_tag_attributes_new_tab';

      EditView.prototype.els = _.extend({}, EditView.prototype.els, (function() {
        var els;

        els = {};
        els["" + ASSIGNMENT_GROUP_SELECTOR] = '$assignmentGroupSelector';
        els["" + DUE_DATE_AREA] = '$dueDateArea';
        els["" + DUE_AT] = '$dueAt';
        els["" + DESCRIPTION] = '$description';
        els["" + SUBMISSION_TYPE] = '$submissionType';
        els["" + ONLINE_SUBMISSION_TYPES] = '$onlineSubmissionTypes';
        els["" + NAME] = '$name';
        els["" + ALLOW_FILE_UPLOADS] = '$allowFileUploads';
        els["" + RESTRICT_FILE_UPLOADS] = '$restrictFileUploads';
        els["" + ALLOWED_EXTENSIONS] = '$allowedExtensions';
        els["" + ADVANCED_ASSIGNMENT_OPTIONS] = '$advancedAssignmentOptions';
        els["" + TURNITIN_ENABLED] = '$turnitinEnabled';
        els["" + ADVANCED_TURNITIN_SETTINGS] = '$advancedTurnitinSettings';
        els["" + ASSIGNMENT_TOGGLE_ADVANCED_OPTIONS] = '$assignmentToggleAdvancedOptions';
        els["" + GRADING_TYPE_SELECTOR] = '$gradingTypeSelector';
        els["" + GRADED_ASSIGNMENT_FIELDS] = '$gradedAssignmentFields';
        els["" + EXTERNAL_TOOL_SETTINGS] = '$externalToolSettings';
        els["" + GROUP_CATEGORY_SELECTOR] = '$groupCategorySelector';
        els["" + PEER_REVIEWS_FIELDS] = '$peerReviewsFields';
        els["" + EXTERNAL_TOOLS_URL] = '$externalToolsUrl';
        els["" + EXTERNAL_TOOLS_NEW_TAB] = '$externalToolsNewTab';
        return els;
      })());

      EditView.prototype.events = _.extend({}, EditView.prototype.events, (function() {
        var events;

        events = {};
        events["click .cancel_button"] = 'handleCancel';
        events["click " + ASSIGNMENT_TOGGLE_ADVANCED_OPTIONS] = 'toggleAdvancedOptions';
        events["change " + SUBMISSION_TYPE] = 'handleSubmissionTypeChange';
        events["change " + RESTRICT_FILE_UPLOADS] = 'handleRestrictFileUploadsChange';
        events["click " + ADVANCED_TURNITIN_SETTINGS] = 'showTurnitinDialog';
        events["change " + TURNITIN_ENABLED] = 'toggleAdvancedTurnitinSettings';
        events["change " + ALLOW_FILE_UPLOADS] = 'toggleRestrictFileUploads';
        events["click " + EXTERNAL_TOOLS_URL] = 'showExternalToolsDialog';
        return events;
      })());

      EditView.child('assignmentGroupSelector', "" + ASSIGNMENT_GROUP_SELECTOR);

      EditView.child('gradingTypeSelector', "" + GRADING_TYPE_SELECTOR);

      EditView.child('groupCategorySelector', "" + GROUP_CATEGORY_SELECTOR);

      EditView.child('peerReviewsSelector', "" + PEER_REVIEWS_FIELDS);

      EditView.prototype.initialize = function(options) {
        EditView.__super__.initialize.apply(this, arguments);
        this.assignment = this.model;
        this.dueDateOverrideView = options.views['js-assignment-overrides'];
        this.model.on('sync', function() {
          return window.location = this.get('html_url');
        });
        return this.gradingTypeSelector.on('change:gradingType', this.handleGradingTypeChange);
      };

      EditView.prototype.handleCancel = function(ev) {
        ev.preventDefault();
        if (ENV.CANCEL_TO != null) {
          return window.location = ENV.CANCEL_TO;
        }
      };

      EditView.prototype.showingAdvancedOptions = function() {
        var ariaExpanded;

        ariaExpanded = this.$advancedAssignmentOptions.attr('aria-expanded');
        return ariaExpanded === 'true' || ariaExpanded === true;
      };

      EditView.prototype.toggleAdvancedOptions = function(ev) {
        var expanded, text;

        ev.preventDefault();
        $(ev.currentTarget).focus();
        expanded = this.showingAdvancedOptions();
        this.$advancedAssignmentOptions.attr('aria-expanded', !expanded);
        this.$advancedAssignmentOptions.toggle(!expanded);
        if (expanded) {
          this.$dueDateArea.show();
          text = I18n.t('show_advanced_options', 'Show Advanced Options') + ' ▼';
        } else {
          this.$dueDateArea.hide();
          text = I18n.t('hide_advanced_options', 'Hide Advanced Options') + ' ▲';
        }
        return this.$assignmentToggleAdvancedOptions.text(text);
      };

      EditView.prototype.showTurnitinDialog = function(ev) {
        var turnitinDialog,
          _this = this;

        ev.preventDefault();
        turnitinDialog = new TurnitinSettingsDialog({
          model: this.assignment.get('turnitin_settings')
        });
        return turnitinDialog.render().on('settings:change', function(settings) {
          _this.assignment.set('turnitin_settings', new TurnitinSettings(settings));
          turnitinDialog.off();
          return turnitinDialog.remove();
        });
      };

      EditView.prototype.showExternalToolsDialog = function() {
        var _this = this;

        return INST.selectContentDialog({
          dialog_title: I18n.t('select_external_tool_dialog_title', 'Configure External Tool'),
          select_button_text: I18n.t('buttons.select_url', 'Select'),
          no_name_input: true,
          submit: function(data) {
            _this.$externalToolsUrl.val(data['item[url]']);
            return _this.$externalToolsNewTab.prop('checked', data['item[new_tab]'] === '1');
          }
        });
      };

      EditView.prototype.toggleRestrictFileUploads = function() {
        return this.$restrictFileUploads.toggleAccessibly(this.$allowFileUploads.prop('checked'));
      };

      EditView.prototype.toggleAdvancedTurnitinSettings = function(ev) {
        ev.preventDefault();
        return this.$advancedTurnitinSettings.toggleAccessibly(this.$turnitinEnabled.prop('checked'));
      };

      EditView.prototype.handleRestrictFileUploadsChange = function() {
        return this.$allowedExtensions.toggleAccessibly(this.$restrictFileUploads.find('input').prop('checked'));
      };

      EditView.prototype.handleGradingTypeChange = function(gradingType) {
        this.$gradedAssignmentFields.toggleAccessibly(gradingType !== 'not_graded');
        return this.handleSubmissionTypeChange(null);
      };

      EditView.prototype.handleSubmissionTypeChange = function(ev) {
        var subVal;

        subVal = this.$submissionType.val();
        this.$onlineSubmissionTypes.toggleAccessibly(subVal === 'online');
        this.$externalToolSettings.toggleAccessibly(subVal === 'external_tool');
        this.$groupCategorySelector.toggleAccessibly(subVal !== 'external_tool');
        return this.$peerReviewsFields.toggleAccessibly(subVal !== 'external_tool');
      };

      EditView.prototype.afterRender = function() {
        this._attachDatepickerToDateFields();
        this._attachEditorToDescription();
        $(this._initializeWikiSidebar);
        return this;
      };

      EditView.prototype.toJSON = function() {
        return _.extend(this.assignment.toView(), {
          kalturaEnabled: (typeof ENV !== "undefined" && ENV !== null ? ENV.KALTURA_ENABLED : void 0) || false,
          isLargeRoster: (typeof ENV !== "undefined" && ENV !== null ? ENV.IS_LARGE_ROSTER : void 0) || false
        });
      };

      EditView.prototype._attachEditorToDescription = function() {
        var _this = this;

        this.$description.editorBox();
        return $('.rte_switch_views_link').click(preventDefault(function() {
          return _this.$description.editorBox('toggle');
        }));
      };

      EditView.prototype._attachDatepickerToDateFields = function() {
        if (this.assignment.isSimple()) {
          return this.$dueAt.datetime_field();
        }
      };

      EditView.prototype._initializeWikiSidebar = function() {
        if (!wikiSidebar.inited) {
          wikiSidebar.init();
          $.scrollSidebar();
        }
        return wikiSidebar.attachToEditor(this.$description).show();
      };

      EditView.prototype.getFormData = function() {
        var data, defaultDates;

        data = EditView.__super__.getFormData.apply(this, arguments);
        data = this._inferSubmissionTypes(data);
        data = this._filterAllowedExtensions(data);
        if (!(typeof ENV !== "undefined" && ENV !== null ? ENV.IS_LARGE_ROSTER : void 0)) {
          data = this.groupCategorySelector.filterFormData(data);
        }
        if (this.showingAdvancedOptions()) {
          this.dueDateOverrideView.updateOverrides();
          defaultDates = this.dueDateOverrideView.getDefaultDueDate();
          data.lock_at = (defaultDates != null ? defaultDates.get('lock_at') : void 0) || null;
          data.unlock_at = (defaultDates != null ? defaultDates.get('unlock_at') : void 0) || null;
          data.due_at = (defaultDates != null ? defaultDates.get('due_at') : void 0) || null;
          data.assignment_overrides = this.dueDateOverrideView.getOverrides();
        }
        return data;
      };

      EditView.prototype.submit = function(event) {
        var missingDateDialog, sections,
          _this = this;

        event.preventDefault();
        event.stopPropagation();
        this.dueDateOverrideView.updateOverrides();
        if (this.dueDateOverrideView.containsSectionsWithoutOverrides()) {
          sections = this.dueDateOverrideView.sectionsWithoutOverrides();
          missingDateDialog = new MissingDateDialog({
            validationFn: function() {
              return sections;
            },
            labelFn: function(section) {
              return section.get('name');
            },
            success: function() {
              _this.model.setNullDates();
              return ValidatedFormView.prototype.submit.call(_this);
            }
          });
          missingDateDialog.cancel = function(e) {
            return missingDateDialog.$dialog.dialog('close').remove();
          };
          return missingDateDialog.render();
        } else {
          return EditView.__super__.submit.apply(this, arguments);
        }
      };

      EditView.prototype._inferSubmissionTypes = function(assignmentData) {
        var types;

        if (assignmentData.grading_type === 'not_graded') {
          assignmentData.submission_types = ['not_graded'];
        } else if (assignmentData.submission_type === 'online') {
          types = _.select(_.keys(assignmentData.online_submission_types), function(k) {
            return assignmentData.online_submission_types[k];
          });
          assignmentData.submission_types = types;
        } else {
          assignmentData.submission_types = [assignmentData.submission_type];
        }
        delete assignmentData.online_submission_type;
        delete assignmentData.online_submission_types;
        return assignmentData;
      };

      EditView.prototype._filterAllowedExtensions = function(data) {
        var restrictFileExtensions;

        restrictFileExtensions = data.restrict_file_extensions;
        delete data.restrict_file_extensions;
        if (restrictFileExtensions) {
          data.allowed_extensions = _.select(data.allowed_extensions.split(","), function(ext) {
            return $.trim(ext.toString()).length > 0;
          });
        } else {
          data.allowed_extensions = null;
        }
        return data;
      };

      EditView.prototype.fieldSelectors = _.extend({
        assignmentToggleAdvancedOptions: '#assignment_toggle_advanced_options'
      }, AssignmentGroupSelector.prototype.fieldSelectors, GroupCategorySelector.prototype.fieldSelectors);

      EditView.prototype.showErrors = function(errors) {
        delete errors.assignmentOverrides;
        return EditView.__super__.showErrors.call(this, errors);
      };

      EditView.prototype.validateBeforeSave = function(data, errors) {
        var data2;

        errors = this._validateTitle(data, errors);
        errors = this._validateSubmissionTypes(data, errors);
        errors = this._validateAllowedExtensions(data, errors);
        errors = this.assignmentGroupSelector.validateBeforeSave(data, errors);
        if (!(typeof ENV !== "undefined" && ENV !== null ? ENV.IS_LARGE_ROSTER : void 0)) {
          errors = this.groupCategorySelector.validateBeforeSave(data, errors);
        }
        errors = this._validateAdvancedOptions(data, errors);
        data2 = {
          assignment_overrides: this.dueDateOverrideView.getAllDates(data)
        };
        errors = this.dueDateOverrideView.validateBeforeSave(data2, errors);
        return errors;
      };

      EditView.prototype._validateTitle = function(data, errors) {
        if (!data.name || $.trim(data.name.toString()).length === 0) {
          errors["name"] = [
            {
              message: I18n.t('name_is_required', 'Name is required!')
            }
          ];
        }
        return errors;
      };

      EditView.prototype._validateSubmissionTypes = function(data, errors) {
        if (data.submission_type === 'online' && data.submission_types.length === 0) {
          errors["online_submission_types[online_text_entry]"] = [
            {
              message: I18n.t('at_least_one_submission_type', 'Please choose at least one submission type')
            }
          ];
        }
        return errors;
      };

      EditView.prototype._validateAllowedExtensions = function(data, errors) {
        if (data.allowed_extensions && data.allowed_extensions.length === 0) {
          errors["allowed_extensions"] = [
            {
              message: I18n.t('at_least_one_file_type', 'Please specify at least one allowed file type')
            }
          ];
        }
        return errors;
      };

      EditView.prototype._validateAdvancedOptions = function(data, errors) {
        var ariaExpanded, expanded;

        ariaExpanded = this.$advancedAssignmentOptions.attr('aria-expanded');
        expanded = ariaExpanded === 'true' || ariaExpanded === true;
        if (_.keys(errors).length > 0 && !expanded) {
          errors["assignmentToggleAdvancedOptions"] = [
            {
              message: I18n.t('advanced_options_errors', 'There were errors on one or more advanced options')
            }
          ];
        }
        return errors;
      };

      return EditView;

    })(ValidatedFormView);
  });

}).call(this);
