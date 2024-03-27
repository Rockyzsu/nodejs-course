require("dotenv").config();
const config = require("./DBConfig.js");
const { promisify } = require("util");
var mysql = require("mysql");

// var dbConfig = require("../db/DBConfig");

var pool = mysql.createPool(config);

async function queryTask() {
  let connection;
  try {
    // Get a connection from the pool
    connection = await promisify(pool.getConnection).call(pool);

    // Promisify the query function for later use
    const query = promisify(connection.query).bind(connection);
    // const sponseInfo = await query(`select * from where salesorder_status < 5 and salesorder_member_sponsorname like '(%${req.params.member_id}%)'`)
    const ret_data = await query(
      `
    select member_id from member_member where member_rankingid = 6 limit 1
    `
    );
    console.log(ret_data);
  } catch (error) {
    console.log(error);
  } finally {
    // Always ensure the connection is returned to the pool
    if (connection) connection.release();
  }
}

async function main() {
  await queryTask();
}

main();
