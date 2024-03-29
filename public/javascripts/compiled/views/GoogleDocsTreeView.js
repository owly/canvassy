(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!titles', 'jquery', 'Backbone', 'jst/googleDocsTreeView'], function(I18n, $, Backbone, template) {
    var GoogleDocsTreeView, _ref;

    return GoogleDocsTreeView = (function(_super) {
      __extends(GoogleDocsTreeView, _super);

      function GoogleDocsTreeView() {
        this.activateFolder = __bind(this.activateFolder, this);
        this.activateFile = __bind(this.activateFile, this);        _ref = GoogleDocsTreeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GoogleDocsTreeView.prototype.template = template;

      GoogleDocsTreeView.prototype.initialize = function(options) {};

      GoogleDocsTreeView.prototype.events = {
        "click li.file": "activateFile",
        "click li.folder": "activateFolder"
      };

      GoogleDocsTreeView.prototype.render = function() {
        var title_text;

        title_text = I18n.t('view_in_separate_window', "View in Separate Window");
        this.$el.html(this.template({
          tree: this.model,
          title_text: title_text
        }));
        return this.$el.instTree({
          autoclose: false,
          multi: false,
          dragdrop: false
        });
      };

      GoogleDocsTreeView.prototype.activateFile = function(event) {
        var $target, file_id;

        if (this.$(event.target).closest(".popout").length > 0) {
          return;
        }
        $target = this.$(event.currentTarget);
        event.preventDefault();
        event.stopPropagation();
        this.$(".file.active").removeClass('active');
        $target.addClass('active');
        file_id = $target.attr('id').substring(9);
        return this.trigger('activate-file', file_id);
      };

      GoogleDocsTreeView.prototype.activateFolder = function(event) {
        var $target;

        $target = this.$(event.target);
        if ($target.closest('.sign').length === 0 && $target.closest('.file,.folder').hasClass('folder')) {
          return this.$(event.currentTarget).find(".sign").click();
        }
      };

      GoogleDocsTreeView.prototype.tagName = 'ul';

      GoogleDocsTreeView.prototype.id = 'google_docs_tree';

      GoogleDocsTreeView.prototype.attributes = {
        style: 'width: 100%;'
      };

      return GoogleDocsTreeView;

    })(Backbone.View);
  });

}).call(this);
