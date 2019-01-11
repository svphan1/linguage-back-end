exports.up = function(knex, Promise) {
  return knex.schema.createTable("language", function (table) {
    table.increments()
    table.integer("user_id")
    table.string("language")
    table.integer("proficiency")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("language")
};
