define("jst/_messageStudentsWhoRecipientList",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c._messageStudentsWhoRecipientList=b(function(a,b,c,d,e){function p(a,b){var d="",e;return d+='\n  <span class="label">\n    ',i=c.short_name,e=i||a.short_name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"short_name",{hash:{}})),d+=o(e)+"\n  </span>\n",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;i=c.recipients,g=i||b.recipients,h=c.each,j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n",f}),a.registerPartial("messageStudentsWhoRecipientList",c._messageStudentsWhoRecipientList),c._messageStudentsWhoRecipientList})