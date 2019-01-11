exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_language", function (table) {
    table.increments()
    table.integer("user_id")
    table.integer("language_id")
    table.integer("proficiency")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_language")
};
