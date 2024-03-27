const getTotal = () => {
  const numbers = [1, 2, 3, 4, 5];
  const value = numbers.reduce((s, start_value) => {
    console.log("start ", start_value);
    console.log("end ", s);
    return s + start_value;
  }, 0);

  console.log("result ", value);
};

getTotal();
// console.log(value);

// 联系题目
let name_arr = ["Joe", "Jack", "William", "Averell"];
let name_result = name_arr.reduce((result, start_value) => {
  return result + start_value + ",";
}, "");

console.log(name_result); // Joe,Jack,William,Averell,

const age_obj = [
  { name: "joe", age: 19 },
  { name: "young", age: 73 },
  { name: "shock", age: 23 },
];

total_age = age_obj.reduce((result, start) => {
  return result + start.age;
}, 0);

console.log(total_age); // 115

const age_obj2 = [
  { name: "joe", age: 19 },
  { name: "young", age: 73 },
  { name: "shock", age: 23 },
];

total_age = age_obj2.reduce((result, start) => {
  if (start.age > 50) {
    return result + start.age;
  } else {
    return result;
  }
}, 0);

console.log(total_age); // 73
