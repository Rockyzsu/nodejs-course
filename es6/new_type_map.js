let map = new Map()
let obj = {
    name: 'autsin'
}
map.set(obj, true)
console.log(map)
console.log(map.has(obj))

let another_map_init = new Map([
    [1, 'Angular'],
    [2, 'React'],
    [3, 'Vue'],
    [4, 'Bootstrap'],
    ['5', 'Nextjs'],
    ['6', 'uniapp'],
])

console.log(another_map_init)
// iter all item
//
for (let i of another_map_init.entries()) {
    console.log(i)
}

for (let i of another_map_init.keys()) {
    console.log(`KEY:${i}\tVALUE:${another_map_init.get(i)}`)
}


