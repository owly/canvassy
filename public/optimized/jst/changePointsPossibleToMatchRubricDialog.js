define("jst/changePointsPossibleToMatchRubricDialog",["compiled/handlebars_helpers","i18n!change_points_possible_to_match_rubric_dialog"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.changePointsPossibleToMatchRubricDialog=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<p title="',g="Change points possible to match rubric?",h="titles.update_assignment_points",i={},j="change_points_possible_to_match_rubric_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n  ',g="This assignment has %{assignmentPoints} points possible, would you like to change it to have %{rubricPoints} points possible to match this rubric?",h="prompts.update_assignment_points",i={},j="change_points_possible_to_match_rubric_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n</p>",f}),c.changePointsPossibleToMatchRubricDialog})