(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'jst/quiz_reports/quizReportGenerator', 'compiled/models/QuizReport'], function(_, _arg, quizReportGenerator, QuizReport) {
    var QuizReportGenerator, View, _ref;

    View = _arg.View;
    return QuizReportGenerator = (function(_super) {
      __extends(QuizReportGenerator, _super);

      function QuizReportGenerator() {
        this.reportReady = __bind(this.reportReady, this);        _ref = QuizReportGenerator.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QuizReportGenerator.prototype.template = quizReportGenerator;

      QuizReportGenerator.prototype.initialize = function() {
        var progress;

        if (progress = this.model.get('progress')) {
          this.model.progressModel.set(progress);
        }
        this.model.progressModel.on('change', this.render);
        return this.model.on('progressResolved', this.reportReady);
      };

      QuizReportGenerator.prototype.events = {
        'click .create-report': function() {
          this.autoDownload = true;
          return this.model.save();
        }
      };

      QuizReportGenerator.prototype.reportReady = function() {
        this.render();
        if (this.autoDownload) {
          return this.triggerDownload();
        }
      };

      QuizReportGenerator.prototype.triggerDownload = function() {
        var url;

        url = this.model.get('file').url;
        return $(document.body).append($('<iframe>', {
          style: 'display:none',
          src: url
        }));
      };

      return QuizReportGenerator;

    })(View);
  });

}).call(this);
