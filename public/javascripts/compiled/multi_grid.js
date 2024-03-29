(function() {
  define(['jquery', 'vendor/slickgrid', 'vendor/jquery.scrollTo'], function($, Slick) {
    var MultiGrid, method, _fn, _i, _len, _ref;

    MultiGrid = (function() {
      function MultiGrid(data, default_options, grids, parent_grid) {
        var grid, grid_opts, options,
          _this = this;

        this.data = data;
        this.parent_grid_idx = parent_grid;
        this.grids = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = grids.length; _i < _len; _i++) {
            grid_opts = grids[_i];
            options = $.extend({}, default_options, grid_opts.options);
            grid = new Slick.Grid(grid_opts.selector, this.data, grid_opts.columns, options);
            grid.multiview_grid_opts = grid_opts;
            grid_opts.$viewport = $(grid_opts.selector).find('.slick-viewport');
            if (grid_opts === grids[this.parent_grid_idx]) {
              this.parent_grid = grid;
            } else {
              grid_opts.$viewport.css('overflow-y', 'hidden');
            }
            _results.push(grid);
          }
          return _results;
        }).call(this);
        this.parent_grid.onViewportChanged.subscribe(function() {
          var _i, _len, _ref, _results;

          _ref = _this.grids;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            grid = _ref[_i];
            if (!(grid !== _this.parent_grid)) {
              continue;
            }
            grid.multiview_grid_opts.$viewport[0].scrollTop = _this.parent_grid.multiview_grid_opts.$viewport[0].scrollTop;
            _results.push(grid.multiview_grid_opts.$viewport.trigger('scroll.slickgrid'));
          }
          return _results;
        });
      }

      return MultiGrid;

    })();
    _ref = ['render', 'invalidateRow', 'updateRowCount', 'autosizeColumns', 'resizeCanvas', 'invalidate'];
    _fn = function(method) {
      return MultiGrid.prototype[method] = function() {
        var grid, _j, _len1, _ref1, _results;

        _ref1 = this.grids;
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          grid = _ref1[_j];
          _results.push(grid[method].apply(grid, arguments));
        }
        return _results;
      };
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      method = _ref[_i];
      _fn(method);
    }
    return MultiGrid;
  });

}).call(this);
