const fs = require("fs");

setImmediate(() => {
  console.log("3 => setImmediate");
});

Promise.resolve().then(() => {
  console.log("4 => promise");
});

process.nextTick(() => {
  console.log("5 => nextTick");
});

fs.readFile("../data/temp.txt", (err, data) => {
  console.log(data.toString());
  console.log("2 => fs read");
  setTimeout(() => {
    console.log("6 => timeout inside");
  }, 0);

  setImmediate(() => {
    console.log("7 => immediately");
  });

  process.nextTick(() => {
    console.log("8 => nextTick");
  });
});

console.log("1 => end");
