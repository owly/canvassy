/*!
 * jQuery UI Effects Clip @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.clip=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g=f==="show",h=b.direction||"vertical",i=h==="vertical",j=i?"height":"width",k=i?"top":"left",l={},m,n,o;a.effects.save(d,e),d.show(),m=a.effects.createWrapper(d).css({overflow:"hidden"}),n=d[0].tagName==="IMG"?m:d,o=n[j](),g&&(n.css(j,0),n.css(k,o/2)),l[j]=g?o:0,l[k]=g?0:o/2,n.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){g||d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}})