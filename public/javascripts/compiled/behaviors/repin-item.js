(function() {
  define(['jquery', 'compiled/fn/preventDefault', 'vendor/jquery.ba-tinypubsub', 'compiled/views/KollectionItems/KollectionItemSaveView', 'compiled/models/KollectionItem', 'jst/KollectionItems/modalSaveTemplate', 'jst/_avatar'], function($, preventDefault, _arg, KollectionItemSaveView, KollectionItem, modalSaveTemplate) {
    var publish;

    publish = _arg.publish;
    return $(document).delegate("[data-repin-item]", 'click', preventDefault(function() {
      var $dialog, itemId, kollectionItem, kollectionItemSaveView;

      itemId = $(this).data("repinItem");
      kollectionItem = new KollectionItem({
        link_url: "/api/v1/collections/items/" + itemId
      });
      $dialog = $(modalSaveTemplate(ENV.current_user)).dialog({
        width: 700,
        resizable: false,
        modal: false,
        title: 'Pin To Canvas Network'
      });
      kollectionItemSaveView = new KollectionItemSaveView({
        model: kollectionItem,
        el: $dialog.find('#kollectionItemSaveViewContainer')
      });
      return kollectionItem.on('create sync', function() {
        return $dialog.dialog('close');
      });
    }));
  });

}).call(this);
