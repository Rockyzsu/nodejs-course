setTimeout(() => {
  console.log("setTimeout 0s");
  queueMicrotask(() => {
    console.log("microtask in side timer");
  });
}, 0);

console.log("start");
queueMicrotask(() => {
  console.log("microtask 0s");
});
