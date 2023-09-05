var fs = require('fs')
fs.unlink('./tmp.txt',(err)=>{
if(err){
console.log('delte failed')
  throw err
}else{
console.log('delete successfully')
}
})
