(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  define(['underscore', 'compiled/class/cache', 'vendor/spin', 'jst/util/select/optgroups', 'jst/util/select/options'], function(_, cache, Spinner, optGroupTpl, optsTpl) {
    var RemoteSelect;

    return RemoteSelect = (function() {
      RemoteSelect.prototype.defaultOptions = {
        cache: true,
        formatter: function(d) {
          return d;
        },
        requestParams: {},
        start: true,
        url: window.location.href
      };

      RemoteSelect.prototype.spinnerOptions = {
        lines: 10,
        length: 3,
        radius: 3,
        speed: 1,
        trail: 60,
        width: 2
      };

      function RemoteSelect(el, options) {
        this.el = el;
        this.options = options;
        this.stopSpinner = __bind(this.stopSpinner, this);
        this.startSpinner = __bind(this.startSpinner, this);
        this.currentKey = __bind(this.currentKey, this);
        this.onResponse = __bind(this.onResponse, this);
        this.options = _.extend({}, this.defaultOptions, this.options);
        if (this.options.cache) {
          $.extend(true, this, cache);
        }
        this.body = $('body');
        this.options.placeholder = this.el.html();
        if (this.options.start === true) {
          this.makeRequest();
        }
      }

      RemoteSelect.prototype.makeRequest = function(params) {
        var cachedValue,
          _this = this;

        if (params == null) {
          params = {};
        }
        params = _.extend({}, this.options.requestParams, params);
        this.el.prop('disabled', true);
        if (this.options.cache) {
          if (cachedValue = this.cache.get([this.options.url, params])) {
            return this.onResponse(cachedValue);
          }
        }
        this.startSpinner();
        this.currentRequest = $.getJSON(this.options.url, params, this.onResponse);
        return _.tap(this.currentRequest, function(obj) {
          obj.url = _this.options.url;
          obj.params = params;
          return obj.error(_this.stopSpinner);
        });
      };

      RemoteSelect.prototype.onResponse = function(data) {
        var fData, template;

        fData = this.options.formatter(data);
        template = this.getTemplate(fData);
        if (this.shouldCache(this.currentKey())) {
          this.cache.set(this.currentKey(), data);
        }
        this.el.empty().append(this.options.placeholder).append(template(fData));
        this.stopSpinner();
        return this.el.prop('disabled', false);
      };

      RemoteSelect.prototype.currentKey = function() {
        return [this.options.url, this.currentRequest.params];
      };

      RemoteSelect.prototype.shouldCache = function() {
        var key;

        key = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return this.options.cache && !this.cache.get(key);
      };

      RemoteSelect.prototype.getTemplate = function(data) {
        if (_.isArray(data)) {
          return optsTpl;
        } else {
          return optGroupTpl;
        }
      };

      RemoteSelect.prototype.startSpinner = function() {
        this.spinner = $(new Spinner(this.spinnerOptions).spin().el);
        this.spinner.css(this.toTheRightOf(this.el));
        return this.body.append(this.spinner);
      };

      RemoteSelect.prototype.stopSpinner = function() {
        return this.spinner.remove();
      };

      RemoteSelect.prototype.toTheRightOf = function(el) {
        return this.spinnerCss || (this.spinnerCss = {
          left: el.offset().left + el.width() + 10,
          position: 'absolute',
          top: el.offset().top + el.height() / 2,
          zIndex: 9999
        });
      };

      return RemoteSelect;

    })();
  });

}).call(this);
