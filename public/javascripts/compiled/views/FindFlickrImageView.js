(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'str/htmlEscape', 'jst/FindFlickrImageView', 'jst/FindFlickrImageResult'], function(Backbone, _, h, template, resultTemplate) {
    var FindFlickrImageView, _ref;

    return FindFlickrImageView = (function(_super) {
      __extends(FindFlickrImageView, _super);

      function FindFlickrImageView() {
        _ref = FindFlickrImageView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FindFlickrImageView.prototype.tagName = 'form';

      FindFlickrImageView.prototype.attributes = {
        'class': 'bootstrap-form form-horizontal FindFlickrImageView'
      };

      FindFlickrImageView.prototype.template = template;

      FindFlickrImageView.prototype.events = {
        'submit': 'searchFlickr',
        'change .flickrSearchTerm': 'hideResultsIfEmptySearch',
        'input .flickrSearchTerm': 'hideResultsIfEmptySearch'
      };

      FindFlickrImageView.prototype.hideResultsIfEmptySearch = function() {
        if (!this.$('.flickrSearchTerm').val()) {
          return this.renderResults([]);
        }
      };

      FindFlickrImageView.prototype.searchFlickr = function(event) {
        var flickrUrl, query, _ref1,
          _this = this;

        if (event != null) {
          event.preventDefault();
        }
        if (!(query = this.$('.flickrSearchTerm').val())) {
          return;
        }
        if (this.flickrUrl) {
          flickrUrl = "" + this.flickrUrl + "/" + query;
        }
        flickrUrl || (flickrUrl = 'https://secure.flickr.com/services/rest/?method=flickr.photos.search&format=json' + '&api_key=734839aadcaa224c4e043eaf74391e50&sort=relevance&license=1,2,3,4,5,6' + ("&text=" + query + "&per_page=150&jsoncallback=?"));
        if ((_ref1 = this.request) != null) {
          _ref1.abort();
        }
        return this.$('.flickrResults').show().disableWhileLoading(this.request = $.getJSON(flickrUrl, function(data) {
          var photos;

          photos = data.photos.photo;
          return _this.renderResults(photos);
        }));
      };

      FindFlickrImageView.prototype.renderResults = function(photos) {
        var html;

        html = _.map(photos, function(photo) {
          return resultTemplate({
            thumb: "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg",
            fullsize: "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg",
            source: "https://secure.flickr.com/photos/" + photo.owner + "/" + photo.id,
            title: photo.title
          });
        });
        return this.$('.flickrResults').showIf(!!photos.length).html(html.join(''));
      };

      return FindFlickrImageView;

    })(Backbone.View);
  });

}).call(this);
