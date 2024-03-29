(function() {
  define(['jquery', 'calendar_move', 'wikiSidebar', 'jquery.instructure_date_and_time', 'jquery.instructure_forms', 'jquery.instructure_misc_helpers', 'jquery.instructure_misc_plugins', 'jquery.loadingImg', 'compiled/tinymce', 'tinymce.editor_box', 'vendor/jquery.scrollTo', 'jqueryui/datepicker'], function($, calendarMonths, wikiSidebar) {
    var bindToEditSyllabus, bindToMiniCalendar, bindToSyllabus, highlightDate, highlightDaysWithEvents, highlightRelated, specialDatesAreHidden, toggleSpecialDates;

    specialDatesAreHidden = false;
    highlightDaysWithEvents = function() {
      var $mini_month, $syllabus;

      $mini_month = $('.mini_month');
      $syllabus = $('#syllabus');
      if (!$mini_month || !$syllabus) {
        return;
      }
      $mini_month.find('.day.has_event').removeClass('has_event');
      return $syllabus.find('tr.date:visible').each(function() {
        var date;

        date = $(this).find('.day_date').attr('data-date');
        return $mini_month.find("#mini_day_" + date).addClass('has_event');
      });
    };
    highlightDate = function(date) {
      var $mini_month, $syllabus;

      $mini_month = $('.mini_month');
      $syllabus = $('#syllabus');
      $('tr.date.related, .day.related').removeClass('related');
      if (date) {
        if ($mini_month) {
          $mini_month.find("#mini_day_" + date).addClass('related');
        }
        if ($syllabus) {
          return $syllabus.find("tr.date.events_" + date).addClass('related');
        }
      }
    };
    highlightRelated = function(related_id, self) {
      var $syllabus, rel, _i, _len, _ref, _results;

      $syllabus = $('#syllabus');
      $syllabus.find('.detail_list tr.related_event').removeClass('related_event');
      if (related_id && $syllabus) {
        _ref = $syllabus.find(".detail_list tr.related-" + related_id);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rel = _ref[_i];
          if (rel !== self) {
            _results.push($(rel).addClass('related_event'));
          }
        }
        return _results;
      }
    };
    toggleSpecialDates = function() {
      var $toggle_special_dates;

      $('.special_date').each(function() {
        var $elementToHide, $specialEvent;

        $specialEvent = $(this);
        $elementToHide = $specialEvent;
        if (!$specialEvent.siblings().not('.special_date').length) {
          $elementToHide = $specialEvent.closest('tr.date');
        }
        return $elementToHide.toggle(specialDatesAreHidden);
      });
      $toggle_special_dates = $('#toggle_special_dates_in_syllabus');
      $toggle_special_dates.removeClass('hidden').removeClass('shown');
      $toggle_special_dates.addClass(specialDatesAreHidden ? 'shown' : 'hidden');
      specialDatesAreHidden = !specialDatesAreHidden;
      return highlightDaysWithEvents();
    };
    bindToSyllabus = function() {
      var $syllabus, $toggleSpecialDatesInSyllabus, todayString;

      $syllabus = $('#syllabus');
      $syllabus.on('mouseenter mouseleave', 'tr.date', function(ev) {
        var date;

        if (ev.type === 'mouseenter') {
          date = $(this).find('.day_date').attr('data-date');
        }
        return highlightDate(date);
      });
      $syllabus.on('mouseenter mouseleave', 'tr.date .detail_list tr', function(ev) {
        var c, related_id, _i, _len, _ref, _ref1;

        related_id = null;
        if (ev.type === 'mouseenter') {
          _ref1 = (_ref = $(this).attr('class')) != null ? _ref.split(/\s+/) : void 0;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            c = _ref1[_i];
            if (c.substr(0, 8) === 'related-') {
              related_id = c.substr(8);
              break;
            }
          }
        }
        return highlightRelated(related_id, this);
      });
      $toggleSpecialDatesInSyllabus = $('#toggle_special_dates_in_syllabus');
      $toggleSpecialDatesInSyllabus.on('click', function(ev) {
        ev.preventDefault();
        return toggleSpecialDates();
      });
      highlightDaysWithEvents();
      todayString = $.datepicker.formatDate('yy_mm_dd', new Date);
      return highlightDate(todayString);
    };
    bindToMiniCalendar = function() {
      var $mini_month, prev_next_links;

      $mini_month = $('.mini_month');
      prev_next_links = $mini_month.find('.next_month_link, .prev_month_link');
      prev_next_links.on('click', false);
      prev_next_links.on('mousedown', function(ev) {
        ev.preventDefault();
        calendarMonths.changeMonth($mini_month, $(this).hasClass('next_month_link') ? 1 : -1);
        return highlightDaysWithEvents();
      });
      $mini_month.on('click', '.mini_calendar_day', function(ev) {
        var date, day, month, year, _ref;

        ev.preventDefault();
        date = this.id.slice(9);
        _ref = date.split('_'), year = _ref[0], month = _ref[1], day = _ref[2];
        calendarMonths.changeMonth($mini_month, "" + month + "/" + day + "/" + year);
        highlightDaysWithEvents();
        return $(".events_" + date).ifExists(function($events) {
          $('html, body').scrollTo($events);
          return highlightDate(date);
        });
      });
      $mini_month.on('mouseover mouseout', '.mini_calendar_day', function(ev) {
        var date;

        if (ev.type !== 'mouseout') {
          date = this.id.slice(9);
        }
        return highlightDate(date);
      });
      return $('.jump_to_today_link').on('click', function(ev) {
        var $lastBefore, todayString;

        ev.preventDefault();
        todayString = $.datepicker.formatDate('yy_mm_dd', new Date);
        $lastBefore = void 0;
        $('tr.date').each(function() {
          var dateString;

          dateString = $(this).find('.day_date').attr('data-date');
          if (dateString > todayString) {
            return false;
          }
          return $lastBefore = $(this);
        });
        calendarMonths.changeMonth($mini_month, $.datepicker.formatDate('mm/dd/yy', new Date));
        highlightDaysWithEvents();
        $('html, body').scrollTo($lastBefore || $('tr.date:first'));
        return highlightDate(todayString);
      });
    };
    bindToEditSyllabus = function() {
      var $course_syllabus, $course_syllabus_body, $course_syllabus_details, $edit_course_syllabus_form;

      $edit_course_syllabus_form = $('#edit_course_syllabus_form');
      $course_syllabus_body = $('#course_syllabus_body');
      $course_syllabus = $('#course_syllabus');
      $course_syllabus_details = $('#course_syllabus_details');
      $course_syllabus.data('syllabus_body', ENV.SYLLABUS_BODY);
      wikiSidebar && wikiSidebar.init();
      $edit_course_syllabus_form.on('edit', function() {
        $edit_course_syllabus_form.show();
        $course_syllabus.hide();
        $course_syllabus_details.hide();
        $course_syllabus_body.editorBox();
        $course_syllabus_body.editorBox('set_code', $course_syllabus.data('syllabus_body'));
        if (wikiSidebar) {
          wikiSidebar.attachToEditor($course_syllabus_body);
          wikiSidebar.show();
          return $('#sidebar_content').hide();
        }
      });
      $edit_course_syllabus_form.on('hide_edit', function() {
        var text;

        $edit_course_syllabus_form.hide();
        $course_syllabus.show();
        text = $.trim($course_syllabus.html());
        $course_syllabus_details.showIf(!text);
        $course_syllabus_body.editorBox('destroy');
        $('#sidebar_content').show();
        if (wikiSidebar) {
          return wikiSidebar.hide();
        }
      });
      $('.edit_syllabus_link').on('click', function(ev) {
        ev.preventDefault();
        return $edit_course_syllabus_form.triggerHandler('edit');
      });
      $edit_course_syllabus_form.on('click', '.toggle_views_link', function(ev) {
        ev.preventDefault();
        return $course_syllabus_body.editorBox('toggle');
      });
      $edit_course_syllabus_form.on('click', '.cancel_button', function(ev) {
        ev.preventDefault();
        return $edit_course_syllabus_form.triggerHandler('hide_edit');
      });
      return $edit_course_syllabus_form.formSubmit({
        object_name: 'course',
        processData: function(data) {
          data['course[syllabus_body]'] = $course_syllabus_body.editorBox('get_code');
          return data;
        },
        beforeSubmit: function(data) {
          $edit_course_syllabus_form.triggerHandler('hide_edit');
          $course_syllabus_details.hide();
          return $course_syllabus.loadingImage();
        },
        success: function(data) {
          $course_syllabus.loadingImage('remove').html(data.course.syllabus_body);
          $course_syllabus.data('syllabus_body', data.course.syllabus_body);
          return $course_syllabus_details.hide();
        },
        error: function(data) {
          return $edit_course_syllabus_form.triggerHandler('edit').formErrors(data);
        }
      });
    };
    return {
      bindToEditSyllabus: bindToEditSyllabus,
      bindToMiniCalendar: bindToMiniCalendar,
      bindToSyllabus: bindToSyllabus
    };
  });

}).call(this);
