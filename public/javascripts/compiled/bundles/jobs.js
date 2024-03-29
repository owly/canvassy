(function() {
  require(['jquery', 'compiled/jobs'], function($, jobs) {
    window.jobs = new jobs.Jobs(ENV.JOBS.opts).init();
    window.running = new jobs.Workers(ENV.JOBS.running_opts).init();
    return window.tags = new jobs.Tags(ENV.JOBS.tags_opts).init();
  });

}).call(this);
