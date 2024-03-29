(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!course_settings', 'jquery', 'underscore', 'compiled/views/DialogBaseView', 'jst/courses/roster/InvitationsView', 'compiled/jquery.rails_flash_notifications'], function(I18n, $, _, DialogBaseView, invitationsViewTemplate) {
    var InvitationsView, _ref;

    return InvitationsView = (function(_super) {
      __extends(InvitationsView, _super);

      function InvitationsView() {
        this.resend = __bind(this.resend, this);        _ref = InvitationsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      InvitationsView.prototype.dialogOptions = function() {
        return {
          id: 'enrollment_dialog',
          title: I18n.t('re_send_invitation', 'Re-Send Invitation'),
          buttons: [
            {
              text: I18n.t('cancel', 'Cancel'),
              click: this.cancel
            }, {
              text: I18n.t('re_send_invitation', 'Re-Send Invitation'),
              'class': 'btn-primary',
              click: this.resend
            }
          ]
        };
      };

      InvitationsView.prototype.render = function() {
        var admin, data, pending;

        this.showDialogButtons();
        data = this.model.toJSON();
        data.time = $.parseFromISO(_.last(this.model.get('enrollments')).updated_at).datetime_formatted;
        this.$el.html(invitationsViewTemplate(data));
        pending = this.model.pending();
        admin = this.$el.parents(".teacher_enrollments,.ta_enrollments").length > 0;
        this.$('.student_enrollment_re_send').showIf(pending && !admin);
        this.$('.admin_enrollment_re_send').showIf(pending && admin);
        this.$('.accepted_enrollment_re_send').showIf(!pending);
        if (pending && !admin && !data.course.available) {
          this.hideDialogButtons();
        }
        return this;
      };

      InvitationsView.prototype.showDialogButtons = function() {
        return this.$el.parent().next('.ui-dialog-buttonpane').show();
      };

      InvitationsView.prototype.hideDialogButtons = function() {
        return this.$el.parent().next('.ui-dialog-buttonpane').hide();
      };

      InvitationsView.prototype.resend = function(e) {
        var url, _i, _len, _ref1;

        e.preventDefault();
        this.close();
        _ref1 = this.model.get('enrollments');
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          e = _ref1[_i];
          url = "/confirmations/" + (this.model.get('id')) + "/re_send?enrollment_id=" + e.id;
          $.ajaxJSON(url);
        }
        return $.flashMessage(I18n.t('flash.invitation', 'Invitation sent.'));
      };

      return InvitationsView;

    })(DialogBaseView);
  });

}).call(this);
