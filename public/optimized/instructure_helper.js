define(["INST","i18n!instructure","jquery","jqueryui/dialog"],function(a,b,c){function d(a){a=(a||"").split(":")[0];var b=a.split("."),c=b.length;return(c>1?[b[c-2],b[c-1]]:b).join("")}var e=d(window.location.hostname);c.expr[":"].external=function(a){var b=c(a).attr("href");return!!(b&&b.length&&!b.match(/^(mailto\:|javascript\:)/)&&a.hostname&&d(a.hostname)!=e)},window.equella={ready:function(a){c(document).triggerHandler("equella_ready",a)},cancel:function(){c(document).triggerHandler("equella_cancel")}},c(document).bind("equella_ready",function(a,b){c("#equella_dialog").triggerHandler("equella_ready",b)}).bind("equella_cancel",function(){c("#equella_dialog").dialog("close")}),window.external_tool={ready:function(a){c("#external_tool_button_dialog:visible").triggerHandler("selection",a),c("#resource_selection_dialog:visible").triggerHandler("selection",a),c("#homework_selection_dialog:visible").triggerHandler("selection",a)},cancel:function(){c("#external_tool_button_dialog").dialog("close"),c("#resource_selection_dialog").dialog("close"),c("#homework_selection_dialog:visible").dialog("close")}},window.jsonFlickrApi=function(a){c("#instructure_image_search").triggerHandler("search_results",a)}})