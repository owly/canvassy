define("jst/messageStudentsDialog",["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!message_students_dialog","jst/_messageStudentsWhoRecipientList"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.messageStudentsDialog=b(function(a,b,c,d,e){function s(a,b){var d="",e;return d+="\n      ",k=c.recipientGroups,e=k||a.recipientGroups,e=e===null||e===undefined||e===!1?e:e[0],e=e===null||e===undefined||e===!1?e:e.name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"recipientGroups.0.name",{hash:{}})),d+=q(e)+'\n      <input type="hidden" name="recipientGroupName" value="',k=c.recipientGroups,e=k||a.recipientGroups,e=e===null||e===undefined||e===!1?e:e[0],e=e===null||e===undefined||e===!1?e:e.name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"recipientGroups.0.name",{hash:{}})),d+=q(e)+'" />\n    ',d}function t(a,b){var d="",e,f;d+='\n      <select name="recipientGroupName" id="message-recipients-group">\n        ',k=c.recipientGroups,e=k||a.recipientGroups,f=c.each,l=m.program(4,u,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n      </select>\n    ",d}function u(a,b){var d="",e;return d+='\n          <option value="',k=c.name,e=k||a.name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"name",{hash:{}})),d+=q(e)+'">',k=c.name,e=k||a.name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"name",{hash:{}})),d+=q(e)+"</option>\n        ",d}c=c||a.helpers,d=d||a.partials;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression,r=c.blockHelperMissing;f+='<div class="message-students-dialog form-dialog-content">\n  <div class="message-recipients-group-container">\n    <label for="message-recipients-group">\n     ',g="Recipients:",h="recipients",i={},j="message_students_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="\n    </label>\n\n    ",g=1,k=c.recipientGroups,h=k||b.recipientGroups,h=h===null||h===undefined||h===!1?h:h.length,k=c.ifEqual,i=k||b.ifEqual,l=m.program(1,s,e),l.hash={},l.fn=l,l.inverse=m.program(3,t,e),k&&typeof i===n?g=i.call(b,h,g,l):g=r.call(b,i,h,g,l);if(g||g===0)f+=g;f+='\n  </div>\n\n  <div id="message-recipients">\n    ',g=b,g=m.invokePartial(d.messageStudentsWhoRecipientList,"messageStudentsWhoRecipientList",g,c,d);if(g||g===0)f+=g;f+='\n  </div>\n\n  <textarea name=body></textarea>\n\n</div>\n<div class="form-controls">\n  <button class="btn dialog_closer btn-secondary" type="button"\n    data-text-while-loading=\'',g="Sending...",h="#buttons.sending",i={},j="message_students_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="'>\n    ",g="Cancel",h="#buttons.cancel",i={},j="message_students_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n  </button>\n  <button class="btn btn-primary"\n    data-text-while-loading=\'',g="Sending...",h="#buttons.sending",i={},j="message_students_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="'\n    data-text-when-loaded='",g="Sent!",h="#buttons.sent",i={},j="message_students_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="'>\n    ",g="Send Message",h="#buttons.send_message",i={},j="message_students_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n  </button>\n\n</div>\n",f}),arguments[1]("messageStudentsDialog",".message-students-dialog textarea {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  height: 200px; }\n\n#message-recipients {\n  margin-bottom: 10px;\n  max-height: 100px;\n  overflow: auto; }\n\n.message-recipients-group-container {\n  line-height: 30px;\n  margin-bottom: 10px; }\n  .message-recipients-group-container label {\n    font-weight: bold;\n    margin-bottom: 0; }\n\n#message-recipients-group {\n  width: auto;\n  margin-bottom: 0; }\n"),c.messageStudentsDialog})