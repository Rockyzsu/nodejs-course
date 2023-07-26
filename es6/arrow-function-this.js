function CustomStr() {
    this.str = 'origin master'
}

CustomStr.prototype.add = function(s) {
    return function(s) {
        return this.str + s
    }
}


var cus = new CustomStr()
console.log(cus.add('hello world')())
