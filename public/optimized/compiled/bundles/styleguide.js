(function(){require(["jquery","compiled/fn/preventDefault","jqueryui/accordion","jqueryui/tabs","jqueryui/button","jqueryui/tooltip","jquery.instructure_date_and_time"],function(a,b){var c;return function(){var b;return b=a("#dialog-buttons-dialog").dialog({autoOpen:!1,height:200}).data("dialog"),a("#show-dialog-buttons-dialog").click(function(){return b.open()})}(),c={mouseover:function(){return a(this).addClass("hover")},click:function(){return a(this).addClass("active")},mouseout:function(){return a(this).removeClass("hover active")}},a("#content").on(c,".demo-icons"),a(".accordion").accordion({header:"h3"}),a("#tabs").tabs(),a("ul#icons li").hover(function(){return a(this).addClass("ui-state-hover")},function(){return a(this).removeClass("ui-state-hover")}),a(".styleguide-turnIntoUiButton, .styleguide-turnAllIntoUiButton > *").button(),a("#leftIconButton").button({icons:{primary:"ui-icon-wrench"}}),a("#bothIconButton").button({icons:{primary:"ui-icon-wrench",secondary:"ui-icon-triangle-1-s"}}),a("#radio1").buttonset(),a("#progressbar").progressbar({value:37}).width(500),a("#animateProgress").click(b(function(){var b;return b=Math.random()*90,a("#progressbar div").animate({width:""+b+"%"})})),a("#tabs2").tabs(),a("#accordion2").accordion({header:"h4"}),a("#play, #shuffle").button(),a("#repeat").buttonset(),a(".styleguide-datetime_field-example").datetime_field()})}).call(this),define("compiled/bundles/styleguide",[],function(){})