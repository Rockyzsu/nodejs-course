const express = require("express");
const app = express();
var morgan = require("morgan");
var multipart = require("connect-multiparty");
var mysql = require("mysql");
var dbConfig = require("./dbconfig");
var pool = mysql.createPool(dbConfig.mysql);
const port = 7000;

// app.use(express.json()); // 允许处理json

morgan.token("timestamp", () => {
  return new Date().toISOString();
});
app.use(morgan(":timestamp :method :url :status :response-time ms"));

app.get("/", (req, res) => {
  const query = `SELECT * FROM salesorder WHERE set_invalid = 0 limit 5`;
  pool.getConnection(function (err, connection) {
    //建立连接，增加一个用户信息
    try {
      //[rocky] 只是初始化，并没有增加用户
      connection.query(query, function (err, result) {
        // console.log(result);
        console.log("in connection");
        // res.json({ msg: result });
        connection.query("SELECT * FROM promocode limit 1", function (err, result) {
            console.log(result);
            return res.json({ msg: result });
        });
      });
    } catch (err) {
      console.log(err);
    } finally {
      console.log("out connection");
    connection.release();
    }
  });
});

app.post("/api/register", multipart(), (req, res) => {
  const body = req.body;
  res.json({ msg: "register", username: body.username || "no username" });
});

//500 程序错误的处理
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("500 error");
});

//404 处理
app.use(function (req, res) {
  res.status(404).send("404 page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
