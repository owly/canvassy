(function(){define(["jquery"],function(a){return a(document).ready(function(){var b,c,d,e,f;if(ENV.badge_counts){e=ENV.badge_counts,f=[];for(c in e)d=e[c],d>0?(c==="submissions"&&(c="grades"),b=a("<b/>").append(d).addClass("nav-badge"),f.push(a("#section-tabs ."+c).append(b))):f.push(void 0);return f}})})}).call(this)