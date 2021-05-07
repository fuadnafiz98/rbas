exports.up = async function up(knex) {
  await knex.schema.createTable("users", function (table) {
    table.uuid("user_id");
    table.string("user_name");
    table.string("user_email");
    table.string("user_password");
    table.bigInteger("group_id");
    table.timestamps();
  });
  await knex.schema.createTable("groups", function (table) {
    table.bigIncrements("group_id");
    table.string("group_name");
  });
  await knex.schema.createTable("permissions", function (table) {
    table.bigIncrements("permission_id");
    table.string("permission_name");
    table.boolean("permission_create");
    table.boolean("permission_read");
    table.boolean("permission_delete");
  });
  await knex.schema.createTable("groups_permissions", function (table) {
    table.bigInteger("group_id");
    table.bigInteger("permission_id");
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("groups");
  await knex.schema.dropTableIfExists("permissions");
  await knex.schema.dropTableIfExists("groups_permissions");
};
