const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get("/", (req, res) => {
  knex("sessions")
    .orderBy("sessions.id", "asc")
    .then(sessions => {
      res.json({ sessions: sessions });
    });
});

module.exports = router;