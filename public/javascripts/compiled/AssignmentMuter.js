(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!assignment_muter', 'jquery', 'jst/mute_dialog', 'jquery.ajaxJSON', 'jquery.disableWhileLoading', 'jqueryui/dialog', 'vendor/jquery.ba-tinypubsub'], function(I18n, $, mute_dialog_template) {
    var AssignmentMuter;

    return AssignmentMuter = (function() {
      function AssignmentMuter($link, assignment, url) {
        var _this = this;

        this.$link = $link;
        this.assignment = assignment;
        this.url = url;
        this.confirmUnmute = __bind(this.confirmUnmute, this);
        this.afterUpdate = __bind(this.afterUpdate, this);
        this.showDialog = __bind(this.showDialog, this);
        this.updateLink = __bind(this.updateLink, this);
        this.$link = $(this.$link);
        this.updateLink();
        this.$link.click(function(event) {
          event.preventDefault();
          if (_this.assignment.muted) {
            return _this.confirmUnmute();
          } else {
            return _this.showDialog();
          }
        });
      }

      AssignmentMuter.prototype.updateLink = function() {
        return this.$link.text(this.assignment.muted ? I18n.t('unmute_assignment', 'Unmute Assignment') : I18n.t('mute_assignment', 'Mute Assignment'));
      };

      AssignmentMuter.prototype.showDialog = function() {
        var _this = this;

        return this.$dialog = $(mute_dialog_template()).dialog({
          buttons: [
            {
              text: I18n.t('mute_assignment', 'Mute Assignment'),
              'data-text-while-loading': I18n.t('muting_assignment', 'Muting Assignment...'),
              click: function() {
                return _this.$dialog.disableWhileLoading($.ajaxJSON(_this.url, 'put', {
                  status: true
                }, _this.afterUpdate));
              }
            }
          ],
          close: function() {
            return _this.$dialog.remove();
          },
          resizable: false,
          width: 400
        });
      };

      AssignmentMuter.prototype.afterUpdate = function(serverResponse) {
        this.assignment.muted = serverResponse.assignment.muted;
        this.updateLink();
        this.$dialog.dialog('close');
        return $.publish('assignment_muting_toggled', [this.assignment]);
      };

      AssignmentMuter.prototype.confirmUnmute = function() {
        var _this = this;

        return this.$dialog = $('<div />').text(I18n.t('unmute_dialog', "This assignment is currently muted. That means students can't see their grades and feedback. Would you like to unmute now?")).dialog({
          buttons: [
            {
              text: I18n.t('unmute_button', 'Unmute Assignment'),
              'data-text-while-loading': I18n.t('unmuting_assignment', 'Unmuting Assignment...'),
              click: function() {
                return _this.$dialog.disableWhileLoading($.ajaxJSON(_this.url, 'put', {
                  status: false
                }, _this.afterUpdate));
              }
            }
          ],
          close: function() {
            return _this.$dialog.remove();
          },
          resizable: false,
          title: I18n.t("unmute_assignment", "Unmute Assignment"),
          width: 400
        });
      };

      return AssignmentMuter;

    })();
  });

}).call(this);
