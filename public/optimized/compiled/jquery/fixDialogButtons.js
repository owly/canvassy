(function(){define(["jquery","underscore","compiled/fn/preventDefault","jqueryui/dialog"],function(a,b,c){return a.fn.fixDialogButtons=function(){return this.each(function(){var d,e,f;e=a(this),d=e.find(".button-container:last .btn, button[type=submit]");if(d.length)return e.find(".button-container:last, button[type=submit]").hide(),f=a.map(d.toArray(),function(b){var d,f,g,h;return d=a(b),f=(h=d.attr("class"))!=null?h:"",g=d.attr("id"),d.is(".dialog_closer")&&d.click(c(function(){return e.dialog("close")})),d.prop("type")==="submit"&&d[0].form&&(f+=" button_type_submit",e.keypress(function(b){if(!a(b.target).filter("input:text").length)return;if(b.keyCode===a.ui.keyCode.ENTER)return a(d[0].form).submit()})),{text:d.text(),"data-text-while-loading":d.data("textWhileLoading"),click:function(){return d.click()},"class":f,id:g}}),f=b.sortBy(f,function(a){return a["class"].match(/btn-primary/)?1:0}),e.dialog("option","buttons",f)})}})}).call(this)