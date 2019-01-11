exports.up = function(knex, Promise) {
  return knex.schema.createTable("sessions", function (table) {
    table.increments()
    table.integer("initiated_id")
    table.integer("accepted_id")
    table.boolean("isOpen")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("sessions")
};
