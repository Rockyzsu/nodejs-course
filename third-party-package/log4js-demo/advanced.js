const log4js = require("log4js");
log4js.configure({
    appenders: {
        out: { type: "stdout" },
        app1: { type: "file", filename: "app1.log" },
        app2: { type: "file", filename: "app2.log" },
    },
    categories: {
        default: { appenders: ["out"], level: "trace" },
        app1: { appenders: ["app1"], level: "trace" },
        app2: { appenders: ["app2"], level: "trace" },
    },
});
const app1_logger = log4js.getLogger("app1");
const app2_logger = log4js.getLogger("app2");

app1_logger.level = "debug";
app2_logger.level = "debug";

app1_logger.debug("this is debug message");
app2_logger.error("some error");
app1_logger.trace("trace this bug");
app2_logger.error("found error");
