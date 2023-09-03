const util = require('util')

function fetchData(data, callback) {
    console.log('start fetch data', data)
    setTimeout(callback, 2000);
    console.log('end of fetchData');
}

const sayhi = function(){
    console.log("Hello");
}


// fetchData('dog',sayhi);

//[rocky] 同等效果
const new_promise = util.promisify(fetchData)
new_promise('dog').then(sayhi);

