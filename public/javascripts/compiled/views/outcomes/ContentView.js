(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/models/Outcome', 'compiled/models/OutcomeGroup', 'compiled/views/outcomes/OutcomeView', 'compiled/views/outcomes/OutcomeGroupView'], function($, _, Backbone, Outcome, OutcomeGroup, OutcomeView, OutcomeGroupView) {
    var ContentView, _ref;

    return ContentView = (function(_super) {
      __extends(ContentView, _super);

      function ContentView() {
        this.add = __bind(this.add, this);
        this.show = __bind(this.show, this);        _ref = ContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContentView.prototype.initialize = function(_arg) {
        this.readOnly = _arg.readOnly, this.setQuizMastery = _arg.setQuizMastery, this.useForScoring = _arg.useForScoring, this.instructionsTemplate = _arg.instructionsTemplate, this.renderInstructions = _arg.renderInstructions;
        return this.render();
      };

      ContentView.prototype.show = function(model) {
        if (model != null ? model.isNew() : void 0) {
          return;
        }
        return this._show({
          model: model
        });
      };

      ContentView.prototype.add = function(model) {
        var _this = this;

        this._show({
          model: model,
          state: 'add'
        });
        this.trigger('adding');
        return this.innerView.on('addSuccess', function(m) {
          return _this.trigger('addSuccess', m);
        });
      };

      ContentView.prototype._show = function(viewOpts) {
        var _ref1;

        viewOpts = _.extend({}, viewOpts, {
          readOnly: this.readOnly,
          setQuizMastery: this.setQuizMastery,
          useForScoring: this.useForScoring
        });
        if ((_ref1 = this.innerView) != null) {
          _ref1.remove();
        }
        this.innerView = viewOpts.model instanceof Outcome ? new OutcomeView(viewOpts) : viewOpts.model instanceof OutcomeGroup ? new OutcomeGroupView(viewOpts) : void 0;
        return this.render();
      };

      ContentView.prototype.render = function() {
        this.attachEvents();
        this.$el.html(this.innerView ? this.innerView.render().el : this.renderInstructions ? this.instructionsTemplate() : void 0);
        return this;
      };

      ContentView.prototype.attachEvents = function() {
        var _this = this;

        if (this.innerView == null) {
          return;
        }
        return this.innerView.on('deleteSuccess', function() {
          return _this.trigger('deleteSuccess');
        });
      };

      ContentView.prototype.remove = function() {
        var _ref1;

        return (_ref1 = this.innerView) != null ? _ref1.off('addSuccess') : void 0;
      };

      return ContentView;

    })(Backbone.View);
  });

}).call(this);
