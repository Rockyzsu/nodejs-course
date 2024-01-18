const express = require("express");
const app = express();
var morgan = require("morgan");
var multipart = require("connect-multiparty");
var mysql = require("mysql");
var dbConfig = require("./dbconfig");
var pool = mysql.createPool(dbConfig.mysql);
const port = 7000;


morgan.token("timestamp", () => {
  return new Date().toISOString();
});
app.use(morgan(":timestamp :method :url :status :response-time ms"));

app.get("/", (req, res) => {
  const query = `SELECT * FROM sales_salesorder WHERE set_invalid = 0 limit 5`;
  pool.getConnection(function (err, connection) {
    //建立连接，增加一个用户信息
    try {
      connection.query(query, function (err, result) {
        console.log("in connection");
        connection.query("SELECT * FROM sales_salesorder", function (err, result) {
          if(err){
            console.log("err");
            console.log(err);
          }
            console.log("Done");
            console.log('result ',result)
            // connection.release();
            return res.json({ msg: "Done",data:result });
        });
      });
    } catch (err) {
      console.log(err);
    } finally {
    connection.release()
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
