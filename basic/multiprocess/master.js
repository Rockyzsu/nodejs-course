const cp =require('child_process')
const n = cp.fork('child.js')
n.on('message',(msg)=>{
    console.log('主进程收到子进程的消息: '+msg)
})

n.send('Hello This is child process');
console.log('end in master')