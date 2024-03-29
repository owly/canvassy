(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!recipient_input', 'jquery', 'underscore', 'compiled/util/contextList', 'compiled/widget/TokenInput', 'str/htmlEscape'], function(I18n, $, _, contextList, TokenInput, h) {
    var ContextSearch;

    ContextSearch = (function(_super) {
      __extends(ContextSearch, _super);

      ContextSearch.prototype.defaults = function() {
        return {
          placeholder: I18n.t('context_search_placeholder', 'Enter a name, course, or group'),
          selector: {
            messages: {
              noResults: I18n.t('no_results', 'No results found')
            },
            populator: this.populator,
            baseData: {
              synthetic_contexts: 1
            },
            browser: {
              data: {
                types: ['context']
              }
            }
          }
        };
      };

      function ContextSearch($node, options) {
        this.contextList = __bind(this.contextList, this);
        this.buildContextInfo = __bind(this.buildContextInfo, this);
        this.populator = __bind(this.populator, this);        options = $.extend(true, {}, this.defaults(), options);
        this.prefixUserIds = options.prefixUserIds;
        this.contexts = options.contexts;
        if (options.canToggle) {
          this.canToggle = options.canToggle;
        }
        ContextSearch.__super__.constructor.call(this, $node, options);
      }

      ContextSearch.prototype.populator = function(selector, $node, data, options) {
        var $b, $contextInfo, $description, $name, $span, noExpand, text, _ref, _ref1;

        if (options == null) {
          options = {};
        }
        noExpand = (_ref = options.noExpand) != null ? _ref : data.noExpand;
        data.id = "" + data.id;
        if ((_ref1 = data.type) == null) {
          data.type = 'user';
        }
        if (data.avatar_url) {
          $node.append($('<img />', {
            alt: '',
            "class": 'avatar',
            src: data.avatar_url
          }));
        }
        $b = $('<b />');
        $b.text(data.name);
        $description = $('<span />', {
          id: "" + data.type + "-" + data.id + "-description"
        });
        $name = $('<span />', {
          "class": 'name'
        });
        if (!options.parent) {
          $contextInfo = this.buildContextInfo(data);
        }
        $name.append($b, $contextInfo);
        $span = $('<span />', {
          "class": 'details'
        });
        if (data.common_courses != null) {
          $span.html(this.contextList({
            courses: data.common_courses,
            groups: data.common_groups
          }));
        } else if (data.user_count != null) {
          $span.text(I18n.t('people_count', 'person', {
            count: data.user_count
          }));
        } else if (data.item_count != null) {
          if (data.id.match(/_groups$/)) {
            $span.text(I18n.t('groups_count', 'group', {
              count: data.item_count
            }));
          } else if (data.id.match(/_sections$/)) {
            $span.text(I18n.t('sections_count', 'section', {
              count: data.item_count
            }));
          }
        } else if (data.subText) {
          $span.text(data.subText);
        }
        $description.append($name, $span);
        $node.append($description);
        $node.attr('role', 'menuitem');
        $node.attr('aria-labelledby', "" + data.type + "-" + data.id + "-description");
        text = data.name;
        if (options.parent) {
          if (data.selectAll && noExpand) {
            text = options.parent.data('text');
          } else if (data.id.match(/_\d+_/)) {
            text = I18n.beforeLabel(options.parent.data('text')) + " " + text;
          }
        }
        $node.data('text', text);
        $node.data('id', data.type === 'context' || !this.prefixUserIds ? data.id : "user_" + data.id);
        data.rootId = options.ancestors[0];
        $node.data('user_data', data);
        $node.addClass(data.type);
        if (options.level > 0 && selector.options.showToggles) {
          $node.prepend('<a class="toggle"><i></i></a>');
          if (this.canToggle(data)) {
            $node.addClass('toggleable');
          }
        }
        if (data.type === 'context' && !noExpand) {
          $node.prepend('<a class="expand"><i></i></a>');
          return $node.addClass('expandable');
        }
      };

      ContextSearch.prototype.canToggle = function(data) {
        return !data.item_count;
      };

      ContextSearch.prototype.buildContextInfo = function(data) {
        var contextInfo, match, termInfo;

        match = data.id.match(/^(course|section)_(\d+)$/);
        if (match) {
          termInfo = this.contexts["" + match[1] + "s"][match[2]];
        }
        contextInfo = data.context_name || '';
        contextInfo = contextInfo.length < 40 ? contextInfo : contextInfo.substr(0, 40) + '...';
        if (termInfo != null ? termInfo.term : void 0) {
          contextInfo = contextInfo ? "" + contextInfo + " - " + termInfo.term : termInfo.term;
        }
        if (contextInfo) {
          return $('<span />', {
            "class": 'context_info'
          }).text("(" + contextInfo + ")");
        } else {
          return '';
        }
      };

      ContextSearch.prototype.contextList = function(contexts) {
        contexts = {
          courses: _.keys(contexts.courses),
          groups: _.keys(contexts.groups)
        };
        return contextList(contexts, this.contexts, {
          linkToContexts: false,
          hardCutoff: 2
        });
      };

      return ContextSearch;

    })(TokenInput);
    $.fn.contextSearch = function(options) {
      return this.each(function() {
        return new ContextSearch($(this), $.extend(true, {}, options));
      });
    };
    return ContextSearch;
  });

}).call(this);
