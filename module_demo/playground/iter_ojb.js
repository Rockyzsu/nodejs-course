'use strict';
//import forEach from '../lib/es6-func.js'

const obj = {
    name: 'rocky',
    age: 11
}
const forEachObj = (obj, fn) => {
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        fn(key, obj[key])
    }
}}


forEachObj(obj, (k, v) => {
    console.log(`new obj : ${k}:${v}`)
})
