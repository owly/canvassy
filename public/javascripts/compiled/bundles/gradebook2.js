(function() {
  require(['compiled/gradebook2/Gradebook'], function(Gradebook) {
    return new Gradebook(ENV.GRADEBOOK_OPTIONS);
  });

}).call(this);
