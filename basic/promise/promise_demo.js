function getDataFromApi() {
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
  
      // 模拟网络延迟
      setTimeout(() => {
  
        // 判断网络是否请求成功
        let random = 10
        if(random%2 === 0) {
          // 如果成功则resolve对象
          resolve({
            data: '我是从接口获取的数据'
          });  
        } else {
          // 如果失败则reject错误信息
          reject('请求失败,接口出错了');
        }
        
      }, 1000);
  
    });
  }
  
  // 使用Promise
  getDataFromApi()
    .then(response => {
      console.log('成功了!', response);
      // 继续链式调用
      return actionOnSuccess(response);
    })
    .then(data => {
      console.log('成功完成处理!', data);
    })
    .catch(error => {
      console.error('失败了!', error);
    });
  
  // 处理成功数据的函数
  function actionOnSuccess(response) {
    return new Promise((resolve, reject) => {
      // 模拟后续处理
      setTimeout(() => {
        resolve({
          code: 200,
          msg: '处理成功' 
        });
      }, 500);
    });
  }