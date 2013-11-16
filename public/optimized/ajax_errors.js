define(["INST","i18n!ajax_errors","jquery","str/htmlEscape","jquery.ajaxJSON","compiled/jquery.rails_flash_notifications","jqueryui/effects/drop"],function(a,b,c,d){var e=window.iTest;a.errorURL="/record_js_error",a.errorCount=0,a.errorLastHandledTimes={},a.log_error=function(b){b=b||{};var d=+(new Date);if(a.errorLastHandledTimes[b.message]>d-5e3)return;a.errorLastHandledTimes[b.message]=d;var e="";try{e=c&&c.fn&&c.fn.text&&c("#identity .user_name").text()}catch(f){}var g="?";b.url=b.url||location.href,b.platform=b.platform||navigator.platform,b.action=b.action||location.href,b.user_name=e,b.user_agent=navigator.userAgent,b.parentPage=window.location;for(var h in b)g=g+"error["+h+"]="+escape(b[h])+"&";a.errorCount+=1;var i=document.createElement("img");i.src=a.errorURL+g.substring(0,2e3),i.style.position="absolute",i.style.left="-10000px",i.style.top=0,document.body.appendChild(i)},window.onerror=function(b,c,d){var f=["webkitSafeEl","NPMethod called on non-NPObject wrapped JSObject!"];for(var g in f)if(f[g]&&b&&b.match&&b.match(f[g]))return!0;if(c&&c.match&&!c.match(window.location.hostname))return!0;a.log_error({message:b,line:d,url:c});if(a.environment=="production")return!0;e&&e.ok(!1,"unexpected error: "+b)},c(document).ready(function(){c("#instructure_ajax_error_result").defaultAjaxError(function(e,f,g,h,i){if(h==="abort")return;var j="0",k=b.t("no_text","No text"),l={};try{j=f.status,k=f.responseText,l=c.parseJSON(k)}catch(m){}c.ajaxJSON(location.protocol+"//"+location.host+"/simple_response.json?rnd="+Math.round(Math.random()*9999999),"GET",{},function(){l&&l.status=="AUT"?o(b.t("errors.timeout","There was a problem with your request, possibly due to a long period of inactivity.  Please reload the page and try again."),f):o(b.t("errors.unhandled","Oops! The last request didn't work out."),f)},function(){o(b.t("errors.connection_lost","Connection to %{host} was lost.  Please make sure you're connected to the Internet and try again.",{host:location.host}),f)},{skipDefaultError:!0});var n=c(this),o=function(e,f){var g=n[0];if(!g)return;var h=g.contentDocument||g.contentWindow&&g.contentWindow.document||window.frames[n.attr("id")].document,l=c(h).find("body");l.html(c("<h1 />").text(b.t("error_heading","Ajax Error: %{status_code}",{status_code:j}))),l.append(k),c("#instructure_ajax_error_box").hide();var m="";i&&(e+="<br/><span style='font-size: 0.7em;'>(Development Only)</span>");if(i||a.environment!="production")e+="<br/><a href='#' class='last_error_details_link'>"+d(b.t("links.details","details..."))+"</a>";c.flashError(e)};window.ajaxErrorFlash=o;var p=c.ajaxJSON.findRequest(f);p=p||{};if(p.data){p.params="";for(var q in p.data)p.params+="&"+q+"="+p.data[q]}var r="";try{r=c("#identity .user_name").text()}catch(m){}if(a.ajaxErrorURL){var s="&Msg="+escape(k)+"&StatusCode="+escape(j)+"&URL="+escape(p.url||"unknown")+"&Page="+escape(location.href)+"&Method="+escape(p.submit_type||"unknown")+"&UserName="+escape(r)+"&Platform="+escape(navigator.platform)+"&UserAgent="+escape(navigator.userAgent)+"&Params="+escape(p.params||"unknown");c("body").append("<img style='position: absolute; left: -1000px; top: 0;' src='"+a.ajaxErrorURL+s.substring(0,2e3)+"' />")}}),c(".last_error_details_link").live("click",function(a){a.preventDefault(),a.stopPropagation(),c("#instructure_ajax_error_box").show()}),c(".close_instructure_ajax_error_box_link").click(function(a){a.preventDefault(),c("#instructure_ajax_error_box").hide()})})})