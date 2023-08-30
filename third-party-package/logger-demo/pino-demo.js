const pino = require("pino");

const logger = pino();

try {
  // 产生一个错误
  throw new Error("出错了");
} catch (error) {
  logger.error(error);
}
