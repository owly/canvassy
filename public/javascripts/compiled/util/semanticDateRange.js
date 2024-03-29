(function() {
  define(['i18n!dates'], function(I18n) {
    var semanticDateRange;

    return semanticDateRange = function(startISO, endISO) {
      var endAt, endDay, startAt, startDay;

      if (!startISO) {
        return "<span class=\"date-range date-range-no-date\">\n  " + (I18n.t('no_date', 'No Date')) + "\n</span>";
      }
      startAt = $.parseFromISO(startISO);
      endAt = $.parseFromISO(endISO);
      startDay = $.dateString(startAt.date);
      if (startAt.timestamp !== endAt.timestamp) {
        endDay = $.dateString(endAt.date);
        if (startDay !== endDay) {
          return "<span class=\"date-range\">\n  <time datetime='" + (startAt.time.toISOString()) + "'>\n    " + startDay + " at " + startAt.time_formatted + "\n  </time> -\n  <time datetime='" + (endAt.time.toISOString()) + "'>\n    " + endDay + " at " + endAt.time_formatted + "\n  </time>\n</span>";
        } else {
          return "<span class=\"date-range\">\n  <time datetime='" + (startAt.time.toISOString()) + "'>\n    " + startDay + ", " + startAt.time_formatted + "\n  </time> -\n  <time datetime='" + (endAt.time.toISOString()) + "'>\n    " + endAt.time_formatted + "\n  </time>\n</span>";
        }
      } else {
        return "<span class=\"date-range\">\n  <time datetime='" + (startAt.time.toISOString()) + "'>\n    " + startDay + " at " + startAt.time_formatted + "\n  </time>\n</span>";
      }
    };
  });

}).call(this);
