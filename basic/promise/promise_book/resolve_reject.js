const promise = Promise.resolve(20); // 返回的一个promise对象
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }); // 20

const rejectPromise = Promise.reject("Error");
rejectPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
