(function() {
  require(['i18n!chat', 'jquery'], function(I18n, $) {
    var embedTinychat, tinychat;

    tinychat = {
      room: ENV.tinychat.room,
      nick: ENV.tinychat.nick,
      colorbk: '0xffffff',
      oper: 'none',
      owner: 'none',
      change: 'none',
      join: 'auto',
      api: 'none',
      key: ENV.tinychat.key
    };
    embedTinychat = function(params, options) {
      var container, context, data, div, element, frame, i, queryString, _ref, _ref1;

      data = [];
      for (i in params) {
        data.push("" + i + "=" + (encodeURIComponent(params[i])));
      }
      queryString = data.join('&');
      frame = document.createElement('iframe');
      context = ENV.context_asset_string.split('_');
      frame.src = "tinychat.html?" + queryString;
      frame.style.width = '100%';
      frame.style.height = '100%';
      frame.style.border = 0;
      frame.frameBorder = 0;
      container = document.createElement('div');
      container.className = 'tinychat_embed';
      container.style.height = '720px';
      container.appendChild(frame);
      if (options == null) {
        options = {};
      }
      if ((_ref = options.height) == null) {
        options.height = '700px';
      }
      if ((_ref1 = options.width) == null) {
        options.width = '600px';
      }
      div = document.createElement('div');
      div.appendChild(container);
      element = document.getElementById('client');
      if (!element) {
        document.write(div.innerHTML);
      } else {
        element.innerHTML = div.innerHTML;
      }
      if (container.style.width === '') {
        container.style.width = options.width;
      }
      if (container.style.height === '') {
        container.style.height = options.height;
      }
      return frame;
    };
    return $(document).ready(function() {
      if (typeof tinychat !== 'undefined') {
        embedTinychat(tinychat);
      }
      return $.screenReaderFlashMessage(I18n.t('notifications.tinychat_inaccessible', 'Warning: This page uses  Tinychat, a third party plugin that is not\
      accessible to screen readers.'), 20000);
    });
  });

}).call(this);
