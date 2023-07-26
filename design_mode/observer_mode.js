function Service() {

    this.observer_list = []
    this.add_observer = function(user) {
        this.observer_list.push(user)

    }


    this.remove_observer = function(user) {
        len = this.observer_list.length;
        for (var i = 0; i < len; i++) {
            if (this.observer_list[i] == user) {
                this.observer_list.splice(i,1)
                break
            }
        }
    }

    this.notify = function(msg) {
        for (var i = 0; i < this.observer_list.length; i++) {
            this.observer_list[i].update(msg)
        }
    }
}


var object1 = {
    'name': 'object 1',
    'update': function(msg) {
        console.log(`${this.name} has receive ${msg}`)
    }

}

var object2 = {
    'name': 'object 2',
    'update': function(msg) {
        console.log(`${this.name} has receive ${msg}`)
    }

}

function TweetMonitor() {

    var srv = new Service()
    srv.add_observer(object1)
    srv.add_observer(object2)
    var msg = 'History  has change'
    srv.notify(msg)

    srv.remove_observer(object1)
    msg = 'task has been done'
    srv.notify(msg)
}


TweetMonitor()
