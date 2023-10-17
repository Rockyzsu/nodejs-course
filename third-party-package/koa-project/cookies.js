const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const router = new Router();

router.get("/getcookie", async (ctx) => {
  const cookie = ctx.cookies.get("id");
  console.log(cookie);
  ctx.body = "cookie : " + cookie;
});

router.get("/setcookie", async (ctx) => {
  ctx.cookies.set("id", "123456789", {});
  ctx.body = "Set cookie passed";
});

app.use(router.routes());

app.listen(7000);
console.log("server is running , port is 7000");
