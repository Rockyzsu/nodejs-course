var Person = {
    name: 'hello',
    setName: function(name) {
        this.name = name
    },
    getName:function(){return this.name}
}


var student = Object.create(Person)
student.setName('world')
console.log(student.getName())

