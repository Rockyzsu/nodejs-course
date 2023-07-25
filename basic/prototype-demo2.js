var print = console.log

function Player() {
    //private member
    var name = "Austin"
    var available = true
    var playerAge = 18
    var retirementAge = 50

    function isAvailable() {
        return available && (playerAge < retirementAge)
    }



    //public
    this.age = 18
    this.isAvailableV2 = function() {

        return available && (this.age < retirementAge)
    }

    this.publicName = function() {
        return name
    }
}

//public property , function
Player.prototype.date = new Date()
Player.prototype.getDate = function() {
    return this.date
}

Player.prototype.sportType = 'NBA'
Player.prototype.changeType = function(t) {
    this.sportType = t
}
//static property
Player.version = '1.0'


var player = new Player()
//print(player.name) wrong, it can't access private member outside the obj
print(player.age) // it need new Player(), it will error if no new Player, just a function

//print(player.isAvailable()) // it wrongs, it can't access private function outside the obj
print(player.isAvailableV2())

player.age = 80

print(player.isAvailableV2())


print(player.getDate())
print(Player.version)
print(player.version) // wrong, undefined

print(player.sportType)


var girlplayer = new Player()

girlplayer.sortType = "WWE"
print('=============')
print(player.sportType)
print(girlplayer.sportType)
girlplayer.changeType('WWE')
print('=========')

print(player.sportType)
print(girlplayer.sportType)

print(player.publicName())
