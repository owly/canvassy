define(["jquery"],function(a){a(document).ready(function(){var b=a("#saml_debug_info"),c=a("#start_saml_debugging"),d=a("#stop_saml_debugging"),e=a("#refresh_saml_debugging"),f=null,g=function(){clearTimeout(f),c.show(),e.hide(),d.hide(),b.html(""),b.hide()},h=function(d){clearTimeout(f);var e=c.attr("href");d&&(e+="?start_debugging=true"),a.ajaxJSON(e,"GET",{},function(a){a&&(a.debugging?(b.html(a.debug_data),b.show(),f=setTimeout(function(){h(!1)},3e4)):g())})};c.click(function(a){a.preventDefault(),h(!0),c.hide(),e.show(),d.show()}),e.click(function(a){a.preventDefault(),h(!1)}),d.click(function(b){b.preventDefault(),g();var c=d.attr("href");a.ajaxJSON(c,"GET",{},function(a){})})})})