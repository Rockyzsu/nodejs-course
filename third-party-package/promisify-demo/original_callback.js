const fs = require("fs");
const filename = "./test.txt";
fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(err);
  console.log(typeof data);
  console.log(data); // buffer 对象, 如果没有设置编码，
});

let nope;
console.log(nope); // undefined
console.log("End");
