var array = [4000, 3000, 2000, 1000]
var setTimeoutPromise = require('util').promisify(setTimeout);
async function loop_forEach() {
    console.log(new Date())
    for (let item of array) {
        //console.log(item)
        let data = await setTimeoutPromise(item, item)
        console.log(data)
    }
    console.log(new Date())
}


loop_forEach()
