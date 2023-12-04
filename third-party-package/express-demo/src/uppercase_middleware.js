const express = require("express");
const app = express();

const bodyParser = require('body-parser');
var multipart = require("connect-multiparty");

// 使用body-parser中间件解析请求体
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(multipart());

const port = 7000;

function uppperCase(req, res, next) {
  // 将 传参变成大写的中间件
  console.log('in upper middleware')
  console.log(req.body);  
  for(let param in req.body){
      // console.log(param);
      req.body[param.toUpperCase()] = req.body[param];
    }
  // console.log(req.body);  

    next();
}


app.use(uppperCase);

app.post("/api/register", (req, res) => {
    const body = req.body;
    console.log('in api')
    console.log(body);
    // console.log(req.params);
    // for(let param in req.body){
    //   console.log(param);
    //   req.body[param.toUpperCase()] = req.body[param];
    // }
    // console.log(req.body);
    res.json({ msg: "register", username: body.USERNAME || "no username" });
});

app.get("/", (req, res) => {
  res.send("Home page");
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
