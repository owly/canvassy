(function() {
  require(['jquery', 'compiled/fn/preventDefault', 'jqueryui/accordion', 'jqueryui/tabs', 'jqueryui/button', 'jqueryui/tooltip', 'jquery.instructure_date_and_time'], function($, preventDefault) {
    var iconEventsMap;

    (function() {
      var dialog;

      dialog = $('#dialog-buttons-dialog').dialog({
        autoOpen: false,
        height: 200
      }).data('dialog');
      return $('#show-dialog-buttons-dialog').click(function() {
        return dialog.open();
      });
    })();
    iconEventsMap = {
      mouseover: function() {
        return $(this).addClass("hover");
      },
      click: function() {
        return $(this).addClass("active");
      },
      mouseout: function() {
        return $(this).removeClass("hover active");
      }
    };
    $("#content").on(iconEventsMap, ".demo-icons");
    $(".accordion").accordion({
      header: "h3"
    });
    $("#tabs").tabs();
    $("ul#icons li").hover(function() {
      return $(this).addClass("ui-state-hover");
    }, function() {
      return $(this).removeClass("ui-state-hover");
    });
    $(".styleguide-turnIntoUiButton, .styleguide-turnAllIntoUiButton > *").button();
    $("#leftIconButton").button({
      icons: {
        primary: "ui-icon-wrench"
      }
    });
    $("#bothIconButton").button({
      icons: {
        primary: "ui-icon-wrench",
        secondary: "ui-icon-triangle-1-s"
      }
    });
    $("#radio1").buttonset();
    $("#progressbar").progressbar({
      value: 37
    }).width(500);
    $("#animateProgress").click(preventDefault(function() {
      var randNum;

      randNum = Math.random() * 90;
      return $("#progressbar div").animate({
        width: "" + randNum + "%"
      });
    }));
    $("#tabs2").tabs();
    $("#accordion2").accordion({
      header: "h4"
    });
    $("#play, #shuffle").button();
    $("#repeat").buttonset();
    return $(".styleguide-datetime_field-example").datetime_field();
  });

}).call(this);
