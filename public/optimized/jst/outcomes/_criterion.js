define("jst/outcomes/_criterion",["compiled/handlebars_helpers","i18n!outcomes.criterion"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["outcomes/_criterion"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<td class="rating">\n  <div class="rating-wrap">\n    <div class="show">\n      <h5>',k=c.description,g=k||b.description,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"description",{hash:{}})),f+=q(g)+'</h5>\n      <span class="points">',k=c.points,g=k||b.points,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"points",{hash:{}})),f+=q(g)+"</span> ",g="Points",h="points",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      <a\n        href="#"\n        class="edit_rating active element_toggler"\n        title=\'',g='Edit "%{description} criterion rating',h="edit_criterion_rating_title",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="'\n        aria-label='",g='Edit "%{description} criterion rating',h="edit_criterion_rating_title",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="'\n        role=button\n        tabindex=0\n        aria-controls=\"edit_rating_",k=c._index,g=k||b._index,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"_index",{hash:{}})),f+=q(g)+'"><i class="icon-edit"></i></a>\n    </div>\n    <div class="edit" id="edit_rating_',k=c._index,g=k||b._index,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"_index",{hash:{}})),f+=q(g)+'" role=region tabindex=-1>\n      <div class="row-fluid" class="outcomes-edit-row">\n        <div class="span7">\n          <input type="text" name="ratings[',k=c._index,g=k||b._index,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"_index",{hash:{}})),f+=q(g)+'][description]" class="outcome_rating_description" value="',k=c.description,g=k||b.description,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"description",{hash:{}})),f+=q(g)+'" aria-label="',g="Criterion rating description",h="rating_description",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n        </div>\n        <div class="span4 offset1">\n          <input type="text" name="ratings[',k=c._index,g=k||b._index,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"_index",{hash:{}})),f+=q(g)+'][points]" style="width: 20px;" class="outcome_rating_points" value="',k=c.points,g=k||b.points,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"points",{hash:{}})),f+=q(g)+'" aria-label="',g="Criterion rating points",h="criterion_rating_points",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='"> <span class="outcomes-points-label">',g="pts",h="pts",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</span>\n        </div>\n      </div>\n\n      <div class="buttons row-fluid">\n        <div class="span12">\n          <button\n            class="btn btn-small btn-primary save_rating_link"\n            aria-controls="edit_rating_',k=c._index,g=k||b._index,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"_index",{hash:{}})),f+=q(g)+'"\n            type="button"\n          >',g="Ok",h="close_rating",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</button>\n          <button class="btn btn-small delete_rating_link" type="button">',g="Delete",h="delete_criterion",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</button>\n        </div>\n      </div>\n    </div>\n    <div class="insert">\n      <a href="#" class="insert_rating" title="',g="Insert criterion rating",h="insert_criterion_rating",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='" tabindex=0 role=button>\n        ',g="Insert",h="insert_rating",i={},j="outcomes.criterion",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+='\n        <span class="arrow-icon"></span>\n      </a>\n    </div>\n  </div>\n</td>\n',f}),a.registerPartial("outcomes/criterion",c["outcomes/_criterion"]),c["outcomes/_criterion"]})