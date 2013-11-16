(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['Backbone', 'underscore', 'compiled/fn/preventDefault', 'compiled/models/Folder', 'jst/FolderTreeItem'], function(Backbone, _, preventDefault, Folder, treeItemTemplate) {
    var FolderTreeView, _ref;

    return FolderTreeView = (function(_super) {
      __extends(FolderTreeView, _super);

      function FolderTreeView() {
        _ref = FolderTreeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FolderTreeView.prototype.tagName = 'li';

      FolderTreeView.prototype.attributes = function() {
        return {
          'role': 'treeitem',
          'aria-expanded': "" + (!!this.model.isExpanded)
        };
      };

      FolderTreeView.prototype.events = {
        'click .folderLabel': 'toggle'
      };

      FolderTreeView.prototype.initialize = function() {
        this.model.on('all', this.render, this);
        this.model.files.on('all', this.render, this);
        this.model.folders.on('all', this.render, this);
        this.render();
        return FolderTreeView.__super__.initialize.apply(this, arguments);
      };

      FolderTreeView.prototype.render = function() {
        var $focusedChild;

        $focusedChild = this.$(document.activeElement);
        this.renderSelf();
        this.renderContents();
        if ($focusedChild.length) {
          return this.$el.find($focusedChild).focus();
        }
      };

      FolderTreeView.prototype.toggle = function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.model.toggle();
        return this.$el.attr(this.attributes());
      };

      FolderTreeView.prototype.title_text = function() {
        return this.model.get('custom_name') || this.model.get('name');
      };

      FolderTreeView.prototype.renderSelf = function() {
        this.$label || (this.$label = $("<a class='folderLabel' href='#' title='" + (this.title_text()) + "'/>").prependTo(this.$el));
        return this.$label.text(this.title_text()).toggleClass('expanded', !!this.model.isExpanded).toggleClass('loading after', !!this.model.isExpanding);
      };

      FolderTreeView.prototype.renderContents = function() {
        var _ref1,
          _this = this;

        if ((_ref1 = this.$folderContents) != null) {
          _ref1.detach();
        }
        if (this.model.isExpanded) {
          this.$folderContents = $("<ul role='group' />").appendTo(this.$el);
          return _.each(this.model.contents(), function(model) {
            var node, _name, _ref2;

            node = _this[_name = "viewFor_" + model.cid] || (_this[_name] = model.constructor === Folder ? new FolderTreeView({
              model: model,
              contentTypes: _this.options.contentTypes
            }).el : !_this.options.contentTypes || (_ref2 = model.get('content-type'), __indexOf.call(_this.options.contentTypes, _ref2) >= 0) ? $(treeItemTemplate({
              title: model.get('display_name'),
              thumbnail_url: model.get('thumbnail_url'),
              preview_url: _this.model.previewUrlForFile(model)
            })) : void 0);
            if (node) {
              return _this.$folderContents.append(node);
            }
          });
        }
      };

      return FolderTreeView;

    })(Backbone.View);
  });

}).call(this);
