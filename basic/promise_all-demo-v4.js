async function asyncFunc1() {
  await Promise.all([
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3),
    Promise.resolve(4),
  ]).then(
    (num) => console.log(num),
    (err) => console.log(err)
  );
}

function main() {
  asyncFunc1(); // 只输出2
}

async function asyncFunc2() {

  const result = await Promise.all([
    Promise.resolve(1),
    // Promise.reject(2),
    Promise.resolve(3),
    Promise.resolve(4),
  ]).catch(err=>{
    console.log('ERROR happened');
    console.log(err);
    return 'hello'
}
    
    )
  

//   console.log(value1, value2, value3, value4);
console.log(result)
}

function main2() {
  asyncFunc2();
}

main();
main2();
