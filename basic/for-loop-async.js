const sleep = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timer);
    });
}

const foo = async () => {
    console.log('start');
    for (let i = 0; i < 5; i++) {
        await sleep(1000);
        console.log(i);
    }

    console.log('end');
}

foo(); // 从1到5，每隔一秒输出一个数字