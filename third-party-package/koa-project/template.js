const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const router = new Router();
require("dotenv").config();

const port = process.env.port || 7000;
console.log(typeof port);
router.get("/", async (ctx) => {
  ctx.body = "Welcome to Koa!";
});

app.use(router.routes());
app.listen(parseInt(port)); //port should be int;
console.log("server is running , port is 7000");
