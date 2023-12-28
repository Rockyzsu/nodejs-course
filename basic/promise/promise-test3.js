const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
  });

fn().then((res) => {
  console.log(res);
});

console.log(3);

// 1,3,2