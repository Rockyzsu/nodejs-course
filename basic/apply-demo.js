function greet() {
  console.log(`This is name ${this.name}`);
}

greet(); // This is name undefined

const person = {
  name: "rocky",
};


greet.apply(person); // This is name rocky

function sum(a, b, c) {
  return a + b + c;
}

const number = [1, 2, 3];
console.log(sum(number));
console.log(sum(...number));
console.log(sum.apply(null, number));
