const koa = require('koa');
const app = new koa();
const Router = require('koa-router')
const router = new Router()
router.get('/source',async(ctx)=>{
  console.log('URL',ctx.request.URL);
  console.log('header',ctx.request.header);
  console.log('headers',ctx.request.headers);
  console.log('origin',ctx.request.origin);
  console.log(ctx.request.hostname);
  console.log(ctx.request.method);

  ctx.response.status=200;

  ctx.body='index'
})

app.use(router.routes())
app.listen(7000);
console.log('server is running , port is 7000');
