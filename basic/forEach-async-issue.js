const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function forEachFunc() {
  const arr = [
    () => console.log("start"),
    () => sleep(1000),
    () => console.log(1),
    () => sleep(1000),
    () => console.log(2),
    () => sleep(1000),
    () => console.log(3),
    () => sleep(1000),
    () => console.log("end"),
  ];
  arr.forEach(async (fn) => {
    await fn();
    console.log("next");
  });
}

forEachFunc();
