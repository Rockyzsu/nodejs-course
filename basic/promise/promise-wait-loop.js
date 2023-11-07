function wait(t){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t);
    }
    )}
console.time("log")
wait(5000).then(()=>{
    console.log('wait another')
    return wait(2000)
}).then(()=>{
    console.log('last then')

}) // 这个语句不会阻塞后面的语句
console.timeEnd("log")