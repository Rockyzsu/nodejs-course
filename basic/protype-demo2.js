function Player() {
    this.getName = function() {
        return 'Unty Wang'
    }
}


Player.prototype.getName = function() {
    return "Uncle King"
}

var crazyGirl = new Player();

console.log(crazyGirl.getName()) // obj property's priority is higher than prototype



