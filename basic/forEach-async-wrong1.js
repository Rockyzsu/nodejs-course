const sleep = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timer);
    });
}

const foo = async () => {
    console.log('start');
    [1,3,4].forEach(async (i)=>{
        await sleep(1000);
        console.log(i);
    })
    console.log('end');
}

foo(); // 从1到5，每隔一秒输出一个数字