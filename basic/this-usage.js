var person = {
  name: "ken",
  age: 10,
  greet: function () {
    console.log(`Hello ${this.name}, i am ${this.age} years old`);
  },
};

console.log(person.name); // ken
person.greet(); // Hello ken, i am 10 years old

function thisFunc() {
  return this;
}

var testObj = {
  func: thisFunc,
};

console.log("1"); // 1
console.log(testObj.func()); // this func

function globalAlias() {
  return this;
}

console.log(globalAlias());

var f = {
  name: "fork",
  func: function () {
    return this.name;
  },
  func1: function () {
    return this;  // func1 返回的是 f里面的所有
  },
};
console.log(f.func());
console.log(f.func1());
