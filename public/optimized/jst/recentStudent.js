define("jst/recentStudent",["compiled/handlebars_helpers","i18n!recent_student"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.recentStudent=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<a class="header" href="/courses/',k=c.course_id,g=k||b.course_id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"course_id",{hash:{}})),f+=q(g)+"/users/",k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'">',k=c.name,g=k||b.name,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"name",{hash:{}})),f+=q(g)+'</a>\n<div class="sub_header">',g="last logged in %{last_login}",h="last_logged_in",i={},j="recent_student",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</div>\n",f}),c.recentStudent})