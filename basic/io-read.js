var fs = require('fs');
console.log(1);
fs.readFile('./read_json_data.txt','utf-8', function(err, data) {
    if (!err) {
        console.log('i have read data')
        console.log(data)
    }
})
console.log(2);
