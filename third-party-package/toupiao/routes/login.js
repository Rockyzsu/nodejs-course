const express = require("express");
const app = express();

function login(req, res, next) {
  //   res.json({ status: "login" });
  res.render("login");
}

app.get("/", login);

module.exports = app;
