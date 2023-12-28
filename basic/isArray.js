const arr = [1, 2, 3, 4];
const result = Array.isArray(arr);
console.log(result);

const arr2 = "Hello";
const result2 = Array.isArray(arr2);
console.log(result2);

const call_result = Object.prototype.toString.call(arr2); // 返回的是 [object String]
console.log(call_result);
