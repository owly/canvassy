define("jst/conversations/conversationItem",["compiled/handlebars_helpers","i18n!conversations.conversation_item"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["conversations/conversationItem"]=b(function(a,b,c,d,e){function r(a,b){var d="",e;return d+='<img src="',k=c.avatar_url,e=k||a.avatar_url,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"avatar_url",{hash:{}})),d+=q(e)+'" class="avatar" />',d}function s(a,b){return' style="display:none"'}c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<li data-id="',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'" class="',k=c.classes,g=k||b.classes,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"classes",{hash:{}})),f+=q(g)+' admin-link-hover-area">\n  ',k=c.avatar_url,g=k||b.avatar_url,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n  <a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[workflow_state]=unread"\n     class="action_mark_as_unread standard_action"\n     data-track-category="Thread Actions"\n     data-track-action="Individual Left Side"\n     data-track-category="Mark as Unread"\n     role="button"\n     title="',g="Mark as Unread",h="inbox_actions.mark_as_unread",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">',g="Mark as Unread",h="inbox_actions.mark_as_unread",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a>\n  <a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[workflow_state]=read"\n     class="action_mark_as_read standard_action"\n     data-track-category="Thread Actions"\n     data-track-action="Individual Left Side"\n     data-track-category="Mark as Read"\n     role="button"\n     title="',g="Mark as Read",h="inbox_actions.mark_as_read",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">',g="Mark as Read",h="inbox_actions.mark_as_read",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a>\n  <a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[starred]=true"\n     class="action_star standard_action"\n     data-track-category="Thread Actions"\n     data-track-action="Individual Left Side"\n     data-track-category="Star"\n     role="button"\n     title="',g="Star",h="inbox_actions.action_star",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">',g="Star",h="inbox_actions.action_star",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a>\n  <a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[starred]=false"\n     class="action_unstar standard_action"\n     data-track-category="Thread Actions"\n     data-track-action="Individual Left Side"\n     data-track-category="Unstar"\n     role="button"\n     title="',g="Unstar",h="inbox_actions.action_unstar",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">',g="Unstar",h="inbox_actions.action_unstar",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a>\n\n  <span class="date">',k=c.lastMessageAt,g=k||b.lastMessageAt,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"lastMessageAt",{hash:{}})),f+=q(g)+'</span>\n\n  <div class="conversation-summary">\n    <img class="attachments" src="/images/messages/attach-gray.png" title="',g="This conversation has one or more attachments",h="has_attachments",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n    <img class="media_objects" src="/images/messages/media-gray.png" title="',g="This conversation has one or more media comments",h="has_media",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n    <span class="audience">',k=c.audienceHtml,g=k||b.audienceHtml,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"audienceHtml",{hash:{}}));if(g||g===0)f+=g;f+='</span>\n  </div>\n\n  <span class="count"',k=c.hideCount,g=k||b.hideCount,h=c["if"],l=m.program(3,s,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+=">",k=c.message_count,g=k||b.message_count,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"message_count",{hash:{}})),f+=q(g)+"</span>\n\n  <p>",k=c.lastMessage,g=k||b.lastMessage,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"lastMessage",{hash:{}})),f+=q(g)+'</p>\n\n  <div class="admin-links">\n    <button class="al-trigger btn btn-mini" data-kyle-menu-options=\'{"appendMenuTo": "#menu-wrapper", "notifyMenuActiveOnParent": "li.admin-link-hover-area"}\'>\n      <i class="icon-settings"></i><i class="icon-mini-arrow-down"></i>\n      <div class="screenreader-only">',g="Message Actions Menu",h="inbox_actions_description",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</div>\n    </button>\n    <ul class="al-options" data-id="',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'">\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[workflow_state]=unread"\n             class="action_mark_as_unread standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Mark as Unread">\n        ',g="Mark as Unread",h="inbox_actions.mark_as_unread",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[workflow_state]=read"\n             class="action_mark_as_read standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Mark as Read">\n        ',g="Mark as Read",h="inbox_actions.mark_as_read",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[starred]=false"\n             class="action_unstar standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Unstar">\n        ',g="Unstar",h="inbox_actions.action_unstar",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[starred]=true"\n             class="action_star standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Star">\n        ',g="Star",h="inbox_actions.unstar",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[subscribed]=0"\n             class="action_unsubscribe standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Unsubscribe">\n        ',g="Unsubscribe",h="inbox_actions.unsubscribe",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[subscribed]=1"\n             class="action_subscribe standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Subscribe">\n        ',g="Subscribe",h="inbox_actions.subscribe",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[workflow_state]=archived"\n             class="action_archive standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Archive">\n        ',g="Archive",h="inbox_actions.archive",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'?conversation[workflow_state]=read"\n             class="action_unarchive standard_action"\n             data-track-category="Thread Actions"\n             data-track-action="Individual Gear"\n             data-track-label="Unarchive">\n        ',g="Unarchive",h="inbox_actions.unarchive",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n      <li><a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'"\n             class="action_delete_all">\n        ',g="Delete",h="inbox_actions.delete",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a></li>\n    </ul>\n  </div>\n  <a href="/conversations/',k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'" class="details_link">',g="more...",h="read_more",i={},j="conversations.conversation_item",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</a>\n</li>\n",f}),c["conversations/conversationItem"]})