
const cron = require('node-cron');
const monthlyTask_CheckSameRankBonus = ()=>{
    
    console.log('now -> ',new Date())
}
cron.schedule('* * * * *', monthlyTask_CheckSameRankBonus);