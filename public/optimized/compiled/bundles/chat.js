define("translations/chat",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{chat:{notifications:{tinychat_inaccessible:"تحذير: هذه الصفحة تستخدم Tinychat، المكون الإضافي الخاص بالجهة الخارجية الذي لا يمكن الوصول إليه عن طريق برامج قراءة الشاشة."}}},es:{chat:{notifications:{tinychat_inaccessible:"Advertencia: esta página utiliza Tinychat, un complemento de terceros al que no\\\n      pueden acceder los lectores de pantalla."}}},fr:{chat:{notifications:{tinychat_inaccessible:"Avertissement : cette page utilise Tinychat, un plug-in tiers qui n’est pas\\\n      accessible aux lecteurs d’écrans."}}},ja:{chat:{notifications:{tinychat_inaccessible:"警告: このページで使用されるサードパーティ プラグイン Tinychat は\\\n      スクリーン リーダーからアクセスできません。"}}},ko:{chat:{notifications:{tinychat_inaccessible:"주의: 이 페이지는 스크린 리더로 액세스할 수 없는\n타사 플러그 인 Tinychat을 사용합니다."}}},nl:{chat:{notifications:{tinychat_inaccessible:"Waarschuwing: Deze pagina gebruikt Tinychat, een externe plugin\\\ndie niet toegankelijk is voor schermlezers."}}},pt:{chat:{notifications:{tinychat_inaccessible:"Aviso: esta página utiliza  Tinychat, um plug-in de terceiros que não é\\\n      acessível a leitores de ecrã."}}},ru:{chat:{notifications:{tinychat_inaccessible:"Предупреждение. Данная страница использует Tinychat, сторонний подключаемый модуль, который не\\\n      доступен для чтения с экрана."}}},zh:{chat:{notifications:{tinychat_inaccessible:"警告: 此页使用 Tinychat，这是一个第三方插件，\\⏎对于屏幕阅读器是不可访问的。"}}}}})}),function(){require(["i18n!chat","jquery"],function(a,b){var c,d;return d={room:ENV.tinychat.room,nick:ENV.tinychat.nick,colorbk:"0xffffff",oper:"none",owner:"none",change:"none",join:"auto",api:"none",key:ENV.tinychat.key},c=function(a,b){var c,d,e,f,g,h,i,j,k,l;e=[];for(i in a)e.push(""+i+"="+encodeURIComponent(a[i]));return j=e.join("&"),h=document.createElement("iframe"),d=ENV.context_asset_string.split("_"),h.src="tinychat.html?"+j,h.style.width="100%",h.style.height="100%",h.style.border=0,h.frameBorder=0,c=document.createElement("div"),c.className="tinychat_embed",c.style.height="720px",c.appendChild(h),b==null&&(b={}),(k=b.height)==null&&(b.height="700px"),(l=b.width)==null&&(b.width="600px"),f=document.createElement("div"),f.appendChild(c),g=document.getElementById("client"),g?g.innerHTML=f.innerHTML:document.write(f.innerHTML),c.style.width===""&&(c.style.width=b.width),c.style.height===""&&(c.style.height=b.height),h},b(document).ready(function(){return typeof d!="undefined"&&c(d),b.screenReaderFlashMessage(a.t("notifications.tinychat_inaccessible","Warning: This page uses  Tinychat, a third party plugin that is not      accessible to screen readers."),2e4)})})}.call(this),define("compiled/bundles/chat",function(){})