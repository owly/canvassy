define(["jquery","compiled/jquery/serializeForm"],function(a){var b={validate:/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,key:/[a-zA-Z0-9_]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_]+$/},c=function(a,b,c){return a[b]=c,a};a.fn.toJSON=function(){var d={},e={},f=function(a,b){e[a]===undefined&&(e[a]=0);if(b===undefined)return e[a]++;if(b!==undefined&&b>e[a])return e[a]=++b};return a.each(a(this).serializeForm(),function(){if(!b.validate.test(this.name))return;var e,g=this.name.match(b.key),h=this.value,i=this.name;while((e=g.pop())!==undefined)i=i.replace(new RegExp("\\["+e+"\\]$"),""),e.match(b.push)?h=c([],f(i),h):e.match(b.fixed)?(f(i,e),h=c([],e,h)):e.match(b.named)&&(h=c({},e,h));d=a.extend(!0,d,h)}),d}})