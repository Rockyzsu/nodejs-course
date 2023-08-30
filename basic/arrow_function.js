const double = (num) => num * 2;
console.log(double(10));

var fn1 = (x) => console.log(`${x} Powered`);
fn1(10);

var fn2 = (x, y) => x * y;
console.log(fn2(2, 10));

var fn3 = (x) => {
  x = x * 5;
  x = x + 10;
  return x;
};

console.log(fn3(10));
