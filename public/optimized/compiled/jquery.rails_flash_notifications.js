(function(){define(["i18n!shared.flash_notices","underscore","compiled/fn/preventDefault","jqueryui/effects/drop","vendor/jquery.cookie"],function(a,b,c){var d,e,f;return d=$("#flash_message_buffer"),e=$("#flash_message_holder"),e.on("click",".close_link",c),e.on("click","li",function(){var a,b;a=$(this);if(a.hasClass("no_close"))return;a.hasClass("unsupported_browser")&&$.cookie("unsupported_browser_dismissed","1"),a.stop(!0,!0).remove();if((b=a.data("buffer-index"))!=null)return d.find("[data-buffer-index="+b+"]").remove()}),f=function(c,d,f,g){var h;return g==null&&(g={}),h=$('<li class="ui-state-'+c+'" role="alert">\n  <i></i>\n  '+d+'\n  <a href="#" class="close_link icon-end">'+a.t("close","Close")+"</a>\n</li>"),h.appendTo(e).css(b.extend({zIndex:1},g)).show("drop",{direction:"up"},"fast",function(){return $(this).css("z-index",2)}).delay(f||7e3).animate({"z-index":1},0).fadeOut("slow",function(){return $(this).slideUp("fast",function(){return $(this).remove()})})},$.flashMessage=function(a,b){return b==null&&(b=3e3),f("success",a,b)},$.flashError=function(a,b){return f("error",a,b)},$.screenReaderFlashMessage=function(a,b){return b==null&&(b=3e3),f("success",a,b,{position:"absolute",left:-1e4})},$.screenReaderFlashError=function(a,b){return b==null&&(b=3e3),f("error",a,b,{position:"absolute",left:-1e4})}})}).call(this)