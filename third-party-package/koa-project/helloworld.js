const koa = require("koa");
const app = new koa();
app.use(async (ctx) => {
  ctx.body = "Welcome to koa";
});
app.listen(7000);
console.log("server is running , port is 7000");
