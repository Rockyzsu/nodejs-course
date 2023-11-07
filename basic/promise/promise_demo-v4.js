const fs = require("fs");

// 把上面的程序改成 Promise 版本
/*

fs.readdir(__dirname, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

*/

function readDirPromise() {
  return new Promise((resolve, reject) => {
    fs.readdir(__dirname, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// readDirPromise(); // 这样是不会执行的,需要用then触发
readDirPromise()
  .then(function (data) {
    console.log("success");
    console.log(data);
    console.log(typeof data)
  })
  .catch((err) => {
    console.log("error happen");
    console.log(er);
  });
