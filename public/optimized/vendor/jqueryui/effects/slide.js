/*!
 * jQuery UI Effects Slide @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.slide=function(b,c){var d=a(this),e=["position","top","bottom","left","right","width","height"],f=a.effects.setMode(d,b.mode||"show"),g=f==="show",h=b.direction||"left",i=h==="up"||h==="down"?"top":"left",j=h==="up"||h==="left",k,l={};a.effects.save(d,e),d.show(),k=b.distance||d[i==="top"?"outerHeight":"outerWidth"]({margin:!0}),a.effects.createWrapper(d).css({overflow:"hidden"}),g&&d.css(i,j?isNaN(k)?"-"+k:-k:k),l[i]=(g?j?"+=":"-=":j?"-=":"+=")+k,d.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){f==="hide"&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}})