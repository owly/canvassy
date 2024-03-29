/*!
 * jQuery UI Effects Drop @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.drop=function(b,c){var d=a(this),e=["position","top","bottom","left","right","opacity","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g=f==="show",h=b.direction||"left",i=h==="up"||h==="down"?"top":"left",j=h==="up"||h==="left"?"pos":"neg",k={opacity:g?1:0},l;a.effects.save(d,e),d.show(),a.effects.createWrapper(d),l=b.distance||d[i==="top"?"outerHeight":"outerWidth"]({margin:!0})/2,g&&d.css("opacity",0).css(i,j==="pos"?-l:l),k[i]=(g?j==="pos"?"+=":"-=":j==="pos"?"-=":"+=")+l,d.animate(k,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){f==="hide"&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}})