const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const bodyParse = require("koa-bodyparser");
const router = new Router();

app.use(bodyParse());

router.get("/api", async (ctx) => {
  ctx.body = "200: this is api gateway";
});

router.get("/user", async (ctx) => {
  ctx.body = "200: user info";
});

router.get("/stock", async (ctx) => {
  const { code } = ctx.request.query;
  ctx.body = `Query code is ${code}`;
});

router.post("/login", async (ctx) => {
  const { username } = ctx.request.body;
  console.log("call");

  ctx.body = `BODY IS ${username}`;
});

app.use(router.routes());

app.listen(7000);
console.log("server is running , port is 7000");
