define("jst/collaborations/collaborator",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["collaborations/collaborator"]=b(function(a,b,c,d,e){function p(a,b){var d="",e;return d+='\n      <i class="icon-end" aria-hidden="true"></i>\n      <input type="hidden" id="',i=c.type,e=i||a.type,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"type",{hash:{}})),d+=o(e)+"_",i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'" name="',i=c.type,e=i||a.type,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"type",{hash:{}})),d+=o(e)+'[]" value="',i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'" />\n    ',d}function q(a,b){return'\n      <i class="icon-add" aria-hidden="true"></i>\n    '}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<li>\n  <a href="#" data-id="',i=c.id,g=i||b.id,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"id",{hash:{}})),f+=o(g)+'">\n    <i class="icon-',i=c.type,g=i||b.type,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"type",{hash:{}})),f+=o(g)+'" aria-hidden="true"></i>\n    ',i=c.name,g=i||b.name,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"name",{hash:{}})),f+=o(g)+"\n\n    ",i=c.selected,g=i||b.selected,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.program(3,q,e),g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n  </a>\n</li>\n",f}),c["collaborations/collaborator"]})