(function(){define(["jquery","jquery.disableWhileLoading"],function(a){var b;return b=function(){var b,c,d;return c="change keyup input",d=function(){if(b.val().trim().length>20)return b.unbind(c,d),a("#course_code_wrapper").slideDown("fast")},b=a('#new_course_form [name="course[name]"]'),b.bind(c,d),a("#new_course_form").submit(function(){return a(this).disableWhileLoading(a.Deferred())})}})}).call(this)