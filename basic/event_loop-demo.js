setTimeout(() => {
  console.log(1);
}, 0);
setImmediate(() => {
  console.log(2);
});

function sleep(ts) {
  let start = new Date().getTime();
  while (true) {
    current = new Date().getTime();
    if (current - start > ts) {
      break;
    }
  }
}

sleep(10000);
