var fs = require('fs')
var readStream = fs.createReadStream('./tempfile.txt')

var length =0 ;
readStream.on('data',(chunk)=>{
length+=chunk.toString().length
  console.log('receive')
})

readStream.on('end',()=>{console.log(length)})
