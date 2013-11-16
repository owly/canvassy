define("jst/courses/roster/rosterUsers",["compiled/handlebars_helpers","i18n!courses.roster.roster_users"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["courses/roster/rosterUsers"]=b(function(a,b,c,d,e){function o(a,b){var d="",e,f,g,h;d+='\n\n<table class="roster table table-hover table-striped table-condensed table-vertically-center">\n  <thead>\n    <tr>\n      <th></th>\n      <th>',e="Name",f="name",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</th>\n      ",i=c.canViewLoginIdColumn,e=i||a.canViewLoginIdColumn,f=c["if"],j=k.program(2,p,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;d+="\n      <th>",e="Section",f="section",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</th>\n      <th>",e="Role",f="role",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+='</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody class="collectionViewItems"></tbody>\n</table>\n<div class="paginatedLoadingIndicator"></div>\n\n',d}function p(a,b){var d="",e,f,g,h;d+="\n      <th>",e="Login / SIS ID",f="login_name_or_sis_id",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</th>\n      ",d}function q(a,b){var d="",e,f;d+="\n\n  ",i=c.collection,e=i||a.collection,e=e===null||e===undefined||e===!1?e:e.atLeastOnePageFetched,f=c["if"],j=k.program(5,r,b),j.hash={},j.fn=j,j.inverse=k.program(7,s,b),e=f.call(a,e,j);if(e||e===0)d+=e;return d+="\n\n",d}function r(a,b){var d="",e,f,g,h;d+='\n  <div class="alert alert-info">\n    <p class="lead">',e="No people found",f="no_people_found",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</p>\n    <p>",e="You can search by:",f="you_can_search_by",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</p>\n    <ul>\n      <li>",e="Name",f="name",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</li>\n      <li>",e="Login / SIS ID",f="login_name_or_sis_id",g={},h="courses.roster.roster_users",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</li>\n    </ul>\n  </div>\n  ",d}function s(a,b){return'\n  <div class="paginatedLoadingIndicator"></div>\n  '}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0;i=c.collection,g=i||b.collection,g=g===null||g===undefined||g===!1?g:g.length,h=c["if"],j=k.program(1,o,e),j.hash={},j.fn=j,j.inverse=k.program(4,q,e),g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n\n\n",f}),c["courses/roster/rosterUsers"]})