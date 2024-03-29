(function() {
  define(['underscore', 'str/htmlEscape', 'compiled/util/listWithOthers', 'jquery.instructure_misc_helpers'], function(_, h, listWithOthers) {
    var contextList, format, prepare;

    prepare = function(context, filters) {
      context = _.clone(context);
      context.activeFilter = _.include(filters, "" + context.type + "_" + context.id);
      context.sortBy = "" + (context.activeFilter ? 0 : 1) + "_" + (context.name.toLowerCase());
      return context;
    };
    format = function(context, linkToContexts) {
      var str;

      str = h(context.name);
      if (context.activeFilter) {
        str = "<span class='active-filter'>" + str + "</span>";
      }
      if (linkToContexts && context.type === "course") {
        str = "<a href='" + (h(context.url)) + "'>" + str + "</a>";
      }
      return $.raw(str);
    };
    return contextList = function(contextMap, allContexts, options) {
      var contexts, filters, ids, type, _ref;

      if (options == null) {
        options = {};
      }
      filters = (_ref = options.filters) != null ? _ref : [];
      contexts = [];
      for (type in contextMap) {
        ids = contextMap[type];
        contexts = contexts.concat(_.values(_.pick(allContexts[type], ids)));
      }
      contexts = _.chain(contexts).map(function(context) {
        return prepare(context, filters);
      }).sortBy('sortBy').map(function(context) {
        return format(context, options.linkToContexts);
      }).value();
      if (options.hardCutoff) {
        contexts = contexts.slice(0, options.hardCutoff);
      }
      return listWithOthers(contexts);
    };
  });

}).call(this);
