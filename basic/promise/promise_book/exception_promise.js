const exceptPromise = new Promise((resolve, reject) => {
  console.log("1");
  try {
    console.log("try");
    throw Error("try error");  // 这里抛出try error, 会进入到catch， 抛出一个Error(new error)

  } catch (e) {
    throw Error("new error");
    // console.log('no error!!!!!')
  }
});

exceptPromise
  .then(() => {
    console.log("no error");
  })
  .catch((e) => {
    console.log(e);
  });
