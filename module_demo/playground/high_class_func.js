import { memoried }from '../lib/es6-func.js'
let fastFabnaci = memoried((n) => {
    if (n <= 2) {
        return 1
    } else {
        return fastFabnaci(n - 1) + fastFabnaci(n - 2)
    }
})
console.log("run")

function fabnaci(i) {
    if (i <= 2) {
        return 1
    } else {
        return fabnaci(i - 1) + fabnaci(i - 2)
    }
}

let startTime = Date.now()
/*
for (let i = 3; i < 20; i++) {
    let result = fabnaci(i)
    console.log(result)
}
*/


//let result = memoried(fabnaci)(40)
let result = fabnaci(40)
//let result = fastFabnaci(40)
console.log(result)
let endTime = Date.now()
let timeUsed = endTime - startTime
console.log(`Time used ${timeUsed}`)
