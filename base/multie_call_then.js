function sleep(t) {

    return new Promise((resolve, reject) => {
        console.log('calling setTimeout')
        setTimeout(() => {
            console.log(t)
            resolve(t);
            console.log('time out')
        }, 1000)
    })
}


// 函数实现，参数 delay 单位 毫秒 ；
function sleep_online(delay) {
    for (var t = Date.now(); Date.now() - t <= delay;);
}

var fn = sleep(10);
fn.then((res) => {
    console.log('in then func');
    console.log(res);
    return sleep(res + 10)
}).then(res => {
    console.log('next then')
    console.log(res); // 20
})

console.log('end of app')

setTimeout(()=>{console.log("next test")},5000);
sleep_online(10000)
console.log('start ')
