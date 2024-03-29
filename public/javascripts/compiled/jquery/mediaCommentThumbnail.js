(function() {
  define(['i18n!media_comments', 'underscore', 'str/htmlEscape', 'jquery'], function(I18n, _, htmlEscape, $) {
    var MEDIA_COMMENT_THUMBNAIL_SIZES, createMediaCommentThumbnail;

    MEDIA_COMMENT_THUMBNAIL_SIZES = {
      normal: {
        width: 140,
        height: 100
      },
      small: {
        width: 70,
        height: 50
      }
    };
    createMediaCommentThumbnail = function(elem, size, keepOriginalText) {
      var $a, $holder, $link, $thumbnail, backgroundUrl, dimensions, domain, id, idAttr, _ref;

      if (!INST.kalturaSettings) {
        return console.log('Kaltura has not been enabled for this account');
      }
      $link = $(elem);
      dimensions = (_ref = MEDIA_COMMENT_THUMBNAIL_SIZES[size]) != null ? _ref : MEDIA_COMMENT_THUMBNAIL_SIZES.normal;
      id = $link.data('media_comment_id') || $.trim($link.find(".media_comment_id:first").text()) || ((idAttr = $link.attr('id')) && idAttr.match(/^media_comment_/) && idAttr.substring(14)) || $.trim($link.parent().find(".media_comment_id:first").text());
      if (id) {
        domain = window.location.protocol === 'https:' ? "http://" + INST.kalturaSettings.resource_domain : "https://" + (INST.kalturaSettings.secure_resource_domain || INST.kalturaSettings.domain);
        backgroundUrl = ("" + domain + "/p/" + INST.kalturaSettings.partner_id + "/thumbnail/entry_id/" + id + "/width/") + ("" + dimensions.width + "/height/" + dimensions.height + "/bgcolor/000000/type/2/vid_sec/5");
        $thumbnail = $("<span                        style='background-image: url(" + backgroundUrl + ");'                        class='media_comment_thumbnail media_comment_thumbnail-" + size + "'                      >                        <span class='media_comment_thumbnail_play_button'>                          " + (htmlEscape(I18n.t('click_to_view', 'Click to view'))) + "                        </span>                      </span>");
        $a = $link;
        if (keepOriginalText) {
          $a = $link.clone().empty().removeClass('instructure_file_link');
          $holder = $link.parent(".instructure_file_link_holder");
          if ($holder.length) {
            $a.appendTo($holder);
          } else {
            $link.after($a);
          }
        } else {
          $link.empty();
        }
        return $a.addClass('instructure_inline_media_comment').append($thumbnail).css({
          backgroundImage: '',
          padding: 0
        });
      }
    };
    return $.fn.mediaCommentThumbnail = function(size, keepOriginalText) {
      if (size == null) {
        size = 'normal';
      }
      return this.each(function() {
        return _.defer(createMediaCommentThumbnail, this, size, keepOriginalText);
      });
    };
  });

}).call(this);
