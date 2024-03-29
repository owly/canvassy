(function() {
  define(['underscore', 'Backbone', 'compiled/models/Account', 'compiled/views/accounts/settings/QuotasView', 'compiled/views/accounts/settings/ManualQuotasView'], function(_, Backbone, Account, QuotasView, ManualQuotasView) {
    var account, manualQuotasView, quotasView;

    if (ENV.ACCOUNT) {
      account = new Account(ENV.ACCOUNT);
      account.toJSON = function() {
        return {
          id: this.get('id'),
          account: _.pick(this.attributes, 'default_storage_quota_mb', 'default_user_storage_quota_mb', 'default_group_storage_quota_mb')
        };
      };
      quotasView = new QuotasView({
        model: account
      });
      $('#tab-quotas').append(quotasView.el);
      quotasView.render();
      manualQuotasView = new ManualQuotasView();
      $('#tab-quotas').append(manualQuotasView.el);
      return manualQuotasView.render();
    }
  });

}).call(this);
