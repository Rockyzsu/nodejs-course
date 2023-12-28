console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
const promise = new Promise((resolve, reject) => {
  console.log(3);
  resolve(4);
});

promise.then((res) => {
  console.log(res);
});
// 输出 1,3,4,2
