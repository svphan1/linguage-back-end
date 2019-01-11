exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 3")
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          first_name: "Son",
          last_name: "Phan",
          avatar: "",
          email: "sonvphan1@gmail.com",
          username: "svphan1",
          location: "Denver, CO",
          gender: "male",
          isActive: ""
        },
        {
          id: 2,
          first_name: "Matt",
          last_name: "Winzer",
          avatar: "",
          email: "",
          username: "",
          location: "",
          gender: "male",
          isActive: ""
        }
      ]);
    });
};
