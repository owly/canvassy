(function() {
  require(['jquery', 'compiled/collections/PageViewCollection', 'compiled/views/contexts/PageViewView'], function($, PageViewCollection, PageViewView) {
    var $container, $table, fetchOptions, fetchParams, pageViews, pageViewsView, userId;

    $container = $('#pageviews');
    $table = $container.find('table');
    userId = $table.data('userId');
    pageViews = new PageViewCollection;
    pageViews.url = "/api/v1/users/" + userId + "/page_views";
    fetchOptions = {
      add: false
    };
    pageViewsView = new PageViewView({
      collection: pageViews,
      el: $table,
      fetchOptions: fetchOptions
    });
    pageViews.on('reset', pageViewsView.render, pageViewsView);
    fetchParams = {
      per_page: 100
    };
    return pageViewsView.$el.disableWhileLoading(pageViews.fetch({
      data: fetchParams
    }));
  });

}).call(this);
