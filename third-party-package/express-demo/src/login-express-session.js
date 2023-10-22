// 用户登录,  使用的是 express-session
const express = require("express");
const fs = require("fs");
const app = express();
const port = 7000;

app.use(express.static("static"));
app.use(express.urlencoded({ extended: false })); // 主要是这个起作用, express.json() 无用

const session_opt = {
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 800000 },
    name: "ivan",
};

var session = require("express-session");
app.use(session(session_opt));

app.get("/login", (req, res) => {
    req.session.username = "rocky";
    res.send("login");
});

app.get("/admin", (req, res) => {
    const session = req.session;
    const username = session.username;
    console.log(username);
    if (username) {
        console.log("login status");
        res.send(`Welcome Home ${username}`);
    } else {
        res.send("still not longin");
    }
});
app.get("/logout", (req, res) => {
    // req.session.destroy((err)=>{console.log(err)})
    req.session = null;
    res.send("logout");
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
