exports.up = function(knex, Promise) {
  return knex.schema.createTable("sessions", function (table) {
    table.increments()
    table.integer('initiated_id').references('users.id').unsigned().onDelete('cascade')
    table.integer('accepted_id').references('users.id').unsigned().onDelete('cascade').nullable()
    table.integer("language_id").references('language.id').unsigned().onDelete('cascade')
    table.boolean("isOpen")
    table.dateTime("date_time")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("sessions")
};
