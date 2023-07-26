function CustomStr() {
    this.str = 'origin master'
}

CustomStr.prototype.add = function(s) {
    return s => this.str + s
}


var cus = new CustomStr()
console.log(cus.add(' hello world ')())
