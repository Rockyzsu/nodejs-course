import {
    map,filter
} from '../lib/es6-func.js'

const myarr = [2, 3, 4, 5, 6]
const result = map(myarr, (i) => {
    return i * i
})

console.log(result)



//filter
const odd_check = filter(myarr, (x) => {
    return x % 2 === 0
})

console.log(odd_check)
