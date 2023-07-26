function Player() {
    for (var i = 0; i < 10; i++) {
        this.constructor.num++;
    }
}

Player.num = 0

var play = new Player()

console.log(Player.num)
