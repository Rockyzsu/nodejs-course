const express = require("express");
const port = 7000;

function middlewareA(req, res, next) {
  console.log("before A next");
  next();
  console.log("After A next");
}

function middlewareB(req, res, next) {
  console.log("before B next");
  next();
  console.log("After B next");
}

function middlewareC(req, res, next) {
  console.log("before C next");
  next();
  console.log("After C next");
}

app = express();
app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.get("/", (req, res) => {
  res.json({msg:"Hello World"});
});

// 输出的顺序
/*
before A next
before B next
before C next
After C next
After B next
After A next
*/

app.listen(port, () => {
  console.log("listen to port " + port);
});
