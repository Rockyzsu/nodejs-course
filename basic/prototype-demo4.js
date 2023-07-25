function Player() {
    isAvailables = false
}

Player.prototype.isAvailable = function() {
    return this.isAvailables;
}

var play = new Player()
console.log(play.isAvailable())
console.log(isAvailables)
