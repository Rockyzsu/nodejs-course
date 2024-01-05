const fs = require("fs");
const pattern = /\d/;

function readCookies() {
  const cookie = fs.readFileSync("./cookies.txt", "utf8");
  return cookie;
}

function writeReplyID(id) {
  try {
    fs.writeFileSync("./reply_id.txt", id, { flag: "a" }, "utf8");
  } catch (e) {
    console.log(e);
  }
}

function writeStock(user_id, stock) {
  try {
    fs.writeFileSync(`./stock_${user_id}.txt`, stock, { flag: "a" }, "utf8");
  } catch (e) {
    console.log(e);
  }
}

function readReplyID() {
  try {
    const init_list = [];
    const reply_id_list = fs.readFileSync("./reply_id.txt", "utf8");
    const result = reply_id_list.split("\n");
    result.forEach((id) => {
      // console.log(id);
      if (pattern.test(id)) {
        init_list.push(id);
      }
    });
    // console.log(init_list);
    return result;
  } catch (e) {
    console.error(e);
  }
}

function readStock(user_id) {
  try {
    const init_list = [];
    const stock_list = fs.readFileSync(`./stock_${user_id}.txt`, "utf8");
    const result = stock_list.split("\n");
    result.forEach((item) => {
      // console.log(id);
      if (pattern.test(item)) {
        init_list.push(item);
      }
    });
    // console.log(init_list);
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

module.exports = {
  readCookies,
  writeReplyID,
  readReplyID,
  readStock,
  writeStock,
};
