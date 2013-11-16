(function() {
  require(['compiled/views/collaborations/CollaborationsPage', 'collaborations'], function(CollaborationsPage) {
    var page;

    return page = new CollaborationsPage({
      el: $('body')
    });
  });

}).call(this);
