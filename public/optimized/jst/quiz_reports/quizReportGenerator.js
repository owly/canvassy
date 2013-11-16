define("jst/quiz_reports/quizReportGenerator",["compiled/handlebars_helpers","i18n!quiz_reports.quiz_report_generator"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["quiz_reports/quizReportGenerator"]=b(function(a,b,c,d,e){function q(a,b){var d="",e,f,g,h;d+='\n  <a href="',i=c.file,e=i||a.file,e=e===null||e===undefined||e===!1?e:e.url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"file.url",{hash:{}})),d+=o(e)+'" class="btn button-sidebar-wide "target="_blank">\n    <i class="icon-download"></i>\n    ',e="Download %{report_name}",f="download_report_name",g={},h="quiz_reports.quiz_report_generator",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+="<br>\n    <small>",e="Generated %{dateAndTime}",f="generated_at_date_time",g={},h="quiz_reports.quiz_report_generator",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</small>\n  </a>\n",d}function r(a,b){var d="",e,f;d+="\n  ",i=c.progress,e=i||a.progress,f=c["if"],j=k.program(4,s,b),j.hash={},j.fn=j,j.inverse=k.program(9,v,b),e=f.call(a,e,j);if(e||e===0)d+=e;return d+="\n",d}function s(a,b){var d="",e,f,g,h;d+="\n    ",e="Generating %{report_name}...",f="generating_report_name",g={},h="quiz_reports.quiz_report_generator",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;d+='\n    <div class="progress progress-small progress-striped ',i=c.progress,e=i||a.progress,e=e===null||e===undefined||e===!1?e:e.workflow_state,f="completed",i=c.ifEqual,g=i||a.ifEqual,j=k.program(5,t,b),j.hash={},j.fn=j,j.inverse=k.program(7,u,b),i&&typeof g===l?e=g.call(a,f,e,j):e=p.call(a,g,f,e,j);if(e||e===0)d+=e;return d+='" style="margin: 0 0 10px">\n      <div class="bar" style="width:',i=c.progress,e=i||a.progress,e=e===null||e===undefined||e===!1?e:e.completion,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"progress.completion",{hash:{}})),d+=o(e)+'%;"></div>\n    </div>\n  ',d}function t(a,b){return"progress-success"}function u(a,b){return"active"}function v(a,b){var d="",e,f,g,h;d+='\n    <a href="javascript:void(0)" class="create-report btn button-sidebar-wide">\n      <i class="icon-ms-excel"></i>\n      ',e="Generate %{report_name}",f="generate_report_name",g={},h="quiz_reports.quiz_report_generator",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="\n    </a>\n  ",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression,p=c.blockHelperMissing;i=c.file,g=i||b.file,h=c["if"],j=k.program(1,q,e),j.hash={},j.fn=j,j.inverse=k.program(3,r,e),g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n\n",f}),c["quiz_reports/quizReportGenerator"]})