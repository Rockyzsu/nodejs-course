/*
 * @Author: Rockyzsu jinweizsu@gmail.com
 * @Date: 2023-10-14 16:53:54
 * @LastEditors: Rockyzsu jinweizsu@gmail.com
 * @LastEditTime: 2023-10-14 17:14:36
 * @FilePath: /nodejs-course/third-party-package/koa-project/template.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const koa = require('koa');
const app = new koa();
app.use(async (ctx) => {
	ctx.body = 'Welcome to koa';
});
app.listen(7000);
console.log('server is running , port is 7000');
