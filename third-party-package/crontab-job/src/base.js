const cronJob = require("cron").CronJob;

// 秒	分钟	小时	日期	月份	星期	年（可选）
const taskTime = "0 */1 * * * *";
const jobid = new cronJob(
  taskTime,
  function () {
    //your job code here
    console.log("hi, crontab job", new Date());
  },
  null,
  true,
  "Asia/Chongqing"
); // Asia/Shanghai
// jobid.start();
