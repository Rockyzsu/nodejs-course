var person = {
    name: 'ken',
    age: 10,
    greet: function() {
        console.log(`Hello ${this.name}, i am ${this.age} years old`)
    }

}

console.log(person.name)
person.greet()


function thisFunc(){return this}

var testObj  = {
  func:thisFunc
}

console.log(testObj.func())
