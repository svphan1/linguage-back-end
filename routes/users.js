const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get("/", (req, res) => {
  knex("users")
    .orderBy("users.id", "asc")
    .then(users => {
      res.json({ users: users });
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  knex("users")
    .where("id", id)
    .then(users => {
      res.json({ users: users[0] });
    });
});

router.post("/", (req, res, next) => {
  const body = req.body;
  knex("users")
    .insert(body)
    .returning("*")
    .then(users => {
      res.json({ users: users[0] });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  knex("users")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedUsers => {
      res.json({ users: updatedUsers[0] });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  knex("users")
    .where("id", id)
    .delete()
    .returning("*")
    .then(deletedUsers => {
      res.json({ users: deletedUsers[0] });
    });
});

module.exports = router;