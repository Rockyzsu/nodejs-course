// 读取 txt 反转，保存
const { readFile, writeFile } = require("fs/promises");

const revertString = (text) => {
  return text.split("").reverse().join("");
};

const filenames = ["data/1.txt", "data/5.txt", "data/3.txt"];

const result = Promise.allSettled(
  filenames.map((filename) => 
    readFile(filename, "utf8")
      .then((data) => {
        return revertString(data);
      })
      .then((text) => {
        writeFile(filename, text);
        return `${filename}-ok`;
      })
      .catch((err) => {
        console.log(err);
        return `${filename}-error`;
      })
  )
);

result.then((arr) => {
  for (let i of arr) {
    console.log(i);
  }
});
