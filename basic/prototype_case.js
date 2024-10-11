function f() {
    this.a = 1
    this.b = 2
    this.name = null;
    setName =  function() {
        this.name = 'hello'
    }
    return this.a + this.b
}

let o = new f()
console.log(o)


f.prototype.b = 3;
f.prototype.d = 4;
console.log(o) // not effect ， no add b，d

f.prototype.print = function() {
    console.log(this.a);
    console.log(this.d)
}
console.log(o.__proto__)

o.print()

let f1 = Object.create(f);
console.log(f1.a)
f1.setName()
