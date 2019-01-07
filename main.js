const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) =>
  res.json(
    "Welcome to Linguage"
  )
);

function notFound(err, req, res, next) {
  res
    .status(404)
    .send({ error: "Not found!", status: 404, url: req.originalUrl });
}

function errorHandler(err, req, res, next) {
  console.error("Error", err);
  const stack = process.env.NODE_ENV !== "production" ? err.stack : undefined;
  res.status(500).send({ error: err.message, stack, url: req.originalUrl });
}

app.listen(port, () => console.log(`Your port is on ${port}`));