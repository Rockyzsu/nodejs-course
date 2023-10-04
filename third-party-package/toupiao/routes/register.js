const express = require("express");
app = express();

function register(req, res, next) {
  //   res.json({ status: "register" });
  res.render("register");
}
app.get("/", register);

module.exports = app;
