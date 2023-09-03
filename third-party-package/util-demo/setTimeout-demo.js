/*
 * @Author: Rockyzsu jinweizsu@gmail.com
 * @Date: 2023-09-03 02:11:23
 * @LastEditors: Rockyzsu jinweizsu@gmail.com
 * @LastEditTime: 2023-09-03 02:13:27
 * @FilePath: /nodejs-course/third-party-package/util-demo/setTimeout-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const util = require('util');

const setTimeoutPromise = util.promisify(setTimeout);

setTimeoutPromise(2000)
  .then(() => {
    console.log('Two seconds have passed.');
  })
  .catch(error => {
    console.error(error);
  });

console.log('start')
setTimeoutPromise(2000);
console.log('end')