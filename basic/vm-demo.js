console.log(__dirname);

const vm = require("vm");
const fs = require("fs");
const path = require("path");

var prt = path.resolve(__dirname, "temp/a.js");
var content = fs.readFileSync(prt, "utf8");
// console.log(content);
const removeString = function (content) {
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
};
content = removeString(content);
var compile = vm.runInThisContext(content, {
  filename: prt,
  lineOffset: 0,
  displayErrors: true,
});
compile();
