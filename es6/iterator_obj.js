var a = [];
for (let i = 0; i < 100; i++) {
    a.push(i * i)
}
var i = a[Symbol.iterator]();
var iter = i.next()
while (!iter.done) {
    console.log(iter.value)
    iter = i.next()
}



