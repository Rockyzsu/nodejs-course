var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ status: 200, name: "joe" });
});

/* GET home page. */
router.get("/api", function (req, res, next) {
  res.render({ version: 1 });
});

module.exports = router;
