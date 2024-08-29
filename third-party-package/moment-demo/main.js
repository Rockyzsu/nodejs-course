const {log} = require('console');
const moment = require('moment');

// 使用 Moment.js 处理日期和时间
const now = moment();
const formattedDate = now.format('YYYY-MM-DD');
// 获取当前日期和时间
const currentDate = new Date();

// 计算过去90天的日期和时间
const past90Days = new Date(currentDate.getTime() - (90 * 24 * 60 * 60 * 1000));
console.log(past90Days);
// 格式化日期和时间
function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 输出距离过去90天的当时日期和时间
console.log(formatDateTime(past90Days));
// moment(past90Days,'')

// 获取当前日期和时间
const currentDateTime = moment();
// 计算过去90天的日期和时间
const past90Days1 = currentDateTime.subtract(90, 'days');

// 格式化日期和时间
console.log(past90Days1.format('YYYY-MM-DD HH:mm:ss')); // 输出: 2023-03-17 12:34:56

log(formattedDate)

const getCurrentQuarterMonth = ()=> {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  let date_range;

  switch (Math.floor(currentMonth / 3)) {
    case 0: // 第一季度
    date_range = ['1','2','3'].map(x=>currentDate.getFullYear()+x);
      break;
    case 1: // 第二季度
    date_range = ['4','5','6'].map(x=>currentDate.getFullYear()+x);
      break;
    case 2: // 第三季度
    date_range = ['7','8','9'].map(x=>currentDate.getFullYear()+x);
      break;
    case 3: // 第四季度
    date_range = ['10','11','12'].map(x=>currentDate.getFullYear()+x);
      break;
  }

  return date_range;
}


console.log(getCurrentQuarterMonth())

const formattedTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
console.log(formattedTime);

// const moment = require('moment');

const threeMonthsAgoFirstDay = moment().subtract(3, 'months').startOf('month');
const formattedDate1 = threeMonthsAgoFirstDay.format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDate1);