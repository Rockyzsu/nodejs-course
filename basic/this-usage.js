var person = {
    name: 'ken',
    age: 10,
    greet: function() {
        console.log(`Hello ${this.name}, i am ${this.age} years old`)
    }

}

console.log(person.name)
person.greet()


function thisFunc() {
    return this
}

var testObj = {
    func: thisFunc
}

console.log(testObj.func())

function globalAlias() {
    return this;
}

console.log(globalAlias())


var f = {
    name: 'fork',
    func: function() {
        return this.name
    }
    func1: function() {
        return this
    }
}
console.log(f.func())
