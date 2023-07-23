function sleep(t) {
    return new Promise((resolve, reject) => {
        console.log('calling setTimeout')
        setTimeout(() => {
            //console.log(t)
            resolve(t);
            console.log('time out')
        }, t)
    })
}



async function test() {
    let res1 = await sleep(100);
    console.log(res1)
    let res2 = await sleep(res1 + 100);
    console.log(res2)
    let res3 = await sleep(res2 + 100);
    console.log(res3);
    return res3

}

test().then((res) => {
    console.log('in then')
    console.log(res)
    console.log('in then')
})
