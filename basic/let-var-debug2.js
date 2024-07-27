// 输出的全部是10
for (var i = 0; i < 10; i++) {
  console.log("i: ", i);
  setTimeout(() => {
    console.log(i); // 类似于闭包里面读取了一个全局的i
  }, 200);
}

for (let i = 0; i < 10; i++) {
  console.log("i: ", i);
  setTimeout(() => {
    console.log(i); // 通过let声明的变量，每次循环都会重新声明一个新的变量
  }, 200);
}
