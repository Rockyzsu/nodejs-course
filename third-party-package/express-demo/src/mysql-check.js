const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = 3000;

// 创建 MySQL 连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// 中间件，检查未释放的 MySQL 连接
app.use((req, res, next) => {
  res.on('finish', () => {
    // 在响应完成后检查连接是否被释放
    if (res.locals.connection) {
      res.locals.connection.release();
      console.log('MySQL connection released');
    }
  });

  // 从连接池获取连接
  pool.getConnection((err, connection) => {
    if (err) {
      return next(err);
    }

    // 将连接保存到 res.locals 中，以便在响应完成时释放连接
    res.locals.connection = connection;

    // 将连接对象添加到请求对象，以便在路由处理中使用
    req.mysql = connection;

    next();
  });
});

// 路由示例
app.get('/', (req, res) => {
  // 使用 req.mysql 进行数据库查询等操作
  req.mysql.query('SELECT * FROM member_cronjob', (err, results) => {
    if (err) {
      return res.status(500).send('Error querying database');
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});