const s = "Hello This world"
const s_array = Array.from(s)
console.log(s_array)

let a = new Array(1,2,3)
let b = new Array(1,2)
let c = new Array(1)
console.log(a)
console.log(b)
console.log(c)
let d = new Array(9)
console.log(d)
console.log(d.length)
for(item of d){
console.log(item)
}

const new_d = d.map(function(){return 0})
console.log(new_d) // 依然是 undefine

let new_d1 = d.fill(1)
console.log(new_d1) // 这个才是正确的方式
