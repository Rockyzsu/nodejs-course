console.log("start");

setTimeout(() => {
  console.log("timeout inside");
}, 0);

setImmediate(() => {
  console.log("immediately");
});

console.log("end");

/**
 * Output: 
 * start
 * end
 * timeout inside
 * immediately
 * 
 * 
 *
 */
