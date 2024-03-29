(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jst/assignments/TurnitinSettingsDialog', 'Backbone', 'jquery', 'underscore', 'compiled/jquery/fixDialogButtons'], function(turnitinSettingsDialog, _arg, $, _) {
    var TurnitinSettingsDialog, View, _ref;

    View = _arg.View;
    return TurnitinSettingsDialog = (function(_super) {
      var EXCLUDE_SMALL_MATCHES, EXCLUDE_SMALL_MATCHES_OPTIONS, EXCLUDE_SMALL_MATCHES_TYPE;

      __extends(TurnitinSettingsDialog, _super);

      function TurnitinSettingsDialog() {
        this.handleSubmit = __bind(this.handleSubmit, this);
        this.getFormValues = __bind(this.getFormValues, this);
        this.renderEl = __bind(this.renderEl, this);
        this.toJSON = __bind(this.toJSON, this);
        this.toggleExcludeOptions = __bind(this.toggleExcludeOptions, this);        _ref = TurnitinSettingsDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TurnitinSettingsDialog.prototype.tagName = 'div';

      EXCLUDE_SMALL_MATCHES_OPTIONS = '.js-exclude-small-matches-options';

      EXCLUDE_SMALL_MATCHES = '[name="exclude_small_matches"]';

      EXCLUDE_SMALL_MATCHES_TYPE = '[name="exclude_small_matches_type"]';

      TurnitinSettingsDialog.prototype.events = (function() {
        var events;

        events = {};
        events.submit = 'handleSubmit';
        events["change " + EXCLUDE_SMALL_MATCHES] = 'toggleExcludeOptions';
        return events;
      })();

      TurnitinSettingsDialog.prototype.els = (function() {
        var els;

        els = {};
        els["" + EXCLUDE_SMALL_MATCHES_OPTIONS] = '$excludeSmallMatchesOptions';
        els["" + EXCLUDE_SMALL_MATCHES] = '$excludeSmallMatches';
        els["" + EXCLUDE_SMALL_MATCHES_TYPE] = '$excludeSmallMatchesType';
        return els;
      })();

      TurnitinSettingsDialog.prototype.toggleExcludeOptions = function() {
        if (this.$excludeSmallMatches.prop('checked')) {
          return this.$excludeSmallMatchesOptions.show();
        } else {
          return this.$excludeSmallMatchesOptions.hide();
        }
      };

      TurnitinSettingsDialog.prototype.toJSON = function() {
        var json;

        json = TurnitinSettingsDialog.__super__.toJSON.apply(this, arguments);
        return _.extend(json, {
          wordsInput: "<input class=\"span1\" id=\"exclude_small_matches_words_value\" name=\"words\" value=\"" + json.words + "\" type=\"text\"/>",
          percentInput: "<input class=\"span1\" id=\"exclude_small_matches_percent_value\" name=\"percent\" value=\"" + json.percent + "\" type=\"text\"/>"
        });
      };

      TurnitinSettingsDialog.prototype.renderEl = function() {
        this.$el.html(turnitinSettingsDialog(this.toJSON()));
        return this.$el.dialog({
          width: 'auto',
          modal: true
        }).fixDialogButtons();
      };

      TurnitinSettingsDialog.prototype.getFormValues = function() {
        var values;

        values = this.$el.find('form').toJSON();
        if (this.$excludeSmallMatches.prop('checked')) {
          values.exclude_small_matches_type = this.$excludeSmallMatchesType.val();
          if (values.exclude_small_matches_type === 'words') {
            values.exclude_small_matches_value = values.words;
          } else {
            values.exclude_small_matches_value = values.percent;
          }
        } else {
          values.exclude_small_matches_type = null;
          values.exclude_small_matches_value = null;
        }
        return values;
      };

      TurnitinSettingsDialog.prototype.handleSubmit = function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.$el.dialog('close');
        return this.trigger('settings:change', this.getFormValues());
      };

      return TurnitinSettingsDialog;

    })(View);
  });

}).call(this);
