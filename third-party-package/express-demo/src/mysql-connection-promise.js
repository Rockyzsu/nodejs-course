const express = require("express");
const app = express();
var morgan = require("morgan");
var multipart = require("connect-multiparty");
var mysql = require("mysql");
var dbConfig = require("./dbconfig");
var pool = mysql.createPool(dbConfig.mysql);
const port = 7000;
const axios = require("axios");
const { querysql } = require("./promise-mysql-query");
morgan.token("timestamp", () => {
  return new Date().toISOString();
});
app.use(morgan(":timestamp :method :url :status :response-time ms"));

app.get("/", async (req, res) => {
  const result = await querysql("select * from sales_salesorder limit 1");
  res.status(200);
  return res.json(result);
});

app.get("/v1", async (req, res) => {
  querysql("select * from sales_salesorder limit 1").then((result) => {
    res.status(200);
    res.json(result);
  });
  // return res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
