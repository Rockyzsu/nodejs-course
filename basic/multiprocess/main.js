const child_process = require("child_process");

for (let i = 0; i < 3; i++) {
    var worker = child_process.exec(
        "node command.js " + i,
        function (err, stdout, stderr) {
            if (err) {
                console.log(err.stack);
            } else {
                console.log("stdout ", stdout);
                console.log("stderr ", stderr);
            }
        }
    );

    worker.on("exit", function (code) {
        console.log("子进程退出了，推出码" + code);
    });
}
