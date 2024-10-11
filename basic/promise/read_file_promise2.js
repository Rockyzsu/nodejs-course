const fs = require('fs')

function readFilePromise(path) {
    return new Promise((resolve, reject) => {

        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            };
        })
    })

}


const path = 'error_ddtest_data.txt'

readFilePromise(path).then((data) => {
    const js = JSON.parse(data)
    console.log(js?.name)
}).catch((error) => {
    console.log('catch')
    console.log(error)
})
