define("jst/content_migrations/ContentMigrationIssue",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["content_migrations/ContentMigrationIssue"]=b(function(a,b,c,d,e){function p(a,b){var d="",e;return d+='\n  <a href="',i=c.fix_issue_url,e=i||a.fix_issue_url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"fix_issue_url",{hash:{}})),d+=o(e)+'" target="_blank">',i=c.description,e=i||a.description,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"description",{hash:{}})),d+=o(e)+"</a>\n",d}function q(a,b){var d="",e;return d+="\n  ",i=c.description,e=i||a.description,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"description",{hash:{}})),d+=o(e)+"\n",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+=' <div class="span8">\n',i=c.fix_issue_url,g=i||b.fix_issue_url,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.program(3,q,e),g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n</div>\n",f}),c["content_migrations/ContentMigrationIssue"]})