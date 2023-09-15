const express = require("express");
const app = express();
const port = 80;

/*
用了部署服务器，测试用例
*/

app.use(express.json()); // 允许处理json

app.get("/user", (req, res) => {
  res.json({ status: 200, value: "joe" });
});

app.get("/score", (req, res) => {
  res.json({ status: 200, value: "100" });
});

app.get("/age", (req, res) => {
  res.json({ status: 200, value: "10" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
