(function(){define(["jquery","compiled/jquery.kylemenu"],function(a,b){return a(document).on("click keydown",".al-trigger",function(c){var d,e,f;d=a(this);if(c.keyCode||c.which)return d.click();if(!d.data("kyleMenu")){c.preventDefault(),e=a.extend({noButton:!0},d.data("kyleMenuOptions")),(new b(d,e)).open(),f=window.navigator.userAgent;if(f.match(/Windows/)&&f.match(/Firefox/))return menu.attr("tabindex",-1)}})})}).call(this)