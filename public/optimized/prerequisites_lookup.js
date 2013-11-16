define(["i18n!prerequisites_lookup","jquery","str/htmlEscape","context_modules","jquery.ajaxJSON","jquery.instructure_misc_helpers"],function(a,b,c){b(document).ready(function(){var d=b("#module_prerequisites_lookup_link"),e=d.attr("href");b.ajaxJSON(e,"GET",{},function(e){if(e.locked===!1){window.reload();return}var f=b("<ul/>");f.attr("id","module_prerequisites_list");for(var g in e.modules){var h=e.modules[g],i=b("<li/>");i.addClass("module"),i.click(function(){b(this).find("ul").toggle()}),i.toggleClass("locked",!!h.locked);var j=b("<h3/>");j.text(h.name),i.append(j);if(h.prerequisites&&h.prerequisites.length>0){var k=b("<ul/>");for(var l in h.prerequisites){var m=h.prerequisites[l],n=b("<li/>");n.addClass("requirement"),n.toggleClass("locked_requirement",!m.available);var o=b("<a/>");o.attr("href",m.url),o.text(m.title),n.append(o);var p=m.requirement_description;if(p){var q=b("<div/>");q.addClass("description"),q.text(p),n.append(q)}k.append(n)}i.append(k)}f.append(i)}d.after(f);var r=a.t("headers.completion_prerequisites","Completion Prerequisites"),s=a.beforeLabel("requirements_must_be_completed","The following requirements need to be completed before this page will be unlocked");d.after("<br/><h3 style='margin-top: 15px;'>"+c(r)+"</h3>"+c(s)),d.prev("a").hide()},function(a){})})})