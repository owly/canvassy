define("jst/gradebook2/row_student_name",["compiled/handlebars_helpers","i18n!gradebook2.row_student_name","jst/_avatar"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["gradebook2/row_student_name"]=b(function(a,b,c,d,e){function r(a,b){var d="",e;d+="\n  <div class='student-section'>",k=c.sectionNames,e=k||a.sectionNames,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"sectionNames",{hash:{}}));if(e||e===0)d+=e;return d+="</div>\n",d}c=c||a.helpers,d=d||a.partials;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;g=b,g=m.invokePartial(d.avatar,"avatar",g,c,d);if(g||g===0)f+=g;f+="\n<div class='student-name'><a class='student-grades-link' href=\"",k=c.url,g=k||b.url,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"url",{hash:{}})),f+=q(g)+'">',k=c.display_name,g=k||b.display_name,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"display_name",{hash:{}}));if(g||g===0)f+=g;f+="</a></div>\n",k=c.sectionNames,g=k||b.sectionNames,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n\n<div class="student-placeholder">\n  ',g="Student",h="student_placeholder",i={},j="gradebook2.row_student_name",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n</div>\n",f}),c["gradebook2/row_student_name"]})