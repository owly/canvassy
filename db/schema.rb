# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131029044414) do

  create_table "abstract_courses", :force => true do |t|
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",       :limit => 8
    t.integer  "account_id",         :limit => 8
    t.integer  "root_account_id",    :limit => 8
    t.string   "short_name"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "enrollment_term_id", :limit => 8
    t.string   "workflow_state"
    t.text     "stuck_sis_fields"
  end

  add_index "abstract_courses", ["root_account_id", "sis_source_id"], :name => "index_abstract_courses_on_root_account_id_and_sis_source_id"
  add_index "abstract_courses", ["sis_source_id"], :name => "index_abstract_courses_on_sis_source_id"

  create_table "access_tokens", :force => true do |t|
    t.integer  "developer_key_id", :limit => 8
    t.integer  "user_id",          :limit => 8
    t.datetime "last_used_at"
    t.datetime "expires_at"
    t.string   "purpose"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "crypted_token"
    t.string   "token_hint"
    t.text     "scopes"
    t.boolean  "remember_access"
  end

  add_index "access_tokens", ["crypted_token"], :name => "index_access_tokens_on_crypted_token", :unique => true

  create_table "account_authorization_configs", :force => true do |t|
    t.integer  "account_id",              :limit => 8
    t.integer  "auth_port"
    t.string   "auth_host"
    t.string   "auth_base"
    t.string   "auth_username"
    t.string   "auth_crypted_password"
    t.string   "auth_password_salt"
    t.string   "auth_type"
    t.string   "auth_over_tls"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "log_in_url"
    t.string   "log_out_url"
    t.string   "identifier_format"
    t.text     "certificate_fingerprint"
    t.string   "entity_id"
    t.string   "change_password_url"
    t.string   "login_handle_name"
    t.string   "auth_filter"
    t.string   "requested_authn_context"
    t.datetime "last_timeout_failure"
    t.text     "login_attribute"
    t.string   "idp_entity_id"
    t.integer  "position"
  end

  add_index "account_authorization_configs", ["account_id"], :name => "index_account_authorization_configs_on_account_id"

  create_table "account_notifications", :force => true do |t|
    t.string   "subject"
    t.string   "icon",                                  :default => "warning"
    t.text     "message"
    t.integer  "account_id",               :limit => 8
    t.integer  "user_id",                  :limit => 8
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "required_account_service"
    t.integer  "months_in_display_cycle"
  end

  add_index "account_notifications", ["account_id", "end_at", "start_at"], :name => "index_account_notifications_by_account_and_timespan"

  create_table "account_reports", :force => true do |t|
    t.integer  "user_id",        :limit => 8
    t.text     "message"
    t.integer  "account_id",     :limit => 8
    t.integer  "attachment_id",  :limit => 8
    t.string   "workflow_state",              :default => "created"
    t.string   "report_type"
    t.integer  "progress"
    t.date     "start_at"
    t.date     "end_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "parameters"
  end

  create_table "account_users", :force => true do |t|
    t.integer  "account_id",      :limit => 8
    t.integer  "user_id",         :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "membership_type",              :default => "AccountAdmin"
  end

  add_index "account_users", ["account_id"], :name => "index_account_users_on_account_id"
  add_index "account_users", ["user_id"], :name => "index_account_users_on_user_id"

  create_table "accounts", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "workflow_state",                                :default => "active"
    t.datetime "deleted_at"
    t.integer  "parent_account_id",                :limit => 8
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",                     :limit => 8
    t.integer  "current_sis_batch_id",             :limit => 8
    t.integer  "root_account_id",                  :limit => 8
    t.integer  "last_successful_sis_batch_id",     :limit => 8
    t.string   "membership_types"
    t.boolean  "require_authorization_code"
    t.string   "default_time_zone"
    t.string   "external_status",                               :default => "active"
    t.integer  "storage_quota",                    :limit => 8
    t.integer  "default_storage_quota",            :limit => 8
    t.boolean  "enable_user_notes",                             :default => false
    t.string   "allowed_services"
    t.text     "turnitin_pledge"
    t.text     "turnitin_comments"
    t.string   "turnitin_account_id"
    t.string   "turnitin_salt"
    t.string   "turnitin_crypted_secret"
    t.boolean  "show_section_name_as_course_name",              :default => false
    t.boolean  "allow_sis_import",                              :default => false
    t.string   "equella_endpoint"
    t.text     "settings"
    t.string   "uuid"
    t.string   "default_locale"
    t.text     "stuck_sis_fields"
    t.integer  "default_user_storage_quota",       :limit => 8
    t.string   "lti_guid"
    t.integer  "default_group_storage_quota",      :limit => 8
  end

  add_index "accounts", ["name", "parent_account_id"], :name => "index_accounts_on_name_and_parent_account_id"
  add_index "accounts", ["parent_account_id", "root_account_id"], :name => "index_accounts_on_parent_account_id_and_root_account_id"
  add_index "accounts", ["root_account_id", "sis_source_id"], :name => "index_accounts_on_root_account_id_and_sis_source_id"
  add_index "accounts", ["sis_source_id"], :name => "index_accounts_on_sis_source_id"

  create_table "alert_criteria", :force => true do |t|
    t.integer "alert_id",       :limit => 8
    t.string  "criterion_type"
    t.float   "threshold"
  end

  create_table "alerts", :force => true do |t|
    t.integer  "context_id",   :limit => 8
    t.string   "context_type"
    t.text     "recipients"
    t.integer  "repetition"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "appointment_group_contexts", :force => true do |t|
    t.integer  "appointment_group_id", :limit => 8
    t.string   "context_code"
    t.integer  "context_id",           :limit => 8
    t.string   "context_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "appointment_group_contexts", ["appointment_group_id"], :name => "index_appointment_group_contexts_on_appointment_group_id"

  create_table "appointment_group_sub_contexts", :force => true do |t|
    t.integer  "appointment_group_id", :limit => 8
    t.integer  "sub_context_id",       :limit => 8
    t.string   "sub_context_type"
    t.string   "sub_context_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "appointment_group_sub_contexts", ["appointment_group_id"], :name => "index_appointment_group_sub_contexts_on_appointment_group_id"

  create_table "appointment_groups", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "location_name"
    t.string   "location_address"
    t.integer  "context_id",                       :limit => 8
    t.string   "context_type"
    t.string   "context_code"
    t.integer  "sub_context_id",                   :limit => 8
    t.string   "sub_context_type"
    t.string   "sub_context_code"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "start_at"
    t.datetime "end_at"
    t.integer  "participants_per_appointment"
    t.integer  "max_appointments_per_participant"
    t.integer  "min_appointments_per_participant",              :default => 0
    t.string   "participant_visibility"
  end

  add_index "appointment_groups", ["context_id"], :name => "index_appointment_groups_on_context_id"

  create_table "assessment_question_bank_users", :force => true do |t|
    t.integer  "assessment_question_bank_id", :limit => 8
    t.integer  "user_id",                     :limit => 8
    t.string   "permissions"
    t.string   "workflow_state"
    t.datetime "deleted_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "assessment_question_bank_users", ["assessment_question_bank_id"], :name => "assessment_qbu_aqb_id"
  add_index "assessment_question_bank_users", ["user_id"], :name => "assessment_qbu_u_id"

  create_table "assessment_question_banks", :force => true do |t|
    t.integer  "context_id",     :limit => 8
    t.string   "context_type"
    t.text     "title"
    t.string   "workflow_state"
    t.datetime "deleted_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "migration_id"
  end

  add_index "assessment_question_banks", ["context_id", "context_type"], :name => "index_on_aqb_on_context_id_and_context_type"

  create_table "assessment_questions", :force => true do |t|
    t.text     "name"
    t.text     "question_data"
    t.integer  "context_id",                  :limit => 8
    t.string   "context_type"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "assessment_question_bank_id", :limit => 8
    t.datetime "deleted_at"
    t.string   "migration_id"
    t.integer  "position"
  end

  add_index "assessment_questions", ["assessment_question_bank_id", "position"], :name => "question_bank_id_and_position"

  create_table "assessment_requests", :force => true do |t|
    t.integer  "rubric_assessment_id",  :limit => 8
    t.integer  "user_id",               :limit => 8
    t.integer  "asset_id",              :limit => 8
    t.string   "asset_type"
    t.integer  "assessor_asset_id",     :limit => 8
    t.string   "assessor_asset_type"
    t.text     "comments"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uuid"
    t.integer  "rubric_association_id", :limit => 8
    t.integer  "assessor_id",           :limit => 8
  end

  add_index "assessment_requests", ["assessor_asset_id", "assessor_asset_type"], :name => "aa_id_and_aa_type"
  add_index "assessment_requests", ["assessor_id"], :name => "index_assessment_requests_on_assessor_id"
  add_index "assessment_requests", ["asset_id", "asset_type"], :name => "index_assessment_requests_on_asset_id_and_asset_type"
  add_index "assessment_requests", ["rubric_assessment_id"], :name => "index_assessment_requests_on_rubric_assessment_id"
  add_index "assessment_requests", ["rubric_association_id"], :name => "index_assessment_requests_on_rubric_association_id"
  add_index "assessment_requests", ["user_id"], :name => "index_assessment_requests_on_user_id"

  create_table "asset_user_accesses", :force => true do |t|
    t.string   "asset_code"
    t.string   "asset_group_code"
    t.integer  "user_id",             :limit => 8
    t.integer  "context_id",          :limit => 8
    t.string   "context_type"
    t.integer  "count"
    t.integer  "progress"
    t.datetime "last_access"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "asset_category"
    t.float    "view_score"
    t.float    "participate_score"
    t.string   "action_level"
    t.datetime "summarized_at"
    t.float    "interaction_seconds"
    t.text     "display_name"
    t.string   "membership_type"
  end

  add_index "asset_user_accesses", ["context_id", "context_type"], :name => "index_asset_user_accesses_on_context_id_and_context_type"
  add_index "asset_user_accesses", ["user_id", "asset_code"], :name => "index_asset_user_accesses_on_user_id_and_asset_code"

  create_table "assignment_groups", :force => true do |t|
    t.string   "name"
    t.text     "rules"
    t.string   "default_assignment_name"
    t.integer  "position"
    t.string   "assignment_weighting_scheme"
    t.float    "group_weight"
    t.integer  "context_id",                  :limit => 8
    t.string   "context_type"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "cloned_item_id",              :limit => 8
    t.string   "context_code"
    t.string   "migration_id"
  end

  add_index "assignment_groups", ["context_id", "context_type"], :name => "index_assignment_groups_on_context_id_and_context_type"

  create_table "assignment_override_students", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "assignment_id",          :limit => 8
    t.integer  "assignment_override_id", :limit => 8, :null => false
    t.integer  "user_id",                :limit => 8, :null => false
    t.integer  "quiz_id",                :limit => 8
  end

  add_index "assignment_override_students", ["assignment_id", "user_id"], :name => "index_assignment_override_students_on_assignment_id_and_user_id", :unique => true
  add_index "assignment_override_students", ["assignment_override_id"], :name => "index_assignment_override_students_on_assignment_override_id"
  add_index "assignment_override_students", ["quiz_id"], :name => "index_assignment_override_students_on_quiz_id"
  add_index "assignment_override_students", ["user_id"], :name => "index_assignment_override_students_on_user_id"

  create_table "assignment_overrides", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "assignment_id",        :limit => 8
    t.integer  "assignment_version"
    t.string   "set_type"
    t.integer  "set_id",               :limit => 8
    t.string   "title"
    t.string   "workflow_state",                                       :null => false
    t.boolean  "due_at_overridden",                 :default => false, :null => false
    t.datetime "due_at"
    t.boolean  "all_day"
    t.date     "all_day_date"
    t.boolean  "unlock_at_overridden",              :default => false, :null => false
    t.datetime "unlock_at"
    t.boolean  "lock_at_overridden",                :default => false, :null => false
    t.datetime "lock_at"
    t.integer  "quiz_id",              :limit => 8
    t.integer  "quiz_version"
  end

  add_index "assignment_overrides", ["assignment_id", "set_type", "set_id"], :name => "index_assignment_overrides_on_assignment_and_set", :unique => true
  add_index "assignment_overrides", ["quiz_id"], :name => "index_assignment_overrides_on_quiz_id"
  add_index "assignment_overrides", ["set_type", "set_id"], :name => "index_assignment_overrides_on_set_type_and_set_id"

  create_table "assignments", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "due_at"
    t.datetime "unlock_at"
    t.datetime "lock_at"
    t.float    "points_possible"
    t.float    "min_score"
    t.float    "max_score"
    t.float    "mastery_score"
    t.string   "grading_type"
    t.string   "submission_types"
    t.string   "before_quiz_submission_types"
    t.string   "workflow_state"
    t.integer  "context_id",                        :limit => 8
    t.string   "context_type"
    t.integer  "assignment_group_id",               :limit => 8
    t.integer  "grading_scheme_id",                 :limit => 8
    t.integer  "grading_standard_id",               :limit => 8
    t.string   "location"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "group_category"
    t.integer  "submissions_downloads",                          :default => 0
    t.integer  "peer_review_count",                              :default => 0
    t.datetime "peer_reviews_due_at"
    t.boolean  "peer_reviews_assigned",                          :default => false
    t.boolean  "peer_reviews",                                   :default => false
    t.boolean  "automatic_peer_reviews",                         :default => false
    t.boolean  "all_day"
    t.date     "all_day_date"
    t.boolean  "could_be_locked"
    t.integer  "cloned_item_id",                    :limit => 8
    t.string   "context_code"
    t.integer  "position"
    t.string   "migration_id"
    t.boolean  "grade_group_students_individually"
    t.boolean  "anonymous_peer_reviews"
    t.string   "time_zone_edited"
    t.boolean  "turnitin_enabled"
    t.string   "allowed_extensions"
    t.integer  "needs_grading_count",                            :default => 0
    t.text     "turnitin_settings"
    t.boolean  "muted",                                          :default => false
    t.integer  "group_category_id",                 :limit => 8
    t.boolean  "freeze_on_copy"
    t.boolean  "copied"
  end

  add_index "assignments", ["assignment_group_id"], :name => "index_assignments_on_assignment_group_id"
  add_index "assignments", ["context_code"], :name => "index_assignments_on_context_code"
  add_index "assignments", ["context_id", "context_type"], :name => "index_assignments_on_context_id_and_context_type"
  add_index "assignments", ["due_at", "context_code"], :name => "index_assignments_on_due_at_and_context_code"
  add_index "assignments", ["grading_standard_id"], :name => "index_assignments_on_grading_standard_id"

  create_table "attachment_associations", :force => true do |t|
    t.integer "attachment_id", :limit => 8
    t.integer "context_id",    :limit => 8
    t.string  "context_type"
  end

  add_index "attachment_associations", ["attachment_id"], :name => "index_attachment_associations_on_attachment_id"
  add_index "attachment_associations", ["context_id", "context_type"], :name => "attachment_associations_a_id_a_type"

  create_table "attachments", :force => true do |t|
    t.integer  "context_id",              :limit => 8
    t.string   "context_type"
    t.integer  "size",                    :limit => 8
    t.integer  "folder_id",               :limit => 8
    t.string   "content_type"
    t.text     "filename"
    t.string   "uuid"
    t.text     "display_name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "scribd_mime_type_id",     :limit => 8
    t.string   "scribd_user"
    t.datetime "submitted_to_scribd_at"
    t.integer  "scribd_account_id",       :limit => 8
    t.string   "workflow_state"
    t.text     "scribd_doc"
    t.integer  "user_id",                 :limit => 8
    t.string   "local_filename"
    t.boolean  "locked",                               :default => false
    t.string   "file_state"
    t.datetime "deleted_at"
    t.integer  "position"
    t.datetime "lock_at"
    t.datetime "unlock_at"
    t.datetime "last_lock_at"
    t.datetime "last_unlock_at"
    t.integer  "scribd_attempts"
    t.boolean  "could_be_locked"
    t.integer  "root_attachment_id",      :limit => 8
    t.integer  "cloned_item_id",          :limit => 8
    t.string   "migration_id"
    t.string   "namespace"
    t.string   "media_entry_id"
    t.string   "md5"
    t.string   "cached_scribd_thumbnail"
    t.string   "encoding"
    t.boolean  "need_notify"
    t.string   "upload_error_message"
    t.datetime "last_inline_view"
  end

  add_index "attachments", ["cloned_item_id"], :name => "index_attachments_on_cloned_item_id"
  add_index "attachments", ["context_id", "context_type"], :name => "index_attachments_on_context_id_and_context_type"
  add_index "attachments", ["folder_id", "file_state", "position"], :name => "index_attachments_on_folder_id_and_file_state_and_position"
  add_index "attachments", ["folder_id", "file_state", nil], :name => "index_attachments_on_folder_id_and_file_state_and_display_name"
  add_index "attachments", ["folder_id"], :name => "index_attachments_on_folder_id"
  add_index "attachments", ["md5", "namespace"], :name => "index_attachments_on_md5_and_namespace"
  add_index "attachments", ["need_notify"], :name => "index_attachments_on_need_notify"
  add_index "attachments", ["root_attachment_id"], :name => "index_attachments_on_root_attachment_id_not_null"
  add_index "attachments", ["scribd_attempts", "scribd_mime_type_id", "workflow_state"], :name => "scribd_attempts_smt_workflow_state"
  add_index "attachments", ["scribd_mime_type_id"], :name => "index_attachments_on_scribd_mime_type_id"
  add_index "attachments", ["user_id"], :name => "index_attachments_on_user_id"
  add_index "attachments", ["workflow_state", "updated_at"], :name => "index_attachments_on_workflow_state_and_updated_at"

  create_table "authorization_codes", :force => true do |t|
    t.string   "authorization_code"
    t.string   "authorization_service"
    t.integer  "account_id",            :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "associated_account_id", :limit => 8
  end

  add_index "authorization_codes", ["account_id"], :name => "index_authorization_codes_on_account_id"

  create_table "calendar_events", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "location_name"
    t.string   "location_address"
    t.datetime "start_at"
    t.datetime "end_at"
    t.integer  "context_id",                            :limit => 8
    t.string   "context_type"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",                               :limit => 8
    t.boolean  "all_day"
    t.date     "all_day_date"
    t.datetime "deleted_at"
    t.integer  "cloned_item_id",                        :limit => 8
    t.string   "context_code"
    t.string   "migration_id"
    t.string   "time_zone_edited"
    t.integer  "parent_calendar_event_id",              :limit => 8
    t.string   "effective_context_code"
    t.integer  "participants_per_appointment"
    t.boolean  "override_participants_per_appointment"
  end

  add_index "calendar_events", ["context_code"], :name => "index_calendar_events_on_context_code"
  add_index "calendar_events", ["context_id", "context_type"], :name => "index_calendar_events_on_context_id_and_context_type"
  add_index "calendar_events", ["effective_context_code"], :name => "index_calendar_events_on_effective_context_code"
  add_index "calendar_events", ["parent_calendar_event_id"], :name => "index_calendar_events_on_parent_calendar_event_id"
  add_index "calendar_events", ["user_id"], :name => "index_calendar_events_on_user_id"

  create_table "cloned_items", :force => true do |t|
    t.integer  "original_item_id",   :limit => 8
    t.string   "original_item_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "collaborations", :force => true do |t|
    t.string   "collaboration_type"
    t.string   "document_id"
    t.integer  "user_id",            :limit => 8
    t.integer  "context_id",         :limit => 8
    t.string   "context_type"
    t.string   "url"
    t.string   "uuid"
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
    t.string   "title"
    t.string   "workflow_state",                  :default => "active"
    t.datetime "deleted_at"
    t.string   "context_code"
    t.string   "type"
  end

  add_index "collaborations", ["context_id", "context_type"], :name => "index_collaborations_on_context_id_and_context_type"
  add_index "collaborations", ["user_id"], :name => "index_collaborations_on_user_id"

  create_table "collaborators", :force => true do |t|
    t.integer  "user_id",                    :limit => 8
    t.integer  "collaboration_id",           :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "authorized_service_user_id"
    t.integer  "group_id",                   :limit => 8
  end

  add_index "collaborators", ["collaboration_id"], :name => "index_collaborators_on_collaboration_id"
  add_index "collaborators", ["group_id"], :name => "index_collaborators_on_group_id"
  add_index "collaborators", ["user_id"], :name => "index_collaborators_on_user_id"

  create_table "collection_item_datas", :force => true do |t|
    t.string   "item_type"
    t.text     "link_url"
    t.integer  "root_item_id",        :limit => 8
    t.integer  "post_count",                       :default => 0
    t.integer  "upvote_count",                     :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "image_pending"
    t.integer  "image_attachment_id", :limit => 8
    t.text     "image_url"
    t.text     "html_preview"
    t.string   "title"
    t.text     "description"
  end

  create_table "collection_item_upvotes", :force => true do |t|
    t.integer  "collection_item_data_id", :limit => 8
    t.integer  "user_id",                 :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "collection_item_upvotes", ["collection_item_data_id", "user_id"], :name => "index_collection_item_upvotes_join", :unique => true

  create_table "collection_items", :force => true do |t|
    t.integer  "collection_item_data_id", :limit => 8
    t.integer  "collection_id",           :limit => 8
    t.string   "workflow_state"
    t.text     "user_comment"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",                 :limit => 8
  end

  add_index "collection_items", ["collection_id", "workflow_state"], :name => "index_collection_items_on_collection_id_and_workflow_state"
  add_index "collection_items", ["collection_item_data_id", "workflow_state"], :name => "index_collection_items_on_data_id"

  create_table "collections", :force => true do |t|
    t.string   "name"
    t.string   "visibility",                   :default => "private"
    t.string   "context_type"
    t.integer  "context_id",      :limit => 8
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "followers_count",              :default => 0
    t.integer  "items_count",                  :default => 0
  end

  add_index "collections", ["context_id", "context_type", "workflow_state", "visibility"], :name => "index_collections_for_finding"

  create_table "communication_channels", :force => true do |t|
    t.string   "path"
    t.string   "path_type",                               :default => "email"
    t.integer  "position"
    t.integer  "user_id",                    :limit => 8
    t.integer  "pseudonym_id",               :limit => 8
    t.integer  "bounce_count",                            :default => 0
    t.string   "workflow_state"
    t.string   "confirmation_code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "build_pseudonym_on_confirm"
  end

  add_index "communication_channels", ["pseudonym_id", "position"], :name => "index_communication_channels_on_pseudonym_id_and_position"
  add_index "communication_channels", ["user_id", "position"], :name => "index_communication_channels_on_user_id_and_position"
  add_index "communication_channels", [nil, "path_type"], :name => "index_communication_channels_on_path_and_path_type"
  add_index "communication_channels", [nil], :name => "index_trgm_communication_channels_path"

  create_table "content_exports", :force => true do |t|
    t.integer  "user_id",              :limit => 8
    t.integer  "course_id",            :limit => 8
    t.integer  "attachment_id",        :limit => 8
    t.string   "export_type"
    t.text     "settings"
    t.float    "progress"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "content_migration_id", :limit => 8
  end

  add_index "content_exports", ["course_id"], :name => "index_content_exports_on_course_id"

  create_table "content_migrations", :force => true do |t|
    t.integer  "context_id",             :limit => 8
    t.integer  "user_id",                :limit => 8
    t.string   "workflow_state"
    t.string   "migration_settings",     :limit => 512000
    t.datetime "started_at"
    t.datetime "finished_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "progress"
    t.string   "context_type"
    t.integer  "error_count"
    t.text     "error_data"
    t.integer  "attachment_id",          :limit => 8
    t.integer  "overview_attachment_id", :limit => 8
    t.integer  "exported_attachment_id", :limit => 8
    t.integer  "source_course_id",       :limit => 8
    t.string   "migration_type"
  end

  create_table "content_participation_counts", :force => true do |t|
    t.string   "content_type"
    t.string   "context_type"
    t.integer  "context_id",   :limit => 8
    t.integer  "user_id",      :limit => 8
    t.integer  "unread_count",              :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "content_participation_counts", ["context_id", "context_type", "user_id", "content_type"], :name => "index_content_participation_counts_uniquely", :unique => true

  create_table "content_participations", :force => true do |t|
    t.string  "content_type"
    t.integer "content_id",     :limit => 8
    t.integer "user_id",        :limit => 8
    t.string  "workflow_state"
  end

  add_index "content_participations", ["content_id", "content_type", "user_id"], :name => "index_content_participations_uniquely", :unique => true

  create_table "content_tags", :force => true do |t|
    t.integer  "content_id",            :limit => 8
    t.string   "content_type"
    t.integer  "context_id",            :limit => 8
    t.string   "context_type"
    t.text     "title"
    t.string   "tag"
    t.text     "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "comments"
    t.string   "tag_type",                           :default => "default"
    t.integer  "context_module_id",     :limit => 8
    t.integer  "position"
    t.integer  "indent"
    t.string   "migration_id"
    t.integer  "learning_outcome_id",   :limit => 8
    t.string   "context_code"
    t.float    "mastery_score"
    t.integer  "rubric_association_id", :limit => 8
    t.string   "workflow_state",                     :default => "active"
    t.integer  "cloned_item_id",        :limit => 8
    t.integer  "associated_asset_id",   :limit => 8
    t.string   "associated_asset_type"
    t.boolean  "new_tab"
  end

  add_index "content_tags", ["associated_asset_id", "associated_asset_type"], :name => "index_content_tags_on_associated_asset"
  add_index "content_tags", ["content_id", "content_type"], :name => "index_content_tags_on_content_id_and_content_type"
  add_index "content_tags", ["context_id", "context_type"], :name => "index_content_tags_on_context_id_and_context_type"
  add_index "content_tags", ["context_module_id"], :name => "index_content_tags_on_context_module_id"
  add_index "content_tags", ["learning_outcome_id"], :name => "index_content_tags_on_learning_outcome_id"

  create_table "context_external_tools", :force => true do |t|
    t.integer  "context_id",              :limit => 8
    t.string   "context_type"
    t.string   "domain"
    t.string   "url",                     :limit => 4096
    t.string   "shared_secret"
    t.string   "consumer_key"
    t.string   "name"
    t.text     "description"
    t.text     "settings"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "migration_id"
    t.boolean  "has_user_navigation"
    t.boolean  "has_course_navigation"
    t.boolean  "has_account_navigation"
    t.boolean  "has_resource_selection"
    t.boolean  "has_editor_button"
    t.integer  "cloned_item_id",          :limit => 8
    t.string   "tool_id"
    t.boolean  "has_homework_submission"
  end

  add_index "context_external_tools", ["context_id", "context_type", "has_account_navigation"], :name => "external_tools_account_navigation"
  add_index "context_external_tools", ["context_id", "context_type", "has_course_navigation"], :name => "external_tools_course_navigation"
  add_index "context_external_tools", ["context_id", "context_type", "has_editor_button"], :name => "external_tools_editor_button"
  add_index "context_external_tools", ["context_id", "context_type", "has_resource_selection"], :name => "external_tools_resource_selection"
  add_index "context_external_tools", ["context_id", "context_type", "has_user_navigation"], :name => "external_tools_user_navigation"
  add_index "context_external_tools", ["tool_id"], :name => "index_context_external_tools_on_tool_id"

  create_table "context_message_participants", :force => true do |t|
    t.integer  "user_id",            :limit => 8
    t.integer  "context_message_id", :limit => 8
    t.string   "participation_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "context_message_participants", ["context_message_id"], :name => "index_context_message_participants_on_context_message_id"
  add_index "context_message_participants", ["user_id"], :name => "index_context_message_participants_on_user_id"

  create_table "context_module_progressions", :force => true do |t|
    t.integer  "context_module_id", :limit => 8
    t.integer  "user_id",           :limit => 8
    t.text     "requirements_met"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "collapsed"
    t.integer  "current_position"
    t.datetime "completed_at"
  end

  add_index "context_module_progressions", ["context_module_id"], :name => "index_context_module_progressions_on_context_module_id"
  add_index "context_module_progressions", ["user_id", "context_module_id"], :name => "u_id_module_id"

  create_table "context_modules", :force => true do |t|
    t.integer  "context_id",                  :limit => 8
    t.string   "context_type"
    t.text     "name"
    t.integer  "position"
    t.text     "prerequisites"
    t.text     "completion_requirements"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "downstream_modules"
    t.string   "workflow_state",                           :default => "active"
    t.datetime "deleted_at"
    t.datetime "unlock_at"
    t.datetime "start_at"
    t.datetime "end_at"
    t.string   "migration_id"
    t.boolean  "require_sequential_progress"
    t.integer  "cloned_item_id",              :limit => 8
  end

  add_index "context_modules", ["context_id", "context_type"], :name => "index_context_modules_on_context_id_and_context_type"

  create_table "conversation_batches", :force => true do |t|
    t.string   "workflow_state"
    t.integer  "user_id",                      :limit => 8
    t.text     "recipient_ids"
    t.integer  "root_conversation_message_id", :limit => 8
    t.text     "conversation_message_ids"
    t.text     "tags"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "conversation_batches", ["user_id", "workflow_state"], :name => "index_conversation_batches_on_user_id_and_workflow_state"

  create_table "conversation_message_participants", :force => true do |t|
    t.integer "conversation_message_id",     :limit => 8
    t.integer "conversation_participant_id", :limit => 8
    t.text    "tags"
    t.integer "user_id",                     :limit => 8
  end

  add_index "conversation_message_participants", ["conversation_message_id"], :name => "index_conversation_message_participants_on_message_id"
  add_index "conversation_message_participants", ["conversation_participant_id", "conversation_message_id"], :name => "index_cmp_on_cpi_and_cmi"
  add_index "conversation_message_participants", ["user_id", "conversation_message_id"], :name => "index_conversation_message_participants_on_uid_and_message_id", :unique => true

  create_table "conversation_messages", :force => true do |t|
    t.integer  "conversation_id",       :limit => 8
    t.integer  "author_id",             :limit => 8
    t.datetime "created_at"
    t.boolean  "generated"
    t.text     "body"
    t.text     "forwarded_message_ids"
    t.string   "media_comment_id"
    t.string   "media_comment_type"
    t.integer  "context_id",            :limit => 8
    t.string   "context_type"
    t.integer  "asset_id",              :limit => 8
    t.string   "asset_type"
    t.text     "attachment_ids"
    t.boolean  "has_attachments"
    t.boolean  "has_media_objects"
  end

  add_index "conversation_messages", ["asset_id", "asset_type"], :name => "index_conversation_messages_on_asset_id_and_asset_type"
  add_index "conversation_messages", ["author_id"], :name => "index_conversation_messages_on_author_id"
  add_index "conversation_messages", ["conversation_id", "created_at"], :name => "index_conversation_messages_on_conversation_id_and_created_at"

  create_table "conversation_participants", :force => true do |t|
    t.integer  "conversation_id",          :limit => 8
    t.integer  "user_id",                  :limit => 8
    t.datetime "last_message_at"
    t.boolean  "subscribed",                            :default => true
    t.string   "workflow_state"
    t.datetime "last_authored_at"
    t.boolean  "has_attachments",                       :default => false, :null => false
    t.boolean  "has_media_objects",                     :default => false, :null => false
    t.integer  "message_count",                         :default => 0
    t.string   "label"
    t.text     "tags"
    t.datetime "visible_last_authored_at"
    t.text     "root_account_ids"
    t.string   "private_hash"
  end

  add_index "conversation_participants", ["conversation_id", "user_id"], :name => "index_conversation_participants_on_conversation_id_and_user_id", :unique => true
  add_index "conversation_participants", ["private_hash", "user_id"], :name => "index_conversation_participants_on_private_hash_and_user_id", :unique => true
  add_index "conversation_participants", ["user_id", "last_message_at"], :name => "index_conversation_participants_on_user_id_and_last_message_at"

  create_table "conversations", :force => true do |t|
    t.string  "private_hash"
    t.boolean "has_attachments",   :default => false, :null => false
    t.boolean "has_media_objects", :default => false, :null => false
    t.text    "tags"
    t.text    "root_account_ids"
  end

  add_index "conversations", ["private_hash"], :name => "index_conversations_on_private_hash", :unique => true

  create_table "course_account_associations", :force => true do |t|
    t.integer  "course_id",         :limit => 8
    t.integer  "account_id",        :limit => 8
    t.integer  "depth"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "course_section_id", :limit => 8
  end

  add_index "course_account_associations", ["account_id", "depth"], :name => "index_course_account_associations_on_account_id_and_depth_id"
  add_index "course_account_associations", ["course_id", "course_section_id", "account_id"], :name => "index_caa_on_course_id_and_section_id_and_account_id", :unique => true

  create_table "course_imports", :force => true do |t|
    t.integer  "course_id",        :limit => 8
    t.integer  "source_id",        :limit => 8
    t.text     "added_item_codes"
    t.text     "log"
    t.string   "workflow_state"
    t.string   "import_type"
    t.integer  "progress"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "parameters"
  end

  create_table "course_sections", :force => true do |t|
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",                          :limit => 8
    t.integer  "course_id",                             :limit => 8
    t.integer  "root_account_id",                       :limit => 8
    t.integer  "enrollment_term_id",                    :limit => 8
    t.string   "section_code"
    t.string   "name"
    t.boolean  "default_section"
    t.boolean  "accepting_enrollments"
    t.boolean  "can_manually_enroll"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "workflow_state",                                     :default => "active"
    t.boolean  "restrict_enrollments_to_section_dates"
    t.integer  "nonxlist_course_id",                    :limit => 8
    t.text     "stuck_sis_fields"
  end

  add_index "course_sections", ["course_id"], :name => "index_course_sections_on_course_id"
  add_index "course_sections", ["nonxlist_course_id"], :name => "index_course_sections_on_nonxlist_course"
  add_index "course_sections", ["root_account_id", "sis_source_id"], :name => "index_course_sections_on_root_account_id_and_sis_source_id"

  create_table "courses", :force => true do |t|
    t.string   "name"
    t.integer  "account_id",                           :limit => 8
    t.string   "group_weighting_scheme"
    t.integer  "old_account_id",                       :limit => 8
    t.string   "workflow_state"
    t.string   "uuid"
    t.datetime "start_at"
    t.datetime "conclude_at"
    t.integer  "grading_standard_id",                  :limit => 8
    t.boolean  "is_public"
    t.boolean  "allow_student_wiki_edits"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "show_public_context_messages"
    t.text     "syllabus_body"
    t.boolean  "allow_student_forum_attachments",                   :default => false
    t.string   "default_wiki_editing_roles"
    t.integer  "wiki_id",                              :limit => 8
    t.boolean  "allow_student_organized_groups",                    :default => true
    t.string   "course_code"
    t.string   "default_view",                                      :default => "feed"
    t.integer  "abstract_course_id",                   :limit => 8
    t.integer  "root_account_id",                      :limit => 8
    t.integer  "enrollment_term_id",                   :limit => 8
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",                         :limit => 8
    t.boolean  "show_all_discussion_entries"
    t.boolean  "open_enrollment"
    t.integer  "storage_quota",                        :limit => 8
    t.text     "tab_configuration"
    t.boolean  "allow_wiki_comments"
    t.text     "turnitin_comments"
    t.boolean  "self_enrollment"
    t.string   "license"
    t.boolean  "indexed"
    t.boolean  "restrict_enrollments_to_course_dates"
    t.integer  "template_course_id",                   :limit => 8
    t.string   "locale"
    t.text     "settings"
    t.integer  "replacement_course_id",                :limit => 8
    t.text     "stuck_sis_fields"
    t.text     "public_description"
    t.string   "self_enrollment_code"
    t.integer  "self_enrollment_limit"
  end

  add_index "courses", ["account_id"], :name => "index_courses_on_account_id"
  add_index "courses", ["enrollment_term_id"], :name => "index_courses_on_enrollment_term_id"
  add_index "courses", ["root_account_id"], :name => "index_courses_on_root_account_id"
  add_index "courses", ["self_enrollment_code"], :name => "index_courses_on_self_enrollment_code", :unique => true
  add_index "courses", ["sis_source_id"], :name => "index_courses_on_sis_source_id"
  add_index "courses", ["template_course_id"], :name => "index_courses_on_template_course_id"
  add_index "courses", ["uuid"], :name => "index_courses_on_uuid"

  create_table "crocodoc_documents", :force => true do |t|
    t.string  "uuid"
    t.string  "process_state"
    t.integer "attachment_id", :limit => 8
  end

  add_index "crocodoc_documents", ["attachment_id"], :name => "index_crocodoc_documents_on_attachment_id"
  add_index "crocodoc_documents", ["process_state"], :name => "index_crocodoc_documents_on_process_state"
  add_index "crocodoc_documents", ["uuid"], :name => "index_crocodoc_documents_on_uuid"

  create_table "delayed_messages", :force => true do |t|
    t.integer  "notification_id",          :limit => 8
    t.integer  "notification_policy_id",   :limit => 8
    t.integer  "context_id",               :limit => 8
    t.string   "context_type"
    t.integer  "communication_channel_id", :limit => 8
    t.string   "frequency"
    t.string   "workflow_state"
    t.datetime "batched_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "send_at"
    t.string   "link"
    t.text     "name_of_topic"
    t.text     "summary"
    t.integer  "root_account_id",          :limit => 8
  end

  add_index "delayed_messages", ["communication_channel_id", "root_account_id", "workflow_state", "send_at"], :name => "ccid_raid_ws_sa"
  add_index "delayed_messages", ["send_at"], :name => "by_sent_at"
  add_index "delayed_messages", ["workflow_state", "send_at"], :name => "ws_sa"

  create_table "delayed_notifications", :force => true do |t|
    t.integer  "notification_id",    :limit => 8
    t.integer  "asset_id",           :limit => 8
    t.string   "asset_type"
    t.text     "recipient_keys"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "asset_context_type"
    t.integer  "asset_context_id",   :limit => 8
  end

  create_table "developer_keys", :force => true do |t|
    t.string   "api_key"
    t.string   "email"
    t.string   "user_name"
    t.integer  "account_id",   :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",      :limit => 8
    t.string   "name"
    t.string   "redirect_uri"
    t.string   "tool_id"
    t.string   "icon_url"
  end

  add_index "developer_keys", ["tool_id"], :name => "index_developer_keys_on_tool_id", :unique => true

  create_table "discussion_entries", :force => true do |t|
    t.text     "message"
    t.integer  "discussion_topic_id", :limit => 8
    t.integer  "user_id",             :limit => 8
    t.integer  "parent_id",           :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "attachment_id",       :limit => 8
    t.string   "workflow_state",                   :default => "active"
    t.datetime "deleted_at"
    t.string   "migration_id"
    t.integer  "editor_id",           :limit => 8
    t.integer  "root_entry_id",       :limit => 8
    t.integer  "depth"
  end

  add_index "discussion_entries", ["discussion_topic_id", "updated_at", "created_at"], :name => "index_discussion_entries_for_topic"
  add_index "discussion_entries", ["parent_id"], :name => "index_discussion_entries_on_parent_id"
  add_index "discussion_entries", ["root_entry_id", "workflow_state", "created_at"], :name => "index_discussion_entries_root_entry"
  add_index "discussion_entries", ["user_id"], :name => "index_discussion_entries_on_user_id"

  create_table "discussion_entry_participants", :force => true do |t|
    t.integer "discussion_entry_id", :limit => 8
    t.integer "user_id",             :limit => 8
    t.string  "workflow_state"
    t.boolean "forced_read_state"
  end

  add_index "discussion_entry_participants", ["discussion_entry_id", "user_id"], :name => "index_entry_participant_on_entry_id_and_user_id", :unique => true

  create_table "discussion_topic_materialized_views", :id => false, :force => true do |t|
    t.integer  "discussion_topic_id",   :limit => 8,        :null => false
    t.string   "json_structure",        :limit => 10485760
    t.string   "participants_array",    :limit => 10485760
    t.string   "entry_ids_array",       :limit => 10485760
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "generation_started_at"
  end

  create_table "discussion_topic_participants", :force => true do |t|
    t.integer "discussion_topic_id", :limit => 8
    t.integer "user_id",             :limit => 8
    t.integer "unread_entry_count",               :default => 0
    t.string  "workflow_state"
    t.boolean "subscribed"
  end

  add_index "discussion_topic_participants", ["discussion_topic_id", "user_id"], :name => "index_topic_participant_on_topic_id_and_user_id", :unique => true

  create_table "discussion_topics", :force => true do |t|
    t.string   "title"
    t.text     "message"
    t.integer  "context_id",                :limit => 8
    t.string   "context_type"
    t.string   "type"
    t.integer  "user_id",                   :limit => 8
    t.string   "workflow_state"
    t.datetime "last_reply_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "delayed_post_at"
    t.datetime "posted_at"
    t.integer  "assignment_id",             :limit => 8
    t.integer  "attachment_id",             :limit => 8
    t.datetime "deleted_at"
    t.integer  "root_topic_id",             :limit => 8
    t.boolean  "could_be_locked"
    t.integer  "cloned_item_id",            :limit => 8
    t.string   "context_code"
    t.integer  "position"
    t.string   "migration_id"
    t.integer  "old_assignment_id",         :limit => 8
    t.datetime "subtopics_refreshed_at"
    t.integer  "last_assignment_id",        :limit => 8
    t.integer  "external_feed_id",          :limit => 8
    t.integer  "editor_id",                 :limit => 8
    t.boolean  "podcast_enabled"
    t.boolean  "podcast_has_student_posts"
    t.boolean  "require_initial_post"
    t.string   "discussion_type"
    t.datetime "lock_at"
    t.boolean  "pinned"
  end

  add_index "discussion_topics", ["assignment_id"], :name => "index_discussion_topics_on_assignment_id"
  add_index "discussion_topics", ["context_id", "context_type", "root_topic_id"], :name => "index_discussion_topics_unique_subtopic_per_context", :unique => true
  add_index "discussion_topics", ["context_id", "last_reply_at"], :name => "index_discussion_topics_on_context_and_last_reply_at"
  add_index "discussion_topics", ["context_id", "position"], :name => "index_discussion_topics_on_context_id_and_position"
  add_index "discussion_topics", ["id", "type"], :name => "index_discussion_topics_on_id_and_type"
  add_index "discussion_topics", ["root_topic_id"], :name => "index_discussion_topics_on_root_topic_id"
  add_index "discussion_topics", ["user_id"], :name => "index_discussion_topics_on_user_id"
  add_index "discussion_topics", ["workflow_state"], :name => "index_discussion_topics_on_workflow_state"

  create_table "enrollment_dates_overrides", :force => true do |t|
    t.integer  "enrollment_term_id", :limit => 8
    t.string   "enrollment_type"
    t.integer  "context_id",         :limit => 8
    t.string   "context_type"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "enrollment_terms", :force => true do |t|
    t.integer  "root_account_id",               :limit => 8
    t.string   "name"
    t.string   "term_code"
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",                  :limit => 8
    t.datetime "start_at"
    t.datetime "end_at"
    t.boolean  "accepting_enrollments"
    t.boolean  "can_manually_enroll"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "workflow_state",                             :default => "active"
    t.boolean  "ignore_term_date_restrictions"
    t.text     "stuck_sis_fields"
  end

  add_index "enrollment_terms", ["root_account_id", "sis_source_id"], :name => "index_enrollment_terms_on_root_account_id_and_sis_source_id"
  add_index "enrollment_terms", ["sis_source_id"], :name => "index_enrollment_terms_on_sis_source_id"

  create_table "enrollments", :force => true do |t|
    t.integer  "user_id",                            :limit => 8
    t.integer  "course_id",                          :limit => 8
    t.string   "type"
    t.string   "uuid"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "associated_user_id",                 :limit => 8
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",                       :limit => 8
    t.datetime "start_at"
    t.datetime "end_at"
    t.integer  "course_section_id",                  :limit => 8
    t.integer  "root_account_id",                    :limit => 8
    t.float    "computed_final_score"
    t.datetime "completed_at"
    t.boolean  "self_enrolled"
    t.float    "computed_current_score"
    t.string   "grade_publishing_status",                         :default => "unpublished"
    t.datetime "last_publish_attempt_at"
    t.text     "stuck_sis_fields"
    t.text     "grade_publishing_message"
    t.boolean  "limit_privileges_to_course_section"
    t.string   "role_name"
    t.datetime "last_activity_at"
  end

  add_index "enrollments", ["associated_user_id"], :name => "index_enrollments_on_associated_user_id"
  add_index "enrollments", ["course_id", "workflow_state"], :name => "index_enrollments_on_course_id_and_workflow_state"
  add_index "enrollments", ["course_section_id"], :name => "index_enrollments_on_course_section_id"
  add_index "enrollments", ["id", "type"], :name => "index_enrollments_on_id_and_type"
  add_index "enrollments", ["root_account_id"], :name => "index_enrollments_on_root_account_id"
  add_index "enrollments", ["user_id"], :name => "index_enrollments_on_user_id"
  add_index "enrollments", ["uuid"], :name => "index_enrollments_on_uuid"
  add_index "enrollments", ["workflow_state"], :name => "index_enrollments_on_workflow_state"

  create_table "eportfolio_categories", :force => true do |t|
    t.integer  "eportfolio_id", :limit => 8
    t.string   "name"
    t.integer  "position"
    t.string   "slug"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "eportfolio_categories", ["eportfolio_id"], :name => "index_eportfolio_categories_on_eportfolio_id"

  create_table "eportfolio_entries", :force => true do |t|
    t.integer  "eportfolio_id",          :limit => 8
    t.integer  "eportfolio_category_id", :limit => 8
    t.integer  "position"
    t.string   "name"
    t.integer  "artifact_type"
    t.integer  "attachment_id",          :limit => 8
    t.boolean  "allow_comments"
    t.boolean  "show_comments"
    t.string   "slug"
    t.string   "url"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "eportfolio_entries", ["eportfolio_category_id"], :name => "index_eportfolio_entries_on_eportfolio_category_id"
  add_index "eportfolio_entries", ["eportfolio_id"], :name => "index_eportfolio_entries_on_eportfolio_id"

  create_table "eportfolios", :force => true do |t|
    t.integer  "user_id",        :limit => 8
    t.string   "name"
    t.boolean  "public"
    t.integer  "context_id",     :limit => 8
    t.string   "context_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uuid"
    t.string   "workflow_state",              :default => "active"
    t.datetime "deleted_at"
  end

  add_index "eportfolios", ["user_id"], :name => "index_eportfolios_on_user_id"

  create_table "error_reports", :force => true do |t|
    t.text     "backtrace"
    t.text     "url"
    t.text     "message"
    t.text     "comments"
    t.integer  "user_id",            :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
    t.boolean  "during_tests",                    :default => false
    t.text     "user_agent"
    t.string   "request_method"
    t.text     "http_env"
    t.string   "subject"
    t.string   "request_context_id"
    t.integer  "account_id",         :limit => 8
    t.integer  "zendesk_ticket_id",  :limit => 8
    t.text     "data"
    t.string   "category"
  end

  add_index "error_reports", ["category"], :name => "index_error_reports_on_category"
  add_index "error_reports", ["created_at"], :name => "error_reports_created_at"
  add_index "error_reports", ["zendesk_ticket_id"], :name => "index_error_reports_on_zendesk_ticket_id"

  create_table "event_stream_failures", :force => true do |t|
    t.string   "operation",    :null => false
    t.string   "event_stream", :null => false
    t.string   "record_id",    :null => false
    t.text     "payload",      :null => false
    t.text     "exception"
    t.text     "backtrace"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "external_feed_entries", :force => true do |t|
    t.integer  "user_id",          :limit => 8
    t.integer  "external_feed_id", :limit => 8
    t.string   "title"
    t.text     "message"
    t.string   "source_name"
    t.string   "source_url"
    t.datetime "posted_at"
    t.datetime "start_at"
    t.datetime "end_at"
    t.string   "workflow_state"
    t.string   "url",              :limit => 4096
    t.string   "author_name"
    t.string   "author_email"
    t.string   "author_url"
    t.integer  "asset_id",         :limit => 8
    t.string   "asset_type"
    t.string   "uuid"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "external_feed_entries", ["asset_id", "asset_type"], :name => "index_external_feed_entries_on_asset_id_and_asset_type"
  add_index "external_feed_entries", ["external_feed_id", "uuid"], :name => "external_feed_id_uuid"

  create_table "external_feeds", :force => true do |t|
    t.integer  "user_id",              :limit => 8
    t.integer  "context_id",           :limit => 8
    t.string   "context_type"
    t.integer  "consecutive_failures"
    t.integer  "failures"
    t.datetime "refresh_at"
    t.string   "title"
    t.string   "feed_type"
    t.string   "feed_purpose"
    t.string   "url"
    t.string   "header_match"
    t.string   "body_match"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "verbosity"
    t.string   "migration_id"
  end

  add_index "external_feeds", ["context_id", "context_type"], :name => "index_external_feeds_on_context_id_and_context_type"

  create_table "favorites", :force => true do |t|
    t.integer  "user_id",      :limit => 8
    t.integer  "context_id",   :limit => 8
    t.string   "context_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "favorites", ["user_id", "context_id", "context_type"], :name => "index_favorites_unique_user_object", :unique => true
  add_index "favorites", ["user_id"], :name => "index_favorites_on_user_id"

  create_table "folders", :force => true do |t|
    t.string   "name"
    t.text     "full_name"
    t.integer  "context_id",       :limit => 8
    t.string   "context_type"
    t.integer  "parent_folder_id", :limit => 8
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "deleted_at"
    t.boolean  "locked"
    t.datetime "lock_at"
    t.datetime "unlock_at"
    t.datetime "last_lock_at"
    t.datetime "last_unlock_at"
    t.integer  "cloned_item_id",   :limit => 8
    t.integer  "position"
  end

  add_index "folders", ["cloned_item_id"], :name => "index_folders_on_cloned_item_id"
  add_index "folders", ["context_id", "context_type"], :name => "index_folders_on_context_id_and_context_type"
  add_index "folders", ["context_id", "context_type"], :name => "index_folders_on_context_id_and_context_type_for_root_folders", :unique => true
  add_index "folders", ["parent_folder_id", "workflow_state", nil], :name => "index_folders_on_parent_folder_id_and_workflow_state_and_name"
  add_index "folders", ["parent_folder_id"], :name => "index_folders_on_parent_folder_id"

  create_table "gradebook_uploads", :force => true do |t|
    t.integer  "context_id",   :limit => 8
    t.string   "context_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "gradebook_uploads", ["context_id", "context_type"], :name => "index_gradebook_uploads_on_context_id_and_context_type"

  create_table "grading_standards", :force => true do |t|
    t.string   "title"
    t.text     "data"
    t.integer  "context_id",     :limit => 8
    t.string   "context_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",        :limit => 8
    t.integer  "usage_count"
    t.string   "context_code"
    t.string   "workflow_state"
    t.string   "migration_id"
    t.integer  "version"
  end

  add_index "grading_standards", ["context_code"], :name => "index_grading_standards_on_context_code"
  add_index "grading_standards", ["context_id", "context_type"], :name => "index_grading_standards_on_context_id_and_context_type"

  create_table "group_categories", :force => true do |t|
    t.integer  "context_id",   :limit => 8
    t.string   "context_type"
    t.string   "name"
    t.string   "role"
    t.datetime "deleted_at"
    t.string   "self_signup"
    t.integer  "group_limit"
  end

  add_index "group_categories", ["context_id", "context_type"], :name => "index_group_categories_on_context"
  add_index "group_categories", ["role"], :name => "index_group_categories_on_role"

  create_table "group_memberships", :force => true do |t|
    t.integer  "group_id",       :limit => 8
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",        :limit => 8
    t.string   "uuid"
    t.integer  "sis_batch_id",   :limit => 8
    t.boolean  "moderator"
  end

  add_index "group_memberships", ["group_id"], :name => "index_group_memberships_on_group_id"
  add_index "group_memberships", ["user_id"], :name => "index_group_memberships_on_user_id"
  add_index "group_memberships", ["workflow_state"], :name => "index_group_memberships_on_workflow_state"

  create_table "groups", :force => true do |t|
    t.string   "name"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "context_id",                   :limit => 8
    t.string   "context_type"
    t.string   "category"
    t.integer  "max_membership"
    t.string   "hashtag"
    t.boolean  "show_public_context_messages"
    t.boolean  "is_public"
    t.integer  "account_id",                   :limit => 8
    t.string   "default_wiki_editing_roles"
    t.integer  "wiki_id",                      :limit => 8
    t.datetime "deleted_at"
    t.string   "join_level"
    t.string   "default_view",                              :default => "feed"
    t.string   "migration_id"
    t.integer  "storage_quota",                :limit => 8
    t.string   "uuid"
    t.integer  "root_account_id",              :limit => 8
    t.string   "sis_source_id"
    t.integer  "sis_batch_id",                 :limit => 8
    t.text     "stuck_sis_fields"
    t.integer  "group_category_id",            :limit => 8
    t.text     "description"
    t.integer  "avatar_attachment_id",         :limit => 8
  end

  add_index "groups", ["account_id"], :name => "index_groups_on_account_id"
  add_index "groups", ["context_id", "context_type"], :name => "index_groups_on_context_id_and_context_type"
  add_index "groups", ["group_category_id"], :name => "index_groups_on_group_category_id"
  add_index "groups", ["wiki_id"], :name => "index_groups_on_wiki_id"

  create_table "ignores", :force => true do |t|
    t.string   "asset_type",                                 :null => false
    t.integer  "asset_id",   :limit => 8,                    :null => false
    t.integer  "user_id",    :limit => 8,                    :null => false
    t.string   "purpose",                                    :null => false
    t.boolean  "permanent",               :default => false, :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ignores", ["asset_id", "asset_type", "user_id", "purpose"], :name => "index_ignores_on_asset_and_user_id_and_purpose", :unique => true

  create_table "inbox_items", :force => true do |t|
    t.integer  "user_id",        :limit => 8
    t.integer  "sender_id",      :limit => 8
    t.integer  "asset_id",       :limit => 8
    t.string   "subject"
    t.string   "body_teaser"
    t.string   "asset_type"
    t.string   "workflow_state"
    t.boolean  "sender"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "context_code"
  end

  add_index "inbox_items", ["asset_type", "asset_id"], :name => "index_inbox_items_on_asset_type_and_asset_id"
  add_index "inbox_items", ["sender"], :name => "index_inbox_items_on_sender"
  add_index "inbox_items", ["sender_id"], :name => "index_inbox_items_on_sender_id"
  add_index "inbox_items", ["user_id"], :name => "index_inbox_items_on_user_id"
  add_index "inbox_items", ["workflow_state"], :name => "index_inbox_items_on_workflow_state"

  create_table "learning_outcome_groups", :force => true do |t|
    t.integer  "context_id",                     :limit => 8
    t.string   "context_type"
    t.string   "title"
    t.integer  "learning_outcome_group_id",      :limit => 8
    t.integer  "root_learning_outcome_group_id", :limit => 8
    t.string   "workflow_state"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "migration_id"
    t.string   "vendor_guid"
    t.string   "low_grade"
    t.string   "high_grade"
  end

  add_index "learning_outcome_groups", ["context_id", "context_type"], :name => "index_learning_outcome_groups_on_context_id_and_context_type"
  add_index "learning_outcome_groups", ["learning_outcome_group_id"], :name => "index_learning_outcome_groups_on_learning_outcome_group_id"
  add_index "learning_outcome_groups", ["vendor_guid"], :name => "index_learning_outcome_groups_on_vendor_guid"

  create_table "learning_outcome_results", :force => true do |t|
    t.integer  "context_id",            :limit => 8
    t.string   "context_type"
    t.string   "context_code"
    t.integer  "association_id",        :limit => 8
    t.string   "association_type"
    t.integer  "content_tag_id",        :limit => 8
    t.integer  "learning_outcome_id",   :limit => 8
    t.boolean  "mastery"
    t.integer  "user_id",               :limit => 8
    t.float    "score"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "attempt"
    t.float    "possible"
    t.string   "comments"
    t.float    "original_score"
    t.float    "original_possible"
    t.boolean  "original_mastery"
    t.integer  "artifact_id",           :limit => 8
    t.string   "artifact_type"
    t.datetime "assessed_at"
    t.string   "title"
    t.float    "percent"
    t.integer  "associated_asset_id",   :limit => 8
    t.string   "associated_asset_type"
  end

  add_index "learning_outcome_results", ["user_id", "content_tag_id", "associated_asset_id", "associated_asset_type"], :name => "index_learning_outcome_results_association", :unique => true

  create_table "learning_outcomes", :force => true do |t|
    t.integer  "context_id",        :limit => 8
    t.string   "context_type"
    t.string   "short_description"
    t.string   "context_code"
    t.text     "description"
    t.text     "data"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "migration_id"
    t.string   "vendor_guid"
    t.string   "low_grade"
    t.string   "high_grade"
  end

  add_index "learning_outcomes", ["context_id", "context_type"], :name => "index_learning_outcomes_on_context_id_and_context_type"
  add_index "learning_outcomes", ["vendor_guid"], :name => "index_learning_outcomes_on_vendor_guid"

  create_table "media_objects", :force => true do |t|
    t.integer  "user_id",            :limit => 8
    t.integer  "context_id",         :limit => 8
    t.string   "context_type"
    t.string   "workflow_state"
    t.string   "user_type"
    t.string   "title"
    t.string   "user_entered_title"
    t.string   "media_id"
    t.string   "media_type"
    t.integer  "duration"
    t.integer  "max_size"
    t.integer  "root_account_id",    :limit => 8
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "attachment_id",      :limit => 8
    t.integer  "total_size"
    t.string   "old_media_id"
  end

  add_index "media_objects", ["attachment_id"], :name => "index_media_objects_on_attachment_id"
  add_index "media_objects", ["context_id", "context_type"], :name => "index_media_objects_on_context_id_and_context_type"
  add_index "media_objects", ["media_id"], :name => "index_media_objects_on_media_id"
  add_index "media_objects", ["old_media_id"], :name => "index_media_objects_on_old_media_id"

  create_table "media_tracks", :force => true do |t|
    t.integer  "user_id",         :limit => 8
    t.integer  "media_object_id", :limit => 8
    t.string   "kind",                         :default => "subtitles"
    t.string   "locale",                       :default => "en"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "media_tracks", ["media_object_id", "locale"], :name => "media_object_id_locale"

  create_table "messages", :force => true do |t|
    t.string   "to"
    t.string   "from"
    t.string   "cc"
    t.string   "bcc"
    t.text     "subject"
    t.text     "body"
    t.integer  "delay_for",                             :default => 120
    t.datetime "dispatch_at"
    t.datetime "sent_at"
    t.string   "workflow_state"
    t.text     "transmission_errors"
    t.boolean  "is_bounced"
    t.integer  "notification_id",          :limit => 8
    t.integer  "communication_channel_id", :limit => 8
    t.integer  "context_id",               :limit => 8
    t.string   "context_type"
    t.integer  "asset_context_id",         :limit => 8
    t.string   "asset_context_type"
    t.integer  "user_id",                  :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "notification_name"
    t.string   "url"
    t.string   "path_type"
    t.text     "from_name"
    t.string   "asset_context_code"
    t.string   "notification_category"
    t.boolean  "to_email"
    t.text     "html_body"
    t.integer  "root_account_id",          :limit => 8
  end

  add_index "messages", ["communication_channel_id"], :name => "index_messages_on_communication_channel_id"
  add_index "messages", ["context_id", "context_type", "notification_name", "to", "user_id"], :name => "existing_undispatched_message"
  add_index "messages", ["notification_id"], :name => "index_messages_on_notification_id"
  add_index "messages", ["root_account_id"], :name => "index_messages_on_root_account_id"
  add_index "messages", ["user_id", "to_email", "dispatch_at"], :name => "index_messages_user_id_dispatch_at_to_email"

  create_table "migration_issues", :force => true do |t|
    t.integer  "content_migration_id", :limit => 8
    t.text     "description"
    t.string   "workflow_state"
    t.string   "fix_issue_html_url"
    t.string   "issue_type"
    t.integer  "error_report_id",      :limit => 8
    t.text     "error_message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "migration_issues", ["content_migration_id"], :name => "index_migration_issues_on_content_migration_id"

  create_table "notification_policies", :force => true do |t|
    t.integer  "notification_id",          :limit => 8
    t.integer  "communication_channel_id", :limit => 8
    t.boolean  "broadcast",                             :default => true
    t.string   "frequency"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "notification_policies", ["communication_channel_id"], :name => "index_notification_policies_on_communication_channel_id"
  add_index "notification_policies", ["notification_id"], :name => "index_notification_policies_on_notification_id"

  create_table "notifications", :force => true do |t|
    t.string   "workflow_state"
    t.string   "name"
    t.string   "subject"
    t.string   "category"
    t.integer  "delay_for",      :default => 120
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "main_link"
  end

  add_index "notifications", ["name"], :name => "index_notifications_unique_on_name", :unique => true

  create_table "oauth_requests", :force => true do |t|
    t.string   "token"
    t.string   "secret"
    t.string   "user_secret"
    t.string   "return_url",              :limit => 4096
    t.string   "workflow_state"
    t.integer  "user_id",                 :limit => 8
    t.string   "original_host_with_port"
    t.string   "service"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "page_comments", :force => true do |t|
    t.text     "message"
    t.integer  "page_id",    :limit => 8
    t.string   "page_type"
    t.integer  "user_id",    :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "page_comments", ["page_id", "page_type"], :name => "index_page_comments_on_page_id_and_page_type"
  add_index "page_comments", ["user_id"], :name => "index_page_comments_on_user_id"

  create_table "page_views", :id => false, :force => true do |t|
    t.string   "request_id",                        :null => false
    t.string   "session_id"
    t.integer  "user_id",              :limit => 8
    t.text     "url"
    t.integer  "context_id",           :limit => 8
    t.string   "context_type"
    t.integer  "asset_id",             :limit => 8
    t.string   "asset_type"
    t.string   "controller"
    t.string   "action"
    t.boolean  "contributed"
    t.float    "interaction_seconds"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "developer_key_id",     :limit => 8
    t.boolean  "user_request"
    t.float    "render_time"
    t.text     "user_agent"
    t.integer  "asset_user_access_id", :limit => 8
    t.boolean  "participated"
    t.boolean  "summarized"
    t.integer  "account_id",           :limit => 8
    t.integer  "real_user_id",         :limit => 8
    t.string   "http_method"
  end

  add_index "page_views", ["account_id", "created_at"], :name => "index_page_views_on_account_id_and_created_at"
  add_index "page_views", ["asset_user_access_id"], :name => "index_page_views_asset_user_access_id"
  add_index "page_views", ["context_type", "context_id"], :name => "index_page_views_on_context_type_and_context_id"
  add_index "page_views", ["summarized", "created_at"], :name => "index_page_views_summarized_created_at"
  add_index "page_views", ["user_id", "created_at"], :name => "index_page_views_on_user_id_and_created_at"

  create_table "plugin_settings", :force => true do |t|
    t.string   "name",       :default => "", :null => false
    t.text     "settings"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "disabled"
  end

  add_index "plugin_settings", ["name"], :name => "index_plugin_settings_on_name"

  create_table "profiles", :force => true do |t|
    t.integer "root_account_id", :limit => 8
    t.string  "context_type"
    t.integer "context_id",      :limit => 8
    t.string  "title"
    t.string  "path"
    t.text    "description"
    t.text    "data"
    t.string  "visibility"
    t.integer "position"
  end

  add_index "profiles", ["context_type", "context_id"], :name => "index_profiles_on_context_type_and_context_id", :unique => true
  add_index "profiles", ["root_account_id", "path"], :name => "index_profiles_on_root_account_id_and_path", :unique => true

  create_table "progresses", :force => true do |t|
    t.integer  "context_id",     :limit => 8
    t.string   "context_type"
    t.integer  "user_id",        :limit => 8
    t.string   "tag",                         :null => false
    t.float    "completion"
    t.string   "delayed_job_id"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "message"
  end

  add_index "progresses", ["context_id", "context_type"], :name => "index_progresses_on_context_id_and_context_type"
  add_index "progresses", ["user_id"], :name => "index_progresses_on_user_id"

  create_table "pseudonyms", :force => true do |t|
    t.integer  "user_id",                      :limit => 8
    t.integer  "account_id",                   :limit => 8
    t.string   "workflow_state"
    t.string   "type"
    t.string   "unique_id",                                                 :null => false
    t.string   "crypted_password",                                          :null => false
    t.string   "password_salt",                                             :null => false
    t.string   "persistence_token",                                         :null => false
    t.string   "single_access_token",                                       :null => false
    t.string   "perishable_token",                                          :null => false
    t.integer  "login_count",                               :default => 0,  :null => false
    t.integer  "failed_login_count",                        :default => 0,  :null => false
    t.datetime "last_request_at"
    t.datetime "last_login_at"
    t.datetime "current_login_at"
    t.string   "last_login_ip"
    t.string   "current_login_ip"
    t.string   "reset_password_token",                      :default => "", :null => false
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "password_auto_generated"
    t.datetime "deleted_at"
    t.integer  "sis_batch_id",                 :limit => 8
    t.string   "sis_user_id"
    t.string   "sis_ssha"
    t.integer  "communication_channel_id",     :limit => 8
    t.string   "login_path_to_ignore"
    t.integer  "sis_communication_channel_id", :limit => 8
    t.text     "stuck_sis_fields"
  end

  add_index "pseudonyms", ["persistence_token"], :name => "index_pseudonyms_on_persistence_token"
  add_index "pseudonyms", ["single_access_token"], :name => "index_pseudonyms_on_single_access_token"
  add_index "pseudonyms", ["sis_communication_channel_id"], :name => "index_pseudonyms_on_sis_communication_channel_id"
  add_index "pseudonyms", ["sis_user_id"], :name => "index_pseudonyms_on_sis_user_id"
  add_index "pseudonyms", ["user_id"], :name => "index_pseudonyms_on_user_id"
  add_index "pseudonyms", [nil], :name => "index_pseudonyms_on_unique_id"
  add_index "pseudonyms", [nil], :name => "index_trgm_pseudonyms_sis_user_id"

  create_table "quiz_groups", :force => true do |t|
    t.integer  "quiz_id",                     :limit => 8
    t.string   "name"
    t.integer  "pick_count"
    t.float    "question_points"
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "migration_id"
    t.integer  "assessment_question_bank_id", :limit => 8
  end

  add_index "quiz_groups", ["quiz_id"], :name => "index_quiz_groups_on_quiz_id"

  create_table "quiz_questions", :force => true do |t|
    t.integer  "quiz_id",                     :limit => 8
    t.integer  "quiz_group_id",               :limit => 8
    t.integer  "assessment_question_id",      :limit => 8
    t.text     "question_data"
    t.integer  "assessment_question_version"
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "migration_id"
  end

  add_index "quiz_questions", ["assessment_question_id"], :name => "index_quiz_questions_on_assessment_question_id"
  add_index "quiz_questions", ["quiz_group_id"], :name => "quiz_questions_quiz_group_id"
  add_index "quiz_questions", ["quiz_id"], :name => "index_quiz_questions_on_quiz_id"

  create_table "quiz_statistics", :force => true do |t|
    t.integer  "quiz_id",               :limit => 8
    t.boolean  "includes_all_versions"
    t.boolean  "anonymous"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "report_type"
  end

  add_index "quiz_statistics", ["quiz_id", "report_type"], :name => "index_quiz_statistics_on_quiz_id_and_report_type"

  create_table "quiz_submission_snapshots", :force => true do |t|
    t.integer  "quiz_submission_id", :limit => 8
    t.integer  "attempt"
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "quiz_submission_snapshots", ["quiz_submission_id"], :name => "index_quiz_submission_snapshots_on_quiz_submission_id"

  create_table "quiz_submissions", :force => true do |t|
    t.integer  "quiz_id",              :limit => 8
    t.integer  "quiz_version"
    t.integer  "user_id",              :limit => 8
    t.text     "submission_data"
    t.integer  "submission_id",        :limit => 8
    t.float    "score"
    t.float    "kept_score"
    t.text     "quiz_data"
    t.datetime "started_at"
    t.datetime "end_at"
    t.datetime "finished_at"
    t.integer  "attempt"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "fudge_points",                      :default => 0
    t.float    "quiz_points_possible"
    t.integer  "extra_attempts"
    t.string   "temporary_user_code"
    t.integer  "extra_time"
    t.boolean  "manually_unlocked"
    t.boolean  "manually_scored"
    t.string   "validation_token"
  end

  add_index "quiz_submissions", ["quiz_id", "user_id"], :name => "index_quiz_submissions_on_quiz_id_and_user_id", :unique => true
  add_index "quiz_submissions", ["submission_id"], :name => "index_quiz_submissions_on_submission_id"
  add_index "quiz_submissions", ["temporary_user_code"], :name => "index_quiz_submissions_on_temporary_user_code"
  add_index "quiz_submissions", ["user_id"], :name => "index_quiz_submissions_on_user_id"

  create_table "quizzes", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.text     "quiz_data"
    t.float    "points_possible"
    t.integer  "context_id",                           :limit => 8
    t.string   "context_type"
    t.integer  "assignment_id",                        :limit => 8
    t.string   "workflow_state"
    t.boolean  "shuffle_answers"
    t.boolean  "show_correct_answers"
    t.integer  "time_limit"
    t.integer  "allowed_attempts"
    t.string   "scoring_policy"
    t.string   "quiz_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "lock_at"
    t.datetime "unlock_at"
    t.datetime "deleted_at"
    t.boolean  "could_be_locked"
    t.integer  "cloned_item_id",                       :limit => 8
    t.string   "access_code"
    t.string   "migration_id"
    t.integer  "unpublished_question_count",                        :default => 0
    t.datetime "due_at"
    t.integer  "question_count"
    t.integer  "last_assignment_id",                   :limit => 8
    t.datetime "published_at"
    t.datetime "last_edited_at"
    t.boolean  "anonymous_submissions"
    t.integer  "assignment_group_id",                  :limit => 8
    t.string   "hide_results"
    t.string   "ip_filter"
    t.boolean  "require_lockdown_browser"
    t.boolean  "require_lockdown_browser_for_results"
    t.boolean  "one_question_at_a_time"
    t.boolean  "cant_go_back"
  end

  add_index "quizzes", ["assignment_id"], :name => "index_quizzes_on_assignment_id", :unique => true
  add_index "quizzes", ["context_id", "context_type"], :name => "index_quizzes_on_context_id_and_context_type"

  create_table "report_snapshots", :force => true do |t|
    t.string   "report_type"
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "account_id",  :limit => 8
  end

  create_table "role_overrides", :force => true do |t|
    t.string   "enrollment_type"
    t.string   "permission"
    t.boolean  "enabled"
    t.boolean  "locked"
    t.integer  "context_id",             :limit => 8
    t.string   "context_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "applies_to_self",                     :default => true, :null => false
    t.boolean  "applies_to_descendants",              :default => true, :null => false
  end

  add_index "role_overrides", ["context_id", "context_type"], :name => "index_role_overrides_on_context_id_and_context_type"

  create_table "roles", :force => true do |t|
    t.string   "name",                         :null => false
    t.string   "base_role_type",               :null => false
    t.integer  "account_id",      :limit => 8, :null => false
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "deleted_at"
    t.integer  "root_account_id", :limit => 8
  end

  add_index "roles", ["account_id", "name"], :name => "index_roles_unique_account_name", :unique => true
  add_index "roles", ["account_id"], :name => "index_roles_on_account_id"
  add_index "roles", ["name"], :name => "index_roles_on_name"
  add_index "roles", ["root_account_id"], :name => "index_roles_on_root_account_id"

  create_table "rubric_assessments", :force => true do |t|
    t.integer  "user_id",               :limit => 8
    t.integer  "rubric_id",             :limit => 8
    t.integer  "rubric_association_id", :limit => 8
    t.float    "score"
    t.text     "data"
    t.text     "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "artifact_id",           :limit => 8
    t.string   "artifact_type"
    t.string   "assessment_type"
    t.integer  "assessor_id",           :limit => 8
    t.integer  "artifact_attempt"
  end

  add_index "rubric_assessments", ["artifact_id", "artifact_type"], :name => "index_rubric_assessments_on_artifact_id_and_artifact_type"
  add_index "rubric_assessments", ["assessor_id"], :name => "index_rubric_assessments_on_assessor_id"
  add_index "rubric_assessments", ["rubric_association_id"], :name => "index_rubric_assessments_on_rubric_association_id"
  add_index "rubric_assessments", ["rubric_id"], :name => "index_rubric_assessments_on_rubric_id"
  add_index "rubric_assessments", ["user_id"], :name => "index_rubric_assessments_on_user_id"

  create_table "rubric_associations", :force => true do |t|
    t.integer  "rubric_id",        :limit => 8
    t.integer  "association_id",   :limit => 8
    t.string   "association_type"
    t.boolean  "use_for_grading"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
    t.text     "summary_data"
    t.string   "purpose"
    t.string   "url"
    t.integer  "context_id",       :limit => 8
    t.string   "context_type"
    t.boolean  "hide_score_total"
    t.boolean  "bookmarked",                    :default => true
    t.string   "context_code"
  end

  add_index "rubric_associations", ["association_id", "association_type"], :name => "index_rubric_associations_on_aid_and_atype"
  add_index "rubric_associations", ["context_code"], :name => "index_rubric_associations_on_context_code"
  add_index "rubric_associations", ["context_id", "context_type"], :name => "index_rubric_associations_on_context_id_and_context_type"
  add_index "rubric_associations", ["rubric_id"], :name => "index_rubric_associations_on_rubric_id"

  create_table "rubrics", :force => true do |t|
    t.integer  "user_id",                      :limit => 8
    t.integer  "rubric_id",                    :limit => 8
    t.integer  "context_id",                   :limit => 8
    t.string   "context_type"
    t.text     "data"
    t.float    "points_possible"
    t.string   "title"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "reusable",                                  :default => false
    t.boolean  "public",                                    :default => false
    t.boolean  "read_only",                                 :default => false
    t.integer  "association_count",                         :default => 0
    t.boolean  "free_form_criterion_comments"
    t.string   "context_code"
    t.string   "migration_id"
    t.boolean  "hide_score_total"
    t.string   "workflow_state",                            :default => "active"
  end

  add_index "rubrics", ["context_id", "context_type"], :name => "index_rubrics_on_context_id_and_context_type"
  add_index "rubrics", ["user_id"], :name => "index_rubrics_on_user_id"

  create_table "scribd_accounts", :force => true do |t|
    t.integer  "scribdable_id",   :limit => 8
    t.string   "scribdable_type"
    t.string   "uuid"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "scribd_accounts", ["scribdable_id", "scribdable_type"], :name => "index_scribd_accounts_on_scribdable_id_and_scribdable_type"

  create_table "scribd_mime_types", :force => true do |t|
    t.string   "extension"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "session_persistence_tokens", :force => true do |t|
    t.string   "token_salt"
    t.string   "crypted_token"
    t.integer  "pseudonym_id",  :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "session_persistence_tokens", ["pseudonym_id"], :name => "index_session_persistence_tokens_on_pseudonym_id"

  create_table "sessions", :force => true do |t|
    t.string   "session_id", :null => false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
  add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

  create_table "settings", :force => true do |t|
    t.string   "name"
    t.string   "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "settings", ["name"], :name => "index_settings_on_name", :unique => true

  create_table "sis_batches", :force => true do |t|
    t.integer  "account_id",          :limit => 8
    t.string   "batch_id"
    t.datetime "ended_at"
    t.integer  "errored_attempts"
    t.string   "workflow_state"
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "attachment_id",       :limit => 8
    t.integer  "progress"
    t.text     "processing_errors"
    t.text     "processing_warnings"
    t.boolean  "batch_mode"
    t.integer  "batch_mode_term_id",  :limit => 8
    t.text     "options"
  end

  add_index "sis_batches", ["account_id", "created_at"], :name => "index_sis_batches_account_id_created_at"
  add_index "sis_batches", ["account_id", "created_at"], :name => "index_sis_batches_on_account_id_and_created_at"

  create_table "strategies", :force => true do |t|
    t.string  "title"
    t.text    "description"
    t.integer "course_id",   :limit => 8
    t.integer "user_id",     :limit => 8
  end

  create_table "stream_item_instances", :force => true do |t|
    t.integer "user_id",        :limit => 8
    t.integer "stream_item_id", :limit => 8
    t.boolean "hidden",                      :default => false, :null => false
    t.string  "workflow_state"
    t.string  "context_type"
    t.integer "context_id",     :limit => 8
  end

  add_index "stream_item_instances", ["context_type", "context_id"], :name => "index_stream_item_instances_on_context_type_and_context_id"
  add_index "stream_item_instances", ["stream_item_id"], :name => "index_stream_item_instances_on_stream_item_id"
  add_index "stream_item_instances", ["user_id", "hidden", "id", "stream_item_id"], :name => "index_stream_item_instances_global"

  create_table "stream_items", :force => true do |t|
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "context_type"
    t.integer  "context_id",   :limit => 8
    t.string   "asset_type"
    t.integer  "asset_id",     :limit => 8
  end

  add_index "stream_items", ["asset_type", "asset_id"], :name => "index_stream_items_on_asset_type_and_asset_id", :unique => true
  add_index "stream_items", ["updated_at"], :name => "index_stream_items_on_updated_at"

  create_table "submission_comment_participants", :force => true do |t|
    t.integer  "submission_comment_id", :limit => 8
    t.integer  "user_id",               :limit => 8
    t.string   "participation_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "submission_comment_participants", ["submission_comment_id"], :name => "index_submission_comment_participants_on_submission_comment_id"
  add_index "submission_comment_participants", ["user_id"], :name => "index_submission_comment_participants_on_user_id"

  create_table "submission_comments", :force => true do |t|
    t.text     "comment"
    t.integer  "submission_id",         :limit => 8
    t.integer  "recipient_id",          :limit => 8
    t.integer  "author_id",             :limit => 8
    t.string   "author_name"
    t.string   "group_comment_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "attachment_ids"
    t.integer  "assessment_request_id", :limit => 8
    t.string   "media_comment_id"
    t.string   "media_comment_type"
    t.integer  "context_id",            :limit => 8
    t.string   "context_type"
    t.text     "cached_attachments"
    t.boolean  "anonymous"
    t.boolean  "teacher_only_comment",               :default => false
    t.boolean  "hidden",                             :default => false
  end

  add_index "submission_comments", ["author_id"], :name => "index_submission_comments_on_author_id"
  add_index "submission_comments", ["context_id", "context_type"], :name => "index_submission_comments_on_context_id_and_context_type"
  add_index "submission_comments", ["recipient_id"], :name => "index_submission_comments_on_recipient_id"
  add_index "submission_comments", ["submission_id"], :name => "index_submission_comments_on_submission_id"

  create_table "submission_versions", :force => true do |t|
    t.integer "context_id",    :limit => 8
    t.string  "context_type"
    t.integer "version_id",    :limit => 8
    t.integer "user_id",       :limit => 8
    t.integer "assignment_id", :limit => 8
  end

  add_index "submission_versions", ["context_id", "version_id", "user_id", "assignment_id"], :name => "index_submission_versions", :unique => true

  create_table "submissions", :force => true do |t|
    t.text     "body"
    t.string   "url"
    t.integer  "attachment_id",                    :limit => 8
    t.string   "grade"
    t.float    "score"
    t.datetime "submitted_at"
    t.integer  "assignment_id",                    :limit => 8
    t.integer  "user_id",                          :limit => 8
    t.string   "submission_type"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "group_id",                         :limit => 8
    t.text     "attachment_ids"
    t.boolean  "processed"
    t.integer  "process_attempts",                              :default => 0
    t.boolean  "grade_matches_current_submission"
    t.float    "published_score"
    t.string   "published_grade"
    t.datetime "graded_at"
    t.float    "student_entered_score"
    t.integer  "grader_id",                        :limit => 8
    t.string   "media_comment_id"
    t.string   "media_comment_type"
    t.integer  "quiz_submission_id",               :limit => 8
    t.integer  "submission_comments_count"
    t.boolean  "has_rubric_assessment"
    t.integer  "attempt"
    t.string   "context_code"
    t.integer  "media_object_id",                  :limit => 8
    t.text     "turnitin_data"
    t.boolean  "has_admin_comment",                             :default => false, :null => false
    t.datetime "cached_due_date"
  end

  add_index "submissions", ["assignment_id", "submission_type"], :name => "index_submissions_on_assignment_id_and_submission_type"
  add_index "submissions", ["user_id", "assignment_id"], :name => "index_submissions_on_user_id_and_assignment_id", :unique => true

  create_table "thumbnails", :force => true do |t|
    t.integer  "parent_id",    :limit => 8
    t.string   "content_type"
    t.string   "filename"
    t.string   "thumbnail"
    t.integer  "size"
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uuid"
  end

  add_index "thumbnails", ["parent_id", "thumbnail"], :name => "index_thumbnails_size", :unique => true
  add_index "thumbnails", ["parent_id"], :name => "index_thumbnails_on_parent_id"

  create_table "user_account_associations", :force => true do |t|
    t.integer  "user_id",    :limit => 8
    t.integer  "account_id", :limit => 8
    t.integer  "depth"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_account_associations", ["account_id"], :name => "index_user_account_associations_on_account_id"
  add_index "user_account_associations", ["user_id", "account_id"], :name => "index_user_account_associations_on_user_id_and_account_id", :unique => true

  create_table "user_follows", :force => true do |t|
    t.integer  "following_user_id",  :limit => 8
    t.string   "followed_item_type"
    t.integer  "followed_item_id",   :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_follows", ["followed_item_id", "followed_item_type"], :name => "index_user_follows_inverse"
  add_index "user_follows", ["following_user_id", "followed_item_type", "followed_item_id"], :name => "index_user_follows_unique", :unique => true

  create_table "user_notes", :force => true do |t|
    t.integer  "user_id",        :limit => 8
    t.text     "note"
    t.string   "title"
    t.integer  "created_by_id",  :limit => 8
    t.string   "workflow_state",              :default => "active"
    t.datetime "deleted_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_notes", ["user_id", "workflow_state"], :name => "index_user_notes_on_user_id_and_workflow_state"

  create_table "user_observers", :force => true do |t|
    t.integer "user_id",     :limit => 8, :null => false
    t.integer "observer_id", :limit => 8, :null => false
  end

  add_index "user_observers", ["observer_id"], :name => "index_user_observers_on_observer_id"
  add_index "user_observers", ["user_id", "observer_id"], :name => "index_user_observers_on_user_id_and_observer_id", :unique => true

  create_table "user_profile_links", :force => true do |t|
    t.string   "url",             :limit => 4096
    t.string   "title"
    t.integer  "user_profile_id", :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_profiles", :force => true do |t|
    t.text    "bio"
    t.string  "title"
    t.integer "user_id", :limit => 8
  end

  create_table "user_services", :force => true do |t|
    t.integer  "user_id",           :limit => 8
    t.string   "token"
    t.string   "secret"
    t.string   "protocol"
    t.string   "service"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "service_user_url"
    t.string   "service_user_id"
    t.string   "service_user_name"
    t.string   "service_domain"
    t.string   "crypted_password"
    t.string   "password_salt"
    t.string   "type"
    t.string   "workflow_state"
    t.string   "last_result_id"
    t.datetime "refresh_at"
    t.boolean  "visible"
  end

  add_index "user_services", ["id", "type"], :name => "index_user_services_on_id_and_type"
  add_index "user_services", ["user_id"], :name => "index_user_services_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "sortable_name"
    t.string   "workflow_state"
    t.integer  "merge_to"
    t.string   "time_zone"
    t.string   "uuid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "visibility"
    t.string   "avatar_image_url"
    t.string   "avatar_image_source"
    t.datetime "avatar_image_updated_at"
    t.string   "phone"
    t.string   "school_name"
    t.string   "school_position"
    t.string   "short_name"
    t.datetime "deleted_at"
    t.boolean  "show_user_services",                        :default => true
    t.string   "gender"
    t.integer  "page_views_count",                          :default => 0
    t.integer  "unread_inbox_items_count"
    t.integer  "reminder_time_for_due_dates",               :default => 172800
    t.integer  "reminder_time_for_grading",                 :default => 0
    t.integer  "storage_quota",                :limit => 8
    t.string   "visible_inbox_types"
    t.datetime "last_user_note"
    t.boolean  "subscribe_to_emails"
    t.text     "features_used"
    t.text     "preferences"
    t.string   "avatar_state"
    t.string   "locale"
    t.string   "browser_locale"
    t.integer  "unread_conversations_count",                :default => 0
    t.text     "stuck_sis_fields"
    t.boolean  "public"
    t.datetime "birthdate"
    t.string   "otp_secret_key_enc"
    t.string   "otp_secret_key_salt"
    t.integer  "otp_communication_channel_id", :limit => 8
    t.string   "initial_enrollment_type"
    t.integer  "crocodoc_id"
    t.datetime "last_logged_out"
  end

  add_index "users", ["avatar_state", "avatar_image_updated_at"], :name => "index_users_on_avatar_state_and_avatar_image_updated_at"
  add_index "users", ["uuid"], :name => "index_users_on_uuid"
  add_index "users", [nil], :name => "index_trgm_users_name"
  add_index "users", [nil], :name => "index_users_on_sortable_name"

  create_table "versions", :force => true do |t|
    t.integer  "versionable_id",   :limit => 8
    t.string   "versionable_type"
    t.integer  "number"
    t.text     "yaml"
    t.datetime "created_at"
  end

  add_index "versions", ["versionable_id", "versionable_type", "number"], :name => "index_versions_on_versionable_object_and_number", :unique => true

  create_table "web_conference_participants", :force => true do |t|
    t.integer  "user_id",            :limit => 8
    t.integer  "web_conference_id",  :limit => 8
    t.string   "participation_type"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "web_conference_participants", ["user_id"], :name => "index_web_conference_participants_on_user_id"
  add_index "web_conference_participants", ["web_conference_id"], :name => "index_web_conference_participants_on_web_conference_id"

  create_table "web_conferences", :force => true do |t|
    t.string   "title"
    t.string   "conference_type"
    t.string   "conference_key"
    t.integer  "context_id",       :limit => 8
    t.string   "context_type"
    t.string   "user_ids"
    t.string   "added_user_ids"
    t.integer  "user_id",          :limit => 8
    t.datetime "started_at"
    t.text     "description"
    t.float    "duration"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uuid"
    t.string   "invited_user_ids"
    t.datetime "ended_at"
    t.datetime "start_at"
    t.datetime "end_at"
    t.string   "context_code"
    t.string   "type"
    t.text     "settings"
  end

  add_index "web_conferences", ["context_id", "context_type"], :name => "index_web_conferences_on_context_id_and_context_type"
  add_index "web_conferences", ["user_id"], :name => "index_web_conferences_on_user_id"

  create_table "wiki_page_comments", :force => true do |t|
    t.integer  "user_id",        :limit => 8
    t.integer  "wiki_page_id",   :limit => 8
    t.integer  "context_id",     :limit => 8
    t.string   "context_type"
    t.string   "user_name"
    t.text     "comments"
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "wiki_pages", :force => true do |t|
    t.integer  "wiki_id",                  :limit => 8
    t.string   "title"
    t.text     "body"
    t.string   "workflow_state"
    t.string   "recent_editors"
    t.integer  "user_id",                  :limit => 8
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "url"
    t.datetime "delayed_post_at"
    t.boolean  "protected_editing",                     :default => false
    t.boolean  "hide_from_students",                    :default => false
    t.string   "editing_roles"
    t.integer  "view_count",                            :default => 0
    t.datetime "revised_at"
    t.boolean  "could_be_locked"
    t.integer  "cloned_item_id",           :limit => 8
    t.string   "migration_id"
    t.integer  "wiki_page_comments_count"
  end

  add_index "wiki_pages", ["user_id"], :name => "index_wiki_pages_on_user_id"
  add_index "wiki_pages", ["wiki_id"], :name => "index_wiki_pages_on_wiki_id"

  create_table "wikis", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "front_page_url"
    t.boolean  "has_no_front_page"
  end

  create_table "zip_file_imports", :force => true do |t|
    t.string   "workflow_state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "context_id",     :limit => 8
    t.string   "context_type"
    t.integer  "attachment_id",  :limit => 8
    t.integer  "folder_id",      :limit => 8
    t.float    "progress"
    t.text     "data"
  end

  create_trigger("quiz_submissions_after_update_row_when_new_submission_id_is__tr", :generated => true, :compatibility => 1).
      on("quiz_submissions").
      after(:update).
      where("NEW.submission_id IS NOT NULL AND OLD.workflow_state <> NEW.workflow_state AND NEW.workflow_state = 'complete'") do
    "UPDATE submissions SET workflow_state = 'graded' WHERE id = NEW.submission_id;"
  end

  create_trigger("collection_items_after_insert_row_tr", :generated => true, :compatibility => 1).
      on("collection_items").
      after(:insert) do |t|
    t.where("NEW.workflow_state = 'active'") do
      <<-SQL_ACTIONS
      UPDATE collections
      SET items_count = items_count + 1
      WHERE id = NEW.collection_id;
      SQL_ACTIONS
    end
  end

  create_trigger("collection_items_after_update_row_tr", :generated => true, :compatibility => 1).
      on("collection_items").
      after(:update) do |t|
    t.where("NEW.workflow_state <> OLD.workflow_state") do
      <<-SQL_ACTIONS
      UPDATE collections
      SET items_count = items_count + CASE WHEN (NEW.workflow_state = 'active') THEN 1 ELSE -1 END
      WHERE id = NEW.collection_id;
      SQL_ACTIONS
    end
  end

  create_trigger("collection_items_after_delete_row_tr", :generated => true, :compatibility => 1).
      on("collection_items").
      after(:delete) do |t|
    t.where("OLD.workflow_state = 'active'") do
      <<-SQL_ACTIONS
      UPDATE collections
      SET items_count = items_count - 1
      WHERE id = OLD.collection_id;
      SQL_ACTIONS
    end
  end

  create_trigger("user_follows_after_insert_row_tr", :generated => true, :compatibility => 1).
      on("user_follows").
      after(:insert) do |t|
    t.where("NEW.followed_item_type = 'Collection'") do
      <<-SQL_ACTIONS
      UPDATE collections
      SET followers_count = followers_count + 1
      WHERE id = NEW.followed_item_id;
      SQL_ACTIONS
    end
  end

  create_trigger("user_follows_after_delete_row_tr", :generated => true, :compatibility => 1).
      on("user_follows").
      after(:delete) do |t|
    t.where("OLD.followed_item_type = 'Collection'") do
      <<-SQL_ACTIONS
      UPDATE collections
      SET followers_count = followers_count - 1
      WHERE id = OLD.followed_item_id;
      SQL_ACTIONS
    end
  end

  create_trigger("submissions_after_insert_row_tr", :generated => true, :compatibility => 1).
      on("submissions").
      after(:insert) do |t|
    t.where(" NEW.submission_type IS NOT NULL AND (NEW.workflow_state = 'pending_review' OR (NEW.workflow_state = 'submitted' AND (NEW.score IS NULL OR NOT NEW.grade_matches_current_submission) ) ) ") do
      {:default=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + 1, updated_at = now()\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :sqlite=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + 1, updated_at = datetime('now')\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :postgresql=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + 1, updated_at = now() AT TIME ZONE 'UTC'\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :mysql=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + 1, updated_at = utc_timestamp()\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);"}
    end
  end

  create_trigger("submissions_after_update_row_tr", :generated => true, :compatibility => 1).
      on("submissions").
      after(:update) do |t|
    t.where("( NEW.submission_type IS NOT NULL AND (NEW.workflow_state = 'pending_review' OR (NEW.workflow_state = 'submitted' AND (NEW.score IS NULL OR NOT NEW.grade_matches_current_submission) ) ) ) <> ( OLD.submission_type IS NOT NULL AND (OLD.workflow_state = 'pending_review' OR (OLD.workflow_state = 'submitted' AND (OLD.score IS NULL OR NOT OLD.grade_matches_current_submission) ) ) )") do
      {:default=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + CASE WHEN ( NEW.submission_type IS NOT NULL AND (NEW.workflow_state = 'pending_review' OR (NEW.workflow_state = 'submitted' AND (NEW.score IS NULL OR NOT NEW.grade_matches_current_submission) ) ) ) THEN 1 ELSE -1 END, updated_at = now()\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :sqlite=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + CASE WHEN ( NEW.submission_type IS NOT NULL AND (NEW.workflow_state = 'pending_review' OR (NEW.workflow_state = 'submitted' AND (NEW.score IS NULL OR NOT NEW.grade_matches_current_submission) ) ) ) THEN 1 ELSE -1 END, updated_at = datetime('now')\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :postgresql=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + CASE WHEN ( NEW.submission_type IS NOT NULL AND (NEW.workflow_state = 'pending_review' OR (NEW.workflow_state = 'submitted' AND (NEW.score IS NULL OR NOT NEW.grade_matches_current_submission) ) ) ) THEN 1 ELSE -1 END, updated_at = now() AT TIME ZONE 'UTC'\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :mysql=>"      UPDATE assignments\n      SET needs_grading_count = needs_grading_count + CASE WHEN ( NEW.submission_type IS NOT NULL AND (NEW.workflow_state = 'pending_review' OR (NEW.workflow_state = 'submitted' AND (NEW.score IS NULL OR NOT NEW.grade_matches_current_submission) ) ) ) THEN 1 ELSE -1 END, updated_at = utc_timestamp()\n      WHERE id = NEW.assignment_id\n      AND context_type = 'Course'\n      AND EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = assignments.context_id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);"}
    end
  end

  create_trigger("enrollments_after_insert_row_when_new_type_in_studentenrollm_tr", :generated => true, :compatibility => 1).
      on("enrollments").
      after(:insert).
      where("(NEW.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND NEW.workflow_state = 'active')") do
    {:default=>"      UPDATE assignments SET needs_grading_count = needs_grading_count + 1, updated_at = now()\n      WHERE context_id = NEW.course_id\n      AND context_type = 'Course'\n      AND EXISTS (\n        SELECT 1\n        FROM submissions\n        WHERE user_id = NEW.user_id\n        AND assignment_id = assignments.id\n        AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) )\n                LIMIT 1\n      )\n      AND NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :postgresql=>"      UPDATE assignments SET needs_grading_count = needs_grading_count + 1, updated_at = now() AT TIME ZONE 'UTC'\n      WHERE context_id = NEW.course_id\n      AND context_type = 'Course'\n      AND EXISTS (\n        SELECT 1\n        FROM submissions\n        WHERE user_id = NEW.user_id\n        AND assignment_id = assignments.id\n        AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) )\n                LIMIT 1\n      )\n      AND NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :sqlite=>"      UPDATE assignments SET needs_grading_count = needs_grading_count + 1, updated_at = datetime('now')\n      WHERE context_id = NEW.course_id\n      AND context_type = 'Course'\n      AND EXISTS (\n        SELECT 1\n        FROM submissions\n        WHERE user_id = NEW.user_id\n        AND assignment_id = assignments.id\n        AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) )\n                LIMIT 1\n      )\n      AND NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :mysql=>"        IF NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1) THEN\n          UPDATE assignments, submissions SET needs_grading_count = needs_grading_count + 1, assignments.updated_at = utc_timestamp()\n          WHERE context_id = NEW.course_id\n            AND context_type = 'Course'\n            AND assignments.id = submissions.assignment_id\n            AND submissions.user_id = NEW.user_id\n            AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) );\n        END IF;"}
  end

  create_trigger("enrollments_after_update_row_when_new_type_in_studentenrollm_tr", :generated => true, :compatibility => 1).
      on("enrollments").
      after(:update).
      where("(NEW.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND NEW.workflow_state = 'active') <> (OLD.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND OLD.workflow_state = 'active')") do
    {:default=>"      UPDATE assignments SET needs_grading_count = needs_grading_count + CASE WHEN NEW.workflow_state = 'active' THEN 1 ELSE -1 END, updated_at = now()\n      WHERE context_id = NEW.course_id\n      AND context_type = 'Course'\n      AND EXISTS (\n        SELECT 1\n        FROM submissions\n        WHERE user_id = NEW.user_id\n        AND assignment_id = assignments.id\n        AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) )\n                LIMIT 1\n      )\n      AND NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :postgresql=>"      UPDATE assignments SET needs_grading_count = needs_grading_count + CASE WHEN NEW.workflow_state = 'active' THEN 1 ELSE -1 END, updated_at = now() AT TIME ZONE 'UTC'\n      WHERE context_id = NEW.course_id\n      AND context_type = 'Course'\n      AND EXISTS (\n        SELECT 1\n        FROM submissions\n        WHERE user_id = NEW.user_id\n        AND assignment_id = assignments.id\n        AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) )\n                LIMIT 1\n      )\n      AND NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :sqlite=>"      UPDATE assignments SET needs_grading_count = needs_grading_count + CASE WHEN NEW.workflow_state = 'active' THEN 1 ELSE -1 END, updated_at = datetime('now')\n      WHERE context_id = NEW.course_id\n      AND context_type = 'Course'\n      AND EXISTS (\n        SELECT 1\n        FROM submissions\n        WHERE user_id = NEW.user_id\n        AND assignment_id = assignments.id\n        AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) )\n                LIMIT 1\n      )\n      AND NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1);", :mysql=>"        IF NOT EXISTS (SELECT 1 FROM enrollments WHERE user_id = NEW.user_id AND course_id = NEW.course_id AND id <> NEW.id AND (enrollments.type IN ('StudentEnrollment', 'StudentViewEnrollment') AND enrollments.workflow_state = 'active') LIMIT 1) THEN\n          UPDATE assignments, submissions SET needs_grading_count = needs_grading_count + CASE WHEN NEW.workflow_state = 'active' THEN 1 ELSE -1 END, assignments.updated_at = utc_timestamp()\n          WHERE context_id = NEW.course_id\n            AND context_type = 'Course'\n            AND assignments.id = submissions.assignment_id\n            AND submissions.user_id = NEW.user_id\n            AND ( submissions.submission_type IS NOT NULL AND (submissions.workflow_state = 'pending_review' OR (submissions.workflow_state = 'submitted' AND (submissions.score IS NULL OR NOT submissions.grade_matches_current_submission) ) ) );\n        END IF;"}
  end

end
