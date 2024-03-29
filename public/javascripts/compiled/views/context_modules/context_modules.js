(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'i18n!context_modules', 'jquery.loadingImg'], function(Backbone, $, I18n) {
    var ContextModules, _ref;

    return ContextModules = (function(_super) {
      __extends(ContextModules, _super);

      function ContextModules() {
        this.onKeyDown = __bind(this.onKeyDown, this);
        this.error = __bind(this.error, this);
        this.success = __bind(this.success, this);
        this.toggleWorkflowState = __bind(this.toggleWorkflowState, this);        _ref = ContextModules.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContextModules.optionProperty('modules');

      ContextModules.prototype.toggleWorkflowState = function(event) {
        var module_url, request_options,
          _this = this;

        event.preventDefault();
        this.$context_module = $(event.target).parents('.context_module');
        module_url = this.$context_module.data('module-url');
        this.workflow_state = this.$context_module.data('workflow-state');
        request_options = {
          url: module_url,
          type: 'PUT',
          beforeSend: function() {
            return _this.$context_module.loadingImage();
          },
          success: this.success,
          error: this.error
        };
        this.setRequestPublishOptions(request_options);
        return $.ajax(request_options);
      };

      ContextModules.prototype.success = function(response) {
        this.$context_module.data('workflow-state', response.context_module.workflow_state);
        if (response.context_module.workflow_state === 'unpublished') {
          this.addUnpublishAttributes();
        } else {
          this.addPublishAttributes();
        }
        return this.$context_module.loadingImage('remove');
      };

      ContextModules.prototype.error = function(response) {
        alert('This module could not be published');
        return this.$context_module.loadingImage('remove');
      };

      ContextModules.prototype.setRequestPublishOptions = function(request_options) {
        if (this.workflow_state === 'active') {
          return request_options.data = "unpublish=1";
        } else {
          return request_options.data = "publish=1";
        }
      };

      ContextModules.prototype.addUnpublishAttributes = function() {
        this.$context_module.find('.workflow-state-action').text(I18n.t("context_modules.publish", "Publish"));
        this.$context_module.find('.workflow-state-icon').addClass('publish-module-link').removeClass('unpublish-module-link');
        this.$context_module.find('.draft-text').removeClass('hide');
        return this.$context_module.addClass('unpublished_module');
      };

      ContextModules.prototype.addPublishAttributes = function() {
        this.$context_module.find('.workflow-state-action').text(I18n.t("context_module.unpublish", "Unpublish"));
        this.$context_module.find('.workflow-state-icon').addClass('unpublish-module-link').removeClass('publish-module-link');
        this.$context_module.find('.draft-text').addClass('hide');
        return this.$context_module.removeClass('unpublished_module');
      };

      ContextModules.prototype.keyCodes = {
        32: 'Space',
        38: 'UpArrow',
        40: 'DownArrow'
      };

      ContextModules.prototype.moduleSelector = "div.context_module";

      ContextModules.prototype.itemSelector = "table.context_module_item";

      ContextModules.prototype.initialize = function() {
        this.$contextModules = $("#context_modules");
        return this.$contextModules.parent().on('keydown', this.onKeyDown);
      };

      ContextModules.prototype.onKeyDown = function(e) {
        var $target, fn;

        $target = $(e.target);
        fn = "on" + this.keyCodes[e.keyCode] + "Key";
        if (this[fn]) {
          e.preventDefault();
          return this[fn].call(this, e, $target);
        }
      };

      ContextModules.prototype.getFocusedElement = function(el) {
        var parent;

        parent = el.parents(this.itemSelector).first();
        if (!this.empty(parent)) {
          el = parent;
        }
        if (!el.is(this.itemSelector)) {
          parent = el.parents(this.moduleSelector).first();
          if (!this.empty(parent)) {
            el = parent;
          }
          if (!el.is(this.moduleSelector)) {
            el = this.$contextModules;
          }
        }
        return el;
      };

      ContextModules.prototype.onUpArrowKey = function(e, $target) {
        var el, lastChild, prev;

        el = this.getFocusedElement($target);
        if (el.is(this.itemSelector)) {
          prev = el.prev(this.itemSelector);
          if (this.empty(prev) || this.$contextModules.data('dragModule')) {
            prev = el.parents(this.moduleSelector).first();
          }
        } else if (el.is(this.moduleSelector)) {
          if (this.$contextModules.data('dragItem')) {
            prev = this.$contextModules.data('dragItemModule');
          } else {
            prev = el.prev(this.moduleSelector);
            if (this.empty(prev)) {
              prev = this.$contextModules;
            } else if (!this.$contextModules.data('dragModule')) {
              lastChild = prev.find(this.itemSelector).last();
              if (!this.empty(lastChild)) {
                prev = lastChild;
              }
            }
          }
        }
        if (prev && !this.empty(prev)) {
          return prev.focus();
        }
      };

      ContextModules.prototype.onDownArrowKey = function(e, $target) {
        var el, next, parent;

        el = this.getFocusedElement($target);
        if (el.is(this.itemSelector)) {
          next = el.next(this.itemSelector);
          if (this.empty(next) && !this.$contextModules.data('dragItem')) {
            parent = el.parents(this.moduleSelector).first();
            next = parent.next(this.moduleSelector);
          }
        } else if (el.is(this.moduleSelector)) {
          next = el.find(this.itemSelector).first();
          if (this.empty(next) || this.$contextModules.data('dragModule')) {
            next = el.next(this.moduleSelector);
          }
        } else {
          next = this.$contextModules.find(this.moduleSelector).first();
        }
        if (next && !this.empty(next)) {
          return next.focus();
        }
      };

      ContextModules.prototype.onSpaceKey = function(e, $target) {
        var dragItem, dragModule, el, parentModule;

        el = this.getFocusedElement($target);
        if (dragItem = this.$contextModules.data('dragItem')) {
          if (!el.is(dragItem)) {
            parentModule = this.$contextModules.data('dragItemModule');
            if (el.is(this.itemSelector) && !this.empty(el.parents(parentModule))) {
              el.after(dragItem);
            } else {
              parentModule.find('.items').prepend(dragItem);
            }
            modules.updateModuleItemPositions(null, {
              item: dragItem.parent()
            });
          }
          dragItem.attr('aria-grabbed', false);
          this.$contextModules.data('dragItem', null);
          this.$contextModules.data('dragItemModule', null);
          return dragItem.focus();
        } else if (dragModule = this.$contextModules.data('dragModule')) {
          if (el.is(this.itemSelector)) {
            el = el.parents(this.moduleSelector).first();
          }
          if (!el.is(dragModule)) {
            if (this.empty(el) || el.is(this.$contextModules)) {
              this.$contextModules.prepend(dragModule);
            } else {
              el.after(dragModule);
            }
            modules.updateModulePositions();
          }
          dragModule.attr('aria-grabbed', false);
          this.$contextModules.data('dragModule', null);
          return dragModule.focus();
        } else if (!el.is(this.$contextModules)) {
          el.attr('aria-grabbed', true);
          if (el.is(this.itemSelector)) {
            this.$contextModules.data('dragItem', el);
            this.$contextModules.data('dragItemModule', el.parents(this.moduleSelector).first());
          } else if (el.is(this.moduleSelector)) {
            this.$contextModules.data('dragModule', el);
          }
          el.blur();
          return el.focus();
        }
      };

      ContextModules.prototype.empty = function(selector) {
        return selector.length === 0;
      };

      return ContextModules;

    })(Backbone.View);
  });

}).call(this);
