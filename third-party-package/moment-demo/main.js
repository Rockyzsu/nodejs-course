const {log} = require('console');
const moment = require('moment');

// 使用 Moment.js 处理日期和时间
const now = moment();
const formattedDate = now.format('YYYY-MM-DD');

log(formattedDate)