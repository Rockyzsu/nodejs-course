function greet() {
  console.log(`This is name ${this.name}`);
}

greet();

const person = {
  name: "rocky",
};

//person.apply(greet)
greet.apply(person);

function sum(a, b, c) {
  return a + b + c;
}

const number = [1, 2, 3];
console.log(sum(number));
console.log(sum(...number));
console.log(sum.apply(null, number));
