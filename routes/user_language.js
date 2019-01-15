const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get("/all", (req, res, next) => {
  knex("users")
    .select("*")
    .innerJoin("user_language", "users.id", "user_language.users_id")
    .innerJoin("languages", "languages.id", "user_language.languages.id")
    .orderBy("users.id", "asc")
    .then(user_language => res.json({ user_language: user_language }));
});

module.exports = router;