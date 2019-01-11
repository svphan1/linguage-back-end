exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function (table) {
    table.increments()
    table.string("first_name")
    table.string("last_name")
    table.text("avatar")
    table.string("email")
    table.string("username")
    table.string("location")
    table.string("gender")
    table.string("isActive")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
};
