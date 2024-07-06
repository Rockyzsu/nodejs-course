const delay = (timeout = 0, success = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(`resolve after ${timeout}`)
            } else {
                reject(`reject after ${timeout}`)
            }
        },timeout);
    })
}


// demo 1
delay(10000).then((msg) => {
    console.log(msg)
})
