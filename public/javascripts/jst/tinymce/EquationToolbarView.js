define('jst/tinymce/EquationToolbarView', ["compiled/handlebars_helpers","i18n!tinymce.equation_toolbar_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['tinymce/EquationToolbarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<ul class=\"mathquill-tab-bar\">\n  <li class=\"\"><a href=\"#basic_tab\"><span class=\"mathquill-rendered-math\">+</span>";
  stack1 = "Basic";
  stack2 = "#editor.tabs.basic";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  <li class=\"\"><a href=\"#greek_tab\"><span class=\"mathquill-rendered-math\">π</span>";
  stack1 = "Greek";
  stack2 = "#editor.tabs.greek";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  <li class=\"\"><a href=\"#operators_tab\"><span class=\"mathquill-rendered-math\">⊕</span>";
  stack1 = "Operators";
  stack2 = "#editor.tabs.operators";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  <li class=\"\"><a href=\"#relationships_tab\"><span class=\"mathquill-rendered-math\">≤</span>";
  stack1 = "Relationships";
  stack2 = "#editor.tabs.relationships";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  <li class=\"\"><a href=\"#arrows_tab\"><span class=\"mathquill-rendered-math\">⇔</span>";
  stack1 = "Arrows";
  stack2 = "#editor.tabs.arrows";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  <li class=\"\"><a href=\"#delimiters_tab\"><span class=\"mathquill-rendered-math\">{</span>";
  stack1 = "Delimiters";
  stack2 = "#editor.tabs.delimiters";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  <li class=\"\"><a href=\"#misc_tab\"><span class=\"mathquill-rendered-math\">∞</span>";
  stack1 = "Misc";
  stack2 = "#editor.tabs.misc";
  stack3 = {};
  stack4 = "tinymce.equation_toolbar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n</ul>\n<div class=\"mathquill-toolbar-panes\">\n  <div class=\"mathquill-tab-pane mathquill-tab-pane-selected\" id=\"basic_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"_{sub}\"><sub\n          style=\"font-size: 0.6em; line-height: 3.5;\">sub</sub></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"^{sup}\"><sup style=\"font-size: 0.6em\">sup</sup></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\frac{n}{m}\"><span style=\"font-size: 0.55em; vertical-align: middle\"\n                                                                 class=\"fraction\"><span class=\"numerator\"><var>n</var></span><span\n          class=\"denominator\"><var>m</var></span><span style=\"width:0\"></span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqrt{x}\"><span class=\"block\"><span class=\"sqrt-prefix\">√</span><span\n          class=\"sqrt-stem\">&nbsp;</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqrt[n]{x}\"><span style=\"font-size: 0.7em\"><sup\n          class=\"nthroot\"><var>n</var></sup><span class=\"block\"><span class=\"sqrt-prefix\">√</span><span\n          class=\"sqrt-stem\">&nbsp;</span></span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\langle \\rangle\"><span style=\"line-height: 1.5em\"><span\n          class=\"block\"><span class=\"paren\">⟨</span><span class=\"block\"></span><span\n          class=\"paren\">⟩</span></span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\binom{n}{m}\"><span style=\"font-size: 0.48em\"><span class=\"paren\"\n                                                                                                    style=\"font-size: 2.087912087912088em; \">(</span><span\n          class=\"array\"><span><var>n</var></span><span><var>m</var></span></span><span class=\"paren\"\n                                                                                       style=\"font-size: 2.087912087912088em; \">)</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\begin{matrix} 1 \\\\ 2 \\\\ 3 \\end{matrix}\"><span class=\"array\"\n                                                                   style=\"vertical-align: middle; font-size: 0.4em; line-height: 0.9em\"><span>1</span><span>2</span><span>3</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"f\"><span style=\"line-height: 1.5em\"><var\n          class=\"florin\">ƒ</var><span style=\"display:inline-block;width:0\">&nbsp;</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\prime\"><span style=\"line-height: 1.5em\"><span>′</span></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"+\"><span style=\"line-height: 1.5em\"><span>+</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"-\"><span style=\"line-height: 1.5em\"><span>−</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\pm\"><span style=\"line-height: 1.5em\"><span>±</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mp\"><span style=\"line-height: 1.5em\"><span>∓</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\cdot\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">·</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"=\"><span style=\"line-height: 1.5em\"><span class=\"binary-operator\">=</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\times\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">×</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\div\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">÷</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ast\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∗</span></span></a></li>\n      <li class=\"mathquill-button-spacer\"></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\therefore\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∴</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\because\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∵</span></span></a></li>\n      <li class=\"mathquill-button-spacer\"></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sum{n}\"><span style=\"line-height: 1.5em\"><big>∑</big></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\prod{n}\"><span style=\"line-height: 1.5em\"><big>∏</big></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\coprod{n}\"><span style=\"line-height: 1.5em\"><big>∐</big></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\int{x}\"><span style=\"line-height: 1.5em\"><big>∫</big></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{N}\"><span style=\"line-height: 1.5em\"><span>ℕ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{P}\"><span style=\"line-height: 1.5em\"><span>ℙ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{Z}\"><span style=\"line-height: 1.5em\"><span>ℤ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{Q}\"><span style=\"line-height: 1.5em\"><span>ℚ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{R}\"><span style=\"line-height: 1.5em\"><span>ℝ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{C}\"><span style=\"line-height: 1.5em\"><span>ℂ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mathbb{H}\"><span style=\"line-height: 1.5em\"><span>ℍ</span></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n  <div class=\"mathquill-tab-pane\" id=\"greek_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\alpha\"><span style=\"line-height: 1.5em\"><var>α</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\beta\"><span style=\"line-height: 1.5em\"><var>β</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\gamma\"><span style=\"line-height: 1.5em\"><var>γ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\delta\"><span style=\"line-height: 1.5em\"><var>δ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\epsilon\"><span style=\"line-height: 1.5em\"><var>ϵ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\zeta\"><span style=\"line-height: 1.5em\"><var>ζ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\eta\"><span style=\"line-height: 1.5em\"><var>η</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\theta\"><span style=\"line-height: 1.5em\"><var>θ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\iota\"><span style=\"line-height: 1.5em\"><var>ι</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\kappa\"><span style=\"line-height: 1.5em\"><var>κ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\lambda\"><span style=\"line-height: 1.5em\"><span\n          class=\"nonSymbola\">λ</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mu\"><span style=\"line-height: 1.5em\"><var>μ</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\nu\"><span style=\"line-height: 1.5em\"><var>ν</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\xi\"><span style=\"line-height: 1.5em\"><var>ξ</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\pi\"><span style=\"line-height: 1.5em\"><span\n          class=\"nonSymbola\">π</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\rho\"><span style=\"line-height: 1.5em\"><var>ρ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sigma\"><span style=\"line-height: 1.5em\"><var>σ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\tau\"><span style=\"line-height: 1.5em\"><var>τ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\upsilon\"><span style=\"line-height: 1.5em\"><var>υ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\phi\"><span style=\"line-height: 1.5em\"><var>ϕ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\chi\"><span style=\"line-height: 1.5em\"><var>χ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\psi\"><span style=\"line-height: 1.5em\"><var>ψ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\omega\"><span style=\"line-height: 1.5em\"><var>ω</var></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\digamma\"><span style=\"line-height: 1.5em\"><var>ϝ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varepsilon\"><span style=\"line-height: 1.5em\"><var>ε</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\vartheta\"><span\n          style=\"line-height: 1.5em\"><var>ϑ</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varkappa\"><span\n          style=\"line-height: 1.5em\"><var>ϰ</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varpi\"><span style=\"line-height: 1.5em\"><var>ϖ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varrho\"><span style=\"line-height: 1.5em\"><var>ϱ</var></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varsigma\"><span\n          style=\"line-height: 1.5em\"><var>ς</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varphi\"><span style=\"line-height: 1.5em\"><var>φ</var></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Gamma\"><span style=\"line-height: 1.5em\"><span>Γ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Delta\"><span style=\"line-height: 1.5em\"><span>Δ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Theta\"><span style=\"line-height: 1.5em\"><span>Θ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Lambda\"><span\n          style=\"line-height: 1.5em\"><span>Λ</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Xi\"><span style=\"line-height: 1.5em\"><span>Ξ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Pi\"><span style=\"line-height: 1.5em\"><span>Π</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Sigma\"><span style=\"line-height: 1.5em\"><span>Σ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Upsilon\"><span style=\"line-height: 1.5em\"><var\n          style=\"font-family: serif\">ϒ</var></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Phi\"><span style=\"line-height: 1.5em\"><span>Φ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Psi\"><span style=\"line-height: 1.5em\"><span>Ψ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Omega\"><span style=\"line-height: 1.5em\"><span>Ω</span></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n  <div class=\"mathquill-tab-pane\" id=\"operators_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\wedge\"><span style=\"line-height: 1.5em\"><span>∧</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\vee\"><span style=\"line-height: 1.5em\"><span>∨</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\cup\"><span style=\"line-height: 1.5em\"><span>∪</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\cap\"><span style=\"line-height: 1.5em\"><span>∩</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\diamond\"><span\n          style=\"line-height: 1.5em\"><span>◇</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\bigtriangleup\"><span\n          style=\"line-height: 1.5em\"><span>△</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ominus\"><span\n          style=\"line-height: 1.5em\"><span>⊖</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\uplus\"><span style=\"line-height: 1.5em\"><span>⊎</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\otimes\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊗</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\oplus\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊕</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\bigtriangledown\"><span style=\"line-height: 1.5em\"><span>▽</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqcap\"><span style=\"line-height: 1.5em\"><span>⊓</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\triangleleft\"><span\n          style=\"line-height: 1.5em\"><span>⊲</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqcup\"><span style=\"line-height: 1.5em\"><span>⊔</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\triangleright\"><span\n          style=\"line-height: 1.5em\"><span>⊳</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\odot\"><span style=\"line-height: 1.5em\"><span>⊙</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\bigcirc\"><span\n          style=\"line-height: 1.5em\"><span>◯</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\dagger\"><span\n          style=\"line-height: 1.5em\"><span>†</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ddagger\"><span\n          style=\"line-height: 1.5em\"><span>‡</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\wr\"><span style=\"line-height: 1.5em\"><span>≀</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\amalg\"><span style=\"line-height: 1.5em\"><span>∐</span></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n  <div class=\"mathquill-tab-pane\" id=\"relationships_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"&lt;\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">&lt;</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"&gt;\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">&gt;</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\equiv\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">≡</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\cong\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">≅</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sim\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∼</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\not\\in\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∉</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ne\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">≠</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\propto\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∝</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\approx\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">≈</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\le\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">≤</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ge\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">≥</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\in\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∈</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ni\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∋</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\not\\ni\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∌</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\subset\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊂</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\supset\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊃</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\not\\subset\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊄</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\not\\supset\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊅</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\subseteq\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊆</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\supseteq\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊇</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\not\\subseteq\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊈</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\not\\supseteq\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">⊉</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\models\"><span\n          style=\"line-height: 1.5em\"><span>⊨</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\prec\"><span style=\"line-height: 1.5em\"><span>≺</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\succ\"><span style=\"line-height: 1.5em\"><span>≻</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\preceq\"><span\n          style=\"line-height: 1.5em\"><span>≼</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\succeq\"><span\n          style=\"line-height: 1.5em\"><span>≽</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\simeq\"><span style=\"line-height: 1.5em\"><span>≃</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mid\"><span style=\"line-height: 1.5em\"><span>∣</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ll\"><span style=\"line-height: 1.5em\"><span>≪</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\gg\"><span style=\"line-height: 1.5em\"><span>≫</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\parallel\"><span style=\"line-height: 1.5em\"><span>∥</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\bowtie\"><span\n          style=\"line-height: 1.5em\"><span>⋈</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqsubset\"><span style=\"line-height: 1.5em\"><span>⊏</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqsupset\"><span style=\"line-height: 1.5em\"><span>⊐</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\smile\"><span style=\"line-height: 1.5em\"><span>⌣</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqsubseteq\"><span\n          style=\"line-height: 1.5em\"><span>⊑</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sqsupseteq\"><span\n          style=\"line-height: 1.5em\"><span>⊒</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\doteq\"><span style=\"line-height: 1.5em\"><span>≐</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\frown\"><span style=\"line-height: 1.5em\"><span>⌢</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\vdash\"><span style=\"line-height: 1.5em\"><span>⊦</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\dashv\"><span style=\"line-height: 1.5em\"><span>⊣</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\exists\"><span\n          style=\"line-height: 1.5em\"><span>∃</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\varnothing\"><span style=\"line-height: 1.5em\"><span\n          class=\"binary-operator\">∅</span></span></a></li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n  <div class=\"mathquill-tab-pane\" id=\"arrows_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\longleftarrow\"><span\n          style=\"line-height: 1.5em\"><span>←</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\longrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>→</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Longleftarrow\"><span\n          style=\"line-height: 1.5em\"><span>⇐</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Longrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>⇒</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\longleftrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>↔</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\updownarrow\"><span\n          style=\"line-height: 1.5em\"><span>↕</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Longleftrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>⇔</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Updownarrow\"><span\n          style=\"line-height: 1.5em\"><span>⇕</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\mapsto\"><span\n          style=\"line-height: 1.5em\"><span>↦</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\nearrow\"><span\n          style=\"line-height: 1.5em\"><span>↗</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\hookleftarrow\"><span\n          style=\"line-height: 1.5em\"><span>↩</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\hookrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>↪</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\searrow\"><span\n          style=\"line-height: 1.5em\"><span>↘</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\leftharpoonup\"><span\n          style=\"line-height: 1.5em\"><span>↼</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\rightharpoonup\"><span\n          style=\"line-height: 1.5em\"><span>⇀</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\swarrow\"><span\n          style=\"line-height: 1.5em\"><span>↙</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\leftharpoondown\"><span style=\"line-height: 1.5em\"><span>↽</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\rightharpoondown\"><span style=\"line-height: 1.5em\"><span>⇁</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\nwarrow\"><span\n          style=\"line-height: 1.5em\"><span>↖</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\downarrow\"><span style=\"line-height: 1.5em\"><span>↓</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Downarrow\"><span style=\"line-height: 1.5em\"><span>⇓</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\uparrow\"><span\n          style=\"line-height: 1.5em\"><span>↑</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Uparrow\"><span\n          style=\"line-height: 1.5em\"><span>⇑</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\rightarrow\"><span\n          style=\"line-height: 1.5em\"><span>→</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Rightarrow\"><span\n          style=\"line-height: 1.5em\"><span>⇒</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\leftarrow\"><span style=\"line-height: 1.5em\"><span>←</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Leftarrow\"><span style=\"line-height: 1.5em\"><span>⇐</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\leftrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>↔</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Leftrightarrow\"><span\n          style=\"line-height: 1.5em\"><span>⇔</span></span></a></li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n  <div class=\"mathquill-tab-pane\" id=\"delimiters_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\lfloor\"><span\n          style=\"line-height: 1.5em\"><span>⌊</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\rfloor\"><span\n          style=\"line-height: 1.5em\"><span>⌋</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\lceil\"><span style=\"line-height: 1.5em\"><span>⌈</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\rceil\"><span style=\"line-height: 1.5em\"><span>⌉</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\unicode{47}\"><span style=\"line-height: 1.5em\"><span>/</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\{\"><span\n          style=\"line-height: 1.5em\"><span>{</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\}\"><span style=\"line-height: 1.5em\"><span>}</span></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n  <div class=\"mathquill-tab-pane\" id=\"misc_tab\">\n    <ul>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\forall\"><span\n          style=\"line-height: 1.5em\"><span>∀</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ldots\"><span style=\"line-height: 1.5em\"><span>…</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\cdots\"><span style=\"line-height: 1.5em\"><span>⋯</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\vdots\"><span style=\"line-height: 1.5em\"><span>⋮</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\unicode{8944}\"><span style=\"line-height: 1.5em\"><span>⋰</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\surd\"><span style=\"line-height: 1.5em\"><span>√</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\triangle\"><span style=\"line-height: 1.5em\"><span>▵</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\ell\"><span style=\"line-height: 1.5em\"><span>ℓ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\top\"><span style=\"line-height: 1.5em\"><span>⊤</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\flat\"><span style=\"line-height: 1.5em\"><span>♭</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\natural\"><span\n          style=\"line-height: 1.5em\"><span>♮</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\sharp\"><span style=\"line-height: 1.5em\"><span>♯</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\wp\"><span style=\"line-height: 1.5em\"><span>℘</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\bot\"><span style=\"line-height: 1.5em\"><span>⊥</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\clubsuit\"><span style=\"line-height: 1.5em\"><span>♣</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\diamondsuit\"><span\n          style=\"line-height: 1.5em\"><span>♢</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\heartsuit\"><span style=\"line-height: 1.5em\"><span>♡</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\spadesuit\"><span style=\"line-height: 1.5em\"><span>♠</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\unicode{94}\"><span style=\"line-height: 1.5em\"><span>^</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\unicode{95}\"><span\n          style=\"line-height: 1.5em\"><span>_</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\backslash\"><span style=\"line-height: 1.5em\"><span>\\</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\vert\"><span style=\"line-height: 1.5em\"><span>|</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\perp\"><span style=\"line-height: 1.5em\"><span>⊥</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\nabla\"><span style=\"line-height: 1.5em\"><span>∇</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\hbar\"><span style=\"line-height: 1.5em\"><span>ℏ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\unicode{8491}\"><span style=\"line-height: 1.5em\"><span>Å</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\circ\"><span style=\"line-height: 1.5em\"><span>∘</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\bullet\"><span\n          style=\"line-height: 1.5em\"><span>•</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\setminus\"><span style=\"line-height: 1.5em\"><span>∖</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\neg\"><span style=\"line-height: 1.5em\"><span>¬</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\dots\"><span style=\"line-height: 1.5em\"><span>…</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Re\"><span style=\"line-height: 1.5em\"><span>ℜ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\Im\"><span style=\"line-height: 1.5em\"><span>ℑ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\partial\"><span\n          style=\"line-height: 1.5em\"><span>∂</span></span></a></li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\infty\"><span style=\"line-height: 1.5em\"><span>∞</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\aleph\"><span style=\"line-height: 1.5em\"><span>ℵ</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"^\\circ\"><span style=\"line-height: 1.5em\"><span>°</span></span></a>\n      </li>\n      <li><a class=\"mathquill-rendered-math\" title=\"\\angle\"><span style=\"line-height: 1.5em\"><span>∠</span></span></a>\n      </li>\n      <li class=\"mathquill-button-spacer\"></li>\n    </ul>\n  </div>\n</div>";
  return buffer;});
  
  
  return templates['tinymce/EquationToolbarView'];
});
