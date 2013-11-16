(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["compiled/gradebook2/GRADEBOOK_TRANSLATIONS","str/htmlEscape","jquery","underscore","compiled/gradebook2/Turnitin","jquery.ajaxJSON"],function(a,c,d,e,f){var g,h,i,j,k,l;return h=f.extractData,g=function(){function b(a){this.opts=a,this.init()}return b.prototype.init=function(){var a;return a=this.opts.item[this.opts.column.field],this.$wrapper=d(this.cellWrapper('<input class="grade"/>')).appendTo(this.opts.container),this.$input=this.$wrapper.find("input").focus().select()},b.prototype.destroy=function(){return this.$input.remove()},b.prototype.focus=function(){return this.$input.focus()},b.prototype.loadValue=function(){return this.val=c(this.opts.item[this.opts.column.field].grade||""),this.$input.val(this.val),this.$input[0].defaultValue=this.val,this.$input.select()},b.prototype.serializeValue=function(){return this.$input.val()},b.prototype.applyValue=function(a,b){var d;return a[this.opts.column.field].grade=c(b),(d=this.wrapper)!=null&&d.remove(),this.postValue(a,b)},b.prototype.postValue=function(a,b){var c,e;return c=a[this.opts.column.field],e=this.opts.grid.getOptions().change_grade_url,e=e.replace(":assignment",c.assignment_id).replace(":submission",c.user_id),d.ajaxJSON(e,"PUT",{"submission[posted_grade]":b},this.onUpdateSuccess,this.onUpdateError)},b.prototype.onUpdateSuccess=function(a){return d.publish("submissions_updated",[a.all_submissions])},b.prototype.onUpdateError=function(){return d.flashError(a.submission_update_error)},b.prototype.isValueChanged=function(){return this.val!==this.$input.val()},b.prototype.validate=function(){return{valid:!0,msg:null}},b.formatter=function(a,b,c,d){return this.prototype.cellWrapper(c.grade,{submission:c,assignment:d,editable:!1})},b.prototype.cellWrapper=function(c,e){var f,g,i,j,k;e==null&&(e={}),f=d.extend({},{classes:"",editable:!0},e),f.submission||(f.submission=this.opts.item[this.opts.column.field]),f.assignment||(f.assignment=this.opts.column.object),g=b.classesBasedOnSubmission(f.submission,f.assignment),f.submission.grade||(f.classes+=" no_grade_yet "),c==null&&(c=((k=f.submission)!=null?k.submission_type:void 0)?'<span class="submission_type_icon" />':"-");if(j=h(f.submission))g.push("turnitin"),c+="<span class='gradebook-cell-turnitin "+j.state+"-score' />";return i=d.map(g,function(b){return a["submission_tooltip_"+b]}).join(", "),""+(i?'<div class="gradebook-tooltip">'+i+"</div>":"")+'\n<div class="gradebook-cell '+(f.editable?"gradebook-cell-editable focus":"")+" "+f.classes+" "+g.join(" ")+'">\n  <a href="#" data-user-id='+f.submission.user_id+" data-assignment-id="+f.assignment.id+' class="gradebook-cell-comment"><span class="gradebook-cell-comment-label">submission comments</span></a>\n  '+c+"\n</div>"},b.classesBasedOnSubmission=function(a,b){var c;return a==null&&(a={}),b==null&&(b={}),c=[],a.grade_matches_current_submission===!1&&c.push("resubmitted"),a.late&&c.push("late"),""+b.submission_types=="not_graded"&&c.push("ungraded"),b.muted&&c.push("muted"),a.submission_type&&c.push(a.submission_type),c},b}(),g.out_of=function(a){function c(){return i=c.__super__.constructor.apply(this,arguments),i}return b(c,a),c.prototype.init=function(){var a;return a=this.opts.item[this.opts.column.field],this.$wrapper=d(this.cellWrapper('<div class="overflow-wrapper">\n  <div class="grade-and-outof-wrapper">\n    <input type="number" class="grade"/><span class="outof"><span class="divider">/</span>'+this.opts.column.object.points_possible+"</span>\n  </div>\n</div>",{classes:"gradebook-cell-out-of-formatter"})).appendTo(this.opts.container),this.$input=this.$wrapper.find("input").focus().select()},c}(g),g.letter_grade=function(a){function c(){return j=c.__super__.constructor.apply(this,arguments),j}return b(c,a),c.formatter=function(a,b,c,d){var e;return e=c.score?""+c.grade+"<span class='letter-grade-points'>"+c.score+"</span>":c.grade,g.prototype.cellWrapper(e,{submission:c,assignment:d,editable:!1})},c}(g),g.pass_fail=function(a){function f(){return k=f.__super__.constructor.apply(this,arguments),k}var c,e;return b(f,a),e=["pass","fail",""],c=function(a){return{pass:"pass",complete:"pass",fail:"fail",incomplete:"fail"}[a.grade]||""},f.prototype.htmlFromSubmission=function(a){var b;return a==null&&(a={}),b=c(a.submission),g.prototype.cellWrapper('<a data-value="'+b+'" class="gradebook-checkbox gradebook-checkbox-'+b+" "+(a.editable?"editable":void 0)+'" href="#">'+b+"</a>",a)},f.formatter=function(a,b,c,d){return c.grade==null?g.formatter.apply(this,arguments):f.prototype.htmlFromSubmission({submission:c,assignment:d,editable:!1})},f.prototype.init=function(){var a=this;return this.$wrapper=d(this.cellWrapper()),this.$wrapper=d(this.htmlFromSubmission({submission:this.opts.item[this.opts.column.field],assignment:this.opts.column.object,editable:!0})).appendTo(this.opts.container),this.$input=this.$wrapper.find(".gradebook-checkbox").bind("click keypress",function(b){var c,d;return b.preventDefault(),c=a.$input.data("value"),c==="pass"?d="fail":c==="fail"?d="":d="pass",a.transitionValue(d)}).focus()},f.prototype.destroy=function(){return this.$wrapper.remove()},f.prototype.transitionValue=function(a){return this.$input.removeClass("gradebook-checkbox-pass gradebook-checkbox-fail").addClass("gradebook-checkbox-"+c({grade:a})).data("value",a)},f.prototype.loadValue=function(){return this.val=this.opts.item[this.opts.column.field].grade||""},f.prototype.serializeValue=function(){return this.$input.data("value")},f.prototype.isValueChanged=function(){return this.val!==this.$input.data("value")},f}(g),g.points=function(a){function c(){return l=c.__super__.constructor.apply(this,arguments),l}return b(c,a),c}(g),g})}).call(this)