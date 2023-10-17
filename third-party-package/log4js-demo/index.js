const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

logger.debug("this is debug message");
logger.error("some error");
