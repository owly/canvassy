(function(){define([],function(){var a;return a=function(b,c,d,e){var f,g,h;c==null&&(c={}),d==null&&(d={});for(g in b)h=b[g],g=e?""+e+"["+g+"]":g,f=typeof h=="object",h.length!=null&&c.arrays===!1&&(f=!1),f?a(h,c,d,g):d[g]=h;return d}})}).call(this)