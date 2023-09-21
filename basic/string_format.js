var today = "2022-01-01";
words = `Today is ${today}`;
console.log(words);

const notype = new String("hello world");
console.log(notype);
console.log(typeof notype); // object 不是 string

const type = "hello world";
console.log(type);
console.log(typeof type); // string

let unknow;
if (unknow) {
  console.log("unknow is true");
}

const constant = 10;
const constant_str = constant.toString();
console.log(typeof constant);
console.log(typeof constant_str);

const mynumber = 10.55;
console.log(mynumber.toFixed(1));

console.log(mynumber.toPrecision(4)); // 注意这里，有效数字， 如果设置 为2， 那么返回的是 11，设置为3，返回的是10.6
console.log(mynumber.toPrecision(1)); // 1e+1
console.log(mynumber.toPrecision(2)); //11
console.log(mynumber.toPrecision(3)); //10.6
