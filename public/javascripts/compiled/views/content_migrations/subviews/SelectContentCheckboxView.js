(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/subviews/SelectContentCheckbox'], function(Backbone, template) {
    var SelectContentCheckbox, _ref;

    return SelectContentCheckbox = (function(_super) {
      __extends(SelectContentCheckbox, _super);

      function SelectContentCheckbox() {
        _ref = SelectContentCheckbox.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelectContentCheckbox.prototype.template = template;

      SelectContentCheckbox.prototype.events = {
        'click #selectContentCheckbox': 'updateModel'
      };

      SelectContentCheckbox.prototype.updateModel = function(event) {
        if ($(event.target).is(':checked')) {
          return this.model.set('selective_import', true);
        } else {
          return this.model.set('selective_import', false);
        }
      };

      return SelectContentCheckbox;

    })(Backbone.View);
  });

}).call(this);
