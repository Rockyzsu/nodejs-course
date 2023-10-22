// 用户登录, work! 使用的是 cookie-session
const express = require("express");
const app = express();
const port = 7000;
var cookieSession = require("cookie-session");

app.use(express.static("static"));
app.use(express.urlencoded({ extended: false })); // 主要是这个起作用, express.json() 无用

function authMiddleware(req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.send("auth failed");
    }
}

app.use(
    cookieSession({
        name: "session",
        keys: ["key1", "key2"],
    })
);

app.get("/admin", (req, res) => {
    const username = req.session.username;
    console.log(username);
    if (username) {
        res.send(`Welcome Home ${username}`);
    } else {
        res.redirect("/login.html");
    }
});
app.get("/secret", authMiddleware, (req, res, next) => {
    res.send("you can see my secret ! password is 123456");
});

app.post("/user/login", (req, res) => {
    const _username = req.session.username;
    console.log(_username);
    if (_username) {
        return res.send(`Welcome Home ${_username}`);
    }
    const body = req.body;
    console.log(body);
    const username = body.username;
    const password = body.password;
    if (username == "admin" && password == "password") {
        req.session.username = username;
        res.redirect("/admin");
    } else {
        res.redirect("/login.html");
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
