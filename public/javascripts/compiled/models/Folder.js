(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore'], function(Backbone, _) {
    var Folder, _ref;

    return Folder = (function(_super) {
      __extends(Folder, _super);

      function Folder() {
        _ref = Folder.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Folder.prototype.defaults = {
        'name': ''
      };

      Folder.prototype.initialize = function() {
        this.setUpFilesAndFoldersIfNeeded();
        return Folder.__super__.initialize.apply(this, arguments);
      };

      Folder.prototype.parse = function(response) {
        this.setUpFilesAndFoldersIfNeeded();
        this.folders.url = response.folders_url;
        this.files.url = response.files_url;
        return Folder.__super__.parse.apply(this, arguments);
      };

      Folder.prototype.setUpFilesAndFoldersIfNeeded = function() {
        if (!this.folders) {
          this.folders = new Backbone.Collection;
          this.folders.model = Folder;
        }
        if (!this.files) {
          return this.files = new Backbone.Collection;
        }
      };

      Folder.prototype.expand = function(force) {
        var fetchDfd, selfHasntBeenFetched,
          _this = this;

        if (force == null) {
          force = false;
        }
        this.isExpanded = true;
        this.trigger('expanded');
        if (!(this.expandDfd || force)) {
          this.isExpanding = true;
          this.trigger('beginexpanding');
          this.expandDfd = $.Deferred().done(function() {
            _this.isExpanding = false;
            return _this.trigger('endexpanding');
          });
          selfHasntBeenFetched = this.folders.url === this.folders.constructor.prototype.url || this.files.url === this.files.constructor.prototype.url;
          if (selfHasntBeenFetched || force) {
            fetchDfd = this.fetch();
          }
          return $.when(fetchDfd).done(function() {
            var filesDfd, foldersDfd;

            if (_this.get('folders_count') !== 0) {
              foldersDfd = _this.folders.fetch();
            }
            if (_this.get('files_count') !== 0) {
              filesDfd = _this.files.fetch();
            }
            return $.when(foldersDfd, filesDfd).done(_this.expandDfd.resolve);
          });
        }
      };

      Folder.prototype.collapse = function() {
        this.isExpanded = false;
        return this.trigger('collapsed');
      };

      Folder.prototype.toggle = function() {
        if (this.isExpanded) {
          return this.collapse();
        } else {
          return this.expand();
        }
      };

      Folder.prototype.contents = function() {
        return _(this.files.models.concat(this.folders.models)).sortBy(function(model) {
          return (model.get('name') || model.get('display_name') || '').toLowerCase();
        });
      };

      Folder.prototype.previewUrlForFile = function(file) {
        var _ref1;

        if ((_ref1 = this.get('context_type')) === 'Course' || _ref1 === 'Group') {
          return "/" + (this.get('context_type').toLowerCase() + 's') + "/" + (this.get('context_id')) + "/files/" + (file.get('id')) + "/preview";
        } else {
          return file.get('url');
        }
      };

      return Folder;

    })(Backbone.Model);
  });

}).call(this);
