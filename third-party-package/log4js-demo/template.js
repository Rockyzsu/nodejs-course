const log4js = require("log4js");
log4js.configure({
    appenders: {
        app: { type: "file", filename: "app_jack.log" },
    },
    categories: {
        default: { appenders: ["app"], level: "trace" },
        app: { appenders: ["app"], level: "trace" },
    },
});
const app_logger = log4js.getLogger("app");
app_logger.level = "tract";
app_logger.trace("trace this bug");