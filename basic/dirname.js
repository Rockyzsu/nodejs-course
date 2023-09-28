const current_path = __dirname;
console.log(current_path);
var path = require("path");
var fs = require("fs");
const full_path = path.resolve("temp", "data.txt");
fs.readFile(full_path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

