define("jst/conversations/addAttachment",["compiled/handlebars_helpers","i18n!conversations.add_attachment"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["conversations/addAttachment"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<li class="attachment clearfix"\n    title="',g="File to attach",h="titles.attachment",i={},j="conversations.add_attachment",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n  <div class="row-fluid">\n    <div class="span8">\n      <i class="icon-paperclip"></i>\n\n      <input type="file"\n             class="file_input"\n             name="attachments[]">\n    </div>\n\n    <div class="span1 offset3">\n      <a href="#"\n         class="remove_link icon-end black pull-right"\n         title="',g="Remove attachment",h="titles.remove_attachment",i={},j="conversations.add_attachment",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+='"></a>\n    </div>\n  </div>\n</li>\n',f}),c["conversations/addAttachment"]})