exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM books; ALTER SEQUENCE books_id_seq RESTART WITH 7")
    .then(function() {
      return knex("sessions").insert([
        {
          id: 1,
          initiated_id: 2,
          accepted_id: 3,
          isOpen: false
        },
        {
          id: 2,
          initiated_id: 4,
          accepted_id: 5,
          isOpen: false
        }
      ]);
    });
};
