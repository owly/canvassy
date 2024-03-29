(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!paginated_list', 'vendor/spin'], function(I18n, Spinner) {
    var PaginatedList;

    return PaginatedList = (function() {
      PaginatedList.prototype.keys = {
        noResults: I18n.t('no_results_found', 'No Results'),
        viewMore: I18n.t('view_more_link', 'View More')
      };

      PaginatedList.prototype.spinnerOptions = {
        length: 4,
        lines: 12,
        radius: 7,
        width: 2
      };

      PaginatedList.prototype.defaultOptions = {
        presenter: false,
        requestParams: {
          page: 1,
          per_page: 25
        },
        start: true,
        template: $.noop,
        url: ''
      };

      function PaginatedList(el, options) {
        this.onResponse = __bind(this.onResponse, this);
        this.getData = __bind(this.getData, this);        this.cacheElements(el);
        this.options = $.extend({}, this.defaultOptions, options);
        this.addEvents();
        if (this.options.start) {
          this.getData();
        }
      }

      PaginatedList.prototype.cacheElements = function(el) {
        this.el = {
          wrapper: el,
          list: el.find('ul:first')
        };
        if (this.el.wrapper.css('position') === 'static') {
          return this.el.wrapper.css('position', 'relative');
        }
      };

      PaginatedList.prototype.addEvents = function() {
        return this.el.wrapper.delegate('.view-more-link', 'click', this.getData);
      };

      PaginatedList.prototype.getData = function(e) {
        if (e) {
          e.preventDefault();
        }
        this.startSpinner(e);
        return this.currentRequest = $.getJSON(this.options.url, this.options.requestParams, this.onResponse);
      };

      PaginatedList.prototype.onResponse = function(data) {
        this.stopSpinner();
        if (data.length === 0) {
          return this.noResults();
        }
        if (this.options.presenter) {
          data = this.options.presenter(data);
        }
        this.animateInResults($(this.options.template(data)));
        return this.updatePaging();
      };

      PaginatedList.prototype.startSpinner = function(spinnerOnBottom) {
        this.spinner = new Spinner(this.spinnerOptions).spin(this.el.wrapper[0]).el;
        if (spinnerOnBottom != null) {
          return $(this.spinner).css({
            bottom: 10,
            top: 'auto'
          });
        }
      };

      PaginatedList.prototype.stopSpinner = function() {
        return $(this.spinner).remove();
      };

      PaginatedList.prototype.animateInResults = function(results) {
        var empty;

        empty = this.el.list.children().length === 0;
        results.css('display', 'none');
        this.el.list.append(results);
        return results.slideDown();
      };

      PaginatedList.prototype.updatePaging = function() {
        if (this.hasNextPage()) {
          this.options.requestParams.page++;
          if (!this.pageLinkPresent) {
            this.el.wrapper.append(this.viewMoreLink());
            return this.pageLinkPresent = true;
          }
        } else {
          return this.el.wrapper.find('.view-more-link').remove();
        }
      };

      PaginatedList.prototype.hasNextPage = function() {
        return this.currentRequest.getAllResponseHeaders().match(/rel="next"/);
      };

      PaginatedList.prototype.viewMoreLink = function() {
        return '<a class="view-more-link" href="#">' + this.keys.viewMore + '</a>';
      };

      PaginatedList.prototype.noResults = function() {
        return this.el.list.append("<li>" + this.keys.noResults + "</li>");
      };

      return PaginatedList;

    })();
  });

}).call(this);
