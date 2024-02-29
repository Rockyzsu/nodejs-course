const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // 月份是从0开始计数的，所以要加1

console.log(currentYear, currentMonth);

const yearMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // 月份是从0开始计数的，所以要加1
  const formattedDate =
    currentDate.getFullYear().toString() +
    (currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString());

  return formattedDate;
};

console.log(yearMonth());

const yearMonth2 = () => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}${currentDate.getMonth() + 1}`;
};

console.log(yearMonth2());
