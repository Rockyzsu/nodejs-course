var mysql = require("mysql");
var dbConfig = require("./dbconfig");
var pool = mysql.createPool(dbConfig.mysql);

exports.querysql = (sql, params = []) => {
   return new Promise((resolve, reject) => {
       pool.getConnection((err, connection) => {
           if (err) {
               return reject(err);
           }
           connection.query(sql, params, (err, result) => {
               //释放连接
               connection.release();
               if (err) {
                   return reject(err);
               }
               return resolve(result);
           });
       });
   });
};