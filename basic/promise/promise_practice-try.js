const axios = require("axios");
url = "http://127.0.0.1:7000/";

function getWebData() {
return new Promise((resolve, reject) => {
    console.log("Start");
    // return 1 
});
}

function promiseFunc() {
task = getWebData();
console.log(typeof task);

task
    .then(() => {
    console.log("in then");
    // console.log(res);
    })
    .catch((err) => {
    console.log("hit error");
    console.log(err);
    });
}

promiseFunc();
// task = getWebData();
console.log("End");
