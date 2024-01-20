function getName(){
  return "Hello"
}

const result = Object.prototype.toString.call(getName)
console.log(result);

