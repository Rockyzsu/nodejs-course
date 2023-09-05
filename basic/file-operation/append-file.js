var fs = require('fs')
fs.appendFile('./temp.txt','\ntime to say goodbye\n','utf8',(err)=>{
if(err){console.log(err)}
})
