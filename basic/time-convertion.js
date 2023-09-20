const integer = 1693847375 * 1000;
const ts = new Date(integer).toISOString();
console.log(ts);

const moment = require("moment");

// const timestamp = 1634699200000;
timestamp = integer;
const date = moment.unix(1694487434).format("YYYY-MM-DD HH:mm:ss"); // 这个ts不用乘以1000

console.log(date); // 2021-10-18 00:00:00

// 创建一个新的 Date 对象，表示当前时间
const currentDate = new Date();
console.log(currentDate)
// 获取当前时间的时间戳
const timestamp2 = currentDate.getTime();

// 获取当前时区相对于 UTC 的偏移量（以分钟为单位）
const timezoneOffset = currentDate.getTimezoneOffset();
console.log(timezoneOffset);
// 根据偏移量调整时间戳，得到当前时区时间的时间戳
const timezoneTimestamp = timestamp2 + 3600 * 8 * 1000;

// 创建一个新的 Date 对象，表示当前时区时间
const timezoneDate = new Date(timezoneTimestamp);

console.log(timezoneDate.toISOString());
