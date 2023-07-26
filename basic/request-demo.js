var request = require('request');
var url = 'http://30daydo.com'
var status = undefined
request(url, function(err, resp, body) {
    if (!err) {
        console.log(resp.statusCode)
    }
})

console.log(status)
