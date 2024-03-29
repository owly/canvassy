/*!
 * jQuery UI Effects Pulsate @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.pulsate=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"show"),f=e==="show",g=e==="hide",h=f||e==="hide",i=(b.times||5)*2+(h?1:0),j=b.duration/i,k=0,l=d.queue(),m=l.length,n;if(f||!d.is(":visible"))d.css("opacity",0).show(),k=1;for(n=1;n<i;n++)d.animate({opacity:k},j,b.easing),k=1-k;d.animate({opacity:k},j,b.easing),d.queue(function(){g&&d.hide(),c()}),m>1&&l.splice.apply(l,[1,0].concat(l.splice(m,i+1))),d.dequeue()}})