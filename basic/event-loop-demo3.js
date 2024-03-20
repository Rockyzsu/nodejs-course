const fs = require('fs')

fs.readFile(__filename, () => {
    console.log('callback')

    setTimeout(() => {
        console.log('setTimeout')
    }, 0)

    setImmediate(() => {
        console.log('setImmediate')
    })
})
