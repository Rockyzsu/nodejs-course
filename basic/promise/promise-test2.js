const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2)
  console.log(3);
});

promise.then((res) => {
  console.log(res);
});

console.log(4, promise);// 4 fulfilled

/*
1
3
4 Promise { 2 }
2
*/