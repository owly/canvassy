(function() {
  define(['underscore'], function(_) {
    var GradeCalculator, partition;

    partition = function(list, f) {
      var falseList, trueList;

      trueList = [];
      falseList = [];
      _(list).each(function(x) {
        return (f(x) ? trueList : falseList).push(x);
      });
      return [trueList, falseList];
    };
    return GradeCalculator = (function() {
      function GradeCalculator() {}

      GradeCalculator.calculate = function(submissions, groups, weighting_scheme) {
        var result,
          _this = this;

        result = {};
        result.group_sums = _(groups).map(function(group) {
          return {
            group: group,
            current: _this.create_group_sum(group, submissions, true),
            'final': _this.create_group_sum(group, submissions, false)
          };
        });
        result.current = this.calculate_total(result.group_sums, true, weighting_scheme);
        result['final'] = this.calculate_total(result.group_sums, false, weighting_scheme);
        return result;
      };

      GradeCalculator.create_group_sum = function(group, submissions, ignoreUngraded) {
        var arrayToObj, assignments, dummySubmissions, gradeableAssignments, kept, missingSubmissions, possible, relevantSubmissionData, ret, score, submissionAssignmentIds, submissionData, submissionsByAssignment, _ref,
          _this = this;

        arrayToObj = function(arr, property) {
          var e, obj, _i, _len;

          obj = {};
          for (_i = 0, _len = arr.length; _i < _len; _i++) {
            e = arr[_i];
            obj[e[property]] = e;
          }
          return obj;
        };
        gradeableAssignments = _(group.assignments).filter(function(a) {
          return !_.isEqual(a.submission_types, ['not_graded']);
        });
        assignments = arrayToObj(gradeableAssignments, "id");
        submissions = _(submissions).filter(function(s) {
          return assignments[s.assignment_id] != null;
        });
        if (!ignoreUngraded) {
          submissionAssignmentIds = _(submissions).map(function(s) {
            return s.assignment_id.toString();
          });
          missingSubmissions = _.difference(_.keys(assignments), submissionAssignmentIds);
          dummySubmissions = _(missingSubmissions).map(function(assignmentId) {
            var s;

            return s = {
              assignment_id: assignmentId,
              score: null
            };
          });
          submissions.push.apply(submissions, dummySubmissions);
        }
        submissionsByAssignment = arrayToObj(submissions, "assignment_id");
        submissionData = _(submissions).map(function(s) {
          var sub;

          return sub = {
            total: _this.parse(assignments[s.assignment_id].points_possible),
            score: _this.parse(s.score),
            submitted: (s.score != null) && s.score !== '',
            submission: s
          };
        });
        relevantSubmissionData = ignoreUngraded ? _(submissionData).filter(function(s) {
          return s.submitted;
        }) : submissionData;
        kept = this.dropAssignments(relevantSubmissionData, group.rules);
        _ref = _.reduce(kept, function(_arg, _arg1) {
          var score, scoreSum, total, totalSum;

          scoreSum = _arg[0], totalSum = _arg[1];
          score = _arg1.score, total = _arg1.total;
          return [scoreSum + _this.parse(score), totalSum + total];
        }, [0, 0]), score = _ref[0], possible = _ref[1];
        return ret = {
          possible: possible,
          score: score,
          submission_count: (_(submissionData).filter(function(s) {
            return s.submitted;
          })).length,
          submissions: _(submissionData).map(function(s) {
            var submissionRet;

            return submissionRet = {
              drop: s.drop,
              percent: _this.parse(s.score / s.total),
              possible: s.total,
              score: _this.parse(s.score),
              submission: s.submission,
              submitted: s.submitted
            };
          })
        };
      };

      GradeCalculator.dropAssignments = function(submissions, rules) {
        var cantDrop, dropHighest, dropLowest, dropped, hasPointed, keepHighest, keepLowest, kept, neverDropIds, s, _i, _len, _ref;

        rules || (rules = {});
        dropLowest = rules.drop_lowest || 0;
        dropHighest = rules.drop_highest || 0;
        neverDropIds = rules.never_drop || [];
        if (!(dropLowest || dropHighest)) {
          return submissions;
        }
        if (neverDropIds.length > 0) {
          _ref = partition(submissions, function(s) {
            return _.indexOf(neverDropIds, parseInt(s.submission.assignment_id)) >= 0;
          }), cantDrop = _ref[0], submissions = _ref[1];
        } else {
          cantDrop = [];
        }
        if (submissions.length === 0) {
          return cantDrop;
        }
        if (dropLowest >= submissions.length) {
          dropLowest = submissions.length - 1;
        }
        if (dropLowest + dropHighest >= submissions.length) {
          dropHighest = 0;
        }
        keepHighest = submissions.length - dropLowest;
        keepLowest = keepHighest - dropHighest;
        submissions.sort(function(a, b) {
          return a.submission.assignment_id - b.submission.assignment_id;
        });
        hasPointed = ((function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = submissions.length; _i < _len; _i++) {
            s = submissions[_i];
            if (s.total > 0) {
              _results.push(s.total);
            }
          }
          return _results;
        })()).length > 0;
        kept = hasPointed ? this.dropPointed(submissions, cantDrop, keepHighest, keepLowest) : this.dropUnpointed(submissions, keepHighest, keepLowest);
        kept.push.apply(kept, cantDrop);
        dropped = _.difference(submissions, kept);
        for (_i = 0, _len = dropped.length; _i < _len; _i++) {
          s = dropped[_i];
          s.drop = true;
        }
        return kept;
      };

      GradeCalculator.dropUnpointed = function(submissions, keepHighest, keepLowest) {
        var sortedSubmissions;

        sortedSubmissions = submissions.sort(function(a, b) {
          return a.score - b.score;
        });
        return _.chain(sortedSubmissions).last(keepHighest).first(keepLowest).value();
      };

      GradeCalculator.dropPointed = function(submissions, cantDrop, keepHighest, keepLowest) {
        var keepHelper, kept, maxTotal, s, totals,
          _this = this;

        totals = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = submissions.length; _i < _len; _i++) {
            s = submissions[_i];
            _results.push(s.total);
          }
          return _results;
        })();
        maxTotal = Math.max.apply(Math, totals);
        keepHelper = function(submissions, keep, bigFSort) {
          var allSubmissions, bigF, grades, kept, pointed, qHigh, qLow, qMid, threshold, unpointed, x, _ref, _ref1, _ref2;

          if (keep <= 0) {
            keep = 1;
          }
          if (submissions.length <= keep) {
            return submissions;
          }
          allSubmissions = submissions.concat(cantDrop);
          _ref = partition(allSubmissions, function(s) {
            return s.total === 0;
          }), unpointed = _ref[0], pointed = _ref[1];
          grades = ((function() {
            var _i, _len, _results;

            _results = [];
            for (_i = 0, _len = pointed.length; _i < _len; _i++) {
              s = pointed[_i];
              _results.push(s.score / s.total);
            }
            return _results;
          })()).sort(function(a, b) {
            return a - b;
          });
          qHigh = _this.estimateQHigh(pointed, unpointed, grades);
          qLow = grades[0];
          qMid = (qLow + qHigh) / 2;
          bigF = function(q, submissions) {
            var keptScores, keptSubmissions, qCantDrop, qKept, rankedScores, ratedScore, ratedScores;

            ratedScores = _(submissions).map(function(s) {
              var ratedScore;

              ratedScore = s.score - q * s.total;
              return [ratedScore, s];
            });
            rankedScores = ratedScores.sort(bigFSort);
            keptScores = rankedScores.slice(0, keep);
            qKept = _.reduce(keptScores, function(sum, _arg) {
              var ratedScore, s;

              ratedScore = _arg[0], s = _arg[1];
              return sum + ratedScore;
            }, 0);
            keptSubmissions = (function() {
              var _i, _len, _ref1, _results;

              _results = [];
              for (_i = 0, _len = keptScores.length; _i < _len; _i++) {
                _ref1 = keptScores[_i], ratedScore = _ref1[0], s = _ref1[1];
                _results.push(s);
              }
              return _results;
            })();
            qCantDrop = _.reduce(cantDrop, (function(sum, s) {
              return sum + s.score - q * s.total;
            }), 0);
            return [qKept + qCantDrop, keptSubmissions];
          };
          _ref1 = bigF(qMid, submissions), x = _ref1[0], kept = _ref1[1];
          threshold = 1 / (2 * keep * Math.pow(maxTotal, 2));
          while (!(qHigh - qLow < threshold)) {
            if (x < 0) {
              qHigh = qMid;
            } else {
              qLow = qMid;
            }
            qMid = (qLow + qHigh) / 2;
            if (qMid === qHigh || qMid === qLow) {
              break;
            }
            _ref2 = bigF(qMid, submissions), x = _ref2[0], kept = _ref2[1];
          }
          return kept;
        };
        kept = keepHelper(submissions, keepHighest, function(_arg, _arg1) {
          var a, b, xx, yy;

          a = _arg[0], xx = _arg[1];
          b = _arg1[0], yy = _arg1[1];
          return b - a;
        });
        return kept = keepHelper(kept, keepLowest, function(_arg, _arg1) {
          var a, b, xx, yy;

          a = _arg[0], xx = _arg[1];
          b = _arg1[0], yy = _arg1[1];
          return a - b;
        });
      };

      GradeCalculator.estimateQHigh = function(pointed, unpointed, grades) {
        var bestPointedScore, maxScore, pointsPossible, qHigh, unpointedScore;

        if (unpointed.length > 0) {
          pointsPossible = _(pointed).reduce((function(sum, s) {
            return sum + s.total;
          }), 0);
          bestPointedScore = Math.max(pointsPossible, _(pointed).reduce((function(sum, s) {
            return sum + s.score;
          }), 0));
          unpointedScore = _(unpointed).reduce((function(sum, s) {
            return sum + s.score;
          }), 0);
          maxScore = bestPointedScore + unpointedScore;
          return maxScore / pointsPossible;
        } else {
          return qHigh = grades[grades.length - 1];
        }
      };

      GradeCalculator.calculate_total = function(groupSums, ignoreUngraded, weightingScheme) {
        var currentOrFinal, finalGrade, fullWeight, possible, relevantGroupSums, ret, score, _ref;

        currentOrFinal = ignoreUngraded ? 'current' : 'final';
        groupSums = _(groupSums).map(function(gs) {
          gs[currentOrFinal].weight = gs.group.group_weight;
          return gs[currentOrFinal];
        });
        if (weightingScheme === 'percent') {
          relevantGroupSums = _(groupSums).filter(function(gs) {
            return gs.possible;
          });
          finalGrade = _.reduce(relevantGroupSums, function(grade, gs) {
            return grade + (gs.score / gs.possible) * gs.weight;
          }, 0);
          fullWeight = _.reduce(relevantGroupSums, (function(w, _arg) {
            var weight;

            weight = _arg.weight;
            return w + weight;
          }), 0);
          if (fullWeight === 0) {
            finalGrade = null;
          } else if (fullWeight < 100) {
            finalGrade *= 100 / fullWeight;
          }
          return ret = {
            score: finalGrade && Math.round(finalGrade * 10) / 10,
            possible: 100
          };
        } else {
          _ref = _.reduce(groupSums, function(_arg, _arg1) {
            var m, n, possible, score;

            m = _arg[0], n = _arg[1];
            score = _arg1.score, possible = _arg1.possible;
            return [m + score, n + possible];
          }, [0, 0]), score = _ref[0], possible = _ref[1];
          return ret = {
            score: score,
            possible: possible
          };
        }
      };

      GradeCalculator.parse = function(score) {
        var result;

        result = parseFloat(score);
        if (result && isFinite(result)) {
          return result;
        } else {
          return 0;
        }
      };

      GradeCalculator.letter_grade = function(grading_scheme, score) {
        var letter, letters;

        if (score < 0) {
          score = 0;
        }
        letters = _(grading_scheme).filter(function(row, i) {
          return score >= row[1] * 100 || i === (grading_scheme.length - 1);
        });
        letter = letters[0];
        return letter[0];
      };

      return GradeCalculator;

    })();
  });

}).call(this);
