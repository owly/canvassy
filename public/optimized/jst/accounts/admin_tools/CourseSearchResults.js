define("jst/accounts/admin_tools/CourseSearchResults",["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_search_results"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["accounts/admin_tools/CourseSearchResults"]=b(function(a,b,c,d,e){function p(a,b){var d="",e,f,g,h;d+='\n<div class="well">\n  <div class="h2">\n    <span class="lead">',i=c.name,e=i||a.name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"name",{hash:{}})),d+=o(e)+"</span>\n    <p>\n    <strong>",e="Course ID:",f="labels.coures_id1",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</strong> ",i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+" <br />\n    <strong>",e="Account ID:",f="labels.account_id",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</strong> ",i=c.account_id,e=i||a.account_id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"account_id",{hash:{}})),d+=o(e)+"<br />\n    <strong>",e="Course Code:",f="labels.course_code1",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</strong> ",i=c.course_code,e=i||a.course_code,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"course_code",{hash:{}})),d+=o(e)+'<br />\n    </p>\n  </div>\n  <button id="restoreCourseBtn" class="btn">',e="Restore",f="labels.restore_btn",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</button>&nbsp;&nbsp;<span>",e="Enrollments to this course must be restored manually.",f="info_text",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</span>\n</div>\n",d}function q(a,b){var d="",e,f,g,h;d+='\n<div class="alert alert-error">\n  <p class="text-error no-spacing">',e="A deleted course with that ID could not be found for this account.",f="error_message",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</p>\n</div>\n",d}function r(a,b){var d="",e,f,g,h;d+='\n<div class="alert alert-success">\n  <p class="lead">\n  ',i=c.name,e=i||a.name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"name",{hash:{}})),d+=o(e)+" has been restored!\n  </p>\n  <div>\n    <strong>",e="What would you like to do next?",f="successfull_restore.subtext",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+='</strong>\n    <div>\n      <a href="courses/',i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'" id="viewCourse" class="btn">',e="View Course",f="successful_restore.view_course",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+='</a>  <a href="/courses/',i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'/details#tab-users" id="addEnrollments" class="btn">',e="Add Enrollments",f="successfull_restore.add_enrollments",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</a>\n    </div>\n  </div>\n</div>\n",d}function s(a,b){var d="",e,f,g,h;d+='\n<div class="alert alert-block">\n  <div class="h2">\n    <span class="lead">',i=c.name,e=i||a.name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"name",{hash:{}})),d+=o(e)+" ",e="(Not Deleted)",f="notdeleted_restore.header_subtext",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</span>\n    <p>\n    <strong>",e="Course ID:",f="labels.coures_id2",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</strong> ",i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+" <br />\n    <strong>",e="Account ID:",f="labels.account_id2",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</strong> ",i=c.account_id,e=i||a.account_id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"account_id",{hash:{}})),d+=o(e)+"<br />\n    <strong>",e="Course Code:",f="labels.course_code2",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="</strong> ",i=c.course_code,e=i||a.course_code,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"course_code",{hash:{}})),d+=o(e)+'<br />\n    </p>\n  </div>\n\n  <div>\n    <div>\n      <a href="courses/',i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'" id="viewCourse" class="btn">',e="View Course",f="notdeleted_restore.view_course",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+='</a>  <a href="/courses/',i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'/details#tab-users" id="addEnrollments" class="btn">',e="Add Enrollments",f="notdeleted_restore.add_enrollments",g={},h="accounts.admin_tools.course_search_results",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</a>\n    </div>\n  </div>\n\n</div>\n",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;i=c.showRestore,g=i||b.showRestore,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n\n",i=c.showNotFound,g=i||b.showNotFound,h=c["if"],j=k.program(3,q,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n\n",i=c.showSuccessfullRestore,g=i||b.showSuccessfullRestore,h=c["if"],j=k.program(5,r,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n\n",i=c.showNonDeletedCourse,g=i||b.showNonDeletedCourse,h=c["if"],j=k.program(7,s,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n",f}),c["accounts/admin_tools/CourseSearchResults"]})