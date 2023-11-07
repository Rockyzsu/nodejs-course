const axios = require("axios");
url = "http://127.0.0.1:7000/";

function getWebData() {
  return new Promise((resolve, reject) => {
    console.log("Start");
    data = axios.get(url);
    console.log(typeof data);
    resolve(data);
    reject("error");
  });
}

task = getWebData();
console.log(typeof task);

function promiseFunc() {
  task
    .then((res) => {
      console.log("in then");
      const data = res.data;
      console.log(data);
      return data;
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("hit error");
      console.log(err);
    });
}

promiseFunc();
console.log("End");
