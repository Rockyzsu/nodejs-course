let a = {a:0,b:0,c:0}
let b= {a:1}
let c={b:1}
let d = Object.assign(a,b,c)

console.log(a)
console.log(d)

let doubleTheFun = {
  _value:1,
  get value(){return this._value},
  set value(v){this._value = v*2}
}

console.log(doubleTheFun.value)
doubleTheFun.value = 10
console.log(doubleTheFun.value)

Object.assign(doubleTheFun,{value:3})

console.log(doubleTheFun.value)



