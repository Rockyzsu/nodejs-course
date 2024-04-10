//  批量运行mysql查询任务

require("dotenv").config();
const config = require("./DBConfig.js");
const { promisify } = require("util");
var mysql = require("mysql");
var pool = mysql.createPool(config);

async function batchRunQueryTask() {
  let connection;
  try {
    connection = await promisify(pool.getConnection).call(pool);
    // Promisify the query function for later use
    const query = promisify(connection.query).bind(connection);
    const packageinfo = [1, 2, 3, 4];
    let task_list = [];
    for (let i of packageinfo) {
      //   console.log(i);
      let task = query(`select data from member_error_log where log_id = ?;`, [i]);
      task_list.push(task);
      //   console.log(restult?.[0]?.data);
    }

    const results = await Promise.all(task_list);
    // console.log(results);
    results.map((result) => {
      console.log(result[0].data);
    });
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) connection.release();
  }
}

async function batchRunUpdateTask() {
  let connection;
  try {
    connection = await promisify(pool.getConnection).call(pool);
    // Promisify the query function for later use
    const query = promisify(connection.query).bind(connection);
    const packageinfo = [1, 2, 3, 4];
    let task_list = [];
    for (let i of packageinfo) {
      //   console.log(i);
      let task = query(`update member_error_log set change_type = ? where log_id = ?;`, [i, i]);
      task_list.push(task);
      //   console.log(restult?.[0]?.data);
    }

    const results = await Promise.all(task_list);
    console.log(results);
    results.map((result) => {
      console.log(result?.affectedRows);
    });
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) connection.release();
  }
}

// batchRunQueryTask().then(() => {
//   console.log("END");
//   pool.end();
//   console.log("Pool END");
// });

batchRunUpdateTask().then(() => {
  console.log("END");
  pool.end();
  console.log("Pool END");
});
