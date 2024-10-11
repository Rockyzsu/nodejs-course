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


const path = 'test_data.txt'

readFilePromise(path).then((data) => {
    const js = JSON.parse(data)
    console.log(js?.name)
}, (error) => {
    console.log('error - error');
    console.log(error)
    throw Error('my eror')
}).catch((error) => {
    console.log('catch')
    console.log(error)
})
