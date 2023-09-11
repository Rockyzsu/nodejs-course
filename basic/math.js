var number = 3.14159;
var roundedNumber = Math.round(number,2);
console.log(roundedNumber); // 输出 3


var number2 = 3.14559;
var roundedNumber2 = number2.toFixed(1);
console.log(typeof roundedNumber2); // 输出 "3.14"
console.log(parseFloat(roundedNumber2)); // 输出 "3.14"