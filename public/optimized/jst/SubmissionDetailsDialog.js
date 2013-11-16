define("jst/SubmissionDetailsDialog",["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!submission_details_dialog","jst/_submission_detail"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.SubmissionDetailsDialog=b(function(a,b,c,d,e){function r(a,b){var d="",e,f,g,h;d+='\n      <a class="more-details-link" target="_blank" href="',k=c.speedGraderUrl,e=k||a.speedGraderUrl,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"speedGraderUrl",{hash:{}})),d+=q(e)+'">',e="More details in the SpeedGrader",f="more_details_in_the_speedgrader",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</a>\n    ",d}function s(a,b){var d="",e,f,g,h;d+='\n          <label for="submission_to_view">',e="Submitted multiple times, choose which to view:",f="this_was_submitted_multiple_times_choose_a_submission_to_view",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;d+='</label>\n          <select id="submission_to_view">\n            ',k=c.submission_history,e=k||a.submission_history,f=c.each,l=m.program(4,t,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n          </select>\n        ",d}function t(a,b){var d="",e,f;d+="\n              <option>",k=c.submitted_at,e=k||a.submitted_at,k=c.datetimeFormatted,f=k||a.datetimeFormatted,typeof f===n?e=f.call(a,e,{hash:{}}):f===p?e=o.call(a,"datetimeFormatted",e,{hash:{}}):e=f,d+=q(e)+" ",k=c.submissionWasLate,e=k||a.submissionWasLate,f=c["if"],l=m.program(5,u,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="</option>\n            ",d}function u(a,b){var d="",e,f,g,h;d+=" ",e="LATE",f="late",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+=" ",d}function v(a,b){var d="",e,f;d+="\n          ",k=c.submitted_at,e=k||a.submitted_at,f=c["if"],l=m.program(8,w,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n        ",d}function w(a,b){var d="",e,f,g,h;d+="\n            <strong>",e="Submitted:",f="submitted",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;d+=" ",k=c.submitted_at,e=k||a.submitted_at,k=c.datetimeFormatted,f=k||a.datetimeFormatted,typeof f===n?e=f.call(a,e,{hash:{}}):f===p?e=o.call(a,"datetimeFormatted",e,{hash:{}}):e=f,d+=q(e)+" ",k=c.submissionWasLate,e=k||a.submissionWasLate,f=c["if"],l=m.program(9,x,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="</strong>\n          ",d}function x(a,b){var d="",e,f,g,h;d+=" ",e="LATE",f="late",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+=" ",d}function y(a,b){var e="",f;e+="\n        ",f=a,f=m.invokePartial(d.submission_detail,"submission_detail",f,c,d);if(f||f===0)e+=f;return e+="\n      ",e}function z(a,b){var d="",e,f,g,h;d+='\n        <div class="rubric-link"><a class="rubric" href="',k=c.speedGraderUrl,e=k||a.speedGraderUrl,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"speedGraderUrl",{hash:{}})),d+=q(e)+'">',e="View Rubric Assessment in the SpeedGrader",f="view_rubric_assessment_in_the_speedgrader",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</a></div>\n      ",d}function A(a,b){var d="",e,f,g,h;d+="\n      <h1>",e="Loading comments...",f="loading_comments",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</h1>\n    ",d}function B(a,b){var d="",e,f;d+="\n      ",k=c.submission_comments,e=k||a.submission_comments,f=c["if"],l=m.program(18,C,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n    ",d}function C(a,b){var d="",e,f,g,h;d+="\n        <h1>",e="Comments",f="comments",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;d+='</h1>\n        <div class="submission_details_comments">\n          ',k=c.submission_comments,e=k||a.submission_comments,f=c.each,l=m.program(19,D,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n        </div>\n      ",d}function D(a,b){var d="",e,f,g;d+='\n            <article class="comment clearfix">\n              ',k=c.created_at,e=k||a.created_at,f={},g=!0,f.pubdate=g,k=c.friendlyDatetime,g=k||a.friendlyDatetime,l={},l.hash=f,typeof g===n?e=g.call(a,e,l):g===p?e=o.call(a,"friendlyDatetime",e,l):e=g,d+=q(e)+'\n              <img class="photo" src="',k=c.image_url,e=k||a.image_url,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"image_url",{hash:{}})),d+=q(e)+'" />\n              <div class="middle">\n                <address class="vcard">\n                  <a class="fn url" href="',k=c.url,e=k||a.url,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"url",{hash:{}})),d+=q(e)+'">',k=c.author_name,e=k||a.author_name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"author_name",{hash:{}})),d+=q(e)+"</a>\n                </address>\n                <div>\n                  ",k=c.comment,e=k||a.comment,k=c.newlinesToBreak,f=k||a.newlinesToBreak,typeof f===n?e=f.call(a,e,{hash:{}}):f===p?e=o.call(a,"newlinesToBreak",e,{hash:{}}):e=f,d+=q(e)+"\n                </div>\n                ",k=c.media_comment,e=k||a.media_comment,f=c["if"],l=m.program(20,E,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;d+='\n                <div class="comment_attachments">\n                  ',k=c.attachments,e=k||a.attachments,f=c.each,l=m.program(22,F,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n                </div>\n              </div>\n            </article>\n          ",d}function E(a,b){var d="",e,f,g,h;d+='\n                  <a data-media_comment_id="',k=c.media_comment,e=k||a.media_comment,e=e===null||e===undefined||e===!1?e:e.media_id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"media_comment.media_id",{hash:{}})),d+=q(e)+'" data-media_comment_type="',k=c.media_comment,e=k||a.media_comment,e=e===null||e===undefined||e===!1?e:e.media_type,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"media_comment.media_type",{hash:{}})),d+=q(e)+'" href="',k=c.media_comment,e=k||a.media_comment,e=e===null||e===undefined||e===!1?e:e.url,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"media_comment.url",{hash:{}})),d+=q(e)+'" class="play_comment_link media-comment instructure_inline_media_comment" >',e="click here to view",f="links.click_to_view",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</a>\n                ",d}function F(a,b){var d="",e,f;return d+='\n                    <div><a href="',k=c.url,e=k||a.url,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"url",{hash:{}})),d+=q(e)+'" class="',k=c["content-type"],e=k||a["content-type"],k=c.mimeClass,f=k||a.mimeClass,typeof f===n?e=f.call(a,e,{hash:{}}):f===p?e=o.call(a,"mimeClass",e,{hash:{}}):e=f,d+=q(e)+'" title="',k=c.filename,e=k||a.filename,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"filename",{hash:{}})),d+=q(e)+'">',k=c.display_name,e=k||a.display_name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"display_name",{hash:{}})),d+=q(e)+"</a></div>\n                  ",d}function G(a,b){var d="",e,f,g,h;d+='\n    <span id="group-comment-container">\n      <input type="checkbox" id="group_comment" name="comment[group_comment]" />\n      <label for="group_comment">',e="Send Comment to the Whole Group",f="labels.group_comment",g={},h="submission_details_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</label>\n    </span>\n    ",d}c=c||a.helpers,d=d||a.partials;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<div class="submission_details_dialog">\n  <h1 class="assignment-name">',k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.name,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"assignment.name",{hash:{}})),f+=q(g)+'</h1>\n  <section class="submission-details">\n    ',k=c.speedGraderUrl,g=k||b.speedGraderUrl,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n    <div>\n      <h2>\n        ",k=c.moreThanOneSubmission,g=k||b.moreThanOneSubmission,h=c["if"],l=m.program(3,s,e),l.hash={},l.fn=l,l.inverse=m.program(7,v,e),g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n      </h2>\n      ",k=c.submission_history,g=k||b.submission_history,h=c.each,l=m.program(11,y,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n      ",k=c.rubric_assessment,g=k||b.rubric_assessment,h=c["if"],l=m.program(13,z,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n    </div>\n  </section>\n  <section>\n    ",k=c.loading,g=k||b.loading,h=c["if"],l=m.program(15,A,e),l.hash={},l.fn=l,l.inverse=m.program(17,B,e),g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n  </section>\n  <form class="submission_details_add_comment_form clearfix">\n    <label for="add_a_comment">',g="Add a comment",h="add_a_comment",i={},j="submission_details_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <textarea id="add_a_comment" name="comment[text_comment]"></textarea>\n    ',k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.group_category_id,h=c["if"],l=m.program(24,G,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n    <button class="btn" type="submit">',g="Post Comment",h="post_comment",i={},j="submission_details_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</button>\n  </form>\n</div>\n",f}),arguments[1]("SubmissionDetailsDialog",".submission_details_dialog .more-details-link {\n  float: right;\n  font-size: 1.2em;\n  line-height: 42px; }\n.submission_details_dialog h1, .submission_details_dialog .h1 {\n  margin: 20px 0 0;\n  padding: 0 12px;\n  font-size: 23px; }\n.submission_details_dialog .submission-details {\n  padding: 10px; }\n  .submission_details_dialog .submission-details h1, .submission_details_dialog .submission-details .h1 {\n    margin: 0 -10px 15px;\n    border-bottom: 1px solid #bbbbbb; }\n  .submission_details_dialog .submission-details h2, .submission_details_dialog .submission-details h2 select, .submission_details_dialog .submission-details .h2, .submission_details_dialog .submission-details .h2 select {\n    font-size: 15px; }\n.submission_details_dialog .submission_detail {\n  font-size: 1.1em;\n  margin: 3px 0 10px; }\n.submission_details_dialog .rubric-link {\n  font-weight: bold; }\n.submission_details_dialog .submisison-attachment {\n  padding: 3px 0; }\n  .submission_details_dialog .submisison-attachment a {\n    font-size: 11px; }\n  .submission_details_dialog .submisison-attachment a.turnitin_similarity_score {\n    font-size: 10px; }\n.submission_details_dialog .submission_details_comments {\n  overflow: auto;\n  max-height: 200px;\n  border-top: 1px solid #bbbbbb;\n  padding: 0 12px;\n  position: relative;\n  background: #a3a3a3 url(/images/messages/messages-background.png) 0 0 repeat; }\n.submission_details_dialog .comment {\n  background: white;\n  clear: both;\n  border-bottom: 1px solid #cccccc;\n  padding: 10px;\n  margin: 10px 0; }\n  .submission_details_dialog .comment:last-child {\n    border-bottom: none; }\n  .submission_details_dialog .comment .middle {\n    padding-left: 69px; }\n  .submission_details_dialog .comment .photo {\n    float: left;\n    width: 50px;\n    height: 50px; }\n  .submission_details_dialog .comment time {\n    float: right;\n    color: #777777;\n    font-size: 11px; }\n  .submission_details_dialog .comment address {\n    font-style: normal;\n    font-weight: bold;\n    margin: 0; }\n  .submission_details_dialog .comment .comment_attachments a {\n    padding-top: 4px; }\n\n.submission_details_add_comment_form {\n  position: relative;\n  border-top: 1px solid #bbbbbb;\n  background-color: #f2f2f2;\n  margin: 0px;\n  padding: 5px 10px; }\n  .submission_details_add_comment_form label {\n    font-weight: bold;\n    display: block; }\n  .submission_details_add_comment_form #add_a_comment {\n    width: 99%;\n    display: block; }\n  .submission_details_add_comment_form #group-comment-container {\n    float: left; }\n    .submission_details_add_comment_form #group-comment-container label {\n      display: inline;\n      font-weight: normal; }\n  .submission_details_add_comment_form .btn {\n    float: right; }\n"),c.SubmissionDetailsDialog})