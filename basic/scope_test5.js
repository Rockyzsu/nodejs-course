// let a = 1;
function Func() {
  console.log(a);  // undefined
  var a = 0;
  console.log(a);
}

function Func2() {
  console.log(a); // 报错
  let a = 0; // 
  console.log(a);
}

Func();

Func2();