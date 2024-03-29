/*!
 * jQuery UI Effects Shake @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.shake=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g=b.direction||"left",h=b.distance||20,i=b.times||3,j=i*2+1,k=b.duration,l=g==="up"||g==="down"?"top":"left",m=g==="up"||g==="left",n={},o={},p={},q,r=d.queue(),s=r.length;a.effects.save(d,e),d.show(),a.effects.createWrapper(d),n[l]=(m?"-=":"+=")+h,o[l]=(m?"+=":"-=")+h*2,p[l]=(m?"-=":"+=")+h*2,d.animate(n,k,b.easing);for(q=1;q<i;q++)d.animate(o,k,b.easing).animate(p,k,b.easing);d.animate(o,k,b.easing).animate(n,k/2,b.easing).queue(function(){f==="hide"&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),s>1&&r.splice.apply(r,[1,0].concat(r.splice(s,j+1))),d.dequeue()}})