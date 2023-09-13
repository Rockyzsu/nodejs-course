const moment = require("moment");
function timeConvert(ts) {
  console.log(ts);
  if (typeof ts === "string" && ts.length === 10) {
    ts = Number(ts);
  } else if (typeof ts === "string" && ts.length === 13) {
    ts = Number(ts) / 1000;
  }
  return moment.unix(Number(ts)).format("YYYY-MM-DD HH:mm:ss"); // 这个ts不用乘以1000
}

function parse(content) {
  let result = [];
  for (let item of content.result) {
    item["created"] = timeConvert(item["created"]);
    item["last_modified"] = timeConvert(item["last_modified"]);
    item["crawled"] = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    result.push(item);
  }

  return result;
}

module.exports = parse;
