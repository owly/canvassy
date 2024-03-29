/*!
 * jQuery UI Effects Fold @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(["jquery","jqueryui/effect"],function(a){a.effects.effect.fold=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g=f==="show",h=f==="hide",i=b.size||15,j=/([0-9]+)%/.exec(i),k=!!b.horizFirst,l=g!==k,m=l?["width","height"]:["height","width"],n=b.duration/2,o,p,q={},r={};a.effects.save(d,e),d.show(),o=a.effects.createWrapper(d).css({overflow:"hidden"}),p=l?[o.width(),o.height()]:[o.height(),o.width()],j&&(i=parseInt(j[1],10)/100*p[h?0:1]),g&&o.css(k?{height:0,width:i}:{height:i,width:0}),q[m[0]]=g?p[0]:i,r[m[1]]=g?p[1]:0,o.animate(q,n,b.easing).animate(r,n,b.easing,function(){h&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()})}})