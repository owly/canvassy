(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!assignment","Backbone","underscore","jquery","compiled/views/assignments/AssignmentGroupCreateDialog","jst/assignments/AssignmentGroupSelector"],function(b,d,e,f,g,h){var i,j;return i=function(d){function i(){return this._validateAssignmentGroupId=a(this._validateAssignmentGroupId,this),this.validateBeforeSave=a(this.validateBeforeSave,this),this.toJSON=a(this.toJSON,this),this.showAssignmentGroupCreateDialog=a(this.showAssignmentGroupCreateDialog,this),j=i.__super__.constructor.apply(this,arguments),j}var e;return c(i,d),i.prototype.template=h,e="#assignment_group_id",i.prototype.els=function(){var a;return a={},a[""+e]="$assignmentGroupId",a}(),i.prototype.events=function(){var a;return a={},a["change "+e]="showAssignmentGroupCreateDialog",a}(),i.optionProperty("parentModel"),i.optionProperty("assignmentGroups"),i.optionProperty("nested"),i.prototype.showAssignmentGroupCreateDialog=function(){var a=this;if(this.$assignmentGroupId.val()==="new")return this.dialog=(new g).render(),this.dialog.on("assignmentGroup:created",function(b){var c;return c=f("<option>"),c.val(b.id),c.text(b.name),a.$assignmentGroupId.prepend(c),a.$assignmentGroupId.val(b.id)}),this.dialog.on("assignmentGroup:canceled",function(){return a.$assignmentGroupId.val(a.assignmentGroups[0].id)})},i.prototype.toJSON=function(){return{assignmentGroups:this.assignmentGroups,assignmentGroupId:this.parentModel.assignmentGroupId(),frozenAttributes:this.parentModel.frozenAttributes(),nested:this.nested}},i.prototype.fieldSelectors={assignmentGroupSelector:"#assignment_group_id"},i.prototype.validateBeforeSave=function(a,b){return b=this._validateAssignmentGroupId(a,b),b},i.prototype._validateAssignmentGroupId=function(a,c){var d;return d=this.nested?a.assignment.assignmentGroupId():a.assignment_group_id,d==="new"&&(c.assignmentGroupSelector=[{message:b.t("assignment_group_must_have_group","Please select an assignment group for this assignment")}]),c},i}(d.View)})}).call(this)