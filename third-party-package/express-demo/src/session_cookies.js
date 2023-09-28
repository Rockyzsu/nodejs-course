const express = require("express");
var cookie = require("cookie-parser");
var session = require("express-session");
var crypto = require("crypto");
const app = express();
const port = 7000;

const session_opt = {
  secret: "recommand 128 bytes random string", // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 20 * 60 * 1000 }, //cookie生存周期20*60秒
  resave: true, //cookie之间的请求规则,假设每次登陆，就算会话存在也重新保存一次
  saveUninitialized: true, //强制保存未初始化的会话到存储器
};
app.use(express.json()); // 允许处理json
app.use(cookie());

app.use(session(session_opt));

app.get("/", (req, res) => {
  const ck = req.cookies;
  console.log(ck);
  temp_cookie = crypto.randomBytes(18).toString("base64");
  res.cookie("sex", temp_cookie);
  res.send(temp_cookie);
});

app.get("/clearcookie", (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "hello" });
});

app.get("/set_session", (req, res) => {
  req.session.username = "joe";
  res.send("session");
});

app.get("/get_session", (req, res) => {
  const username = req.session.username;
  res.send(username);
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const body = req.body;
  console.log(body.username);
  console.log(body.password);
  res.send("register");
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
