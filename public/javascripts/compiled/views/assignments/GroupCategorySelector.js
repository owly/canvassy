(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignment', 'Backbone', 'underscore', 'jquery', 'jst/assignments/GroupCategorySelector', 'compiled/jquery/toggleAccessibly'], function(I18n, Backbone, _, $, template, toggleAccessibly) {
    var GroupCategorySelector, _ref;

    return GroupCategorySelector = (function(_super) {
      var GROUP_CATEGORY_ID, GROUP_CATEGORY_OPTIONS, HAS_GROUP_CATEGORY;

      __extends(GroupCategorySelector, _super);

      function GroupCategorySelector() {
        this._validateGroupCategoryID = __bind(this._validateGroupCategoryID, this);
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);
        this.filterFormData = __bind(this.filterFormData, this);
        this.toJSON = __bind(this.toJSON, this);
        this.toggleGroupCategoryOptions = __bind(this.toggleGroupCategoryOptions, this);
        this.showGroupCategoryCreateDialog = __bind(this.showGroupCategoryCreateDialog, this);        _ref = GroupCategorySelector.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategorySelector.prototype.template = template;

      GROUP_CATEGORY_ID = '#assignment_group_category_id';

      HAS_GROUP_CATEGORY = '#assignment_has_group_category';

      GROUP_CATEGORY_OPTIONS = '#group_category_options';

      GroupCategorySelector.prototype.els = (function() {
        var els;

        els = {};
        els["" + GROUP_CATEGORY_ID] = '$groupCategoryID';
        els["" + HAS_GROUP_CATEGORY] = '$hasGroupCategory';
        els["" + GROUP_CATEGORY_OPTIONS] = '$groupCategoryOptions';
        return els;
      })();

      GroupCategorySelector.prototype.events = (function() {
        var events;

        events = {};
        events["change " + GROUP_CATEGORY_ID] = 'showGroupCategoryCreateDialog';
        events["change " + HAS_GROUP_CATEGORY] = 'toggleGroupCategoryOptions';
        return events;
      })();

      GroupCategorySelector.optionProperty('parentModel');

      GroupCategorySelector.optionProperty('groupCategories');

      GroupCategorySelector.optionProperty('nested');

      GroupCategorySelector.prototype.showGroupCategoryCreateDialog = function() {
        var _this = this;

        if (this.$groupCategoryID.val() === 'new') {
          return window.addGroupCategory(function(data) {
            var $newCategory, group;

            group = data[0].group_category;
            $newCategory = $('<option>');
            $newCategory.val(group.id);
            $newCategory.text(group.name);
            _this.$groupCategoryID.prepend($newCategory);
            _this.$groupCategoryID.val(group.id);
            return _this.groupCategories.push(group);
          });
        }
      };

      GroupCategorySelector.prototype.toggleGroupCategoryOptions = function() {
        this.$groupCategoryOptions.toggleAccessibly(this.$hasGroupCategory.prop('checked'));
        if (this.$hasGroupCategory.prop('checked') && this.groupCategories.length === 0) {
          return this.showGroupCategoryCreateDialog();
        }
      };

      GroupCategorySelector.prototype.toJSON = function() {
        return {
          groupCategoryId: this.parentModel.groupCategoryId(),
          groupCategories: this.groupCategories,
          gradeGroupStudentsIndividually: this.parentModel.gradeGroupStudentsIndividually(),
          frozenAttributes: this.parentModel.frozenAttributes(),
          nested: this.nested
        };
      };

      GroupCategorySelector.prototype.filterFormData = function(data) {
        var hasGroupCategory;

        hasGroupCategory = data.has_group_category;
        delete data.has_group_category;
        if (!hasGroupCategory) {
          data.group_category_id = null;
          data.grade_group_students_individually = false;
        }
        return data;
      };

      GroupCategorySelector.prototype.fieldSelectors = {
        groupCategorySelector: '#assignment_group_category_id'
      };

      GroupCategorySelector.prototype.validateBeforeSave = function(data, errors) {
        errors = this._validateGroupCategoryID(data, errors);
        return errors;
      };

      GroupCategorySelector.prototype._validateGroupCategoryID = function(data, errors) {
        var gcid;

        gcid = this.nested ? data.assignment.groupCategoryId() : data.group_category_id;
        if (gcid === 'new') {
          errors["groupCategorySelector"] = [
            {
              message: I18n.t('group_assignment_must_have_group_set', 'Please select a group set for this assignment')
            }
          ];
        }
        return errors;
      };

      return GroupCategorySelector;

    })(Backbone.View);
  });

}).call(this);
