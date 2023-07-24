function privateTest() {
    var points = 0;

    this.getPoint = function() {
        return points;
    }

    this.setPoint = function() {
        points++;
    }
}


var private = new privateTest() // must define like this;

//console.log(private.points) this will get error
console.log(private.getPoint())
for (var i = 1; i < 10; i++) {
    private.setPoint()
}
console.log(private.getPoint())
