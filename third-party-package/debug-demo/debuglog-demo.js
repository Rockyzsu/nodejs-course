const util = require('util')
const debuglog = util.debuglog('foo')


debuglog("hello world foo [%d]",123)
console.log('end');


# export NODE_DEBUG=foo
# node debuglog-demo.js
