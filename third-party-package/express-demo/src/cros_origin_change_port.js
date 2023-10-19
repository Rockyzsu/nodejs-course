// 跨域问题

const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
// app.use(cors({
//     origin:'http://127.0.0.1:7001'
// }));
app.use(express.json()); // 允许处理json
app.use(express.static("static"));

app.get("/", (req, res) => {
    res.render("Home page");
});

app.get("/api/register", async (req, res) => {
    console.log('call')
    // res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({ code: 200 });
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
