const express = require("express");
const app = express();
const port = 7000;

app.use(express.json()); // 允许处理json

app.get("/", (req, res) => {
  let s = "header info \n";
  for (let name in req.headers) {
    s += name + ":" + req.headers[name] + "\n";
  }
  res.send(s);
});

app.get("/error", (req, res) => {
  res.status(404);
  res.send("404");
});

app.get("/json", (req, res) => {
  let obj = { name: "rocky" };
  res.json(obj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
