const fs = require('fs')
var source = fs.createReadStream('temp/source.txt')
var target = fs.createWriteStream('temp/target.txt')

source.pipe(target)

source.on('end',()=>{console.log("Done")})