var _ = require('underscore')

var testObj = {
    'age': 18,
    'chinese-score': 99,
    'name': 'LiMing'
}

console.log(_.keys(testObj))

var age = _.pick(testObj,'age')
console.log(typeof age)
