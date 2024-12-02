const lodash = require("lodash");

const originData = {
  name: "John",
  age: 30,
  hobbies: ["reading", "coding"],
  group: ["c++", "python", "node.js"],
};

// 这里的 [] 只是为了入 如果数据解析不出来，设置的默认值
let { name, hobbies = [], not_exists = {} } = lodash.cloneDeep(originData);
console.log("name ", name);
console.log("hobbies ", hobbies);
console.log("not_exists ", not_exists);
