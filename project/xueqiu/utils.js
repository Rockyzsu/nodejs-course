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

module.exports = { readCookies, writeReplyID, readReplyID };
