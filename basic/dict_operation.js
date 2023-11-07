function pop() {
  const dict = {};
  dict["name"] = "dog";
  dict["age"] = 10;
  dict["price"] = 100;
  return dict;
}

console.log(pop());
// let myDict = pop()
myDict = pop()
delete myDict["price"] // 删除key price
console.log(myDict)