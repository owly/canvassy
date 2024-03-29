(function() {
  require(['compiled/views/outcomes/ToolbarView', 'compiled/views/outcomes/SidebarView', 'compiled/views/outcomes/ContentView', 'compiled/views/outcomes/FindDialog', 'compiled/models/OutcomeGroup', 'jst/outcomes/browser', 'jst/outcomes/mainInstructions'], function(ToolbarView, SidebarView, ContentView, FindDialog, OutcomeGroup, browserTemplate, instructionsTemplate) {
    var $el, app, content, renderInstructions, sidebar, toolbar;

    renderInstructions = ENV.PERMISSIONS.manage_outcomes;
    $el = $('#outcomes');
    $el.html(browserTemplate({
      canManageOutcomes: ENV.PERMISSIONS.manage_outcomes,
      contextUrlRoot: ENV.CONTEXT_URL_ROOT
    }));
    toolbar = new ToolbarView({
      el: $el.find('.toolbar')
    });
    sidebar = new SidebarView({
      el: $el.find('.outcomes-sidebar .wrapper'),
      rootOutcomeGroup: new OutcomeGroup(ENV.ROOT_OUTCOME_GROUP),
      selectFirstItem: !renderInstructions
    });
    sidebar.$el.data('view', sidebar);
    content = new ContentView({
      el: $el.find('.outcomes-content'),
      instructionsTemplate: instructionsTemplate,
      renderInstructions: renderInstructions
    });
    toolbar.on('goBack', sidebar.goBack);
    toolbar.on('add', sidebar.addAndSelect);
    toolbar.on('add', content.add);
    toolbar.on('find', function() {
      return sidebar.findDialog(FindDialog);
    });
    sidebar.on('select', function(model) {
      return content.show(model);
    });
    sidebar.on('select', toolbar.resetBackButton);
    content.on('addSuccess', sidebar.refreshSelection);
    content.on('deleteSuccess', function() {
      var model, _ref;

      model = (_ref = sidebar.$el.find('.outcome-group.selected:last').data('view')) != null ? _ref.model : void 0;
      return content.show(model);
    });
    return app = {
      toolbar: toolbar,
      sidebar: sidebar,
      content: content
    };
  });

}).call(this);
