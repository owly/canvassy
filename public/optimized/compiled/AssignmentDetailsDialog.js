(function(){var a={}.hasOwnProperty;define(["jquery","jst/AssignmentDetailsDialog","jqueryui/dialog","compiled/jquery/fixDialogButtons"],function(b,c){var d;return d=function(){function d(d,e){var f,g,h,i,j,k,l;this.assignment=d,this.gradebook=e,h=function(){var b,c,d;b=this.gradebook.students,d=[];for(f in b){if(!a.call(b,f))continue;i=b[f],((c=i["assignment_"+this.assignment.id])!=null?c.score:void 0)!=null&&d.push(i["assignment_"+this.assignment.id].score)}return d}.call(this),g={assignment:this.assignment,cnt:h.length,max:Math.max.apply(Math,h),min:Math.min.apply(Math,h),average:function(a){var b,c,d,e;c=0;for(d=0,e=a.length;d<e;d++)b=a[d],c+=b;return Math.round(c/a.length)}(h)},j=0,l=0,k=100,b.extend(g,{showDistribution:g.average&&this.assignment.points_possible,noneLeftWidth:l=k*(g.min/this.assignment.points_possible),noneLeftLeft:(j+=l)-l,someLeftWidth:l=k*((g.average-g.min)/this.assignment.points_possible),someLeftLeft:(j+=l)-l,someRightWidth:l=k*((g.max-g.average)/this.assignment.points_possible),someRightLeft:(j+=l)-l,noneRightWidth:l=k*((this.assignment.points_possible-g.max)/this.assignment.points_possible),noneRightLeft:(j+=l)-l}),b(c(g)).dialog({width:500,close:function(){return b(this).remove()}})}return d}()})}).call(this)