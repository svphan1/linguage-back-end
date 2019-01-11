exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM sessions; ALTER SEQUENCE sessions_id_seq RESTART WITH 2")
    .then(function() {
      return knex("sessions").insert([
        {
          id: 1,
          initiated_id: 1,
          accepted_id: 2,
          language_id: 2,
          isOpen: true,
          date_time: null
        }
      ]);
    });
};
