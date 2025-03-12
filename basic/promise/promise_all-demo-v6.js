// 模拟一个异步请求函数
function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://api.example.com/data2') {
          reject(new Error('请求失败'));
        } else {
          resolve({ url, data: '一些数据' });
        }
      }, 1000);
    });
  }
  
  // 定义多个 API 请求的 URL
  const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
  ];
  
  // 使用 Promise.all 并行发起多个请求
  Promise.all(urls.map(url => fetchData(url)))
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
        console.log('发生错误:', error);
      console.error(error.message);
    });