// 模拟 asyncTask2 函数
async function asyncTask2() {
    console.log('asyncTask2 开始执行');
    await new Promise(resolve => setTimeout(resolve, 4000));
    console.log('asyncTask2 执行结束');
    return 'asyncTask2 的结果';
}

// 模拟 asyncTask1 函数
async function asyncTask1() {
    console.log('asyncTask1 开始执行');
    await new Promise(resolve => setTimeout(resolve, 7000));
    console.log('asyncTask1 执行结束');
    return 'asyncTask1 的结果';
}

let config_store_id = 2;

let task1 = asyncTask1();
let task2 = asyncTask2();

if (config_store_id == 2) {
    task2 = null;
}

(async () => {
    try {
        console.log('start main func')
        const promise_result = await Promise.all([task1, task2]);
        console.log(promise_result);
        console.log('end of script');
    } catch (error) {
        console.error('发生错误:', error);
    }
})();

