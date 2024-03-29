(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!notification_preferences', 'jquery', 'underscore', 'compiled/userSettings', 'compiled/notifications/NotificationGroupMappings', 'jst/profiles/notification_preferences', 'jst/profiles/notifications/_policy_cell', 'jquery.disableWhileLoading', 'jquery.ajaxJSON', 'compiled/jquery.rails_flash_notifications', 'jqueryui/tooltip'], function(I18n, $, _, userSettings, NotificationGroupMappings, notificationPreferencesTemplate, policyCellTemplate) {
    var NotificationPreferences;

    return NotificationPreferences = (function() {
      function NotificationPreferences(options) {
        var c, _i, _len, _ref;

        this.options = options;
        this.initGrid = __bind(this.initGrid, this);
        this.setupEventBindings = __bind(this.setupEventBindings, this);
        this.saveNewCellValue = __bind(this.saveNewCellValue, this);
        this.policyCellHtml = __bind(this.policyCellHtml, this);
        this.buildTable = __bind(this.buildTable, this);
        this.findButtonDataForCode = __bind(this.findButtonDataForCode, this);
        this.communicationEventGroups = __bind(this.communicationEventGroups, this);
        this.hideButtonsExceptCell = __bind(this.hideButtonsExceptCell, this);
        this.buildPolicyCellsHtml = __bind(this.buildPolicyCellsHtml, this);
        this.cellButtonsHide = __bind(this.cellButtonsHide, this);
        this.buttonData = [
          {
            code: 'immediately',
            icon: 'icon-check',
            text: I18n.t('frequencies.immediately', 'ASAP'),
            title: I18n.t('frequencies.title.right_away', 'Notify me right away')
          }, {
            code: 'daily',
            icon: 'icon-clock',
            text: I18n.t('frequencies.daily', 'Daily'),
            title: I18n.t('frequencies.title.daily', 'Send daily summary')
          }, {
            code: 'weekly',
            icon: 'icon-calendar-month',
            text: I18n.t('frequencies.weekly', 'Weekly'),
            title: I18n.t('frequencies.title.weekly', 'Send weekly summary')
          }, {
            code: 'never',
            icon: 'icon-x',
            text: I18n.t('frequencies.never', 'Never'),
            title: I18n.t('frequencies.title.never', 'Do not send me anything')
          }
        ];
        this.updateUrl = this.options.update_url;
        this.channels = this.options.channels || [];
        this.categories = this.options.categories || [];
        this.policies = this.options.policies || [];
        _ref = this.channels;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          c.name = (function() {
            switch (c.type) {
              case 'email':
                return I18n.t('communication.email.display', 'Email Address');
              case 'sms':
                return I18n.t('communication.sms.display', 'Cell Number');
              case 'twitter':
                return I18n.t('communication.twitter.display', 'Twitter');
              case 'facebook':
                return I18n.t('communication.facebook.display', 'Facebook');
            }
          })();
        }
        this.mappings = new NotificationGroupMappings();
        this.$notificationSaveStatus = $('#notifications_save_status');
        this.initGrid();
      }

      NotificationPreferences.prototype.cellButtonsShow = function($cell, setFocus) {
        var $buttons, $labelToFocus, $radio, $selection;

        if (setFocus == null) {
          setFocus = true;
        }
        $cell.addClass('show-buttons');
        $selection = $cell.find('.event-option-selection');
        $buttons = $cell.find('.event-option-buttons');
        $selection.hide();
        $buttons.show();
        if (setFocus) {
          $radio = $cell.find('.frequency:checked');
          $labelToFocus = $cell.find("label[for=" + ($radio.attr('id')) + "]");
          if ($labelToFocus) {
            return $labelToFocus.focus();
          }
        }
      };

      NotificationPreferences.prototype.cellButtonsHide = function($cell, setFocus) {
        var $buttons, $selection;

        if (setFocus == null) {
          setFocus = true;
        }
        $cell.removeClass('show-buttons');
        $selection = $cell.find('.event-option-selection');
        $buttons = $cell.find('.event-option-buttons');
        $buttons.hide();
        $selection.show();
        if (setFocus) {
          return $selection.find('a:first').focus();
        }
      };

      NotificationPreferences.prototype.buildPolicyCellsHtml = function(category) {
        var c, fragments, frequency, policy;

        fragments = (function() {
          var _i, _len, _ref, _results;

          _ref = this.channels;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            policy = _.find(this.policies, function(p) {
              return p.channel_id === c.id && p.category === category.category;
            });
            frequency = 'never';
            if (policy) {
              frequency = policy['frequency'];
            }
            _results.push(this.policyCellHtml(category, c.id, frequency));
          }
          return _results;
        }).call(this);
        return fragments.join('');
      };

      NotificationPreferences.prototype.hideButtonsExceptCell = function($notCell) {
        var $cell, cellElem, _i, _len, _ref, _results;

        _ref = $("#notification-preferences td.comm-event-option.show-buttons");
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cellElem = _ref[_i];
          $cell = $(cellElem);
          if ($cell !== $notCell) {
            if ($cell.find(':focus').length === 0) {
              _results.push(this.cellButtonsHide($cell, false));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      NotificationPreferences.prototype.communicationEventGroups = function() {
        var category, categoryName, groupItems, groupName, groupsData, item, items, _i, _len, _ref;

        groupsData = [];
        _ref = this.mappings.groups;
        for (groupName in _ref) {
          items = _ref[groupName];
          groupItems = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            categoryName = items[_i];
            category = _.find(this.categories, function(e) {
              return e.category === categoryName;
            });
            if (category) {
              item = {
                title: category.display_name,
                description: category.category_description,
                policyCells: this.buildPolicyCellsHtml(category)
              };
              if (category.option) {
                item['checkName'] = category.option.name;
                item['checkedState'] = category.option.value;
                item['checkLabel'] = category.option.label;
                item['checkID'] = category.option.id;
              }
              groupItems.push(item);
            }
          }
          if (groupItems.length > 0) {
            groupsData.push({
              name: this.mappings.getGroupDisplayName(groupName),
              items: groupItems
            });
          }
        }
        return groupsData;
      };

      NotificationPreferences.prototype.findButtonDataForCode = function(buttonCode) {
        return _.find(this.buttonData, function(b) {
          return b['code'] === buttonCode;
        });
      };

      NotificationPreferences.prototype.buildTable = function() {
        $('#notification-preferences').append(notificationPreferencesTemplate({
          touch: INST.browser.touch,
          channels: this.channels,
          eventGroups: this.communicationEventGroups()
        }));
        $('#notification-preferences .category-name.show-popover').tooltip({
          position: {
            my: "left center",
            at: "right+20 center",
            collision: 'none none'
          },
          tooltipClass: 'popover left middle horizontal'
        });
        $('tbody th[scope=row]').css('min-width', $('h3.group-name').width());
        this.setupEventBindings();
        return null;
      };

      NotificationPreferences.prototype.policyCellHtml = function(category, channelId, selectedValue) {
        var selected;

        if (selectedValue == null) {
          selectedValue = 'never';
        }
        _.each(this.buttonData, function(b) {
          b['active'] = false;
          b['coordinate'] = "cat_" + category.id + "_ch_" + channelId;
          return b['id'] = "" + b['coordinate'] + "_" + b['code'];
        });
        selected = this.findButtonDataForCode(selectedValue);
        selected['active'] = true;
        return policyCellTemplate({
          touch: INST.browser.touch,
          category: category.category,
          channelId: channelId,
          selected: selected,
          allButtons: this.buttonData
        });
      };

      NotificationPreferences.prototype.saveNewCellValue = function($cell, value) {
        var btnData, category, channelId, data,
          _this = this;

        btnData = this.findButtonDataForCode(value);
        $cell.attr('data-selection', value);
        $cell.find('a.change-selection i').attr('class', btnData['icon']);
        $cell.find('a.change-selection span.img-text').text(btnData['text']);
        category = $cell.attr('data-category');
        channelId = $cell.attr('data-channelId');
        data = {
          category: category,
          channel_id: channelId,
          frequency: value
        };
        return this.$notificationSaveStatus.disableWhileLoading($.ajaxJSON(this.updateUrl, 'PUT', data, null, (function(data) {
          return $.flashError(I18n.t('communication.errors.saving_preferences_failed', 'Oops! Something broke.  Please try again'));
        })), this.spinOpts);
      };

      NotificationPreferences.prototype.setupEventBindings = function() {
        var $notificationPrefs,
          _this = this;

        $notificationPrefs = $('#notification-preferences');
        $notificationPrefs.find('.event-option-buttons').buttonset();
        if (!INST.browser.touch) {
          $notificationPrefs.find('.notification-prefs-table').on({
            mouseenter: function(e) {
              return _this.cellButtonsShow($(e.currentTarget), false);
            },
            mouseleave: function(e) {
              return _this.cellButtonsHide($(e.currentTarget), false);
            }
          }, '.comm-event-option');
          $notificationPrefs.find('.notification-prefs-table a.change-selection').on('click', function(e) {
            var cell;

            e.preventDefault();
            cell = $(e.currentTarget).closest('td');
            _this.hideButtonsExceptCell(cell);
            return _this.cellButtonsShow(cell, true);
          });
        }
        $notificationPrefs.find('.frequency').on('change', function(e) {
          var cell, radio, val;

          radio = $(e.currentTarget);
          cell = radio.closest('td');
          val = radio.attr('data-value');
          return _this.saveNewCellValue(cell, val);
        });
        $notificationPrefs.find('.mobile-select').on('change', function(e) {
          var cell, select, val;

          select = $(e.currentTarget);
          cell = $(e.currentTarget).closest('td');
          val = select.find('option:selected').val();
          return _this.saveNewCellValue(cell, val);
        });
        $notificationPrefs.find('.user-pref-check').on('change', function(e) {
          var check, checkStatus, data;

          check = $(e.currentTarget);
          checkStatus = check.attr('checked') === 'checked';
          data = {
            user: {}
          };
          data['user'][check.attr('name')] = checkStatus;
          return _this.$notificationSaveStatus.disableWhileLoading($.ajaxJSON(_this.updateUrl, 'PUT', data, null, (function(data) {
            return $.flashError(I18n.t('communication.errors.saving_preferences_failed', 'Oops! Something broke.  Please try again'));
          })), _this.spinOpts);
        });
        return null;
      };

      NotificationPreferences.prototype.spinOpts = {
        length: 4,
        radius: 5,
        width: 3
      };

      NotificationPreferences.prototype.initGrid = function() {
        this.buildTable();
        return null;
      };

      return NotificationPreferences;

    })();
  });

}).call(this);
