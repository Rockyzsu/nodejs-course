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


person = new Person('Jack', 'M', 10)
print(person.getName())
print(person.getAge())
for (let i = 0; i < 10; i++) {
    person.increaseAge()
}
print(person.getAge())
