require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const secretKey = process.env.secretKey;
let jwt = require("jsonwebtoken");
app.use(express.urlencoded({ extended: false }));
// Middleware to parse JSON
app.use(express.json());
app.use(cors());
const tokenVerify = (req, res, next) => {
  const token = req.headers["authorization"]; // 小写
  if (!token) return res.json({ code: 400, msg: "no token" });
  try {
    let sign = token.split(" ")[1];
    const decodeInfo = jwt.verify(sign, secretKey);
    req.username = decodeInfo.username;
    next();
  } catch (err) {
    console.log(err);
    return res.json({ code: 400, msg: "invalid token" });
  }
};


// 这里生成jwt
app.post("/login", (req, res) => {
  console.log(process.env)
  let username = req.body.username;
  let password = req.body.password;
  console.log(username)
  console.log(password)
  console.log(process.env.username)
  console.log(process.env.password)
  if (username == process.env.username && password == process.env.password) {
    let token = jwt.sign({ username: username }, secretKey, { expiresIn: "1h" });
    return res.json({ status: 1, code: 200, token: token, msg: "login successed" });
  } else {
    return res.json({ status: 0, code: 400, msg: "login failed" });
  }
});

app.get("/info", tokenVerify, (req, res) => {
  return res.json({ code: 200, username: req.username, status: 1 });
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
