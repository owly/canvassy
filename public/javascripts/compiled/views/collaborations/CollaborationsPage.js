(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/views/collaborations/CollaborationView', 'compiled/views/collaborations/CollaborationFormView'], function(_arg, _arg1, CollaborationView, CollaborationFormView) {
    var CollaborationsPage, View, each, reject, _ref;

    each = _arg.each, reject = _arg.reject;
    View = _arg1.View;
    return CollaborationsPage = (function(_super) {
      __extends(CollaborationsPage, _super);

      function CollaborationsPage() {
        this.onFormError = __bind(this.onFormError, this);
        this.onFormHide = __bind(this.onFormHide, this);
        this.onCollaborationDelete = __bind(this.onCollaborationDelete, this);
        this.initPageState = __bind(this.initPageState, this);        _ref = CollaborationsPage.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CollaborationsPage.prototype.events = {
        'click .add_collaboration_link': 'addCollaboration'
      };

      CollaborationsPage.prototype.initialize = function() {
        this.cacheElements();
        this.createViews();
        this.attachEvents();
        return $(document).on('ready', this.initPageState);
      };

      CollaborationsPage.prototype.initPageState = function() {
        if ($('#collaborations .collaboration:visible').length === 0) {
          this.addFormView.render(false);
          return this.$addLink.hide();
        }
      };

      CollaborationsPage.prototype.cacheElements = function() {
        this.$header = $('h1:first');
        this.$addLink = $('.add_collaboration_link');
        this.$addForm = $('#new_collaboration');
        return this.$noCollaborationsMessage = $('#no_collaborations_message');
      };

      CollaborationsPage.prototype.createViews = function() {
        this.addFormView = new CollaborationFormView({
          el: this.$addForm
        });
        return this.collaborationViews = $('div.collaboration').map(function() {
          return new CollaborationView({
            el: $(this)
          });
        });
      };

      CollaborationsPage.prototype.attachEvents = function() {
        var _this = this;

        this.addFormView.on('hide', this.onFormHide).on('error', this.onFormError);
        return each(this.collaborationViews, function(view) {
          return view.on('delete', _this.onCollaborationDelete);
        });
      };

      CollaborationsPage.prototype.addCollaboration = function(e) {
        e.preventDefault();
        this.$addLink.hide();
        this.addFormView.render();
        return this.$el.scrollTo(this.addFormView.$el);
      };

      CollaborationsPage.prototype.onCollaborationDelete = function(deletedView) {
        this.collaborationViews = reject(this.collaborationViews, function(view) {
          return view === deletedView;
        });
        if (this.collaborationViews.length === 0) {
          this.$noCollaborationsMessage.show();
          return this.addFormView.render(false);
        }
      };

      CollaborationsPage.prototype.onFormHide = function() {
        this.$addLink.show();
        return this.$header.focus();
      };

      CollaborationsPage.prototype.onFormError = function($input, message) {
        return $input.focus().errorBox(message);
      };

      return CollaborationsPage;

    })(View);
  });

}).call(this);
