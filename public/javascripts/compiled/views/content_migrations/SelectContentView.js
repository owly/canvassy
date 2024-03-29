(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jst/content_migrations/SelectContent', 'jst/courses/roster/createUsersWrapper', 'jst/content_migrations/ContentCheckboxCollection', 'compiled/views/DialogFormView', 'compiled/views/CollectionView', 'compiled/collections/content_migrations/ContentCheckboxCollection', 'compiled/views/content_migrations/ContentCheckboxView'], function(Backbone, _, template, wrapperTemplate, checkboxCollectionTemplate, DialogFormView, CollectionView, CheckboxCollection, CheckboxView) {
    var SelectContentView, _ref;

    return SelectContentView = (function(_super) {
      __extends(SelectContentView, _super);

      function SelectContentView() {
        this.firstOpen = __bind(this.firstOpen, this);
        this.submit = __bind(this.submit, this);        _ref = SelectContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelectContentView.prototype.els = {
        '.form-dialog-content': '$formDialogContent'
      };

      SelectContentView.prototype.template = template;

      SelectContentView.prototype.wrapperTemplate = wrapperTemplate;

      SelectContentView.prototype.submit = function(event) {
        var attr, dfd,
          _this = this;

        attr = _.pick(this.model.attributes, "id", "workflow_state", "user_id", "copy");
        this.model.clear({
          silent: true
        });
        this.model.set(attr);
        dfd = SelectContentView.__super__.submit.apply(this, arguments);
        return dfd != null ? dfd.done(function() {
          return _this.model.trigger('continue');
        }) : void 0;
      };

      SelectContentView.prototype.firstOpen = function() {
        var dfd, _ref1, _ref2;

        SelectContentView.__super__.firstOpen.apply(this, arguments);
        this.checkboxCollection || (this.checkboxCollection = new CheckboxCollection(null, {
          courseID: (_ref1 = this.model) != null ? _ref1.course_id : void 0,
          migrationID: (_ref2 = this.model) != null ? _ref2.get('id') : void 0,
          isTopLevel: true
        }));
        this.checkboxCollectionView || (this.checkboxCollectionView = new CollectionView({
          collection: this.checkboxCollection,
          itemView: CheckboxView,
          el: this.$formDialogContent,
          template: checkboxCollectionTemplate
        }));
        dfd = this.checkboxCollection.fetch();
        this.$el.disableWhileLoading(dfd);
        return this.checkboxCollectionView.render();
      };

      return SelectContentView;

    })(DialogFormView);
  });

}).call(this);
