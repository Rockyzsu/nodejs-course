var str = "buffer是二进制数据"
var str_b = Buffer.from(str,'utf8')
console.log(str_b)
console.log(str_b.length) //24byte


