/*!
 * jQuery UI Effects Blind @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){var b=/up|down|vertical/,c=/up|left|vertical|horizontal/;a.effects.effect.blind=function(d,e){var f=a(this),g=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(f,d.mode||"hide"),i=d.direction||"up",j=b.test(i),k=j?"height":"width",l=j?"top":"left",m=c.test(i),n={},o=h==="show",p,q,r;f.parent().is(".ui-effects-wrapper")?a.effects.save(f.parent(),g):a.effects.save(f,g),f.show(),p=a.effects.createWrapper(f).css({overflow:"hidden"}),q=p[k](),r=parseFloat(p.css(l)),n[k]=o?q:0,m||(f.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"}),n[l]=o?r:q+r),o&&(p.css(k,0),m||p.css(l,r+q)),p.animate(n,{duration:d.duration,easing:d.easing,queue:!1,complete:function(){h==="hide"&&f.hide(),a.effects.restore(f,g),a.effects.removeWrapper(f),e()}})}})