# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_sls_session',
  :secret      => '8437c8f25d291688a525a2d2e5f1127bfbd7f5978ab3c01d77425113b2cbc1923b1d2ca0f316eece6d4224a171e761ca0ee41955902edcba4982af9e3328d6ca'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
