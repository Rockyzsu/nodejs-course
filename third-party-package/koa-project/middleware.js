const koa = require("koa");
const app = new koa();

app.use(async (ctx, next) => {
  console.log("1");
  await next();
  console.log("2");
});

app.use(async (ctx, next) => {
  console.log("3");
  await next();
  console.log("4");
});

app.use(async (ctx, next) => {
  console.log("5");
  await next();
  console.log("6");
});

app.listen(7000);
console.log("koa is running");
