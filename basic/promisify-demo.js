const { promisify } = require("util");

function asyncFunction(callback) {
    // 异步操作
    setTimeout(() => {
        callback(null, "1");
    }, 1000);
}

asyncFunction((err, res) => {
    if (err) {
        console.log("error");
        console.log(err);
        return;
    }
    console.log(res);
});

const new_promise = promisify(asyncFunction);

new_promise()
    .then((arg1) => {
        console.log("resolve");
        console.log("arg1 " + arg1);
        // console.log("arg2 " + arg2);
    })
    .catch((err) => {
        console.log("catch , error");
        console.log(err);
    });
