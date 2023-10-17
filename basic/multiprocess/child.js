process.on("message", (msg) => {
    console.log("子进程收到主进程的消息: " + msg);
});

process.send("Hello, This is child process");
console.log('end in child')
