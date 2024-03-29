(function() {
  require(['compiled/models/QuizReport', 'compiled/views/quiz_reports/QuizReportGenerator', 'quiz_statistics'], function(QuizReport, QuizReportGenerator) {
    var $container, el, model, report, _i, _len, _ref, _results;

    $container = $('.quiz-reports');
    _ref = ENV.quiz_reports;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      report = _ref[_i];
      el = $('<div>').appendTo($container);
      model = new QuizReport(report);
      _results.push(new QuizReportGenerator({
        el: el,
        model: model
      }).render());
    }
    return _results;
  });

}).call(this);
