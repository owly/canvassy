(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'i18n!calendar.edit', 'Backbone', 'jst/calendar/editCalendarEventFull', 'compiled/views/calendar/MissingDateDialogView', 'wikiSidebar', 'compiled/object/unflatten', 'tinymce.editor_box', 'compiled/tinymce'], function($, _, I18n, Backbone, editCalendarEventFullTemplate, MissingDateDialogView, wikiSidebar, unflatten) {
    var EditCalendarEventView, _ref;

    return EditCalendarEventView = (function(_super) {
      __extends(EditCalendarEventView, _super);

      function EditCalendarEventView() {
        this.toggleUseSectionDates = __bind(this.toggleUseSectionDates, this);
        this.toggleUsingSectionClass = __bind(this.toggleUsingSectionClass, this);
        this.destroyModel = __bind(this.destroyModel, this);
        this.render = __bind(this.render, this);        _ref = EditCalendarEventView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditCalendarEventView.prototype.el = $('#content');

      EditCalendarEventView.prototype.template = editCalendarEventFullTemplate;

      EditCalendarEventView.prototype.events = {
        'submit form': 'submit',
        'change [name="use_section_dates"]': 'toggleUseSectionDates',
        'click .delete_link': 'destroyModel',
        'click .switch_event_description_view': 'toggleHtmlView'
      };

      EditCalendarEventView.prototype.initialize = function() {
        var _this = this;

        this.model.fetch().done(function() {
          var attrs, _ref1;

          if (ENV.NEW_CALENDAR_EVENT_ATTRIBUTES) {
            attrs = _this.model.parse(ENV.NEW_CALENDAR_EVENT_ATTRIBUTES);
            attrs.all_day = !!((_ref1 = attrs.start_at) != null ? _ref1.equals(attrs.end_at) : void 0) && attrs.start_at.equals(attrs.start_at.clearTime());
            _this.model.set(attrs);
          }
          return _this.render();
        });
        return this.model.on('change:use_section_dates', this.toggleUsingSectionClass);
      };

      EditCalendarEventView.prototype.render = function() {
        var $textarea;

        this.$el.html(this.template(this.model.toJSON('forView')));
        this.$(".date_field").date_field();
        this.$(".time_field").time_field();
        $textarea = this.$('textarea').editorBox();
        if (!wikiSidebar.inited) {
          wikiSidebar.init();
        }
        wikiSidebar.attachToEditor($textarea).show();
        return this;
      };

      EditCalendarEventView.prototype.destroyModel = function() {
        var msg,
          _this = this;

        msg = I18n.t("confirm_delete_calendar_event", "Are you sure you want to delete this calendar event?");
        if (confirm(msg)) {
          return this.$el.disableWhileLoading(this.model.destroy({
            success: function() {
              return _this.redirectWithMessage(I18n.t('event_deleted', "%{event_title} deleted successfully", {
                event_title: _this.model.get('title')
              }));
            }
          }));
        }
      };

      EditCalendarEventView.prototype.toggleUsingSectionClass = function() {
        this.$('#editCalendarEventFull').toggleClass('use_section_dates', this.model.get('use_section_dates'));
        return $('.show_if_using_sections input').prop('disabled', !this.model.get('use_section_dates'));
      };

      EditCalendarEventView.prototype.toggleUseSectionDates = function(e) {
        this.model.set('use_section_dates', !this.model.get('use_section_dates'));
        return this.updateRemoveChildEvents(e);
      };

      EditCalendarEventView.prototype.toggleHtmlView = function(event) {
        if (event != null) {
          event.preventDefault();
        }
        return $("textarea[name=description]").editorBox('toggle');
      };

      EditCalendarEventView.prototype.updateRemoveChildEvents = function(e) {
        var value;

        value = $(e.target).prop('checked') ? '' : '1';
        return $('input[name=remove_child_events]').val(value);
      };

      EditCalendarEventView.prototype.redirectWithMessage = function(message) {
        $.flashMessage(message);
        if (this.model.get('return_to_url')) {
          return window.location = this.model.get('return_to_url');
        }
      };

      EditCalendarEventView.prototype.submit = function(event) {
        var dialog, eventData,
          _this = this;

        if (event != null) {
          event.preventDefault();
        }
        eventData = unflatten(this.$el.getFormData());
        eventData.use_section_dates = !!eventData.use_section_dates;
        _.each([eventData].concat(eventData.child_event_data), this.setStartEnd);
        if (eventData.remove_child_events === '1') {
          delete eventData.child_event_data;
        }
        if ($('[name=use_section_dates]').prop('checked')) {
          dialog = new MissingDateDialogView({
            validationFn: function() {
              var $fields;

              $fields = $('[name*=start_date]:visible').filter(function() {
                return $(this).val() === '';
              });
              if ($fields.length > 0) {
                return $fields;
              } else {
                return true;
              }
            },
            labelFn: function(input) {
              return $(input).parents('tr').prev().find('label').text();
            },
            success: function($dialog) {
              $dialog.dialog('close');
              _this.$el.disableWhileLoading(_this.model.save(eventData, {
                success: function() {
                  return _this.redirectWithMessage(I18n.t('event_saved', 'Event Saved Successfully'));
                }
              }));
              return $dialog.remove();
            }
          });
          if (dialog.render()) {
            return;
          }
        }
        return this.saveEvent(eventData);
      };

      EditCalendarEventView.prototype.saveEvent = function(eventData) {
        var _this = this;

        return this.$el.disableWhileLoading(this.model.save(eventData, {
          success: function() {
            return _this.redirectWithMessage(I18n.t('event_saved', 'Event Saved Successfully'));
          }
        }));
      };

      EditCalendarEventView.prototype.setStartEnd = function(obj) {
        if (!obj) {
          return;
        }
        obj.start_at = $.unfudgeDateForProfileTimezone(Date.parse(obj.start_date + ' ' + obj.start_time));
        return obj.end_at = $.unfudgeDateForProfileTimezone(Date.parse(obj.start_date + ' ' + obj.end_time));
      };

      EditCalendarEventView.type = 'event';

      EditCalendarEventView.title = function() {
        return EditCalendarEventView.__super__.constructor.title.call(this, 'event', 'Event');
      };

      return EditCalendarEventView;

    })(Backbone.View);
  });

}).call(this);
