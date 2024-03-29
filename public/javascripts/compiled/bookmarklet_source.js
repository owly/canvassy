(function() {
  var canvasDomain, getSelection, pin, reDomainWithSlashes;

  canvasDomain = 'put_canvas_domain_here';

  reDomainWithSlashes = /\/\/\S*\//;

  getSelection = function() {
    var selection;

    selection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text;
    return ("" + selection).replace(/(^\s+|\s+$)/g, "");
  };

  pin = function(urlToPin) {
    var height, left, popupUrl, queryString, screenHeight, top, width, windowFeatures;

    width = 700;
    height = 450;
    left = Math.round((screen.width / 2) - (width / 2));
    screenHeight = screen.height;
    top = screenHeight > height ? Math.round((screenHeight / 2) - (width / 2)) : 0;
    queryString = ["popup=1", "link_url=" + (encodeURIComponent(urlToPin)), "description=" + (encodeURIComponent(getSelection().substr(0, 1000)))].join('&');
    popupUrl = "//" + canvasDomain + "/collection_items/new/?" + queryString;
    windowFeatures = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no";
    return window.open(popupUrl, "popup" + (+(new Date)), windowFeatures);
  };

  pin(window.location);

}).call(this);
