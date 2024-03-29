(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!jobs', 'jquery', 'vendor/slickgrid', 'jquery.ajaxJSON', 'jqueryui/dialog'], function(I18n, $, Slick) {
    var FlavorGrid, Tags, Workers, fillin_job_data, selected_job;

    fillin_job_data = function(job) {
      var _this = this;

      $('#show-job .show-field').each(function(idx, field) {
        var field_name;

        field_name = field.id.replace("job-", '');
        return $(field).text(job[field_name] || '');
      });
      return $('#job-id-link').attr('href', "/jobs?flavor=id&q=" + job.id);
    };
    selected_job = null;
    FlavorGrid = (function() {
      function FlavorGrid(options, type_name, grid_name) {
        this.options = options;
        this.type_name = type_name;
        this.grid_name = grid_name;
        this.change_flavor = __bind(this.change_flavor, this);
        this.refresh = __bind(this.refresh, this);
        this.setTimer = __bind(this.setTimer, this);
        this.data = [];
        this.$element = $(this.grid_name);
        this.setTimer();
        this.query = '';
      }

      FlavorGrid.prototype.setTimer = function() {
        var _this = this;

        setTimeout(this.refresh, 0);
        if (this.options.refresh_rate) {
          return setTimeout((function() {
            return _this.refresh(_this.setTimer);
          }), this.options.refresh_rate);
        }
      };

      FlavorGrid.prototype.refresh = function(cb) {
        var _this = this;

        return this.$element.queue(function() {
          return $.ajaxJSON(_this.options.url, "GET", {
            flavor: _this.options.flavor,
            q: _this.query
          }, function(data) {
            var i, item, _i, _j, _len, _ref, _ref1, _ref2;

            _this.data.length = 0;
            _this.loading = {};
            _ref = data[_this.type_name];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              item = _ref[_i];
              _this.data.push(item);
            }
            if (data.total && data.total > _this.data.length) {
              for (i = _j = _ref1 = _this.data.length, _ref2 = data.total; _ref1 <= _ref2 ? _j < _ref2 : _j > _ref2; i = _ref1 <= _ref2 ? ++_j : --_j) {
                _this.data.push({});
              }
            }
            _this.grid.invalidate();
            if (typeof cb === "function") {
              cb();
            }
            if (typeof _this.updated === "function") {
              _this.updated();
            }
            return _this.$element.dequeue();
          });
        });
      };

      FlavorGrid.prototype.change_flavor = function(flavor) {
        this.options.flavor = flavor;
        this.grid.setSelectedRows([]);
        return this.refresh();
      };

      FlavorGrid.prototype.grid_options = function() {
        return {
          rowHeight: 20
        };
      };

      FlavorGrid.prototype.init = function() {
        this.columns = this.build_columns();
        this.loading = {};
        this.grid = new Slick.Grid(this.grid_name, this.data, this.columns, this.grid_options());
        return this;
      };

      return FlavorGrid;

    })();
    window.Jobs = (function(_super) {
      __extends(Jobs, _super);

      function Jobs(options, type_name, grid_name) {
        if (type_name == null) {
          type_name = 'jobs';
        }
        if (grid_name == null) {
          grid_name = '#jobs-grid';
        }
        this.id_formatter = __bind(this.id_formatter, this);
        this.load = __bind(this.load, this);
        this.attempts_formatter = __bind(this.attempts_formatter, this);
        this.change_flavor = __bind(this.change_flavor, this);
        this.show_search = __bind(this.show_search, this);
        if (options.max_attempts) {
          Jobs.max_attempts = options.max_attempts;
        }
        Jobs.__super__.constructor.call(this, options, type_name, grid_name);
        if (options.starting_query) {
          this.query = options.starting_query;
        }
        this.show_search($('#jobs-flavor').val());
      }

      Jobs.prototype.search = function(query) {
        this.query = query;
        return this.refresh();
      };

      Jobs.prototype.show_search = function(flavor) {
        switch (flavor) {
          case "id":
          case "strand":
          case "tag":
            $('#jobs-search').show();
            return $('#jobs-search').attr('placeholder', flavor);
          default:
            return $('#jobs-search').hide();
        }
      };

      Jobs.prototype.change_flavor = function(flavor) {
        this.show_search(flavor);
        return Jobs.__super__.change_flavor.call(this, flavor);
      };

      Jobs.prototype.attempts_formatter = function(r, c, d) {
        var klass, max, out_of;

        if (!this.data[r].id) {
          return '';
        }
        max = this.data[r].max_attempts || Jobs.max_attempts;
        if (d === 0) {
          klass = '';
        } else if (d < max) {
          klass = 'has-failed-attempts';
        } else if (d === this.options.on_hold_attempt_count) {
          klass = 'on-hold';
          d = 'hold';
        } else {
          klass = 'has-failed-max-attempts';
        }
        out_of = d === 'hold' ? '' : "/ " + max;
        return "<span class='" + klass + "'>" + d + out_of + "</span>";
      };

      Jobs.prototype.load = function(row) {
        var _this = this;

        return this.$element.queue(function() {
          row = row - (row % _this.options.limit);
          if (_this.loading[row]) {
            _this.$element.dequeue();
            return;
          }
          _this.loading[row] = true;
          return $.ajaxJSON(_this.options.url, "GET", {
            flavor: _this.options.flavor,
            q: _this.query,
            offset: row
          }, function(data) {
            var _ref;

            [].splice.apply(_this.data, [row, (row + data[_this.type_name].length) - row].concat(_ref = data[_this.type_name])), _ref;
            _this.grid.invalidate();
            return _this.$element.dequeue();
          });
        });
      };

      Jobs.prototype.id_formatter = function(r, c, d) {
        if (this.data[r].id) {
          return this.data[r].id;
        } else {
          this.load(r);
          return "<span class='unloaded-id'>-</span>";
        }
      };

      Jobs.prototype.build_columns = function() {
        return [
          {
            id: 'id',
            name: I18n.t('columns.id', 'id'),
            field: 'id',
            width: 75,
            formatter: this.id_formatter
          }, {
            id: 'tag',
            name: I18n.t('columns.tag', 'tag'),
            field: 'tag',
            width: 200
          }, {
            id: 'attempts',
            name: I18n.t('columns.attempt', 'attempt'),
            field: 'attempts',
            width: 60,
            formatter: this.attempts_formatter
          }, {
            id: 'priority',
            name: I18n.t('columns.priority', 'priority'),
            field: 'priority',
            width: 70
          }, {
            id: 'strand',
            name: I18n.t('columns.strand', 'strand'),
            field: 'strand',
            width: 100
          }, {
            id: 'run_at',
            name: I18n.t('columns.run_at', 'run at'),
            field: 'run_at',
            width: 165
          }
        ];
      };

      Jobs.prototype.init = function() {
        var _this = this;

        Jobs.__super__.init.call(this);
        this.grid.setSelectionModel(new Slick.RowSelectionModel());
        this.grid.onSelectedRowsChanged.subscribe(function() {
          var row, rows;

          rows = _this.grid.getSelectedRows();
          row = (rows != null ? rows.length : void 0) === 1 ? rows[0] : -1;
          selected_job = _this.data[rows[0]] || {};
          return fillin_job_data(selected_job);
        });
        return this;
      };

      Jobs.prototype.selectAll = function() {
        var _i, _ref, _results;

        this.grid.setSelectedRows((function() {
          _results = [];
          for (var _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this));
        return this.grid.onSelectedRowsChanged.notify();
      };

      Jobs.prototype.onSelected = function(action) {
        var all_jobs, message, params, row;

        params = {
          flavor: this.options.flavor,
          q: this.query,
          update_action: action
        };
        if (this.grid.getSelectedRows().length < 1) {
          alert('No jobs are selected');
          return;
        }
        all_jobs = this.grid.getSelectedRows().length > 1 && this.grid.getSelectedRows().length === this.data.length;
        if (all_jobs) {
          message = (function() {
            switch (action) {
              case 'hold':
                return I18n.t('confirm.hold_all', "Are you sure you want to hold *all* jobs of this type and matching this query?");
              case 'unhold':
                return I18n.t('confirm.unhold_all', "Are you sure you want to unhold *all* jobs of this type and matching this query?");
              case 'destroy':
                return I18n.t('confirm.destroy_all', "Are you sure you want to destroy *all* jobs of this type and matching this query?");
            }
          })();
          if (!confirm(message)) {
            return;
          }
        }
        if (!all_jobs) {
          params.job_ids = (function() {
            var _i, _len, _ref, _results;

            _ref = this.grid.getSelectedRows();
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              row = _ref[_i];
              _results.push(this.data[row].id);
            }
            return _results;
          }).call(this);
        }
        $.ajaxJSON(this.options.batch_update_url, "POST", params, this.refresh);
        return this.grid.setSelectedRows([]);
      };

      Jobs.prototype.updated = function() {
        $('#jobs-total').text(this.data.length);
        if (this.data.length === 1 && this.type_name === 'jobs') {
          this.grid.setSelectedRows([0]);
          return this.grid.onSelectedRowsChanged.notify();
        }
      };

      Jobs.prototype.getFullJobDetails = function(cb) {
        var _this = this;

        if (!selected_job || selected_job.handler) {
          return cb();
        } else {
          return $.ajaxJSON("" + this.options.job_url + "/" + selected_job.id, "GET", {
            flavor: this.options.flavor
          }, function(data) {
            selected_job.handler = data.handler;
            selected_job.last_error = data.last_error;
            fillin_job_data(selected_job);
            return cb();
          });
        }
      };

      return Jobs;

    })(FlavorGrid);
    Workers = (function(_super) {
      __extends(Workers, _super);

      function Workers(options) {
        Workers.__super__.constructor.call(this, options, 'running', '#running-grid');
      }

      Workers.prototype.build_columns = function() {
        var cols;

        cols = [
          {
            id: 'worker',
            name: I18n.t('columns.worker', 'worker'),
            field: 'locked_by',
            width: 175
          }
        ].concat(Workers.__super__.build_columns.call(this));
        cols.pop();
        return cols;
      };

      Workers.prototype.updated = function() {};

      return Workers;

    })(Jobs);
    Tags = (function(_super) {
      __extends(Tags, _super);

      function Tags(options) {
        Tags.__super__.constructor.call(this, options, 'tags', '#tags-grid');
      }

      Tags.prototype.build_columns = function() {
        return [
          {
            id: 'tag',
            name: I18n.t('columns.tag', 'tag'),
            field: 'tag',
            width: 200
          }, {
            id: 'count',
            name: I18n.t('columns.count', 'count'),
            field: 'count',
            width: 50
          }
        ];
      };

      Tags.prototype.grid_options = function() {
        return $.extend(Tags.__super__.grid_options.call(this), {
          enableCellNavigation: false
        });
      };

      return Tags;

    })(FlavorGrid);
    $.extend(window, {
      Jobs: Jobs,
      Workers: Workers,
      Tags: Tags
    });
    $(document).ready(function() {
      var search_event;

      $('#tags-flavor').change(function() {
        return window.tags.change_flavor($(this).val());
      });
      $('#jobs-flavor').change(function() {
        return window.jobs.change_flavor($(this).val());
      });
      $('#jobs-refresh').click(function() {
        return window.jobs.refresh();
      });
      search_event = $('#jobs-search')[0].onsearch === void 0 ? 'change' : 'search';
      $('#jobs-search').bind(search_event, function() {
        return window.jobs.search($(this).val());
      });
      $('#select-all-jobs').click(function() {
        return window.jobs.selectAll();
      });
      $('#hold-jobs').click(function() {
        return window.jobs.onSelected('hold');
      });
      $('#un-hold-jobs').click(function() {
        return window.jobs.onSelected('unhold');
      });
      $('#delete-jobs').click(function() {
        return window.jobs.onSelected('destroy');
      });
      $('#job-handler-show').click(function() {
        window.jobs.getFullJobDetails(function() {
          return $('#job-handler-wrapper').clone().dialog({
            title: I18n.t('titles.job_handler', 'Job Handler'),
            width: 900,
            height: 700,
            modal: true
          });
        });
        return false;
      });
      return $('#job-last_error-show').click(function() {
        window.jobs.getFullJobDetails(function() {
          return $('#job-last_error-wrapper').clone().dialog({
            title: I18n.t('titles.last_error', 'Last Error'),
            width: 900,
            height: 700,
            modal: true
          });
        });
        return false;
      });
    });
    return {
      Jobs: Jobs,
      Workers: Workers,
      Tags: Tags
    };
  });

}).call(this);
