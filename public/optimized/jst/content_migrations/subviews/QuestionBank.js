define("jst/content_migrations/subviews/QuestionBank",["compiled/handlebars_helpers","i18n!content_migrations.subviews.question_bank"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["content_migrations/subviews/QuestionBank"]=b(function(a,b,c,d,e){function r(a,b){var d="",e;return d+="\n    <option value=",k=c.assessment_question_bank,e=k||a.assessment_question_bank,e=e===null||e===undefined||e===!1?e:e.id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"assessment_question_bank.id",{hash:{}})),d+=q(e)+">",k=c.assessment_question_bank,e=k||a.assessment_question_bank,e=e===null||e===undefined||e===!1?e:e.title,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"assessment_question_bank.title",{hash:{}})),d+=q(e)+"</option>\n    ",d}c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<label class="control-label"><strong>',g="Question bank",h="question_bank_label",i={},j="content_migrations.subviews.question_bank",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</strong></label>\n<div class="controls">\n  <select class="questionBank span3">\n    <option value="">',g="Select question bank",h="select_question_bank",i={},j="content_migrations.subviews.question_bank",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</option>\n    <option value="new_question_bank" id="createQuestion">',g="-- Create new question bank --",h="create_new_question",i={},j="content_migrations.subviews.question_bank",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</option>\n    ",k=c.questionBanks,g=k||b.questionBanks,h=c.each,l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;return f+='\n  </select>\n</div>\n<br />\n<div class="controls">\n  <input placeholder="Question bank name" type="text" style="display:none" id="createQuestionInput"/>\n</div>\n',f}),c["content_migrations/subviews/QuestionBank"]})