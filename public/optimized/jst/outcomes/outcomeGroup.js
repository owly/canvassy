define("jst/outcomes/outcomeGroup",["compiled/handlebars_helpers","i18n!outcomes.outcome_group"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["outcomes/outcomeGroup"]=b(function(a,b,c,d,e){function p(a,b){var d="",e,f,g,h;d+='\n<a href="#" style="float:right" class="edit_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n  ',e="Edit Outcome Group",f="links.edit_outcome_group",g={},h="outcomes.outcome_group",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+='\n</a>\n<a href="#" style="float:right" class="delete_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n  ',e="Delete Outcome Group",f="links.delete_outcome_group",g={},h="outcomes.outcome_group",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="\n</a>\n",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<h3 class="title">\n  <i class="icon-folder"></i>\n  ',i=c.title,g=i||b.title,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"title",{hash:{}})),f+=o(g)+'\n</h3>\n<div class="description">\n  ',i=c.description,g=i||b.description,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"description",{hash:{}}));if(g||g===0)f+=g;f+="\n</div>\n\n",i=c.readOnly,g=i||b.readOnly,h=c.unless,j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n",f}),c["outcomes/outcomeGroup"]})