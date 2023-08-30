const winston = require("winston");

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

logger.info("ddddd");
// try {
//   // 产生一个错误
//   throw new Error('出错了');
// } catch (error) {
//   logger.error(error);
// }
