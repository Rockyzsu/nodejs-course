console.log("this is worker");

self.onmessage = (msg) => {
  console.log("message from main", msg.data);
  postMessage("i am fine, from worker");
};
