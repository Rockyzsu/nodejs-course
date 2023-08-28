// process 是一个全局变量，它提供了与当前 Node.js 进程相关的信息和控制能力。process 对象是一个 EventEmitter 实例，它提供了许多有用的属性和方法，用于管理进程、访问环境变量、控制流程和与操作系统进行交互。

function processDemo() {
    let arg0 = process.argv[0]
    console.log(arg0)

    let arg1 = process.argv[1]
    console.log(arg1)

    let arg2 = process.argv[2]
    console.log(arg2) // node process-demo.js 11  输出 11

}

processDemo()