const { promisify } = require("util");
const fs = require("fs");
const readFile = promisify(fs.readFile);
const filename = "./test.txt";
readFile(filename, "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");