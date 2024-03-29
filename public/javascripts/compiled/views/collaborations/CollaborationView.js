(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!collaborations', 'underscore', 'Backbone', 'compiled/views/collaborations/CollaboratorPickerView', 'jst/collaborations/edit'], function(I18n, _arg, _arg1, CollaboratorPickerView, editForm) {
    var CollaborationView, View, extend, _ref;

    extend = _arg.extend;
    View = _arg1.View;
    return CollaborationView = (function(_super) {
      __extends(CollaborationView, _super);

      function CollaborationView() {
        this["delete"] = __bind(this["delete"], this);        _ref = CollaborationView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CollaborationView.prototype.events = {
        'click .edit_collaboration_link': 'onEdit',
        'click .delete_collaboration_link': 'onDelete',
        'click .cancel_button': 'onCloseForm'
      };

      CollaborationView.prototype.initialize = function() {
        return this.id = this.$el.data('id');
      };

      CollaborationView.prototype.formTemplate = function(_arg2) {
        var $form, action, className, data;

        action = _arg2.action, className = _arg2.className, data = _arg2.data;
        return $form = $(editForm(extend(data, {
          action: action,
          id: this.id,
          token: ENV.AUTHENTICITY_TOKEN
        })));
      };

      CollaborationView.prototype.confirmGoogleDocsDelete = function() {
        var $dialog;

        $dialog = $('#delete_collaboration_dialog').data('collaboration', this.$el);
        return $dialog.dialog({
          title: I18n.t('titles.delete', 'Delete collaboration?'),
          width: 350
        });
      };

      CollaborationView.prototype.confirmDelete = function(url) {
        return this.$el.confirmDelete({
          message: I18n.t('collaboration.delete', 'Are you sure you want to delete this collaboration?'),
          success: this["delete"],
          url: url
        });
      };

      CollaborationView.prototype["delete"] = function() {
        var _this = this;

        this.$el.slideUp(function() {
          return _this.$el.remove();
        });
        return this.trigger('delete', this);
      };

      CollaborationView.prototype.onEdit = function(e) {
        var $form;

        e.preventDefault();
        $form = this.formTemplate({
          action: $(e.currentTarget).attr('href'),
          className: this.$el.attr('class'),
          data: this.$el.getTemplateData({
            textValues: ['title', 'description']
          })
        });
        this.$el.children().hide();
        this.$el.append($form);
        return this.addCollaboratorPicker($form);
      };

      CollaborationView.prototype.onDelete = function(e) {
        var href;

        e.preventDefault();
        href = $(e.currentTarget).attr('href');
        if (this.$el.hasClass('google_docs')) {
          return this.confirmGoogleDocsDelete();
        } else {
          return this.confirmDelete(href);
        }
      };

      CollaborationView.prototype.onCloseForm = function(e) {
        this.$el.find('form').remove();
        return this.$el.children().show();
      };

      CollaborationView.prototype.addCollaboratorPicker = function($form) {
        var view;

        view = new CollaboratorPickerView({
          edit: true,
          el: $form.find('.collaborator_list'),
          id: this.id
        });
        return view.render();
      };

      return CollaborationView;

    })(View);
  });

}).call(this);
