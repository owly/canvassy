(function() {
  define(['jquery', 'compiled/jquery/fixDialogButtons'], function($) {
    var toggleRegion, updateTextToState;

    updateTextToState = function(newStateOfRegion) {
      return function() {
        var $this, newHtml, oldStateKey, savedHtml;

        $this = $(this);
        if (!(newHtml = $this.data("htmlWhileTarget" + newStateOfRegion))) {
          return;
        }
        oldStateKey = "htmlWhileTarget" + (newStateOfRegion === 'Hidden' ? 'Shown' : 'Hidden');
        savedHtml = $this.data(oldStateKey);
        if (!savedHtml) {
          $this.data(oldStateKey, $this.html());
        }
        return $this.html(newHtml);
      };
    };
    toggleRegion = function($region, showRegion) {
      var $allElementsControllingRegion, $firstFocusableEl, dialogOpts;

      if (showRegion == null) {
        showRegion = $region.is(':ui-dialog:hidden') || ($region.attr('aria-expanded') !== 'true');
      }
      $allElementsControllingRegion = $("[aria-controls*=" + ($region.attr('id')) + "]");
      $allElementsControllingRegion.filter(function() {
        return $(this).data('hideWhileTargetShown');
      }).toggle(!showRegion);
      $region.attr('aria-expanded', '' + showRegion).toggle(showRegion);
      if ($region.is(':ui-dialog') || (dialogOpts = $region.data('turnIntoDialog'))) {
        if (dialogOpts && showRegion) {
          dialogOpts = $.extend({
            autoOpen: false,
            close: function() {
              return toggleRegion($region, false);
            }
          }, dialogOpts);
          $region.dialog(dialogOpts).fixDialogButtons();
        }
        if (showRegion) {
          $region.dialog('open');
        } else if ($region.dialog('isOpen')) {
          $region.dialog('close');
        }
      }
      if (showRegion) {
        $firstFocusableEl = $region.find('*').andSelf().filter(':focusable').first();
        if ($firstFocusableEl.length) {
          $firstFocusableEl.focus();
        }
      }
      return $allElementsControllingRegion.each(updateTextToState(showRegion ? 'Shown' : 'Hidden'));
    };
    return $(document).on('click change', '.element_toggler[aria-controls]', function(event) {
      var $parent, $region, $this, force;

      $this = $(this);
      if ($this.is('input[type="checkbox"]')) {
        if (event.type === 'click') {
          return;
        }
        force = $this.prop('checked');
      }
      if (event.type === 'click') {
        event.preventDefault();
      }
      $parent = $this.closest('.user_content');
      if (!$parent.length) {
        $parent = $(document.body);
      }
      $region = $parent.find("#" + ($this.attr('aria-controls').replace(/\s/g, ', #')));
      if ($region.length) {
        return toggleRegion($region, force);
      }
    });
  });

}).call(this);
