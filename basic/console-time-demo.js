console.time("s1");
let sum = 0;
for (let i = 0; i < 10000; i++) {
  for (let j = 1; j < 10; j++) {
    sum = sum + i + j;
  }
}
console.timeEnd("s1");

// 定义一个函数，模拟一个耗时的计算过程
function calculateSomething() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

// 使用 console.time() 开始计时，并给计时器命名
console.time("Calculation Time");

// 执行耗时的函数
const result = calculateSomething();

// 使用 console.timeEnd() 结束计时，并打印经过的时间
console.timeEnd("Calculation Time");

// 如果在计算过程中想要添加额外的标记点，可以使用 console.timeLog()
console.time("Calculation Time");
console.log("中间点输出"); // 假设在某个中间点输出日志
console.timeLog("Calculation Time", "中间点标记"); // 添加标记

// 再次执行耗时的计算
calculateSomething();
console.timeEnd("Calculation Time"); // 结束计时
