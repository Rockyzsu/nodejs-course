let arr = ["a", "b", "c"];
console.log(1 in arr); //true
console.log(2 in arr); //true
console.log(3 in arr); // false
console.log(4 in arr); //false
console.log("\n=======================\n");
let dict = { key1: "keyA", key2: "keyB" };
console.log("key1" in dict);
console.log("key3" in dict);

// of 迭代数组
let arr1 = ["a", "b", "c"];
for (let item of arr1) {
  console.log(item);
}

// in 迭代对象
let obj2 = { key1: "keyA", key2: "keyB" };
for (let item in obj2) {
  console.log(item);
}

console.log('\n=======================\n')
// 获取object的key
let obj3 = { name: "rocky", age: 10, location: "HK", job: "CEO" };
for (let key of Object.keys(obj3)) {
  console.log(key);
}
