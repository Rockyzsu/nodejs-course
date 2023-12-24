function wait(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}
console.time("log");
// const result = wait(5000).then(() => {
//   console.log("waiting done");
//   return "hello world";
// }); // 这个语句不会阻塞后面的语句, 直接打印会显示 Promise { <pending> }
// console.log("result", result);

async function AwaitPromiseFunc() {
  console.log("AwaitPromiseFunc");
  const result = await wait(5000).then(() => {
    console.log("waiting done");
    return "hello world";
  }); // 使用 await 会阻塞后面的语句, 直接打印会显示 hello world
  console.log("result", result);
  console.log("end of function");
}
AwaitPromiseFunc();

console.timeEnd("log");
