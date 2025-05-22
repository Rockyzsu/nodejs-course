let arr = [11, 12, 13, 14, 15];
console.log("output index");
for (let item in arr) {
  // output index
  console.log(item); // 0 1 2 3 4
}

console.log("output value");
for (let item of arr) {
  // output value
  console.log(item); // 11 12 13 14 15
}

let obj = { name: "zhangsan", age: 18, sex: "male" };
for (let item in obj) {
  console.log(item);
}
