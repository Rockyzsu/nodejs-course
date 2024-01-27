const express = require("express");
const app = express();
var morgan = require("morgan");
var multipart = require("connect-multiparty");
var mysql = require("mysql");
var dbConfig = require("./dbconfig");
var pool = mysql.createPool(dbConfig.mysql)
const port = 7000;
const axios = require("axios");

morgan.token("timestamp", () => {
  return new Date().toISOString();
});
app.use(morgan(":timestamp :method :url :status :response-time ms"));

app.get("/", (req, res) => {
  const query = `SELECT * FROM sales_salesorder WHERE set_invalid = 0 limit 1`;
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log("err");
      console.log(err);
      return res.status(500).json({ msg: "err", data: err });
    }

    //建立连接，增加一个用户信息
    try {
      // connection.release();      
      connection.query(query, async function (err, result) {
        console.log("in connection");
        const result2 = await axios.get("https://qq.com/");
        // console.log(result2.data);
        // connection.release();
        console.log(connection.state);
        // console.log(result);
        connection.query(
          "SELECT * FROM sales_salesorder",
          function (err, result) {
            if (err) {
              console.log("err");
              console.log(err);
            }
            console.log("Done");
            //console.log('result ',result)
            // connection.release();
            return res.status(200).json({ msg: "Done", data: JSON.stringify(result) });
          }
        );
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "Failed", data: err });
    } finally {
      connection.release();
      console.log("out connection");
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
