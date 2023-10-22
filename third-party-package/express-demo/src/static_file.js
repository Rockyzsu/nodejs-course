const express = require("express");
const app = express();
var multipart = require("connect-multiparty");

const port = 7000;
app.use("/my", express.static("static"));
app.use("/you", express.static("public"));
app.use(express.json()); // 允许处理json

app.get("/", (req, res) => {
    res.send("Home page");
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

// module.exports = app; // 这样可以走 node /bin/www 启动