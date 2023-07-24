//import each from 'underscore'
var _ = require('underscore');

function print(arg) {
    console.log(arg);
}

_.each([1, 2, 3, 4, 5], print)
var my_arr = _.range(10);
console.log(my_arr);
_.each(my_arr, print)

console.log(_.filter(my_arr, function(i) {
    return i % 2 == 0
}))
