var print = console.log

function BasicServer() {
    this.decorator_list = [];
    //this.decorators = {}
    //this.decorated = function(item) {
    //this.decorator_list.push(item)
    //}
}

BasicServer.decorators = {};
BasicServer.prototype.init = function() {

    print('start to init')
    for (var i = 0; i < this.decorator_list.length; i++) {
        var func = this.decorator_list[i]
        print(func)
        BasicServer.decorators[func].init(i)
    }
}



//BasicServer.decorator_list = []
BasicServer.prototype.decorated = function(i) {
    this.decorator_list.push(i)
}

BasicServer.decorators.nodeServer = {
    init: function(i) {
        print('init node Server')
        print(i)
    }
}


BasicServer.decorators.phpServer = {
    init: function(i) {
        print('init php Server');
        print(i)
    }
}
BasicServer.decorators.reverseProxy = {
    init: function(i) {
        print('init reverse Proxy')
        print(i)
    }
}
BasicServer.decorators.updatePort = {
    init: function(i) {
        print('update port')
        print(i)
    }
}
BasicServer.decorators.updateIP = {
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
