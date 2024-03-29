/*!
 * jQuery UI Effects Bounce @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.bounce=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g=f==="hide",h=f==="show",i=b.direction||"up",j=b.distance,k=b.times||5,l=k*2+(h||g?1:0),m=b.duration/l,n=b.easing,o=i==="up"||i==="down"?"top":"left",p=i==="up"||i==="left",q,r,s,t=d.queue(),u=t.length;(h||g)&&e.push("opacity"),a.effects.save(d,e),d.show(),a.effects.createWrapper(d),j||(j=d[o==="top"?"outerHeight":"outerWidth"]()/3),h&&(s={opacity:1},s[o]=0,d.css("opacity",0).css(o,p?-j*2:j*2).animate(s,m,n)),g&&(j/=Math.pow(2,k-1)),s={},s[o]=0;for(q=0;q<k;q++)r={},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n).animate(s,m,n),j=g?j*2:j/2;g&&(r={opacity:0},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n)),d.queue(function(){g&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),u>1&&t.splice.apply(t,[1,0].concat(t.splice(u,l+1))),d.dequeue()}})