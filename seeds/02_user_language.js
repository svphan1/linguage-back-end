exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM user_language; ALTER SEQUENCE user_language_id_seq RESTART WITH 2")
    .then(function() {
      return knex("user_language").insert([
        { id: 1, 
          user_id: 1,
          language_id: 2,
          proficiency: null 
        },
        { id: 2, 
          user_id: 2,
          language_id: 2,
          proficiency: null 
        }
      ]);
    });
};
