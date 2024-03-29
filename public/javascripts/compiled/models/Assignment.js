(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/models/TurnitinSettings', 'compiled/collections/AssignmentOverrideCollection'], function($, _, _arg, TurnitinSettings, AssignmentOverrideCollection) {
    var Assignment, Model, _ref;

    Model = _arg.Model;
    return Assignment = (function(_super) {
      __extends(Assignment, _super);

      function Assignment() {
        this.setNullDates = __bind(this.setNullDates, this);
        this._filterFrozenAttributes = __bind(this._filterFrozenAttributes, this);
        this._getAssignmentType = __bind(this._getAssignmentType, this);
        this._hasOnlyType = __bind(this._hasOnlyType, this);
        this._submissionTypes = __bind(this._submissionTypes, this);
        this.toView = __bind(this.toView, this);
        this.isLetterGraded = __bind(this.isLetterGraded, this);
        this.isSimple = __bind(this.isSimple, this);
        this.externalToolNewTab = __bind(this.externalToolNewTab, this);
        this.externalToolUrl = __bind(this.externalToolUrl, this);
        this.gradingStandardId = __bind(this.gradingStandardId, this);
        this.groupCategoryId = __bind(this.groupCategoryId, this);
        this.turnitinEnabled = __bind(this.turnitinEnabled, this);
        this.gradeGroupStudentsIndividually = __bind(this.gradeGroupStudentsIndividually, this);
        this.turnitinAvailable = __bind(this.turnitinAvailable, this);
        this.allowedExtensions = __bind(this.allowedExtensions, this);
        this.restrictFileExtensions = __bind(this.restrictFileExtensions, this);
        this.notifyOfUpdate = __bind(this.notifyOfUpdate, this);
        this.peerReviewsAssignAt = __bind(this.peerReviewsAssignAt, this);
        this.peerReviewCount = __bind(this.peerReviewCount, this);
        this.automaticPeerReviews = __bind(this.automaticPeerReviews, this);
        this.peerReviews = __bind(this.peerReviews, this);
        this.isOnlineSubmission = __bind(this.isOnlineSubmission, this);
        this.acceptsOnlineTextEntries = __bind(this.acceptsOnlineTextEntries, this);
        this.acceptsMediaRecording = __bind(this.acceptsMediaRecording, this);
        this.acceptsOnlineURL = __bind(this.acceptsOnlineURL, this);
        this.acceptsOnlineUpload = __bind(this.acceptsOnlineUpload, this);
        this.submissionType = __bind(this.submissionType, this);
        this.submissionTypes = __bind(this.submissionTypes, this);
        this.courseID = __bind(this.courseID, this);
        this.gradingType = __bind(this.gradingType, this);
        this.frozenAttributes = __bind(this.frozenAttributes, this);
        this.frozen = __bind(this.frozen, this);
        this.freezeOnCopy = __bind(this.freezeOnCopy, this);
        this.canFreeze = __bind(this.canFreeze, this);
        this.assignmentGroupId = __bind(this.assignmentGroupId, this);
        this.pointsPossible = __bind(this.pointsPossible, this);
        this.name = __bind(this.name, this);
        this.description = __bind(this.description, this);
        this.lockAt = __bind(this.lockAt, this);
        this.unlockAt = __bind(this.unlockAt, this);
        this.dueAt = __bind(this.dueAt, this);
        this.assignmentType = __bind(this.assignmentType, this);
        this.isAssignment = __bind(this.isAssignment, this);
        this.isNotGraded = __bind(this.isNotGraded, this);
        this.isExternalTool = __bind(this.isExternalTool, this);
        this.isDiscussionTopic = __bind(this.isDiscussionTopic, this);
        this.isQuiz = __bind(this.isQuiz, this);        _ref = Assignment.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Assignment.prototype.resourceName = 'assignments';

      Assignment.prototype.initialize = function() {
        var overrides;

        overrides = this.get('assignment_overrides');
        this.set('assignment_overrides', new AssignmentOverrideCollection(overrides));
        return this.set('turnitin_settings', new TurnitinSettings(this.get('turnitin_settings')), {
          silent: true
        });
      };

      Assignment.prototype.isQuiz = function() {
        return this._hasOnlyType('online_quiz');
      };

      Assignment.prototype.isDiscussionTopic = function() {
        return this._hasOnlyType('discussion_topic');
      };

      Assignment.prototype.isExternalTool = function() {
        return this._hasOnlyType('external_tool');
      };

      Assignment.prototype.isNotGraded = function() {
        return this._hasOnlyType('not_graded');
      };

      Assignment.prototype.isAssignment = function() {
        return !_.include(this._submissionTypes(), 'online_quiz', 'discussion_topic', 'not_graded', 'external_tool');
      };

      Assignment.prototype.assignmentType = function(type) {
        if (!(arguments.length > 0)) {
          return this._getAssignmentType();
        }
        if (type === 'assignment') {
          return this.set('submission_types', ['none']);
        } else {
          return this.set('submission_types', [type]);
        }
      };

      Assignment.prototype.dueAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('due_at');
        }
        return this.set('due_at', date);
      };

      Assignment.prototype.unlockAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('unlock_at');
        }
        return this.set('unlock_at', date);
      };

      Assignment.prototype.lockAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('lock_at');
        }
        return this.set('lock_at', date);
      };

      Assignment.prototype.description = function(newDescription) {
        if (!(arguments.length > 0)) {
          return this.get('description');
        }
        return this.set('description', newDescription);
      };

      Assignment.prototype.name = function(newName) {
        if (!(arguments.length > 0)) {
          return this.get('name');
        }
        return this.set('name', newName);
      };

      Assignment.prototype.pointsPossible = function(points) {
        if (!(arguments.length > 0)) {
          return this.get('points_possible') || 0;
        }
        return this.set('points_possible', points);
      };

      Assignment.prototype.assignmentGroupId = function(assignment_group_id) {
        if (!assignment_group_id) {
          return this.get('assignment_group_id');
        }
        return this.set('assignment_group_id', assignment_group_id);
      };

      Assignment.prototype.canFreeze = function() {
        return (this.get('frozen_attributes') != null) && !this.frozen();
      };

      Assignment.prototype.freezeOnCopy = function() {
        return this.get('freeze_on_copy');
      };

      Assignment.prototype.frozen = function() {
        return this.get('frozen');
      };

      Assignment.prototype.frozenAttributes = function() {
        return this.get('frozen_attributes') || [];
      };

      Assignment.prototype.gradingType = function(gradingType) {
        if (!gradingType) {
          return this.get('grading_type') || 'points';
        }
        return this.set('grading_type', gradingType);
      };

      Assignment.prototype.courseID = function() {
        return this.get('course_id');
      };

      Assignment.prototype.submissionTypes = function(submissionTypes) {
        if (!(arguments.length > 0)) {
          return this._submissionTypes();
        }
        return this.set('submission_types', submissionTypes);
      };

      Assignment.prototype.submissionType = function() {
        var submissionTypes;

        submissionTypes = this._submissionTypes();
        if (_.include(submissionTypes, 'none') || submissionTypes.length === 0) {
          return 'none';
        } else if (_.include(submissionTypes, 'on_paper')) {
          return 'on_paper';
        } else if (_.include(submissionTypes, 'external_tool')) {
          return 'external_tool';
        } else {
          return 'online';
        }
      };

      Assignment.prototype.acceptsOnlineUpload = function() {
        return !!_.include(this._submissionTypes(), 'online_upload');
      };

      Assignment.prototype.acceptsOnlineURL = function() {
        return !!_.include(this._submissionTypes(), 'online_url');
      };

      Assignment.prototype.acceptsMediaRecording = function() {
        return !!_.include(this._submissionTypes(), 'media_recording');
      };

      Assignment.prototype.acceptsOnlineTextEntries = function() {
        return !!_.include(this._submissionTypes(), 'online_text_entry');
      };

      Assignment.prototype.isOnlineSubmission = function() {
        return _.any(this._submissionTypes(), function(thing) {
          return thing === 'online' || thing === 'online_text_entry' || thing === 'media_recording' || thing === 'online_url' || thing === 'online_upload';
        });
      };

      Assignment.prototype.peerReviews = function(peerReviewBoolean) {
        if (!(arguments.length > 0)) {
          return this.get('peer_reviews');
        }
        return this.set('peer_reviews', peerReviewBoolean);
      };

      Assignment.prototype.automaticPeerReviews = function(autoPeerReviewBoolean) {
        if (!(arguments.length > 0)) {
          return this.get('automatic_peer_reviews');
        }
        return this.set('automatic_peer_reviews', autoPeerReviewBoolean);
      };

      Assignment.prototype.peerReviewCount = function(peerReviewCount) {
        if (!(arguments.length > 0)) {
          return this.get('peer_review_count') || 0;
        }
        return this.set('peer_review_count', peerReviewCount);
      };

      Assignment.prototype.peerReviewsAssignAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('peer_reviews_assign_at') || null;
        }
        return this.set('peer_reviews_assign_at', date);
      };

      Assignment.prototype.notifyOfUpdate = function(notifyOfUpdateBoolean) {
        if (!(arguments.length > 0)) {
          return this.get('notify_of_update');
        }
        return this.set('notify_of_update', notifyOfUpdateBoolean);
      };

      Assignment.prototype.restrictFileExtensions = function() {
        return !!this.allowedExtensions();
      };

      Assignment.prototype.allowedExtensions = function(extensionsList) {
        if (!(arguments.length > 0)) {
          return this.get('allowed_extensions');
        }
        return this.set('allowed_extensions', extensionsList);
      };

      Assignment.prototype.turnitinAvailable = function() {
        return typeof this.get('turnitin_enabled') !== 'undefined';
      };

      Assignment.prototype.gradeGroupStudentsIndividually = function(setting) {
        if (!(arguments.length > 0)) {
          return this.get('grade_group_students_individually');
        }
        return this.set('grade_group_students_individually', setting);
      };

      Assignment.prototype.turnitinEnabled = function(setting) {
        if (arguments.length === 0) {
          if (this.get('turnitin_enabled') === void 0) {
            return false;
          } else {
            return !!this.get('turnitin_enabled');
          }
        } else {
          return this.set('turnitin_enabled', setting);
        }
      };

      Assignment.prototype.groupCategoryId = function(id) {
        if (!(arguments.length > 0)) {
          return this.get('group_category_id');
        }
        return this.set('group_category_id', id);
      };

      Assignment.prototype.gradingStandardId = function(id) {
        if (!(arguments.length > 0)) {
          return this.get('grading_standard_id');
        }
        return this.set('grading_standard_id', id);
      };

      Assignment.prototype.externalToolUrl = function(url) {
        var tagAttributes;

        tagAttributes = this.get('external_tool_tag_attributes') || {};
        if (!(arguments.length > 0)) {
          return tagAttributes.url;
        }
        tagAttributes.url = url;
        return this.set('external_tool_tag_attributes', tagAttributes);
      };

      Assignment.prototype.externalToolNewTab = function(b) {
        var tagAttributes;

        tagAttributes = this.get('external_tool_tag_attributes') || {};
        if (!(arguments.length > 0)) {
          return tagAttributes.new_tab;
        }
        tagAttributes.new_tab = b;
        return this.set('external_tool_tag_attributes', tagAttributes);
      };

      Assignment.prototype.isSimple = function() {
        return this.gradingType() === 'points' && this.submissionType() === 'none' && !this.groupCategoryId() && !this.peerReviews() && !this.frozen() && this.get('assignment_overrides').isSimple();
      };

      Assignment.prototype.isLetterGraded = function() {
        return this.gradingType() === 'letter_grade';
      };

      Assignment.prototype.toView = function() {
        var field, fields, hash, _i, _len;

        fields = ['name', 'dueAt', 'description', 'pointsPossible', 'lockAt', 'unlockAt', 'gradingType', 'notifyOfUpdate', 'peerReviews', 'automaticPeerReviews', 'peerReviewCount', 'peerReviewsAssignAt', 'acceptsOnlineUpload', 'acceptsMediaRecording', 'submissionType', 'acceptsOnlineTextEntries', 'acceptsOnlineURL', 'allowedExtensions', 'restrictFileExtensions', 'isOnlineSubmission', 'isNotGraded', 'isExternalTool', 'externalToolUrl', 'externalToolNewTab', 'turnitinAvailable', 'turnitinEnabled', 'gradeGroupStudentsIndividually', 'groupCategoryId', 'frozen', 'frozenAttributes', 'freezeOnCopy', 'canFreeze', 'isSimple', 'gradingStandardId', 'isLetterGraded', 'assignmentGroupId'];
        hash = {};
        for (_i = 0, _len = fields.length; _i < _len; _i++) {
          field = fields[_i];
          hash[field] = this[field]();
        }
        return hash;
      };

      Assignment.prototype.toJSON = function() {
        var data;

        data = Assignment.__super__.toJSON.apply(this, arguments);
        data = this._filterFrozenAttributes(data);
        if (this.alreadyScoped) {
          return data;
        } else {
          return {
            assignment: data
          };
        }
      };

      Assignment.prototype.parse = function(data) {
        var overrides;

        overrides = data.assignment_overrides;
        if (overrides != null) {
          data.assignment_overrides = new AssignmentOverrideCollection(overrides);
        } else {
          data.assignment_overrides = new AssignmentOverrideCollection;
        }
        data.turnitin_settings = new TurnitinSettings(data.turnitin_settings);
        return data;
      };

      Assignment.prototype._submissionTypes = function() {
        return this.get('submission_types') || [];
      };

      Assignment.prototype._hasOnlyType = function(type) {
        var submissionTypes;

        submissionTypes = this._submissionTypes();
        return submissionTypes.length === 1 && submissionTypes[0] === type;
      };

      Assignment.prototype._getAssignmentType = function() {
        if (this.isDiscussionTopic()) {
          return 'discussion_topic';
        } else if (this.isQuiz()) {
          return 'online_quiz';
        } else if (this.isExternalTool()) {
          return 'external_tool';
        } else if (this.isNotGraded()) {
          return 'not_graded';
        } else {
          return 'assignment';
        }
      };

      Assignment.prototype._filterFrozenAttributes = function(data) {
        var key, value, _ref1;

        _ref1 = this.attributes;
        for (key in _ref1) {
          if (!__hasProp.call(_ref1, key)) continue;
          value = _ref1[key];
          if (_.contains(this.frozenAttributes(), key)) {
            delete data[key];
          }
        }
        if (_.contains(this.frozenAttributes(), "title")) {
          delete data.name;
        }
        if (_.contains(this.frozenAttributes(), "group_category_id")) {
          delete data.grade_group_students_individually;
        }
        if (_.contains(this.frozenAttributes(), "peer_reviews")) {
          delete data.automatic_peer_reviews;
          delete data.peer_review_count;
          delete data.peer_reviews_assign_at;
        }
        delete data.frozen;
        delete data.frozen_attributes;
        return data;
      };

      Assignment.prototype.setNullDates = function() {
        this.dueAt(null);
        this.lockAt(null);
        this.unlockAt(null);
        return this;
      };

      return Assignment;

    })(Model);
  });

}).call(this);
