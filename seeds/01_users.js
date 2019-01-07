exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM books; ALTER SEQUENCE books_id_seq RESTART WITH 7")
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          first_name: "",
          last_name: "",
          avatar: "",
          email: "",
          username: "",
          location: "",
          gender: "",
          isActive: ""
        }
      ]);
    });
};
