define("jst/registration/parentDialog",["compiled/handlebars_helpers","i18n!registration.parent_dialog"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["registration/parentDialog"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div class="registration-dialog">\n  <form class="form-horizontal bootstrap-form" method="post" action="/users">\n    <div class="control-group">\n      <label class="control-label" for="parent_name">',g="Your Name",h="labels.name",i={},j="registration.parent_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n      <div class="controls">\n        <input type="text" id="parent_name" name="user[name]">\n      </div>\n    </div>\n    <div class="control-group">\n      <label class="control-label" for="parent_email">',g="Your Email",h="labels.email",i={},j="registration.parent_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n      <div class="controls">\n        <input type="text" id="parent_email" name="pseudonym[unique_id]">\n      </div>\n    </div>\n    <div class="control-group">\n      <label class="control-label" for="parent_child_username">',g="Child's Username",h="labels.username",i={},j="registration.parent_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n      <div class="controls">\n        <input type="text" id="parent_child_username" name="observee[unique_id]">\n      </div>\n    </div>\n    <div class="control-group">\n      <label class="control-label" for="parent_child_password">',g="Child's Password",h="labels.password",i={},j="registration.parent_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n      <div class="controls">\n        <input type="password" id="parent_child_password" name="observee[password]">\n      </div>\n    </div>\n    <div class="control-group">\n      <div class="controls">\n        <label class="checkbox">\n          <input type="checkbox" name="user[terms_of_use]" value="1">\n          ',g="You agree to the *terms of use* and the **privacy policy**.",h="agree_to_terms_and_pp",i={},j="registration.parent_dialog",i.scope=j,j='<a href="%{terms_url}" target="_blank">$1</a>',i.w0=j,j='<a href="%{privacy_url}" target="_blank">$1</a>',i.w1=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </label>\n      </div>\n    </div>\n    <div class="control-group">\n      <div class="controls">\n        <input type="hidden" name="user[initial_enrollment_type]" value="observer">\n        <button class="btn btn-primary" type="submit">',g="Start Participating",h="buttons.start_participating",i={},j="registration.parent_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</button>\n      </div>\n    </div>\n  </form>\n</div>\n",f}),c["registration/parentDialog"]})