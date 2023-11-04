console.log(this); // {}

// error
// console.log(this === window); //ReferenceError: window is not defined

// console.log(window); //ReferenceError: window is not defined

var a = "global a";
console.log(this.a);
function foobar() {
  this.name = "foo";
  yyy = 2000;
}
console.log(global);
