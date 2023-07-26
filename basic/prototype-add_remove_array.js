Array.prototype.disp = function() {
    console.log(this);
}


var arr = new Array(1, 2, 3, 4, 5)
arr.disp()
Array.prototype.remove = function(item) {
    var index = this.indexOf(item)
    if (index !== -1) {
        this.splice(index, 1)
    }
}


arr.remove(3)
arr.disp()
