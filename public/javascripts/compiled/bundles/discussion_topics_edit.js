(function() {
  require(['jquery', 'compiled/models/DiscussionTopic', 'compiled/models/Announcement', 'compiled/models/DueDateList', 'compiled/views/DiscussionTopics/EditView', 'compiled/views/assignments/DueDateList', 'compiled/views/assignments/DueDateOverride', 'compiled/collections/AssignmentGroupCollection', 'compiled/collections/SectionCollection', 'compiled/str/splitAssetString', 'grading_standards', 'manage_groups'], function($, DiscussionTopic, Announcement, DueDateList, EditView, DueDateListView, OverrideView, AssignmentGroupCollection, SectionCollection, splitAssetString) {
    var assignment, contextId, contextType, dueDateList, is_announcement, model, sectionList, view, _ref, _ref1;

    is_announcement = (_ref = ENV.DISCUSSION_TOPIC.ATTRIBUTES) != null ? _ref.is_announcement : void 0;
    model = new (is_announcement ? Announcement : DiscussionTopic)(ENV.DISCUSSION_TOPIC.ATTRIBUTES);
    model.urlRoot = ENV.DISCUSSION_TOPIC.URL_ROOT;
    assignment = model.get('assignment');
    sectionList = new SectionCollection(ENV.SECTION_LIST);
    dueDateList = new DueDateList(assignment.get('assignment_overrides'), sectionList, assignment);
    _ref1 = splitAssetString(ENV.context_asset_string), contextType = _ref1[0], contextId = _ref1[1];
    view = new EditView({
      model: model,
      permissions: ENV.DISCUSSION_TOPIC.PERMISSIONS,
      contextType: contextType,
      views: {
        'js-assignment-overrides': new OverrideView({
          model: dueDateList,
          views: {
            'due-date-overrides': new DueDateListView({
              model: dueDateList
            })
          }
        })
      }
    });
    if (contextType === 'courses' && !is_announcement && ENV.DISCUSSION_TOPIC.PERMISSIONS.CAN_CREATE_ASSIGNMENT) {
      (view.assignmentGroupCollection = new AssignmentGroupCollection).contextAssetString = ENV.context_asset_string;
    }
    $(function() {
      view.render().$el.appendTo('#content');
      return $('#discussion-title').focus();
    });
    return view;
  });

}).call(this);
