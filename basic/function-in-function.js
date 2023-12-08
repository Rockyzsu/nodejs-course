function outerFunction() {
  const outerVariable = 'Hello';
  console.log('outer');
  function innerFunction() {
    console.log('innser');
    const innerVariable = 'World';
    console.log(outerVariable + ' ' + innerVariable);
  }

  innerFunction(); // 在外部函数中调用内部函数
}

outerFunction(); // 输出: Hello World