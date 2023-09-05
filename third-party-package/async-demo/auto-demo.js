const async = require('async');

// 定义异步任务
const tasks = {
  task1: (callback) => {
    console.log('Task 1');
    callback(null, 'Result 1');
  },
  task2: ['task1', (results, callback) => {
    console.log('Task 2, depends on task1');
    console.log('task1 result:', results.task1);
    callback(null, 'Result 2');
  }],
  task3: (callback) => {
    console.log('Task 3');
    callback(null, 'Result 3');
  },
  task4: ['task2', 'task3', (results, callback) => {
    console.log('Task 4, depends on task2 and task3');
    console.log('task2 result:', results.task2);
    console.log('task3 result:', results.task3);
    callback(null, 'Result 4');
  }]
};

// 执行任务
async.auto(tasks, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log('All tasks completed');
    console.log('Final results:', results);
  }
});