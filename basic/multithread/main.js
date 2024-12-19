console.log("hello world from main.js");
const worker = new Worker("worker.js");

worker.onmessage = (msg) => {
  console.log("receive message from worker " + msg.data);
};

worker.postMessage("message sent to worker");
console.log("end of main");
