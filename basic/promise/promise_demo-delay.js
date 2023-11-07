function promiseDelay(data) {
  return new Promise((resolve, reject) => {
    console.log("delay function " + data);
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
}

const func = promiseDelay(100);
func.then(function (data) {
  console.log("then function in data " + data);
});

// const func = promiseDelay(1000);
