
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

