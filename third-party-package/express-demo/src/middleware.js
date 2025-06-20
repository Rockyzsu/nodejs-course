const express = require("express");
const port = 5000;
app = express();

const checkIPMiddleware = (req, res, next) => {
  console.log("in middleware");
  console.log(req.params);
  console.log(req.query); // 问号的部分
  next();
};

const timeUsedFunc = async (req, res, next) => {
  const start = new Date();
  console.log(start);
  await next();
  const end = new Date();
  console.log(end);
  console.log(end - start, "ms");
};

app.use(timeUsedFunc);
/*
路由中间件
*/
app.get("/api", checkIPMiddleware, (req, res) => {
  res.json({ msg: "Hello World" });
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

const delay = async (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
};

app.get("/slow", async (req, res, next) => {
  await delay(5000);
  return res.json({ msg: "done" });
});

app.listen(port, () => {
  console.log("listen to port " + port);
});
