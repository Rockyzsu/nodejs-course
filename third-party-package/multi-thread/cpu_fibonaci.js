function fib(n) {
    if (n == 2 || n == 1) {
        return 1
    }

    return fib(n - 1) + fib(n - 2)

}

//console.log(fib(10))
const {
    Worker,
    isMainThread,
    parentPort,
    workerData
} = require('worker_threads')

function MainThread() {
    let count = 0;
    setInterval(() => {
        count++;
        console.log(`${count}s passed`)
        if (count == 3) {
            const worker = new Worker(__filename, {
                workerData: 43
            })
            worker.on('message', (data) => {
                console.log('receive data')
                console.log(data);
            })
        }

    }, 1000)
}

function ChildThread() {
    console.log('in child')
    let data = fib(workerData)
    parentPort.postMessage(data)
}

if (isMainThread) {
    MainThread()
} else {
    ChildThread()
}
