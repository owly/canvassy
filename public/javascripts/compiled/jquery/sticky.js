(function() {
  define(['underscore', 'jquery'], function(_, $) {
    var Sticky;

    Sticky = (function() {
      Sticky.instances = [];

      Sticky.initialized = false;

      Sticky.$container = $(window);

      Sticky.initialize = function() {
        this.$container.on('scroll', _.debounce(this.checkInstances, 10));
        return this.initialized = true;
      };

      Sticky.addInstance = function(instance) {
        if (!this.initialized) {
          this.initialize();
        }
        this.instances.push(instance);
        return this.checkInstances();
      };

      Sticky.checkInstances = function() {
        var containerTop, instance, _i, _len, _ref;

        containerTop = Sticky.$container.scrollTop();
        _ref = Sticky.instances;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          instance = _ref[_i];
          if (containerTop >= instance.top) {
            if (!instance.stuck) {
              instance.stick();
            }
          } else {
            if (instance.stuck) {
              instance.unstick();
            }
          }
        }
        return null;
      };

      function Sticky($el) {
        this.$el = $el;
        this.top = this.$el.offset().top;
        this.stuck = false;
        this.constructor.addInstance(this);
      }

      Sticky.prototype.stick = function() {
        this.$el.addClass('sticky');
        return this.stuck = true;
      };

      Sticky.prototype.unstick = function() {
        this.$el.removeClass('sticky');
        return this.stuck = false;
      };

      return Sticky;

    }).call(this);
    $.fn.sticky = function() {
      return this.each(function() {
        return new Sticky($(this));
      });
    };
    $(function() {
      return $('[data-sticky]').sticky();
    });
    return Sticky;
  });

}).call(this);
