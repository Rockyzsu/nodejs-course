var a = [1, 2, 3]
var b = a
a[0] = 99
console.log(b) //[99,2,3]

var c = [...a]
a[2] = 88
console.log('c: ', c)
console.log('a: ', a)


var obj1 = {}
var obj2 = {}

console.log(obj1 == obj2) // false


