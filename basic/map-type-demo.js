var it_corp = new Map()
it_corp.set('QQ', 'SZ')
it_corp.set('HW', 'SZ')
it_corp.set('DJI', 'SZ')
it_corp.set('ZTE', 'SZ')
console.log(it_corp.size)

var item =it_corp.get('QQ')
console.log(item)

console.log(it_corp.has('QZ'))
