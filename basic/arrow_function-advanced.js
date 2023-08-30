function DelayGreet(name) {
  this.name = name;
}

DelayGreet.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

DelayGreet.prototype.newgreet = function () {
  setTimeout(function () {
    console.log(`Hello ${this.name}`);
  }, 2000);
};

DelayGreet.prototype.greetArrow = function () {
  setTimeout(() => {
    console.log(`Hello ${this.name}`);
  }, 2000);
};

obj = new DelayGreet("World");
obj.greet();
obj.newgreet();
obj.greetArrow();
