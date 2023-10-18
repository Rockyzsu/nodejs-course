const express = require("express");
const port = 7000;
app = express();

function checkIPMiddleware(req, res, next) {
    console.log("in middleware");
    console.log(req.params);
    console.log(req.query); // 问号的部分
    next();
}

/*
路由中间件
*/
app.get("/api", checkIPMiddleware, (req, res) => {
    res.send("Hello World");
});

/*
全局中间件
*/

function showURL(req, res, next) {
    const now = new Date();
    console.log(`[${now.toLocaleString()}][${req.method}][${req.url}]`);
    next();
}

app.use(showURL);

app.get("/user", (req, res) => {
    res.send("rocky");
});

app.listen(port, () => {
    console.log("listen to port " + port);
});
