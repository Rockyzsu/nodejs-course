var person = {
    firstname: "",
    lastname: "",
    get fullname() {
        return this.firstname +' '+ this.lastname
    },
    set fullname(_name) {
        var tmp = _name.split(' ')
        this.firstname = tmp[0]
        this.lastname = tmp[1]
    }
}

person.fullname="Alex Hou"
console.log(person.fullname)
person.firstname='Li'
console.log(person.fullname)
