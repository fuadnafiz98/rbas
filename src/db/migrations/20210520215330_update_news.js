exports.up = function (knex) {
  return knex.schema.alterTable("news", function (table) {
    table.uuid("news_publication_id");
  });
};

exports.down = function (knex) {};
