const axios = require('axios');

// const url = 'http://127.0.0.1:3000/api/account/update-balance';
const url = 'http://127.0.0.1:3000/api/account/update-balance-no-tx';

const payload = {
  accountId: 2,
  amount: 20,
  remark: '并发测试2'
};

async function runConcurrentTest(n) {
  const tasks = [];
  for (let i = 0; i < n; i++) {
    tasks.push(
      axios.post(url, payload).then(res => ({
        status: res.status,
        data: res.data
      })).catch(err => ({
        status: err.response?.status,
        data: err.response?.data,
        error: err.message
      }))
    );
  }
  const results = await Promise.all(tasks);
  // 统计成功和失败
  let successCount = 0;
  let failCount = 0;
  results.forEach(r => {
    if (r.status === 200 && r.data?.success) {
      successCount++;
    } else {
      failCount++;
    }
  });

  console.log(`成功: ${successCount}，失败: ${failCount}`);
//   console.log(results);
}

runConcurrentTest(10);