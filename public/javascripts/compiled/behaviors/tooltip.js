(function() {
  define(['underscore', 'jquery', 'jqueryui/tooltip'], function(_, $) {
    var CARET_SIZE, positions, using;

    CARET_SIZE = 5;
    using = function(position, feedback) {
      return $(this).css(position).removeClass("left right top bottom center middle vertical horizontal").addClass([feedback.horizontal, feedback.vertical, feedback.important].join(' '));
    };
    positions = {
      right: {
        my: "left center",
        at: "right+" + CARET_SIZE + " center",
        collision: 'flipfit flipfit'
      },
      left: {
        my: "right center",
        at: "left-" + CARET_SIZE + " center",
        collision: 'flipfit flipfit'
      },
      top: {
        my: "center bottom",
        at: "center top-" + CARET_SIZE,
        collision: 'flipfit flipfit'
      },
      bottom: {
        my: "center top",
        at: "center bottom+" + CARET_SIZE,
        collision: 'flipfit flipfit'
      }
    };
    return $('body').on('mouseenter', '[data-tooltip]', function(event) {
      var $this, opts, _base;

      $this = $(this);
      opts = $this.data('tooltip');
      if (opts in positions) {
        opts = {
          position: opts
        };
      }
      opts || (opts = {});
      opts.position || (opts.position = 'top');
      if (opts.position in positions) {
        opts.position = positions[opts.position];
      }
      if (opts.collision) {
        opts.position.collision = opts.collision;
      }
      (_base = opts.position).using || (_base.using = using);
      return $this.removeAttr('data-tooltip').tooltip(opts).tooltip('open').click(function() {
        return $this.tooltip('close');
      });
    });
  });

}).call(this);
