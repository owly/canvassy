(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["i18n!submission_details_dialog","jquery","jst/SubmissionDetailsDialog","compiled/gradebook2/Turnitin","jst/_submission_detail","jst/_turnitinScore","jquery.ajaxJSON","jquery.disableWhileLoading","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_plugins","vendor/jquery.scrollTo"],function(b,c,d,e){var f,g;return g=e.extractDataFor,f=function(){function b(b,e,f){var g,h,i=this;this.assignment=b,this.student=e,this.options=f,this.update=a(this.update,this),this.scrollCommentsToBottom=a(this.scrollCommentsToBottom,this),this.open=a(this.open,this),h=this.options.speed_grader_enabled?""+this.options.context_url+"/gradebook/speed_grader?assignment_id="+this.assignment.id+"#%7B%22student_id%22%3A"+this.student.id+"%7D":null,this.url=this.options.change_grade_url.replace(":assignment",this.assignment.id).replace(":submission",this.student.id),this.submission=c.extend({},this.student["assignment_"+this.assignment.id],{assignment:this.assignment,speedGraderUrl:h,loading:!0}),this.dialog=c('<div class="use-css-transitions-for-show-hide" style="padding:0;"/>'),this.dialog.html(d(this.submission)).dialog({title:this.student.name,width:600,resizable:!1,open:this.scrollCommentsToBottom}).delegate("select","change",function(a){return i.dialog.find(".submission_detail").each(function(b){return c(this).showIf(b===a.currentTarget.selectedIndex)})}).delegate(".submission_details_add_comment_form","submit",function(a){return a.preventDefault(),c(a.currentTarget).disableWhileLoading(c.ajaxJSON(i.url,"PUT",c(a.currentTarget).getFormData(),function(a){return i.update(a),setTimeout(function(){return i.dialog.dialog("close")},500)}))}),g=c.ajaxJSON(this.url+"?include[]=submission_history&include[]=submission_comments&include[]=rubric_assessment","GET",{},this.update),this.dialog.find(".submission_details_comments").disableWhileLoading(g)}return b.prototype.open=function(){return this.dialog.dialog("open")},b.prototype.scrollCommentsToBottom=function(){return this.dialog.find(".submission_details_comments").scrollTop(999999)},b.prototype.update=function(a){var b,e,f,h,i,j,k,l,m,n,o,p,q;c.extend(this.submission,a),this.submission.submission_history[0]=this.submission,this.submission.moreThanOneSubmission=this.submission.submission_history.length>1,this.submission.loading=!1,o=this.submission.submission_history;for(i=0,l=o.length;i<l;i++){f=o[i],f.submissionWasLate=this.assignment.due_at&&new Date(this.assignment.due_at)>new Date(f.submitted_at),p=f.submission_comments||[];for(j=0,m=p.length;j<m;j++)e=p[j],e.url=""+this.options.context_url+"/users/"+e.author_id,h=""+location.protocol+"//"+location.host,e.image_url=""+h+"/images/users/"+e.author_id+"?fallback="+encodeURIComponent(h+"/images/messages/avatar-50.png");f.turnitin=g(f,"submission_"+f.id,this.options.context_url),q=f.attachments||[];for(k=0,n=q.length;k<n;k++)b=q[k],b.turnitin=g(f,"attachment_"+b.id,this.options.context_url)}return this.dialog.html(d(this.submission)),this.dialog.find("select").trigger("change"),this.scrollCommentsToBottom()},b.cachedDialogs={},b.open=function(a,c,d){var e,f;return((e=b.cachedDialogs)[f=""+a.id+"-"+c.id]||(e[f]=new b(a,c,d))).open()},b}()})}).call(this)