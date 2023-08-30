const { format, createLogger,transports } = require('winston');
// const winston = require('winston');
const caller = require('caller');

const myFormat = format.printf(({ level, message }) => {
  const filePath = caller(3); // 通过调用栈获取调用日志的源代码位置
  console.log(filePath);
  const fileName = filePath.split('/').pop();
  const lineNumber = filePath.split(':')[1];
  
  return `${fileName}:::::${lineNumber}::::: [${level}]: ${message}`;
});

const logger = createLogger({
  format: myFormat,
  transports: [
    new transports.Console()
  ]
});

logger.info('This is a log message with line number.');