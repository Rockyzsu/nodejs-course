// 返回一个Promise的函数
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
      resolve('Promise resolved value'); // 这个是固定传值过去
    }, 1000);
  });
}

// 使用await获取Promise的返回值
async function fetchData() {
  try {
    const result = await asyncFunction();
    console.log(result); // 打印Promise的返回值
  } catch (error) {
    console.error('Error:', error);
  }
}

// 调用async函数
fetchData();
