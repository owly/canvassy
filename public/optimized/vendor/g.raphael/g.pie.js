(function(){function a(a,b,c,d,e,f){function s(a,b,c,d,e,f){var g=Math.PI/180,h=a+c*Math.cos(-d*g),i=a+c*Math.cos(-e*g),j=a+c/2*Math.cos(-(d+(e-d)/2)*g),k=b+c*Math.sin(-d*g),l=b+c*Math.sin(-e*g),m=b+c/2*Math.sin(-(d+(e-d)/2)*g),n=["M",a,b,"L",h,k,"A",c,c,0,+(Math.abs(e-d)>180),1,i,l,"z"];return n.middle={x:j,y:m},n}f=f||{};var g=this,h=[],i=a.set(),j=a.set(),k=a.set(),l=[],m=e.length,n=0,o=0,p=0,q=9,r=!0;j.covers=i;if(m==1)k.push(a.circle(b,c,d).attr({fill:g.colors[0],stroke:f.stroke||"#fff","stroke-width":f.strokewidth==null?1:f.strokewidth})),i.push(a.circle(b,c,d).attr(g.shim)),o=e[0],e[0]={value:e[0],order:0,valueOf:function(){return this.value}},k[0].middle={x:b,y:c},k[0].mangle=180;else{for(var t=0;t<m;t++)o+=e[t],e[t]={value:e[t],order:t,valueOf:function(){return this.value}};e.sort(function(a,b){return b.value-a.value});for(t=0;t<m;t++)r&&e[t]*360/o<=1.5&&(q=t,r=!1),t>q&&(r=!1,e[q].value+=e[t],e[q].others=!0,p=e[q].value);m=Math.min(q+1,e.length),p&&e.splice(m)&&(e[q].others=!0);for(t=0;t<m;t++){var u=n-360*e[t]/o/2;t||(n=90-u,u=n-360*e[t]/o/2);if(f.init)var v=s(b,c,1,n,n-360*e[t]/o).join(",");var w=s(b,c,d,n,n-=360*e[t]/o),x=a.path(f.init?v:w).attr({fill:f.colors&&f.colors[t]||g.colors[t]||"#666",stroke:f.stroke||"#fff","stroke-width":f.strokewidth==null?1:f.strokewidth,"stroke-linejoin":"round"});x.value=e[t],x.middle=w.middle,x.mangle=u,h.push(x),k.push(x),f.init&&x.animate({path:w.join(",")},+f.init-1||1e3,">")}for(t=0;t<m;t++)x=a.path(h[t].attr("path")).attr(g.shim),f.href&&f.href[t]&&x.attr({href:f.href[t]}),x.attr=function(){},i.push(x),k.push(x)}j.hover=function(a,f){f=f||function(){};var g=this;for(var h=0;h<m;h++)(function(h,i,j){var k={sector:h,cover:i,cx:b,cy:c,mx:h.middle.x,my:h.middle.y,mangle:h.mangle,r:d,value:e[j],total:o,label:g.labels&&g.labels[j]};i.mouseover(function(){a.call(k)}).mouseout(function(){f.call(k)})})(k[h],i[h],h);return this},j.each=function(a){var f=this;for(var g=0;g<m;g++)(function(g,h,i){var j={sector:g,cover:h,cx:b,cy:c,x:g.middle.x,y:g.middle.y,mangle:g.mangle,r:d,value:e[i],total:o,label:f.labels&&f.labels[i]};a.call(j)})(k[g],i[g],g);return this},j.click=function(a){var f=this;for(var g=0;g<m;g++)(function(g,h,i){var j={sector:g,cover:h,cx:b,cy:c,mx:g.middle.x,my:g.middle.y,mangle:g.mangle,r:d,value:e[i],total:o,label:f.labels&&f.labels[i]};h.click(function(){a.call(j)})})(k[g],i[g],g);return this},j.inject=function(a){a.insertBefore(i[0])};var y=function(h,l,n,p){var q=b+d+d/5,r=c,s=r+10;h=h||[],p=p&&p.toLowerCase&&p.toLowerCase()||"east",n=a[n&&n.toLowerCase()]||"circle",j.labels=a.set();for(var t=0;t<m;t++){var u=k[t].attr("fill"),v=e[t].order,w;e[t].others&&(h[v]=l||"Others"),h[v]=g.labelise(h[v],e[t],o),j.labels.push(a.set()),j.labels[t].push(a[n](q+5,s,5).attr({fill:u,stroke:"none"})),j.labels[t].push(w=a.text(q+20,s,h[v]||e[v]).attr(g.txtattr).attr({fill:f.legendcolor||"#000","text-anchor":"start"})),i[t].label=j.labels[t],s+=w.getBBox().height*1.2}var x=j.labels.getBBox(),y={east:[0,-x.height/2],west:[-x.width-2*d-20,-x.height/2],north:[-d-x.width/2,-d-x.height-10],south:[-d-x.width/2,d+10]}[p];j.labels.translate.apply(j.labels,y),j.push(j.labels)};return f.legend&&y(f.legend,f.legendothers,f.legendmark,f.legendpos),j.push(k,i),j.series=k,j.covers=i,j}var b=function(){};b.prototype=Raphael.g,a.prototype=new b,Raphael.fn.piechart=function(b,c,d,e,f){return new a(this,b,c,d,e,f)}})()