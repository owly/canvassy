define("jst/_grading_box",["compiled/handlebars_helpers","i18n!grading_box"],function(a){var b=a.template,c=a.templates=a.templates||{};return c._grading_box=b(function(a,b,c,d,e){function p(a,b){var d="",e;return d+='\n  <input name="default_grade" type="number" value="',i=c.submission,e=i||a.submission,e=e===null||e===undefined||e===!1?e:e.grade,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"submission.grade",{hash:{}})),d+=o(e)+'" class="grading_value grading_box" id="student_grading_',i=c.assignment,e=i||a.assignment,e=e===null||e===undefined||e===!1?e:e.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"assignment.id",{hash:{}})),d+=o(e)+' %>" style="text-align: center; width: 50px;"/>\n',d}function q(a,b){var d="",e;return d+='\n  <span name="default_grade" class="grading_box" id="student_grading_',i=c.assignment,e=i||a.assignment,e=e===null||e===undefined||e===!1?e:e.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"assignment.id",{hash:{}})),d+=o(e)+'">\n    <input type="number" value="',i=c.submission,e=i||a.submission,e=e===null||e===undefined||e===!1?e:e.grade,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"submission.grade",{hash:{}})),d+=o(e)+'" class="grading_value" style="text-align: center; width: 50px;"/>\n    <span style="display: none;">%</span>\n  </span>\n',d}function r(a,b){var d="",e;return d+='\n  <input name="default_grade" type="text" value="',i=c.submission,e=i||a.submission,e=e===null||e===undefined||e===!1?e:e.score,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"submission.score",{hash:{}})),d+=o(e)+'" class="grading_value grading_box score_value" id="student_grading_',i=c.assignment,e=i||a.assignment,e=e===null||e===undefined||e===!1?e:e.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"assignment.id",{hash:{}})),d+=o(e)+'" style="text-align: center; width: 50px;"/>\n',d}function s(a,b){var d="",e,f,g,h;d+='\n  <select name="default_grade" class="grading_value grading_box pass_fail" id="student_grading_<%= assignment.id %>">\n    <option value="">---</option>\n    <option value="complete">',e="Complete",f="#gradebooks.grades.complete",g={},h="grading_box",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+='</option>\n    <option value="incomplete">',e="Incomplete",f="#gradebooks.grades.incomplete",g={},h="grading_box",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</option>\n  </select>\n",d}function t(a,b){var d="",e,f,g,h;d+='\n  <span style="font-size: 0.9em;" >\n    ',e="out of %{assignment.points_possible}",f="out_of_points_possible",g={},h="grading_box",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="\n  </span>\n",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;i=c.assignment_grading_type_is_points,g=i||b.assignment_grading_type_is_points,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n",i=c.assignment_grading_type_is_percent,g=i||b.assignment_grading_type_is_percent,h=c["if"],j=k.program(3,q,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n",i=c.assignment_grading_type_is_letter_grade,g=i||b.assignment_grading_type_is_letter_grade,h=c["if"],j=k.program(5,r,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n",i=c.assignment_grading_type_is_pass_fail,g=i||b.assignment_grading_type_is_pass_fail,h=c["if"],j=k.program(7,s,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n",i=c.showPointsPossible,g=i||b.showPointsPossible,h=c["if"],j=k.program(9,t,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n",f}),a.registerPartial("grading_box",c._grading_box),c._grading_box})