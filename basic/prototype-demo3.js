var print = console.log

function Person() {}

Person.prototype.cry = function() {
    print("Crying")
}

function Child() {}

Child.prototype = new Person()

var child = new Child()

print(child instanceof Child)
print(child instanceof Person)

child.cry()
