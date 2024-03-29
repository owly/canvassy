(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'jquery', 'underscore', 'Backbone', 'compiled/models/Outcome', 'compiled/models/OutcomeGroup', 'compiled/views/outcomes/OutcomesDirectoryView', 'compiled/views/outcomes/FindDirectoryView'], function(I18n, $, _, Backbone, Outcome, OutcomeGroup, OutcomesDirectoryView, FindDirectoryView) {
    var SidebarView, findDialog, _ref;

    findDialog = void 0;
    return SidebarView = (function(_super) {
      __extends(SidebarView, _super);

      function SidebarView() {
        this.findDialog = __bind(this.findDialog, this);
        this.renderDir = __bind(this.renderDir, this);
        this.goBack = __bind(this.goBack, this);
        this.clearOutcomeSelection = __bind(this.clearOutcomeSelection, this);
        this.refreshSelection = __bind(this.refreshSelection, this);
        this.selectDir = __bind(this.selectDir, this);
        this.addAndSelect = __bind(this.addAndSelect, this);        _ref = SidebarView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SidebarView.prototype.directoryWidth = 200;

      SidebarView.prototype.entryHeight = 30;

      SidebarView.prototype.events = {
        'click .outcome-level': 'clickOutcomeLevel'
      };

      SidebarView.prototype.initialize = function(opts) {
        this.readOnly = opts.readOnly;
        this.selectFirstItem = opts.selectFirstItem;
        this.directories = [];
        this.cachedDirectories = {};
        this.$sidebar = this.$el.parent();
        this.$sidebar.width(this.directoryWidth);
        if (this.rootOutcomeGroup = opts.rootOutcomeGroup) {
          this.addDirFor(this.rootOutcomeGroup);
        } else {
          this.addDir(opts.directoryView);
        }
        return this.render();
      };

      SidebarView.prototype.clickOutcomeLevel = function(e) {
        var clickedOutside, dir;

        clickedOutside = e.target === e.currentTarget;
        if (!clickedOutside) {
          return;
        }
        dir = $(e.target).data('view');
        return this.selectDir(dir);
      };

      SidebarView.prototype.addDirFor = function(outcomeGroup) {
        var dir, directoryClass, parent;

        if (this.cachedDirectories[outcomeGroup.id]) {
          dir = this.cachedDirectories[outcomeGroup.id];
        } else {
          parent = _.last(this.directories);
          directoryClass = outcomeGroup.get('directoryClass') || OutcomesDirectoryView;
          dir = new directoryClass({
            outcomeGroup: outcomeGroup,
            parent: parent,
            readOnly: this.readOnly,
            selectFirstItem: this.selectFirstItem
          });
          this.firstDir = false;
        }
        return this.addDir(dir);
      };

      SidebarView.prototype.addDir = function(dir) {
        if (dir.outcomeGroup) {
          this.cachedDirectories[dir.outcomeGroup.id] = dir;
        }
        dir.off('select');
        dir.on('select', this.selectDir);
        dir.sidebar = this;
        dir.clearSelection();
        this.directories.push(dir);
        this.updateSidebarWidth();
        this.renderDir(dir);
        return dir;
      };

      SidebarView.prototype.addAndSelect = function(model) {
        var dir;

        if (model instanceof Outcome) {
          model.outcomeGroup = this.selectedGroup().toJSON();
        } else {
          model.set('parent_outcome_group', this.selectedGroup().toJSON());
        }
        dir = this._findLastDir(function(d) {
          return !d.selectedModel || d.selectedModel instanceof Outcome;
        });
        if (model instanceof Outcome) {
          dir.outcomes.add(model);
        } else {
          dir.groups.add(model);
        }
        this._scrollToDir(_.indexOf(this.directories, dir), model);
        return model.trigger('select');
      };

      SidebarView.prototype.selectDir = function(dir, selectedModel) {
        var dirsToRemove, i, isAddingDir, scrollIndex, useDir, wantSelectModel, _ref1;

        if (selectedModel && dir === this.selectedDir() && selectedModel === ((_ref1 = this.selectedDir()) != null ? _ref1.prevSelectedModel : void 0)) {
          return;
        }
        useDir = dir ? dir : this.directories[0];
        if (useDir && !selectedModel) {
          useDir.clearSelection();
        }
        i = _.indexOf(this.directories, useDir);
        dirsToRemove = this.directories.splice(i + 1, this.directories.length - (i + 1));
        _.each(dirsToRemove, function(d) {
          return d.remove();
        });
        isAddingDir = selectedModel instanceof OutcomeGroup && !selectedModel.isNew();
        if (isAddingDir) {
          this.addDirFor(selectedModel);
        }
        this.updateSidebarWidth();
        scrollIndex = isAddingDir ? i + 1 : i;
        this._scrollToDir(scrollIndex, selectedModel);
        wantSelectModel = selectedModel;
        if (this.goingBack) {
          if (!useDir.parent) {
            wantSelectModel = null;
          } else {
            wantSelectModel = useDir.outcomeGroup;
          }
        }
        return this.trigger('select', wantSelectModel, this.directories);
      };

      SidebarView.prototype.refreshSelection = function(model) {
        var dir;

        dir = this.selectedDir();
        if (model === dir.selectedModel) {
          dir.clearSelection();
          return model.trigger('select');
        }
      };

      SidebarView.prototype.selectedDir = function() {
        return this._findLastDir(function(d) {
          return d.selectedModel;
        });
      };

      SidebarView.prototype.selectedModel = function() {
        var _ref1;

        return (_ref1 = this.selectedDir()) != null ? _ref1.selectedModel : void 0;
      };

      SidebarView.prototype.selectedGroup = function() {
        var g;

        g = null;
        this._findLastDir(function(d) {
          if (d.selectedModel instanceof OutcomeGroup) {
            return g = d.selectedModel;
          }
        });
        return g || this.rootOutcomeGroup;
      };

      SidebarView.prototype.clearOutcomeSelection = function() {
        return _.last(this.directories).clearOutcomeSelection();
      };

      SidebarView.prototype.goBack = function() {
        var i;

        this.goingBack = true;
        if (this.selectedModel() instanceof OutcomeGroup) {
          this.selectDir(this.selectedDir());
        } else {
          i = _.indexOf(this.directories, this.selectedDir());
          this.selectDir(this.directories[i - 1]);
        }
        return this.goingBack = false;
      };

      SidebarView.prototype.updateSidebarWidth = function() {
        var sidebarWidth;

        sidebarWidth = this.directories.length === 1 ? this.directoryWidth + 1 : (this.directoryWidth * 2) + 2;
        this.$el.css({
          width: (this.directoryWidth * this.directories.length) + this.directories.length
        });
        return this.$sidebar.animate({
          width: sidebarWidth
        });
      };

      SidebarView.prototype.renderDir = function(dir) {
        return this.$el.append(dir.render().el);
      };

      SidebarView.prototype.render = function() {
        this.$el.empty();
        _.each(this.directories, this.renderDir);
        return this;
      };

      SidebarView.prototype.findDialog = function(FindDialog) {
        if (!findDialog) {
          findDialog = new FindDialog({
            title: I18n.t('titles.find_outcomes', 'Find Outcomes'),
            selectedGroup: this.selectedGroup(),
            directoryView: new FindDirectoryView({
              outcomeGroup: this.selectedGroup()
            })
          });
          findDialog.on('import', this.addAndSelect, this);
        }
        return findDialog.show();
      };

      SidebarView.prototype.dirForGroup = function(outcomeGroup) {
        return _.find(this.directories, function(d) {
          return d.outcomeGroup === outcomeGroup;
        }) || this.addDirFor(outcomeGroup);
      };

      SidebarView.prototype._scrollToDir = function(dirIndex, model) {
        var scrollLeft, scrollTop;

        scrollLeft = (this.directoryWidth + 1) * (model instanceof Outcome ? dirIndex - 1 : dirIndex);
        this.$sidebar.animate({
          scrollLeft: scrollLeft
        }, {
          duration: 200
        });
        scrollTop = (this.entryHeight + 1) * _.indexOf(this.directories[dirIndex].views(), _.find(this.directories[dirIndex].views(), function(v) {
          return v.model === model;
        }));
        return this.directories[dirIndex].$el.animate({
          scrollTop: scrollTop
        }, {
          duration: 200
        });
      };

      SidebarView.prototype._findLastDir = function(f) {
        return _.find(_.clone(this.directories).reverse(), f) || _.last(this.directories);
      };

      return SidebarView;

    })(Backbone.View);
  });

}).call(this);
