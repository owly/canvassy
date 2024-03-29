(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jquery', 'jst/assignments/PeerReviewsSelector', 'compiled/jquery/toggleAccessibly'], function(Backbone, _, $, template, toggleAccessibly) {
    var PeerReviewsSelector, _ref;

    return PeerReviewsSelector = (function(_super) {
      var AUTO_PEER_REVIEWS, AUTO_PEER_REVIEWS_OPTIONS, MANUAL_PEER_REVIEWS, PEER_REVIEWS, PEER_REVIEWS_ASSIGN_AT, PEER_REVIEWS_DETAILS;

      __extends(PeerReviewsSelector, _super);

      function PeerReviewsSelector() {
        this.toJSON = __bind(this.toJSON, this);
        this.afterRender = __bind(this.afterRender, this);
        this.handleAutomaticPeerReviewsChange = __bind(this.handleAutomaticPeerReviewsChange, this);
        this.handlePeerReviewsChange = __bind(this.handlePeerReviewsChange, this);        _ref = PeerReviewsSelector.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PeerReviewsSelector.prototype.template = template;

      PEER_REVIEWS_ASSIGN_AT = '#assignment_peer_reviews_assign_at';

      PEER_REVIEWS = '#assignment_peer_reviews';

      MANUAL_PEER_REVIEWS = '#assignment_manual_peer_reviews';

      AUTO_PEER_REVIEWS = '#assignment_automatic_peer_reviews';

      PEER_REVIEWS_DETAILS = '#peer_reviews_details';

      AUTO_PEER_REVIEWS_OPTIONS = '#automatic_peer_reviews_options';

      PeerReviewsSelector.prototype.events = (function() {
        var events;

        events = {};
        events["change " + PEER_REVIEWS] = 'handlePeerReviewsChange';
        events["change " + MANUAL_PEER_REVIEWS] = 'handleAutomaticPeerReviewsChange';
        events["change " + AUTO_PEER_REVIEWS] = 'handleAutomaticPeerReviewsChange';
        return events;
      })();

      PeerReviewsSelector.prototype.els = (function() {
        var els;

        els = {};
        els["" + PEER_REVIEWS_ASSIGN_AT] = '$peerReviewsAssignAt';
        els["" + PEER_REVIEWS] = '$peerReviews';
        els["" + PEER_REVIEWS_DETAILS] = '$peerReviewsDetails';
        els["" + AUTO_PEER_REVIEWS] = '$autoPeerReviews';
        els["" + AUTO_PEER_REVIEWS_OPTIONS] = '$autoPeerReviewsOptions';
        return els;
      })();

      PeerReviewsSelector.optionProperty('parentModel');

      PeerReviewsSelector.optionProperty('nested');

      PeerReviewsSelector.prototype.handlePeerReviewsChange = function() {
        return this.$peerReviewsDetails.toggleAccessibly(this.$peerReviews.prop('checked'));
      };

      PeerReviewsSelector.prototype.handleAutomaticPeerReviewsChange = function() {
        return this.$autoPeerReviewsOptions.toggleAccessibly(this.$autoPeerReviews.filter(':checked').val() === '1');
      };

      PeerReviewsSelector.prototype.afterRender = function() {
        return this.$peerReviewsAssignAt.datetime_field();
      };

      PeerReviewsSelector.prototype.toJSON = function() {
        return {
          peerReviews: this.parentModel.peerReviews(),
          automaticPeerReviews: this.parentModel.automaticPeerReviews(),
          peerReviewCount: this.parentModel.peerReviewCount(),
          peerReviewsAssignAt: this.parentModel.peerReviewsAssignAt(),
          frozenAttributes: this.parentModel.frozenAttributes(),
          nested: this.nested
        };
      };

      return PeerReviewsSelector;

    })(Backbone.View);
  });

}).call(this);
