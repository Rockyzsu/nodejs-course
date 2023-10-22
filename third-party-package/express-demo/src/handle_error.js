const express = require("express");
const app = express();
var multipart = require("connect-multiparty");

const port = 7000;

// app.use(express.json()); // 允许处理json

app.get("/", (req, res) => {
  throw new Error("New an error");
  res.send("Home page");
});

app.post("/api/register", multipart(), (req, res) => {
  const body = req.body;
  res.json({ msg: "register", username: body.username || "no username" });
});

function errorHandler(err, req, res, next) {
  console.log("i found an error");
  console.log(err.stack);
  res.status(500).send("500 error");
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
