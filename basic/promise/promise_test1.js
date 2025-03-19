const ps = new Promise(function name(resolve, reject) {
  setTimeout(() => {
    let i = 0;
    while (i < 100) {
      i = i + 1;
      console.log("i=", i);
    }
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise is done");
});

console.log("promise 是异步吗？");
