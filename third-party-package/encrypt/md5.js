#!/usr/bin/env node

const fs = require("fs");

const crypto = require("crypto");

const MD5 = (data) => {
  const hash = crypto.createHash("md5");
  hash.update(data);
  return hash.digest("hex");
};

function main() {
  const fileanme = process.argv?.[2];
  if (!fileanme) {
    console.log("please input file name");
    return;
  }

  fs.readFile(fileanme, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(typeof data);
    // console.log(data);
    const md5_result = MD5(data);
    console.log(md5_result);
  });
}

main();
