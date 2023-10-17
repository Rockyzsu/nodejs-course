const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const router = new Router();
const static = require("koa-static");
const path = require("path");
const { sign } = require("jsonwebtoken");
const bodyParser = require("koa-bodyparser");

require("dotenv").config();

const port = process.env.port || 7000;
console.log(typeof port);
const secret = process.env.secret || "secret";
const jwt = require("koa-jwt")({ secret });

const staticPath = "./html";
app.use(bodyParser());
app.use(static(path.join(__dirname, staticPath)));

router.get("/welcome", jwt, async (ctx, next) => {
    const headers = ctx.request.headers;
    console.log(headers);
    // ctx.status = 401;
    ctx.body = { message: "welcome" };
});

router.post("/login", async (ctx, next) => {
    const { username } = ctx.request.body;
    console.log(username);
    if (username) {
        const token = sign({ username }, secret, { expiresIn: "1m" });
        console.log(token);
        ctx.body = { message: "get token success", token: token, code: 1 };
    } else {
        ctx.body = { message: "param error", code: -1 };
    }
});
app.use(router.routes());
app.listen(parseInt(port)); //port should be int;
console.log("server is running , port is 7000");
