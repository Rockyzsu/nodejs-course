var http = require('http');
var urllib = require('url');

var port = 8080;
var data = {'data':'==========world========='};

http.createServer(function(req,res){
    var params = urllib.parse(req.url,true);
    if(params.query.callback){
        console.log(params.query.callback);
        // jsonp
        var str = params.query.callback + '(' + JSON.stringify(data) + ')';
        // var str = data.data;
        console.log(str);
        res.end(str);
    } else {
        console.log('in side')
        res.end("no jsonp");
    }
    
}).listen(port,function(){
    console.log('jsonp server is on');
});