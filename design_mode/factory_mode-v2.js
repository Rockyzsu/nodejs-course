var print = console.log
function BasicServer() {
    this.decorator_list = []
    this.decorators = {}
}
BasicServer.prototype.init = function() {
    for (var i = 0; i < this.decorator_list.length; i++) {
        var func = this.decorator_list[i]
        this.decorators[func].init(i)
    }
}

BasicServer.prototype.decorated = function(i) {
    this.decorator_list.push(i)
}

//BasicServer.prototype.decorators = {}

BasicServer.prototype.decorators['nodeServer'] = {
    init: function(i) {
        print('init node Server pid: ' + i);
    }
}


BasicServer.prototype.decorators.phpServer = {
    init: function(i) {
        print('init php Server');
        print(i);
    }
}

BasicServer.prototype.decorators.reverseProxy = {
    init: function(i) {
        print('init reverse Proxy')
        print(i)
    }
}

BasicServer.prototype.decorators.updatePort = {
    init: function(i) {
        print('update port')
        print(i)
    }
}

BasicServer.prototype.decorators.updateIP = {
    init: function(i) {
        print('update IP')
        print(i)
    }
}

var nodejs = new BasicServer()
nodejs.decorated('nodeServer')
nodejs.decorated('updatePort')
nodejs.decorated('updateIP')
nodejs.init()

/*
var php = new BasicServer()
php.decorated('phpServer')
php.decorated('updatePort')
php.decorated('updateIP')
php.init()
*/
