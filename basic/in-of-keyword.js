let arr = ["a", "b", "c"];
console.log(1 in arr); //true
console.log(2 in arr); //true
console.log(3 in arr); // false
console.log(4 in arr); //false
console.log('\n=======================\n')
let dict = { key1: "keyA", key2: "keyB" };
console.log("key1" in dict);
console.log("key3" in dict);
