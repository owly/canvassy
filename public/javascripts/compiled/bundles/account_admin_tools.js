(function() {
  require(['compiled/models/CourseRestore', 'compiled/views/accounts/admin_tools/AdminToolsView', 'compiled/views/accounts/admin_tools/RestoreContentPaneView', 'compiled/views/accounts/admin_tools/CourseSearchFormView', 'compiled/views/accounts/admin_tools/CourseSearchResultsView', 'compiled/views/PaginatedCollectionView', 'compiled/collections/CommMessageCollection', 'compiled/views/accounts/admin_tools/CommMessagesContentPaneView', 'compiled/views/accounts/admin_tools/CommMessagesSearchFormView', 'compiled/views/accounts/admin_tools/CommMessageItemView', 'jst/accounts/admin_tools/commMessagesSearchResults'], function(CourseRestoreModel, AdminToolsView, RestoreContentPaneView, CourseSearchFormView, CourseSearchResultsView, PaginatedCollectionView, CommMessageCollection, CommMessagesContentPaneView, CommMessagesSearchFormView, CommMessageItemView, messagesSearchResultsTemplate) {
    var formView, messages, messagesContentView, restoreModel, resultsView;

    restoreModel = new CourseRestoreModel({
      account_id: ENV.ACCOUNT_ID
    });
    messages = new CommMessageCollection(null, {
      params: {
        perPage: 10
      }
    });
    formView = new CommMessagesSearchFormView({
      collection: messages
    });
    resultsView = new PaginatedCollectionView({
      template: messagesSearchResultsTemplate,
      itemView: CommMessageItemView,
      collection: messages
    });
    messagesContentView = new CommMessagesContentPaneView({
      searchForm: formView,
      resultsView: resultsView,
      collection: messages
    });
    this.app = new AdminToolsView({
      el: "#content",
      tabs: {
        courseRestore: ENV.PERMISSIONS.restore_course,
        viewMessages: ENV.PERMISSIONS.view_messages
      },
      restoreContentPaneView: new RestoreContentPaneView({
        courseSearchFormView: new CourseSearchFormView({
          model: restoreModel
        }),
        courseSearchResultsView: new CourseSearchResultsView({
          model: restoreModel
        })
      }),
      messageContentPaneView: messagesContentView
    });
    return this.app.render();
  });

}).call(this);
