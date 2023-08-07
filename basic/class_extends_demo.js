const print = console.log
class Person {
    constructor(name, sex, age) {
        this.name = name
        this.sex = sex
        this.age = age
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }

    increaseAge() {
        this.age++
    }
}


class NBAPlayer extends Person {
    constructor(name, sex, age, team) {
        super(name, sex, age)
        this.team = team
    }

    getTeam() {
        return this.team
    }
    changeTeam(team) {
        this.team = team
    }
}





player = new NBAPlayer('Jack', 'M', 10, 'Lakers')
print(player.getName())
print(player.getAge())
for (let i = 0; i < 10; i++) {
    player.increaseAge()
}
print(player.getAge())
print(player.getTeam())
player.changeTeam('Celltic')
print(player.getTeam())
