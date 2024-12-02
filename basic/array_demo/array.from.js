// const promises = Array.from({ length: 30 }, () => {console.log('*')});
// console.log(promises);

const obj = { length: 5 };
const arr = Array.from(obj, (_, index) => index);
console.log(arr); 

const str = "hello";
const charArray = Array.from(str);
console.log(charArray); 

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = Array.from(numbers, num => num * 2);
console.log(doubledNumbers); 