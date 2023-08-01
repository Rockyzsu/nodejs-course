import {
    forEach,
    tellFunc,
    times,
    every,
    some
} from '../lib/es6-func.js'

let arr = [1, 2, 3, 4]
forEach(arr, console.log)
const newFunc = () => {
    let a = 1
    let b = 1
    console.log(`a+b=${a+b}`)
}

newFunc()

const sayhi = () => {
    console.log('Hi')
}
times(10, sayhi)

const mydata = [1, 3, 5, 7, 9]
const mydata1 = [2, 4, 6, 8]
const even_valid = (i) => {
    console.log('current i ' + i)
    if (i % 2 === 0) {
        console.log(i)
        return false
    } else {
        return true
    }
}

console.log(every(mydata, even_valid))
console.log(some(mydata1, even_valid))


const sortBy = (property) => {
    return (a, b) => {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result
}
}

let newObj = [
  {'name':'Andy','age':10},
  {'name':'Seen','age':80},
  {'name':'Jokie','age':30},
  {'name':'Walk','age':30},
  {'name':'Mean','age':1},
  {'name':'JJK','age':50},
  {'name':'Diss','age':76},
  {'name':'Kane','age':33},
  {'name':'Zhou','age':13},
]

let new_sort_result = newObj.sort(sortBy('age'))
console.log(new_sort_result)

let new_sort_results = newObj.sort(sortBy('name'))
console.log(new_sort_results)

console.log('END')
