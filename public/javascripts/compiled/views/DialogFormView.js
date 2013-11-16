(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'compiled/views/ValidatedFormView', 'jst/DialogFormWrapper', 'jqueryui/dialog'], function($, ValidatedFormView, wrapper) {
    var DialogFormView, _ref;

    return DialogFormView = (function(_super) {
      __extends(DialogFormView, _super);

      function DialogFormView() {
        this.onSaveSuccess = __bind(this.onSaveSuccess, this);
        this.renderOutlet = __bind(this.renderOutlet, this);
        this.renderEl = __bind(this.renderEl, this);
        this.toggle = __bind(this.toggle, this);        _ref = DialogFormView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DialogFormView.prototype.defaults = {
        trigger: false,
        title: null,
        width: null,
        height: null,
        fixDialogButtons: true
      };

      DialogFormView.prototype.$dialogAppendTarget = $('body');

      DialogFormView.prototype.className = 'dialogFormView';

      DialogFormView.prototype.wrapperTemplate = wrapper;

      DialogFormView.prototype.initialize = function() {
        DialogFormView.__super__.initialize.apply(this, arguments);
        return this.setTrigger();
      };

      DialogFormView.prototype.open = function() {
        this.firstOpen();
        this.openAgain();
        return this.open = this.openAgain;
      };

      DialogFormView.prototype.close = function() {
        return this.dialog.close();
      };

      DialogFormView.prototype.toggle = function() {
        var _ref1;

        if ((_ref1 = this.dialog) != null ? _ref1.isOpen() : void 0) {
          return this.close();
        } else {
          return this.open();
        }
      };

      DialogFormView.prototype.remove = function() {
        var _ref1;

        DialogFormView.__super__.remove.apply(this, arguments);
        return (_ref1 = this.$trigger) != null ? _ref1.off('.dialogFormView') : void 0;
      };

      DialogFormView.prototype.firstOpen = function() {
        this.insert();
        this.render();
        return this.setupDialog();
      };

      DialogFormView.prototype.openAgain = function() {
        this.dialog.open();
        return this.dialog.uiDialog.focus();
      };

      DialogFormView.prototype.insert = function() {
        return this.$el.appendTo(this.$dialogAppendTarget);
      };

      DialogFormView.prototype.setTrigger = function(el) {
        if (el) {
          this.options.trigger = el;
        }
        if (!this.options.trigger) {
          return;
        }
        this.$trigger = $(this.options.trigger);
        return this.attachTrigger();
      };

      DialogFormView.prototype.attachTrigger = function() {
        return this.$trigger.on('click.dialogFormView', this.toggle);
      };

      DialogFormView.prototype.renderEl = function() {
        this.$el.html(this.wrapperTemplate(this.toJSON()));
        this.renderOutlet();
        return this.renderEl = this.renderOutlet;
      };

      DialogFormView.prototype.renderOutlet = function() {
        var html;

        html = this.template(this.toJSON());
        return this.$el.find('.outlet').html(html);
      };

      DialogFormView.prototype.getDialogTitle = function() {
        return this.options.title || this.$trigger.attr('title') || this.getAriaTitle();
      };

      DialogFormView.prototype.getAriaTitle = function() {
        var ariaID;

        ariaID = this.$trigger.attr('aria-describedby');
        return $("#" + ariaID).text();
      };

      DialogFormView.prototype.setupDialog = function() {
        var opts,
          _this = this;

        opts = {
          autoOpen: false,
          title: this.getDialogTitle(),
          close: function() {
            return _this.trigger('close');
          },
          open: function() {
            return _this.trigger('open');
          }
        };
        opts.width = this.options.width;
        opts.height = this.options.height;
        this.$el.dialog(opts);
        if (this.options.fixDialogButtons) {
          this.$el.fixDialogButtons();
        }
        return this.dialog = this.$el.data('dialog');
      };

      DialogFormView.prototype.onSaveSuccess = function() {
        DialogFormView.__super__.onSaveSuccess.apply(this, arguments);
        return this.close();
      };

      return DialogFormView;

    })(ValidatedFormView);
  });

}).call(this);
