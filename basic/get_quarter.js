const getCurrentQuarter = () => {
  const current = new Date();
  return Math.ceil((current.getMonth() + 1) / 3); // 计算季度
};

console.log(getCurrentQuarter()); // 第 2 季度
