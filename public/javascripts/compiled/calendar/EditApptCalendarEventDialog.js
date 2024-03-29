(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!appt_calendar_event_dialog', 'jst/calendar/editApptCalendarEvent'], function(I18n, editApptCalendarEventTemplate) {
    var EditApptCalendarEventDialog;

    return EditApptCalendarEventDialog = (function() {
      function EditApptCalendarEventDialog(event) {
        var $maxParticipantsOption,
          _this = this;

        this.event = event;
        this.save = __bind(this.save, this);
        this.form = $('<div></div>').html(editApptCalendarEventTemplate(this.event)).appendTo('body');
        $maxParticipantsOption = this.form.find('[name=max_participants_option]');
        this.$maxParticipants = this.form.find('[name=max_participants]');
        $maxParticipantsOption.change(function() {
          return _this.$maxParticipants.prop('disabled', !$maxParticipantsOption.prop('checked'));
        });
        if (this.event.calendarEvent.participants_per_appointment) {
          $maxParticipantsOption.click();
          this.$maxParticipants.val(this.event.calendarEvent.participants_per_appointment);
        }
        this.dialog = this.form.dialog({
          autoOpen: false,
          width: 'auto',
          resizable: false,
          title: I18n.t('title', 'Edit %{name}', {
            name: this.event.title
          }),
          buttons: [
            {
              text: I18n.t('update', 'Update'),
              click: this.save
            }
          ]
        });
      }

      EditApptCalendarEventDialog.prototype.show = function() {
        return this.dialog.dialog('open');
      };

      EditApptCalendarEventDialog.prototype.save = function() {
        var formData, limit_participants, max_participants, participants_per_appointment;

        formData = this.dialog.getFormData();
        limit_participants = formData.max_participants_option === "on";
        max_participants = formData.max_participants;
        if (limit_participants && max_participants <= 0) {
          this.$maxParticipants.errorBox(I18n.t('invalid_participants', 'You must allow at least one user to attend'));
          return false;
        }
        this.event.calendarEvent.description = formData.description;
        if (limit_participants) {
          this.event.calendarEvent.total_slots = max_participants;
          this.event.calendarEvent.remaining_slots = max_participants - this.event.calendarEvent.child_events.length;
        } else {
          this.event.calendarEvent.total_slots = void 0;
          this.event.calendarEvent.remaining_slots = void 0;
        }
        participants_per_appointment = limit_participants ? max_participants : "";
        this.event.save({
          'calendar_event[description]': formData.description,
          'calendar_event[participants_per_appointment]': participants_per_appointment
        });
        this.dialog.dialog('destroy');
        return this.form.remove();
      };

      return EditApptCalendarEventDialog;

    })();
  });

}).call(this);
