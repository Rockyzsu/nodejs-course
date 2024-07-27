require("dotenv").config();
let axios = require("axios");
const express = require("express");
const app = express();
// const port = process.env.PORT;

/*
用了部署服务器，测试用例
*/
console.log("start");

app.use(express.json()); // 允许处理json

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/user", (req, res) => {
  res.json({ status: 200, value: "joe" });
});

app.get("/score", (req, res) => {
  res.json({ status: 200, value: "100" });
});

app.get("/age", (req, res) => {
  res.json({ status: 200, value: "10" });
});

app.get("/slow", async (req, res) => {
  let startTime = new Date();
  await new Promise((resolve) => setTimeout(resolve, 10000));
  let endTime = new Date();
  res.json({ time_used: `${endTime - startTime}ms` });
});


app.get("/callslow", (req, res) => {
  axios
    .get("http://127.0.0.1/slow")
    .then((resp) => resp.data)
    .then((x) => {
      console.log(x);
    })
    .then(() => {
      console.log("Call back done");
    })
    .catch((error) => console.log(error));
    console.log(new Date())
    setTimeout(() => {
    axios
      .get("http://127.0.0.1/age")
      .then((resp) => resp.data)
      .then((x) => {
        console.log(x);
        console.log(new Date())
      })
      .catch((x) => console.log(x));
  }, 5000);
  return res.json({ status: 1, msg: "Done" });
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
