define("jst/content_migrations/CopyCourse",["compiled/handlebars_helpers","i18n!content_migrations.copy_course"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["content_migrations/CopyCourse"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div class="control-group courseFindSelect"></div>\n<div class="control-group options">\n  <label class="control-label"><strong>',g="Options",h="options",i={},j="content_migrations.copy_course",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+='</strong></label>\n  <div class="controls selectContent"></div>\n  <div class="dateShift"></div>\n</div>\n',f}),c["content_migrations/CopyCourse"]})