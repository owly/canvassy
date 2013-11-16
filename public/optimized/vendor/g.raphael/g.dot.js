/*!
 * g.Raphael 0.5 - Charting library, based on Raphaël
 *
 * Copyright (c) 2009 Dmitry Baranovskiy (http://g.raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
(function(){function b(b,c,d,e,f,g,h,i,j){function l(a){+a[0]&&(a[0]=k.axis(c+p,d+p,e-2*p,n,o,j.axisxstep||Math.floor((e-2*p)/20),2,j.axisxlabels||null,j.axisxtype||"t",null,b)),+a[1]&&(a[1]=k.axis(c+e-p,d+f-p,f-2*p,r,s,j.axisystep||Math.floor((f-2*p)/20),3,j.axisylabels||null,j.axisytype||"t",null,b)),+a[2]&&(a[2]=k.axis(c+p,d+f-p+D,e-2*p,n,o,j.axisxstep||Math.floor((e-2*p)/20),0,j.axisxlabels||null,j.axisxtype||"t",null,b)),+a[3]&&(a[3]=k.axis(c+p-D,d+f-p,f-2*p,r,s,j.axisystep||Math.floor((f-2*p)/20),1,j.axisylabels||null,j.axisytype||"t",null,b))}var k=this;j=j||{};var m=k.snapEnds(Math.min.apply(Math,g),Math.max.apply(Math,g),g.length-1),n=m.from,o=m.to,p=j.gutter||10,q=k.snapEnds(Math.min.apply(Math,h),Math.max.apply(Math,h),h.length-1),r=q.from,s=q.to,t=Math.max(g.length,h.length,i.length),u=b[j.symbol]||"circle",v=b.set(),w=b.set(),x=j.max||100,y=Math.max.apply(Math,i),z=[],A=Math.sqrt(y/Math.PI)*2/x;for(var B=0;B<t;B++)z[B]=Math.min(Math.sqrt(i[B]/Math.PI)*2/A,x);p=Math.max.apply(Math,z.concat(p));var C=b.set(),D=Math.max.apply(Math,z);if(j.axis){var E=(j.axis+"").split(/[,\s]+/);l.call(k,E);var F=[],G=[];for(var B=0,H=E.length;B<H;B++){var I=E[B].all?E[B].all.getBBox()[["height","width"][B%2]]:0;F[B]=I+p,G[B]=I}p=Math.max.apply(Math,F.concat(p));for(var B=0,H=E.length;B<H;B++)E[B].all&&(E[B].remove(),E[B]=1);l.call(k,E);for(var B=0,H=E.length;B<H;B++)E[B].all&&C.push(E[B].all);v.axis=C}var J=(e-p*2)/(o-n||1),K=(f-p*2)/(s-r||1);for(var B=0,H=h.length;B<H;B++){var L=b.raphael.is(u,"array")?u[B]:u,M=c+p+(g[B]-n)*J,N=d+f-p-(h[B]-r)*K;L&&z[B]&&w.push(b[L](M,N,z[B]).attr({fill:j.heat?a(z[B],D):k.colors[0],"fill-opacity":j.opacity?z[B]/x:1,stroke:"none"}))}var O=b.set();for(var B=0,H=h.length;B<H;B++){var M=c+p+(g[B]-n)*J,N=d+f-p-(h[B]-r)*K;O.push(b.circle(M,N,D).attr(k.shim)),j.href&&j.href[B]&&O[B].attr({href:j.href[B]}),O[B].r=+z[B].toFixed(3),O[B].x=+M.toFixed(3),O[B].y=+N.toFixed(3),O[B].X=g[B],O[B].Y=h[B],O[B].value=i[B]||0,O[B].dot=w[B]}return v.covers=O,v.series=w,v.push(w,C,O),v.hover=function(a,b){return O.mouseover(a).mouseout(b),this},v.click=function(a){return O.click(a),this},v.each=function(a){if(!b.raphael.is(a,"function"))return this;for(var c=O.length;c--;)a.call(O[c]);return this},v.href=function(a){var b;for(var c=O.length;c--;)b=O[c],b.X==a.x&&b.Y==a.y&&b.value==a.value&&b.attr({href:a.href})},v}var a=function(a,b,c,d){return"hsb("+[Math.min((1-a/b)*.4,1),c||.75,d||.75]+")"},c=function(){};c.prototype=Raphael.g,b.prototype=new c,Raphael.fn.dotchart=function(a,c,d,e,f,g,h,i){return new b(this,a,c,d,e,f,g,h,i)}})()