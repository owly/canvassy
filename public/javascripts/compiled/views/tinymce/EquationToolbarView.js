(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!editor', 'jquery', 'Backbone', 'jst/tinymce/EquationToolbarView', 'mathquill'], function(I18n, $, Backbone, template) {
    var EquationToolbarView, _ref;

    return EquationToolbarView = (function(_super) {
      __extends(EquationToolbarView, _super);

      function EquationToolbarView() {
        this.addMathJaxEvents = __bind(this.addMathJaxEvents, this);        _ref = EquationToolbarView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EquationToolbarView.prototype.template = template;

      EquationToolbarView.prototype.els = {
        '#mathjax-view .mathquill-toolbar': '$toolbar',
        '#mathjax-editor': '$matheditor'
      };

      EquationToolbarView.prototype.render = function() {
        this.cacheEls();
        this.$toolbar.append(this.template());
        $('#mathjax-view .mathquill-tab-bar li a').click(function() {
          $('#mathjax-view .mathquill-tab-bar li').removeClass('mathquill-tab-selected');
          $('#mathjax-view .mathquill-tab-pane').removeClass('mathquill-tab-pane-selected');
          $(this).parent().addClass('mathquill-tab-selected');
          return $(this.href.replace(/.*#/, '#')).addClass('mathquill-tab-pane-selected');
        });
        $('#mathjax-view .mathquill-tab-bar li:first-child').addClass('mathquill-tab-selected');
        return $.getScript("https://c328740.ssl.cf1.rackcdn.com/mathjax/2.1-latest/MathJax.js?config=TeX-AMS_HTML.js", this.addMathJaxEvents);
      };

      EquationToolbarView.prototype.addMathJaxEvents = function() {
        var renderPreview;

        renderPreview = function() {
          var jax, tex;

          jax = MathJax.Hub.getAllJax("mathjax-preview")[0];
          if (jax) {
            tex = $('#mathjax-editor').val();
            return MathJax.Hub.Queue(["Text", jax, tex]);
          }
        };
        $('#mathjax-view a.mathquill-rendered-math').mousedown(function(e) {
          return e.stopPropagation();
        }).click(function() {
          var e, field, s, sel, text, val;

          text = this.title + ' ';
          field = document.getElementById('mathjax-editor');
          if (document.selection) {
            field.focus();
            sel = document.selection.createRange();
            sel.text = text;
          } else if (field.selectionStart || field.selectionStart === '0') {
            s = field.selectionStart;
            e = field.selectionEnd;
            val = field.value;
            field.value = val.substring(0, s) + text + val.substring(e, val.length);
          } else {
            field.value += text;
          }
          return renderPreview();
        });
        this.renderPreview = renderPreview;
        this.$matheditor.keyup(renderPreview);
        return this.$matheditor.bind('paste', renderPreview);
      };

      return EquationToolbarView;

    })(Backbone.View);
  });

}).call(this);
