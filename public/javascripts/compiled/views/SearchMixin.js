(function() {
  define(['i18n!course_users', 'compiled/util/mixin', 'compiled/views/ValidatedMixin', 'jquery.instructure_forms', 'vendor/jquery.placeholder'], function(I18n, mixin, ValidatedMixin) {
    return mixin({}, ValidatedMixin, {
      defaults: {
        paramName: 'search_term'
      },
      initialize: function() {
        return this.collection = this.collectionView.collection;
      },
      attach: function() {
        return this.inputFilterView.on('input', this.fetchResults, this);
      },
      afterRender: function() {
        return this.$el.placeholder();
      },
      fetchResults: function(query) {
        var _ref,
          _this = this;

        if (query === '') {
          this.collection.deleteParam(this.options.paramName);
        } else if (query.length < 3) {
          return;
        } else {
          this.collection.setParam(this.options.paramName, query);
        }
        if ((_ref = this.lastRequest) != null) {
          _ref.abort();
        }
        return this.lastRequest = this.collection.fetch().fail(function() {
          return _this.onFail();
        });
      },
      onFail: function(xhr) {
        var message, parsed;

        if (xhr.statusText === 'abort') {
          return;
        }
        parsed = $.parseJSON(xhr.responseText);
        message = parsed.message === "search_term of 3 or more characters is required" ? I18n.t('greater_than_three', 'Please enter a search term with three or more characters') : I18n.t('unknown_error', 'Something went wrong with your search, please try again.');
        return this.showErrors({
          inputFilter: [
            {
              message: message
            }
          ]
        });
      }
    });
  });

}).call(this);
