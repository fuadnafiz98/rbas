exports.up = async function up(knex) {
  await knex.schema.createTable("users", function (table) {
    table.uuid("user_id");
    table.string("user_name");
    table.string("user_email");
    table.string("user_password");
    table.timestamps();
  });
  await knex.schema.createTable("permissions", function (table) {
    table.uuid("permission_id");
    table.uuid("collection_id");
    table.string("permission_name");
    table.timestamps();
  });
  await knex.schema.createTable("user_permissions", function (table) {
    table.uuid("user_permission_id");
    table.uuid("permission_id");
    table.uuid("user_id");
    table.timestamps();
  });
  await knex.schema.createTable("subscriptions", function (table) {
    table.uuid("subscription_id");
    table.string("subscription_name");
    table.string("subscription_type");
    table.float("subscription_price");
    table.string("subscription_details");
  });
  await knex.schema.createTable("user_subscriptions", function (table) {
    table.uuid("user_subscription_id");
    table.uuid("user_id");
    table.uuid("subscription_id");
    table.uuid("publication_id");
    table.timestamps();
  });
  await knex.schema.createTable("publications", function (table) {
    table.uuid("publication_id");
    table.string("publication_name");
    table.string("publication_type");
    table.string("publication_description");
    table.string("publication_admin_id");
    table.integer("publication_readers_count");
    table.integer("publication_writers_count");
    table.timestamps();
  });

  await knex.schema.createTable("news", function (table) {
    table.uuid("news_id");
    table.string("news_title");
    table.string("news_description");
    table.string("news_writer_id");
    table.integer("news_assignee_id");
    table.timestamps();
  });
  await knex.schema.createTable("assignees", function (table) {
    table.uuid("assignee_id");
    table.uuid("assignee_user_id");
    table.uuid("assignee_news_id");
    table.boolean("assignee_status");
  });

  await knex.schema.createTable("news_drafts", function (table) {
    table.uuid("news_id");
    table.uuid("user_id");
    table.timestamps();
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("permissions");
  await knex.schema.dropTableIfExists("user_permissions");
  await knex.schema.dropTableIfExists("subscriptions");
  await knex.schema.dropTableIfExists("user_subscriptions");
  await knex.schema.dropTableIfExists("publications");
  await knex.schema.dropTableIfExists("news");
  await knex.schema.dropTableIfExists("assignees");
  await knex.schema.dropTableIfExists("news_drafts");
};
