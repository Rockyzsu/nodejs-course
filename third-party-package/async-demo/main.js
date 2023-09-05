const async = require('async');

// 异步任务1
function task1(callback) {
  console.log('task1 start');
  setTimeout(() => {
    console.log('Task 1');
    callback();
  }, 1000);
}

// 异步任务2
function task2(callback) {
  console.log('task2 start');

  setTimeout(() => {
    console.log('Task 2');
    callback();
  }, 500);
}

// 异步任务3
function task3(callback) {
  console.log('task3 start');

  setTimeout(() => {
    console.log('Task 3');
    callback();
  }, 2000);
}

// 使用 async.series 依次执行任务, 阻塞，等setTimeout执行完成后才执行下一个
async.series([task1, task2, task3], (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('All tasks completed');
  }
});
console.log('end')