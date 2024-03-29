(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['Backbone', 'underscore', 'i18n!overrides', 'compiled/models/AssignmentOverride', 'compiled/models/Section'], function(_arg, _, I18n, AssignmentOverride, Section) {
    var DueDateList, Model;

    Model = _arg.Model;
    return DueDateList = (function() {
      function DueDateList(overrides, sections, assignment) {
        var override;

        this.overrides = overrides;
        this.sections = sections;
        this.assignment = assignment;
        this.toJSON = __bind(this.toJSON, this);
        this.sectionsWithoutOverrides = __bind(this.sectionsWithoutOverrides, this);
        this.sectionsWithOverrides = __bind(this.sectionsWithOverrides, this);
        this.blankOverrides = __bind(this.blankOverrides, this);
        this.containsBlankOverrides = __bind(this.containsBlankOverrides, this);
        this.sectionIDs = __bind(this.sectionIDs, this);
        this._sectionsLength = __bind(this._sectionsLength, this);
        this.containsSectionsWithoutOverrides = __bind(this.containsSectionsWithoutOverrides, this);
        this.overrideSectionIDs = __bind(this.overrideSectionIDs, this);
        this.removeOverride = __bind(this.removeOverride, this);
        this.addOverride = __bind(this.addOverride, this);
        this.availableSectionsPlusOverride = __bind(this.availableSectionsPlusOverride, this);
        this.availableSections = __bind(this.availableSections, this);
        this.getDefaultDueDate = __bind(this.getDefaultDueDate, this);
        this.findDefaultDueDateSection = __bind(this.findDefaultDueDateSection, this);
        this.updateDefaultDueDateSection = __bind(this.updateDefaultDueDateSection, this);
        if (this.assignment != null) {
          if (this.overrides.length < this.sections.length) {
            override = AssignmentOverride.defaultDueDate({
              due_at: this.assignment.get('due_at'),
              lock_at: this.assignment.get('lock_at'),
              unlock_at: this.assignment.get('unlock_at')
            });
            this.overrides.add(override);
          }
          this.sections.add(Section.defaultDueDateSection());
        }
        this.updateDefaultDueDateSection();
        this.overrides.on('add', this.updateDefaultDueDateSection);
        this.overrides.on('remove', this.updateDefaultDueDateSection);
      }

      DueDateList.prototype.updateDefaultDueDateSection = function() {
        var section;

        section = this.findDefaultDueDateSection();
        if (section != null) {
          if (this.overrides.length <= 1) {
            return section.set('name', I18n.t('overrides.everyone', 'Everyone'), {
              silent: true
            });
          } else {
            return section.set('name', I18n.t('overrides.everyone_else', 'Everyone Else'), {
              silent: true
            });
          }
        }
      };

      DueDateList.prototype.findDefaultDueDateSection = function() {
        return this.sections.detect(function(section) {
          return section.id === Section.defaultDueDateSectionID;
        });
      };

      DueDateList.prototype.getDefaultDueDate = function() {
        return this.overrides.getDefaultDueDate();
      };

      DueDateList.prototype.availableSections = function() {
        var overrideSectionIDs;

        overrideSectionIDs = this.overrideSectionIDs();
        return this.sections.reject(function(section) {
          var _ref;

          return _ref = section.id, __indexOf.call(overrideSectionIDs, _ref) >= 0;
        });
      };

      DueDateList.prototype.availableSectionsPlusOverride = function(override, available) {
        var section;

        if (available == null) {
          available = this.availableSections();
        }
        section = this.sections.detect(function(section) {
          return section.id === override.get('course_section_id');
        });
        if (section != null) {
          return available.concat(section);
        } else {
          return available;
        }
      };

      DueDateList.prototype.addOverride = function(override) {
        return this.overrides.add(override);
      };

      DueDateList.prototype.removeOverride = function(override) {
        return this.overrides.remove(override);
      };

      DueDateList.prototype.overrideSectionIDs = function() {
        return this.overrides.courseSectionIDs();
      };

      DueDateList.prototype.containsSectionsWithoutOverrides = function() {
        if (this.overrides.containsDefaultDueDate()) {
          return false;
        }
        return this.sectionsWithOverrides().length !== this._sectionsLength();
      };

      DueDateList.prototype._sectionsLength = function() {
        if (this.assignment != null) {
          return this.sections.length - 1;
        } else {
          return this.sections.length;
        }
      };

      DueDateList.prototype.sectionIDs = function() {
        return this.sections.ids();
      };

      DueDateList.prototype.containsBlankOverrides = function() {
        return this.blankOverrides().length > 0;
      };

      DueDateList.prototype.blankOverrides = function() {
        return this.overrides.blank();
      };

      DueDateList.prototype.sectionsWithOverrides = function() {
        var _this = this;

        return this.sections.select(function(section) {
          var _ref;

          return (_ref = section.id, __indexOf.call(_this.overrideSectionIDs(), _ref) >= 0) && section.id !== Section.defaultDueDateSectionID;
        });
      };

      DueDateList.prototype.sectionsWithoutOverrides = function() {
        var _this = this;

        return this.sections.select(function(section) {
          var _ref;

          return (_ref = section.id, __indexOf.call(_this.overrideSectionIDs(), _ref) < 0) && section.id !== Section.defaultDueDateSectionID;
        });
      };

      DueDateList.prototype.toJSON = function() {
        return {
          overrides: this.overrides.toJSON(),
          sections: this.sections.toJSON()
        };
      };

      return DueDateList;

    })();
  });

}).call(this);
