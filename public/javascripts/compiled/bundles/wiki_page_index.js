(function() {
  require(['compiled/collections/WikiPageCollection', 'compiled/views/wiki/WikiPageIndexView'], function(WikiPageCollection, WikiPageIndexView) {
    var view;

    view = new WikiPageIndexView({
      collection: new WikiPageCollection
    });
    view.collection.fetch({
      data: {
        sort: 'title',
        per_page: 30
      }
    }).then(function() {
      view.fetched = true;
      if (view.collection.models.length === 0) {
        return view.render();
      }
    });
    return view.render();
  });

}).call(this);
