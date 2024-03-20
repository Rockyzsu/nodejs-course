setImmediate(() => {
    console.log('setImmediate1')

    setImmediate(() => {
        console.log('setImmediate2')
    })

    process.nextTick(() => {
        console.log('nextTick')
    })
})

setImmediate(() => {
    console.log('setImmediate3')
})



// 1, tick 3 2
