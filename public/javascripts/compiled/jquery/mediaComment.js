(function() {
  define(['i18n!media_comments', 'underscore', 'vendor/jquery.ba-tinypubsub', 'vendor/mediaelement-and-player', 'jquery'], function(I18n, _, pubsub, mejs, $) {
    var VIDEO_HEIGHT, VIDEO_WIDTH, browserSupportsVideoInAudioTag, createMediaTag, getSourcesAndTracks, isIE9, isMobileDevice, mediaCommentActions;

    isIE9 = function() {
      return $("body").hasClass("ie9");
    };
    isMobileDevice = function() {
      var agent;

      agent = navigator.userAgent.toLowerCase();
      return agent.match(/ip(hone|od|ad)/i) || agent.match(/android/i);
    };
    browserSupportsVideoInAudioTag = function() {
      return isMobileDevice();
    };
    VIDEO_WIDTH = 550;
    VIDEO_HEIGHT = 448;
    $.extend(mejs.MediaElementDefaults, {
      pluginPath: '/images/mediaelement/',
      defaultVideoWidth: VIDEO_WIDTH,
      defaultVideoHeight: VIDEO_HEIGHT
    });
    $.extend(mejs.MepDefaults, {
      mode: isIE9() ? 'shim' : 'auto_plugin',
      success: function(mediaElement, domObject) {
        if (mediaElement.pluginType === 'flash') {
          return mediaElement.play();
        }
      }
    });
    mejs.MepDefaults.features.push('googleanalytics');
    getSourcesAndTracks = function(id) {
      var dfd;

      dfd = new $.Deferred;
      $.getJSON("/media_objects/" + id + "/info", function(data) {
        var sources, tracks, types;

        sources = _.map(data.media_sources, function(source) {
          return "<source type='" + source.content_type + "' src='" + source.url + "' />";
        });
        tracks = _.map(data.media_tracks, function(track) {
          var languageName;

          languageName = mejs.language.codes[track.locale] || track.locale;
          return "<track kind='" + track.kind + "' label='" + languageName + "' src='" + track.url + "' srclang='" + track.locale + "' />";
        });
        types = _.map(data.media_sources, function(source) {
          return source.content_type;
        });
        return dfd.resolve({
          sources: sources,
          tracks: tracks,
          types: types,
          can_add_captions: data.can_add_captions
        });
      });
      return dfd;
    };
    createMediaTag = function(options) {
      var height, mediaType, sourcesAndTracks, st_tags, tag_type, width;

      sourcesAndTracks = options.sourcesAndTracks, mediaType = options.mediaType, height = options.height, width = options.width;
      tag_type = mediaType === 'video' ? 'video' : 'audio';
      if (mediaType === 'audio' && sourcesAndTracks.types[0].match(/^video\//) && !browserSupportsVideoInAudioTag()) {
        tag_type = 'video';
        options.mediaPlayerOptions.isVideo = false;
        options.mediaPlayerOptions.videoHeight = 30;
        height = 30;
      }
      st_tags = sourcesAndTracks.sources.concat(sourcesAndTracks.tracks).join('');
      return $("<" + tag_type + " " + (mediaType === 'video' ? "width='" + width + "' height='" + height + "'" : '') + " controls>" + st_tags + "</" + tag_type + ">");
    };
    mediaCommentActions = {
      create: function(mediaType, callback, onClose, defaultTitle) {
        var initOpts,
          _this = this;

        $("#media_recorder_container").removeAttr('id');
        this.attr('id', 'media_recorder_container');
        pubsub.unsubscribe('media_comment_created');
        pubsub.subscribe('media_comment_created', function(data) {
          return callback.call(void 0, data.id, data.mediaType);
        });
        initOpts = {
          modal: false,
          defaultTitle: defaultTitle
        };
        if ($.isFunction(onClose)) {
          initOpts.close = onClose.bind(this);
        }
        return $.mediaComment.init(mediaType, initOpts);
      },
      show_inline: function(id, mediaType, downloadUrl) {
        var $holder, detailsUrl, onError, onSuccess, showInline;

        if (mediaType == null) {
          mediaType = 'video';
        }
        $holder = $(this).closest('.instructure_file_link_holder').andSelf().first();
        $holder.text(I18n.t('loading', 'Loading media...'));
        showInline = function(id) {
          var height, width;

          width = Math.min($holder.closest("div,p,table").width() || VIDEO_WIDTH, VIDEO_WIDTH);
          height = Math.round(width / 336 * 240);
          return getSourcesAndTracks(id).done(function(sourcesAndTracks) {
            var $mediaTag, mediaPlayerOptions, player;

            if (sourcesAndTracks.sources.length) {
              mediaPlayerOptions = {
                can_add_captions: sourcesAndTracks.can_add_captions,
                mediaCommendId: id,
                googleAnalyticsTitle: id
              };
              $mediaTag = createMediaTag({
                sourcesAndTracks: sourcesAndTracks,
                mediaPlayerOptions: mediaPlayerOptions,
                mediaType: mediaType,
                height: height,
                width: width
              });
              $mediaTag.appendTo($holder.html(''));
              player = new MediaElementPlayer($mediaTag, mediaPlayerOptions);
              return $mediaTag.data('mediaelementplayer', player);
            } else {
              return $holder.text(I18n.t('media_still_converting', 'Media is currently being converted, please try again in a little bit.'));
            }
          });
        };
        if (id === 'maybe') {
          detailsUrl = downloadUrl.replace(/\/download.*/, "");
          onError = function() {
            return $holder.text(I18n.t('messages.file_failed_to_load', "This media file failed to load"));
          };
          onSuccess = function(data) {
            var _ref;

            if (((_ref = data.attachment) != null ? _ref.media_entry_id : void 0) !== 'maybe') {
              $holder.text('');
              return showInline(data.attachment.media_entry_id);
            } else {
              return onError();
            }
          };
          return $.ajaxJSON(detailsUrl, 'GET', {}, onSuccess, onError);
        } else {
          return showInline(id);
        }
      },
      show: function(id, mediaType) {
        var $dialog, $this, dialog, height, spaceNeededForControls, width;

        $this = $(this);
        if (dialog = $this.data('media_comment_dialog')) {
          return dialog.dialog('open');
        } else {
          spaceNeededForControls = 35;
          mediaType = mediaType || 'video';
          height = mediaType === 'video' ? 426 : 180;
          width = mediaType === 'video' ? VIDEO_WIDTH : 400;
          $dialog = $('<div style="overflow: hidden; padding: 0;" />');
          if (mediaType === 'audio') {
            $dialog.css('padding-top', '120px');
          }
          $dialog.dialog({
            title: I18n.t('titles.play_comment', "Play Media Comment"),
            width: width,
            height: height,
            modal: false,
            resizable: false,
            close: function() {
              return $this.data('mediaelementplayer').pause();
            }
          });
          return $dialog.disableWhileLoading(getSourcesAndTracks(id).done(function(sourcesAndTracks) {
            var $mediaTag, mediaPlayerOptions;

            if (sourcesAndTracks.sources.length) {
              mediaPlayerOptions = {
                can_add_captions: sourcesAndTracks.can_add_captions,
                mediaCommendId: id,
                googleAnalyticsTitle: id
              };
              $mediaTag = createMediaTag({
                sourcesAndTracks: sourcesAndTracks,
                mediaPlayerOptions: mediaPlayerOptions,
                mediaType: mediaType,
                height: height - spaceNeededForControls,
                width: width
              });
              $mediaTag.appendTo($dialog.html(''));
              return $this.data({
                mediaelementplayer: new MediaElementPlayer($mediaTag, mediaPlayerOptions),
                media_comment_dialog: $dialog
              });
            } else {
              return $dialog.text(I18n.t('media_still_converting', 'Media is currently being converted, please try again in a little bit.'));
            }
          }));
        }
      }
    };
    return $.fn.mediaComment = function(command) {
      if (!INST.kalturaSettings) {
        return console.log('Kaltura has not been enabled for this account');
      }
      mediaCommentActions[command].apply(this, Array.prototype.slice.call(arguments, 1));
      return this;
    };
  });

}).call(this);
