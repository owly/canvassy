define("jst/mute_dialog",["compiled/handlebars_helpers","i18n!mute_dialog"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.mute_dialog=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div title="',g="Mute Assignment",h="mute_assignment",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n  <p>\n    ',g="Are you sure you want to mute this assignment? While this assignment is muted, students will not receive new notifications about or be able to see:",h="sure_you_want_to_mute",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="\n  </p>\n  <ul>\n    <li>",g="Their grade for the assignment",h="see_grade",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n    <li>",g="Grade change notifications",h="grade_change_notifications",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n    <li>",g="Submission comments",h="submission_comments",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n    <li>",g="Curving assignments",h="curving_assignments",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n    <li>",g="Score change notifications",h="score_change_notifications",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n  </ul>\n  <p>\n    ",g="Students will be able to see that this assignment is muted.",h="students_will_see",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="\n  </p>\n  <p>\n    ",g='Once you have muted this assignment, you can begin sending notifications again by clicking the "Unmute Assignment" link.',h="how_to_unmute",i={},j="mute_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n  </p>\n</div>\n",f}),c.mute_dialog})