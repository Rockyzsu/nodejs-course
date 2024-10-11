var setTimeout_promise = require('util').promisify(setTimeout);
// 不会阻塞
//setTimeout_promise(5000).then(()=>{console.log('tik tok')})
//console.log('end')
//
async function try_settimeout() {
    const result = await setTimeout_promise(5000,()=>{console.log('call back')});
    console.log(result)
    console.log('end')
}


try_settimeout()
