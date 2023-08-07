
exports.loaded = false
const a = require('./b')
module.exports = {
    a,
    loaded: true
}
