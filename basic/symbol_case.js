let dict = {
    name: 'link',
    age: 12,
    //   Symbol('sex'): 'male'
}

let sym = Symbol('sex')
dict[sym] = 'male'
console.log(dict)
let sym2 = Symbol('sex')
console.log(dict[sym2])
console.log(dict.sym)
if (sym == sym2) {
    console.log('same')
} else {
    console.log('not same')
}
