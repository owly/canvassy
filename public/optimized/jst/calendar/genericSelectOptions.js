define("jst/calendar/genericSelectOptions",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["calendar/genericSelectOptions"]=b(function(a,b,c,d,e){function o(a,b){var d="",e,f;d+='\n  <option value="',h=c.asset_string,e=h||a.asset_string,f=c["if"],i=j.program(2,p,b),i.hash={},i.fn=i,i.inverse=j.program(4,q,b),e=f.call(a,e,i);if(e||e===0)d+=e;return d+='">',h=c.name,e=h||a.name,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"name",{hash:{}})),d+=n(e)+"</option>\n",d}function p(a,b){var d;return h=c.asset_string,d=h||a.asset_string,typeof d===k?d=d.call(a,{hash:{}}):d===m&&(d=l.call(a,"asset_string",{hash:{}})),n(d)}function q(a,b){var d;return h=c.id,d=h||a.id,typeof d===k?d=d.call(a,{hash:{}}):d===m&&(d=l.call(a,"id",{hash:{}})),n(d)}c=c||a.helpers;var f,g,h,i,j=this,k="function",l=c.helperMissing,m=void 0,n=this.escapeExpression;return h=c.collection,f=h||b.collection,g=c.each,i=j.program(1,o,e),i.hash={},i.fn=i,i.inverse=j.noop,f=g.call(b,f,i),f||f===0?f:""}),c["calendar/genericSelectOptions"]})