(function() {
  define(['use!vendor/backbone', 'underscore', 'jquery'], function(Backbone, _, $) {
    Backbone.syncWithoutMultipart = Backbone.sync;
    Backbone.syncWithMultipart = function(method, model, options) {
      var $form, $iframe, callback, dfd, httpMethod, iframeId, toForm, _ref;

      iframeId = _.uniqueId('file_upload_iframe_');
      $iframe = $("<iframe id='" + iframeId + "' name='" + iframeId + "' ></iframe>").hide();
      dfd = new $.Deferred();
      httpMethod = {
        create: 'POST',
        update: 'PUT',
        "delete": 'DELETE',
        read: 'GET'
      }[method];
      toForm = function(object, nested, asArray) {
        var inputs;

        inputs = _.map(object, function(attr, key) {
          var $el, $orig;

          if (nested) {
            key = "" + nested + "[" + (asArray ? '' : key) + "]";
          }
          if (_.isElement(attr)) {
            $orig = $(attr);
            $orig.after($orig.clone(true));
            return attr;
          } else if (!_.isEmpty(attr) && (_.isArray(attr) || typeof attr === 'object')) {
            return toForm(attr, key, _.isArray(attr));
          } else if (!("" + key).match(/^_/) && (attr != null) && typeof attr !== 'object' && typeof attr !== 'function') {
            $el = $("<input/>", {
              name: key,
              value: attr
            });
            return $el[0];
          }
        });
        return _.flatten(inputs);
      };
      $form = $("<form enctype='multipart/form-data' target='" + iframeId + "' action='" + ((_ref = options.url) != null ? _ref : model.url()) + "' method='POST'>\n</form>").hide();
      if (options.proxyAttachment) {
        $form.prepend("<input type='hidden' name='_method' value='" + httpMethod + "' />\n<input type='hidden' name='authenticity_token' value='" + ENV.AUTHENTICITY_TOKEN + "' />");
      }
      _.each(toForm(model.toJSON()), function(el) {
        if (!el) {
          return;
        }
        if (el.name === 'file') {
          return $form.append(el);
        } else {
          return $form.prepend(el);
        }
      });
      $(document.body).prepend($iframe, $form);
      callback = function() {
        var iframeBody, response, _ref1;

        iframeBody = ($iframe[0].contentDocument || $iframe[0].contentWindow.document).body;
        response = $.parseJSON($(iframeBody).text());
        if (!response) {
          return;
        }
        response = (_ref1 = response.objects) != null ? _ref1 : response;
        if (iframeBody.className === "error") {
          if (typeof options.error === "function") {
            options.error(response);
          }
          dfd.reject(response);
        } else {
          if (typeof options.success === "function") {
            options.success(response);
          }
          dfd.resolve(response);
        }
        $iframe.remove();
        return $form.remove();
      };
      $iframe[0].onreadystatechange = function() {
        if (this.readyState === 'complete') {
          return callback();
        }
      };
      $iframe[0].onload = callback;
      $form[0].submit();
      return dfd;
    };
    return Backbone.sync = function(method, model, options) {
      if (options != null ? options.multipart : void 0) {
        return Backbone.syncWithMultipart.apply(this, arguments);
      } else {
        return Backbone.syncWithoutMultipart.apply(this, arguments);
      }
    };
  });

}).call(this);
