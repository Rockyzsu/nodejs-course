function Player() {}

var crazyBoy = Player();

console.log(crazyBoy); //undefined

Player.prototype.getName = function(){return "Uncle King"}


var crazyGirl = new Player();


console.log(crazyGirl); //undefined
console.log(crazyGirl.getName())



