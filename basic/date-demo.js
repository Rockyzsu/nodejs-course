const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // 月份是从0开始计数的，所以要加1

console.log(currentYear, currentMonth);

const yearMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // 月份是从0开始计数的，所以要加1
  const formattedDate = currentDate.getFullYear().toString() + (currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString());

  return formattedDate;
};

console.log(yearMonth());

const yearMonth2 = () => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}${currentDate.getMonth() + 1}`;
};

console.log(yearMonth2());

const currentDate1 = new Date();
currentDate1.setMonth(currentDate1.getMonth() - 4);
// const month = currentDate1.toLocaleString('default', { month: 'long' });
console.log(currentDate1);

const currentDate2 = new Date();
currentDate2.setMonth(currentDate2.getMonth() - 3);
currentDate2.setDate(1);
console.log(currentDate2.toISOString().split("T")[0]);
console.log(currentDate2);

const getCurrentQuarterMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  let date_range;

  switch (Math.floor(currentMonth / 3)) {
    case 0: // 第一季度
      date_range = ["1", "2", "3"].map((x) => currentDate.getFullYear() + x);
      break;
    case 1: // 第二季度
      date_range = ["4", "5", "6"].map((x) => currentDate.getFullYear() + x);
      break;
    case 2: // 第三季度
      date_range = ["7", "8", "9"].map((x) => currentDate.getFullYear() + x);
      break;
    case 3: // 第四季度
      date_range = ["10", "11", "12"].map((x) => currentDate.getFullYear() + x);
      break;
  }

  return date_range;
};

const myDefineDate = new Date();
console.log("My Date: ", myDefineDate);

// 获取当前 UTC 时间戳
const utcTimestamp = Date.now();
console.log("UTC时间:", utcTimestamp);
// 假设目标时区比 UTC 快 8 小时（北京时间），偏移量为 8 * 60 分钟
const timezoneOffset = 8 * 60;

// 计算目标时区的时间戳
const targetTimestamp = utcTimestamp + timezoneOffset * 60 * 1000;

// 创建目标时区的日期对象
const targetDate = new Date(targetTimestamp);

console.log("目标时区时间:", targetDate);
console.log("目标时区时间:", targetDate.toLocaleString());

const currentTime = () => {
  const utcTimestamp = Date.now();
  // 假设目标时区比 UTC 快 8 小时（北京时间），偏移量为 8 * 60 分钟
  const timezoneOffset = 8 * 60;

  // 计算目标时区的时间戳
  const targetTimestamp = utcTimestamp + timezoneOffset * 60 * 1000;

  // 创建目标时区的日期对象
  const targetDate = new Date(targetTimestamp);
  return targetDate.toISOString().slice(0, 19).replace("T", " ");
};

console.log(currentTime());
