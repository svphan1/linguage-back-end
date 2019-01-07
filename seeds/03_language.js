
exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM books; ALTER SEQUENCE books_id_seq RESTART WITH 7")
    .then(function () {
      return knex("language").insert([
        {id: 1, 
         language_name: ""
        },
      ]);
    });
};
