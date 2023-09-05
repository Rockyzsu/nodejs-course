var fs = require('fs');
fs.stat('./temp.txt',(err,state)=>{
  if(err){
  console.log(err)
  }else{
  console.log(state)
    }
})
