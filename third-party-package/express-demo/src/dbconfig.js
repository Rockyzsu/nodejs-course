//[rocky] mysql配置
require('dotenv').config();

module.exports = {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
        multipleStatements: true
    }
}