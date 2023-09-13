const integer = 1693847375 * 1000;
const ts = new Date(integer).toISOString();
console.log(ts);

const moment = require("moment");

// const timestamp = 1634699200000;
timestamp = integer;
const date = moment.unix(1694487434).format("YYYY-MM-DD HH:mm:ss"); // 这个ts不用乘以1000

console.log(date); // 2021-10-18 00:00:00
