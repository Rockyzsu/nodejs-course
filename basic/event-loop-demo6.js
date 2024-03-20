const promise = Promise.resolve()

promise.then(() => {
    console.log('promise')
})

process.nextTick(() => {

    console.log('tick')
})
console.log('main')
