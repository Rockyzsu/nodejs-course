const sleep = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timer);
    });
}

const foo = async () => {
    console.log('start');
    [1,2,3,4,5].forEach(async (i)=>{
        await sleep(1000);
        console.log(i);
    })
    console.log('end1');
}


foo(); // 从1到5，每隔一秒输出一个数字 错的
const main = async ()=> {
    await foo();
}
console.log('end2')