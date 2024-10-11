const fs = require('fs')

const zmq = require('zeromq')

const filename = 'target.txt'

const publisher = zmq.socket('pub')

fs.watch(filename, () => {
    console.log('file change, publish -- >')
    publisher.send(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
    }))
})


publisher.bind('tcp://*:6000',err=>{
if(err) throw err;
  console.log("Listening zmq sub")
})
