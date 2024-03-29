(function() {
  require(['compiled/views/DiscussionTopic/EntryView', 'compiled/models/DiscussionFilterState', 'compiled/views/DiscussionTopic/DiscussionToolbarView', 'compiled/views/DiscussionTopic/DiscussionFilterResultsView', 'compiled/discussions/MarkAsReadWatcher', 'jquery', 'underscore', 'Backbone', 'compiled/models/Entry', 'compiled/models/Topic', 'compiled/models/SideCommentDiscussionTopic', 'compiled/collections/EntryCollection', 'compiled/views/DiscussionTopic/TopicView', 'compiled/views/DiscussionTopic/EntriesView', 'compiled/jquery/sticky'], function(EntryView, DiscussionFilterState, DiscussionToolbarView, DiscussionFilterResultsView, MarkAsReadWatcher, $, _, Backbone, Entry, MaterializedDiscussionTopic, SideCommentDiscussionTopic, EntryCollection, TopicView, EntriesView) {
    var $container, $subentries, children, descendants, entries, entriesView, filterModel, filterView, initEntries, once, router, scrollToTop, setAllReadStateAllViews, toolbarView, topicView, updateMaterializedViewReadState;

    descendants = 5;
    children = 10;
    router = new Backbone.Router;
    this.data = ENV.DISCUSSION.THREADED ? new MaterializedDiscussionTopic({
      root_url: ENV.DISCUSSION.ROOT_URL
    }) : new SideCommentDiscussionTopic({
      root_url: ENV.DISCUSSION.ROOT_URL
    });
    entries = new EntryCollection(null);
    filterModel = new DiscussionFilterState;
    topicView = new TopicView({
      el: '#main',
      model: new Backbone.Model,
      filterModel: filterModel
    });
    entriesView = new EntriesView({
      el: '#discussion_subentries',
      collection: entries,
      descendants: descendants,
      children: children,
      threaded: ENV.DISCUSSION.THREADED,
      model: filterModel
    });
    toolbarView = new DiscussionToolbarView({
      el: '#discussion-toolbar',
      model: filterModel
    });
    filterView = new DiscussionFilterResultsView({
      el: '#filterResults',
      allData: data,
      model: filterModel
    });
    $container = $(window);
    $subentries = $('#discussion_subentries');
    scrollToTop = function() {
      return $container.scrollTo($subentries, {
        offset: -49
      });
    };
    data.on('change', function() {
      var entryData;

      entryData = data.get('entries');
      entries.options.per_page = entryData.length;
      return entries.reset(entryData);
    });
    updateMaterializedViewReadState = function(id, read_state) {
      var e;

      e = data.flattened[id];
      if (e) {
        return e.read_state = read_state;
      }
    };
    setAllReadStateAllViews = function(newReadState) {
      entries.setAllReadState(newReadState);
      EntryView.setAllReadState(newReadState);
      return filterView.setAllReadState(newReadState);
    };
    entriesView.on('scrollAwayFromEntry', function() {
      var top;

      top = $container.scrollTop();
      router.navigate('', {
        trigger: false,
        replace: true
      });
      return $container.scrollTo(top);
    });
    EntryView.on('readStateChanged', function(entry, view) {
      return updateMaterializedViewReadState(entry.get('id'), entry.get('read_state'));
    });
    MarkAsReadWatcher.on('markAsRead', function(entry) {
      return updateMaterializedViewReadState(entry.get('id'), entry.get('read_state'));
    });
    filterView.on('readStateChanged', function(id, read_state) {
      return updateMaterializedViewReadState(id, read_state);
    });
    filterView.on('clickEntry', function(entry) {
      return router.navigate("entry-" + (entry.get('id')), true);
    });
    toolbarView.on('expandAll', function() {
      EntryView.expandRootEntries();
      return scrollToTop();
    });
    toolbarView.on('collapseAll', function() {
      EntryView.collapseRootEntries();
      return scrollToTop();
    });
    toolbarView.on('markAllAsRead', function() {
      data.markAllAsRead();
      return setAllReadStateAllViews('read');
    });
    toolbarView.on('markAllAsUnread', function() {
      data.markAllAsUnread();
      return setAllReadStateAllViews('unread');
    });
    filterView.on('render', function() {
      return scrollToTop();
    });
    filterView.on('hide', function() {
      return scrollToTop();
    });
    filterModel.on('reset', function() {
      return EntryView.expandRootEntries();
    });
    router.route('entry-:id', 'id', entriesView.goToEntry);
    router.route('page-:page', 'page', function(page) {
      entriesView.render(page);
      return scrollToTop();
    });
    initEntries = function(initial_entry) {
      data.fetch({
        success: function() {
          var fetched_model;

          entriesView.render();
          Backbone.history.start({
            pushState: true,
            root: ENV.DISCUSSION.APP_URL + '/'
          });
          if (initial_entry) {
            fetched_model = entries.get(initial_entry.id);
            if (fetched_model) {
              entries.remove(fetched_model);
            }
            entries.add(initial_entry);
            entriesView.render();
            return router.navigate("entry-" + (initial_entry.get('id')), true);
          }
        }
      });
      topicView.on('addReply', function(entry) {
        entries.add(entry);
        return router.navigate("entry-" + (entry.get('id')), true);
      });
      if (!ENV.DISCUSSION.MANUAL_MARK_AS_READ) {
        return MarkAsReadWatcher.init();
      }
    };
    topicView.render();
    toolbarView.render();
    if (ENV.DISCUSSION.INITIAL_POST_REQUIRED) {
      once = function(entry) {
        initEntries(entry);
        return topicView.off('addReply', once);
      };
      return topicView.on('addReply', once);
    } else {
      return initEntries();
    }
  });

}).call(this);
