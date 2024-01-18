const arr = [
  ["hell", "world"],
  ["hello", "world"],
  ["hello1", "world"],
  ["hello2", "world"],
  ["hello3", "world"],
  ["hello4", "world"],
];

let item = arr.find((element) => element[0] == "hello");
console.log(item);
// 返回：   ["hello", "world"],