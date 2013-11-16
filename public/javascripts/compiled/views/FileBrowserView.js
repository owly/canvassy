(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!filebrowserview', 'Backbone', 'underscore', 'jst/FileBrowserView', 'compiled/views/FolderTreeView', 'compiled/models/Folder', 'compiled/str/splitAssetString'], function(I18n, Backbone, _, template, FolderTreeView, Folder, splitAssetString) {
    var FileBrowserView, _ref;

    return FileBrowserView = (function(_super) {
      __extends(FileBrowserView, _super);

      function FileBrowserView() {
        _ref = FileBrowserView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FileBrowserView.prototype.template = template;

      FileBrowserView.prototype.rootFolders = function() {
        return FileBrowserView.rootFolders || (FileBrowserView.rootFolders = (function() {
          var contextFiles, contextTypeAndId, myFiles, result;

          contextFiles = null;
          contextTypeAndId = splitAssetString(ENV.context_asset_string || '');
          if (contextTypeAndId && contextTypeAndId.length === 2 && (contextTypeAndId[0] === 'courses' || contextTypeAndId[0] === 'groups')) {
            contextFiles = new Folder;
            contextFiles.set('custom_name', contextTypeAndId[0] === 'courses' ? I18n.t('course_files', 'Course files') : I18n.t('group_files', 'Group files'));
            contextFiles.url = "/api/v1/" + contextTypeAndId[0] + "/" + contextTypeAndId[1] + "/folders/root";
            contextFiles.fetch();
          }
          myFiles = new Folder;
          myFiles.set('custom_name', I18n.t('my_files', 'My files'));
          myFiles.url = '/api/v1/users/self/folders/root';
          myFiles.fetch();
          result = [];
          if (contextFiles) {
            result.push(contextFiles);
          }
          result.push(myFiles);
          return result;
        })());
      };

      FileBrowserView.prototype.initialize = function() {
        var _ref1;

        this.contentTypes = (_ref1 = this.options) != null ? _ref1.contentTypes : void 0;
        return FileBrowserView.__super__.initialize.apply(this, arguments);
      };

      FileBrowserView.prototype.afterRender = function() {
        var folder, _i, _len, _ref1;

        this.$folderTree = this.$el.children('.folderTree');
        _ref1 = this.rootFolders();
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          folder = _ref1[_i];
          new FolderTreeView({
            model: folder,
            contentTypes: this.contentTypes
          }).$el.appendTo(this.$folderTree);
        }
        return FileBrowserView.__super__.afterRender.apply(this, arguments);
      };

      return FileBrowserView;

    })(Backbone.View);
  });

}).call(this);
