require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const chalk = require("chalk");
const logger = require("morgan");

app.use(
  cors(),
  express.urlencoded({ extended: false }),
  express.json(),
  logger("dev")
);

// strategy used to protect sensitive data
const keys = require("./config/keys");

// Connection
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Cannot connect to DB", error));

const {FormModel} = require('./models/FormModel')

app.post("/new", (req, res) => {
  req.body.message = req.body.message ? req.body.message : undefined;
  FormModel.create({ ...req.body }, (err, result) => {
    err
      ? console.log("Error: ", chalk.yellow(err.message), () => {
          res.status(400).json(err);
        })
      : res.status(201).json(result);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`App listening on port ${port}`));
