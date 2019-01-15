const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get("/", (req, res) => {
  knex("languages")
    .orderBy("languages.id", "asc")
    .then(languages => {
      res.json({ languages: languages });
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  knex("languages")
    .where("id", id)
    .then(languages => {
      res.json({ languages: languages[0] });
    });
});

router.post("/", (req, res, next) => {
  const body = req.body;
  knex("languages")
    .insert(body)
    .returning("*")
    .then(languages => {
      res.json({ languages: languages[0] });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  knex("languages")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedLanguages => {
      res.json({ languages: updatedLanguages[0] });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  knex("languages")
    .where("id", id)
    .delete()
    .returning("*")
    .then(deletedLanguage => {
      res.json({ languages: deletedLanguage[0] });
    });
});

module.exports = router;