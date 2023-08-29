function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, ms);
    // resolve("pass");
  });
}
console.log("start");

// console.log(typeof timeout(5000));
let task = timeout(1000);
task.then(console.log, console.error);

console.log("end");
