(function(){define("compiled/behaviors/autocomplete",["jquery","jqueryui/autocomplete"],function(a){var b;return b=function(){return a("input[data-behaviors~=autocomplete]").each(function(){var b,c;return b=a(this),c=b.data("autocomplete-options"),b.autocomplete(c)})},a(document).ready(function(){return b()}),b})}).call(this),function(){require(["compiled/behaviors/autocomplete"],function(){return $(document).ready(function(){return $("#course_name").on("autocompleteselect",function(a,b){var c;return c=$(this).data("autocomplete-options").source.replace(/\?.+$/,""),window.location=""+c+"/"+b.item.id})})})}.call(this),define("compiled/bundles/account_show",function(){})