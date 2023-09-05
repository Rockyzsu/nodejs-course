const async = require('async');

// Define the tasks
const tasks = {
  task1: (callback) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      console.log('Task 1');
      callback(null, 'Result 1');
    }, 2000);
  },
  task2: (callback) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      console.log('Task 2');
      callback(null, 'Result 2');
    }, 1000);
  },
  task3: ['task1', 'task2', (results, callback) => {
    // Access the results of task1 and task2
    console.log('Task 3');
    console.log('Result 1:', results.task1);
    console.log('Result 2:', results.task2);
    callback(null, 'Result 3');
  }],
  task4: (callback) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      console.log('Task 4');
      callback(null, 'Result 4');
    }, 1500);
  },
  task5: ['task3', 'task4', (results, callback) => {
    // Access the results of task3 and task4
    console.log('Task 5');
    console.log('Result 3:', results.task3);
    console.log('Result 4:', results.task4);
    callback(null, 'Result 5');
  }]
};

// Execute the tasks using async.auto
async.auto(tasks, (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log('All tasks completed');
    console.log(results);
  }
});
