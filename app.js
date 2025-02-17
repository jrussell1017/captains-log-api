// dependencies
const express = require("express");
const logsController = require("./controllers/logsController.js");

const cors = require("cors")

// config
const app = express();
// middleware which parses data into js
app.use(express.json());
app.use(cors())

// used to listen to request to route route
app.use("/logs", logsController);

// aknowlegde connection to browser
app.get("/", (req, res) => {
  res.send("Welcome to the Captains log!");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

//
module.exports = app;
