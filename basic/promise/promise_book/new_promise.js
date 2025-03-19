const promise = new Promise((resolve, reject) => {
  console.log("1");
  setTimeout(() => {
    console.log("setTimeout 0s");
    resolve("ok");  // 这里不会被阻塞
    console.log("5");
    console.log('microtask in side timer');
  }, 0);
//   fetch("https://swapi.dev/api/people/?format=json")
//     .then((resp) => {
//       //   resolve(resp.text());
//       resolve("ok");
//     })
//     .catch((error) => {
//       reject(error);
//     });
});

console.log("2");

promise
  .then((data) => {
    console.log("3");
    console.log("i am resolve,data is ");
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  }); // { count: 82, next: null, previous: null, results: [ ... ] }
console.log("4");

// 1 2 4 3

