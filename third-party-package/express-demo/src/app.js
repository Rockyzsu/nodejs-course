const express = require("express");
const app = express();
var compression = require("compression");
app.use(compression());

// router = express.Router();
app.get("/", (req, res) => {
  console.log("call");
  // throw Error("set error");
  res.send("Hello World! jobs");
});
const fs = require("fs");
app.get("/big_image", (req, res, next) => {
  console.log(req.url);
  const file = fs.readFileSync("./static/Screenshot_2024_0926_151941.jpg");
  res.writeHead(200, { "Content-Type": "image/jpeg" });
  res.end(file);
  //   res.send('big');
});

app.get('/header',(req,res)=>{
  return res.send(req.headers);
})
app.get("/big_text", (req, res, next) => {
  console.log(req.url);
  const file = fs.readFileSync("./static/test.sql");
//   res.writeHead(200, { "Content-Type": "image/jpeg" });
//   res.end(file);
    res.send({data:JSON.stringify(file)});
});

app.use((err, req, res, next) => {
  console.log(req.url);
  console.log(err);
  //   next();
  res.status(404);
  res.send("Sorry cant find that!");
});

module.exports = app;
