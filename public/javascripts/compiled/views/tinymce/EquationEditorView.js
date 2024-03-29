(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!editor', 'jquery', 'underscore', 'Backbone', 'compiled/views/tinymce/EquationToolbarView', 'jst/tinymce/EquationEditorView', 'jqueryui/dialog', 'mathquill'], function(I18n, $, _, Backbone, EquationToolbarView, template) {
    var EquationEditorView, getEquationText, _ref;

    getEquationText = function(elems) {
      return _.map(elems, function(elem) {
        var _ref;

        if ((_ref = elem.nodeType) === 3 || _ref === 4) {
          return elem.nodeValue;
        } else if (elem.nodeName === 'IMG' && elem.className === 'equation_image') {
          return elem.alt;
        } else if (elem.nodeType !== 8) {
          return getEquationText(elem.childNodes);
        }
      }).join('');
    };
    return EquationEditorView = (function(_super) {
      __extends(EquationEditorView, _super);

      function EquationEditorView() {
        this.onSubmit = __bind(this.onSubmit, this);
        this.setView = __bind(this.setView, this);
        this.toggleView = __bind(this.toggleView, this);
        this.initialRender = __bind(this.initialRender, this);        _ref = EquationEditorView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EquationEditorView.prototype.template = template;

      EquationEditorView.prototype.el = $(document.createElement('span')).appendTo('body')[0];

      EquationEditorView.prototype.els = {
        '#mathquill-view': '$mathquillView',
        '#mathquill-container': '$mathquillContainer',
        '#mathjax-view': '$mathjaxView',
        '#mathjax-editor': '$mathjaxEditor',
        '#mathjax-message': '$mathjaxMessage'
      };

      EquationEditorView.prototype.initialize = function(editor) {
        var equation, nodes;

        this.editor = editor;
        this.$editor = $("#" + this.editor.id);
        this.prevSelection = this.editor.selection.getBookmark();
        if (!(this.toolbar = this.$el.data('toolbar'))) {
          nodes = $('<span>').html(this.editor.selection.getContent());
          equation = getEquationText(nodes).replace(/^\s+|\s+$/g, '');
          this.addToolbar(equation);
        }
        this.cacheEls();
        return this.$el.dialog({
          minWidth: 670,
          minHeight: 290,
          resizable: false,
          title: I18n.t('equation_editor_title', 'Use the toolbars here, or Switch View to Advanced to type/paste in LaTeX'),
          dialogClass: 'math-dialog',
          open: this.initialRender,
          buttons: [
            {
              "class": 'btn-primary',
              text: I18n.t('button.insert_equation', 'Insert Equation'),
              click: this.onSubmit
            }
          ]
        });
      };

      EquationEditorView.prototype.initialRender = function() {
        var equation, nodes;

        nodes = $('<span>').html(this.editor.selection.getContent());
        equation = getEquationText(nodes).replace(/^\s+|\s+$/g, '');
        this.$mathjaxMessage.empty();
        this.setView(this.$el.data('view'), equation);
        return this.renderEquation(this.opposite(this.$el.data('view')), '');
      };

      EquationEditorView.prototype.addToolbar = function(equation) {
        this.$el.append(this.template);
        $('#mathjax-preview').html("<script type='math/tex; mode=display'>" + equation + "</script>");
        this.toolbar = new EquationToolbarView({
          el: this.$el
        });
        this.toolbar.render();
        $('a.math-toggle-link').bind('click', this.toggleView);
        this.$el.data('toolbar', this.toolbar);
        return this.$el.data('view', 'mathquill');
      };

      EquationEditorView.prototype.opposite = function(view) {
        if (view === 'mathquill') {
          return 'mathjax';
        } else if (view === 'mathjax') {
          return 'mathquill';
        }
      };

      EquationEditorView.prototype.getEquation = function() {
        var view;

        view = this.$el.data('view');
        if (view === 'mathquill') {
          return this.$mathquillContainer.mathquill('latex');
        } else if (view === 'mathjax') {
          return this.$mathjaxEditor.val();
        }
      };

      EquationEditorView.prototype.toggleView = function() {
        var equation, view;

        view = this.$el.data('view');
        equation = this.getEquation();
        this.$mathjaxMessage.empty();
        return this.setView(this.opposite(view), equation);
      };

      EquationEditorView.prototype.setView = function(view, equation) {
        if (view === 'mathquill') {
          this.$mathjaxView.hide();
          this.$mathquillView.show();
        } else if (view === 'mathjax') {
          this.$mathquillView.hide();
          this.$mathjaxView.show();
        }
        if (!this.renderEquation(view, equation)) {
          return this.setView('mathjax', equation);
        } else {
          return this.$el.data('view', view);
        }
      };

      EquationEditorView.prototype.renderEquation = function(view, equation) {
        if (view === 'mathquill') {
          this.$mathquillContainer.mathquill('revert').addClass('mathquill-editor').mathquill('editor').mathquill('write', equation);
          if (this.$mathquillContainer.mathquill('latex').replace(/\s+/, '') !== equation.replace(/\s+/, '')) {
            this.$mathjaxMessage.html(I18n.t('cannot_render_equation', "This equation cannot be rendered in Basic View."));
            return false;
          }
        } else if (view === 'mathjax') {
          this.$mathjaxEditor.val(equation);
          if (this.toolbar.renderPreview) {
            this.toolbar.renderPreview();
          }
        }
        return true;
      };

      EquationEditorView.prototype.restoreCaret = function() {
        return this.editor.selection.moveToBookmark(this.prevSelection);
      };

      EquationEditorView.prototype.onSubmit = function(event) {
        var $div, $img, text, url;

        event.preventDefault();
        text = this.getEquation();
        url = "/equation_images/" + (encodeURIComponent(escape(text)));
        $img = $(document.createElement('img')).attr({
          src: url,
          alt: text,
          title: text,
          "class": 'equation_image'
        });
        $div = $(document.createElement('div')).append($img);
        this.restoreCaret();
        this.$editor.editorBox('insert_code', $div.html());
        return this.$el.dialog('close');
      };

      return EquationEditorView;

    })(Backbone.View);
  });

}).call(this);
