(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/str/splitAssetString'], function(Backbone, splitAssetString) {
    var WikiPage, _ref;

    return WikiPage = (function(_super) {
      __extends(WikiPage, _super);

      function WikiPage() {
        _ref = WikiPage.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPage.prototype.resourceName = 'pages';

      WikiPage.prototype.parse = function(response, options) {
        response.id = response.url;
        return response;
      };

      WikiPage.prototype.toJSON = function() {
        var assetString, contextId, contextType, json, resourceName, _ref1, _ref2, _ref3;

        json = WikiPage.__super__.toJSON.apply(this, arguments);
        assetString = ((_ref1 = this.collection) != null ? _ref1.contextAssetString : void 0) || ENV.context_asset_string;
        resourceName = ((_ref2 = this.collection) != null ? _ref2.resourceName : void 0) || this.resourceName;
        if (json.url && assetString && resourceName) {
          _ref3 = splitAssetString(assetString), contextType = _ref3[0], contextId = _ref3[1];
          json.htmlUrl = "/" + contextType + "/" + contextId + "/" + resourceName + "/" + json.url;
        }
        return json;
      };

      return WikiPage;

    })(Backbone.Model);
  });

}).call(this);
