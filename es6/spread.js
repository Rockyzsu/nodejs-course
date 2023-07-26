'use stirct';
let a = [1, 2, 3]
console.log(a)


let b = [1, 2, ...a]
console.log(b)


function rest_(...arg) {
    console.log(arg)
    for (let i in arg) {
        console.log('i ' + arg[i])
    }
}

rest_(9, 1, 2, 3, 4, 5)


function fn() {
    return {
        a: 'a',
        b: 'b',
        c: 'c'
    }
}

var {
    a: x,
    b: y,
    c: z
} = fn();
//console.log(a);
//console.log(b);
//console.log(c);
console.log(x);
console.log(y);
console.log(z);
console.log(x, x, y);
var firstname = 'Hong',
    lastname = "Kong"
var new_es6_obj = {
    firstname,
    lastname,
    getName() {
        return this.firstname
    }


}

console.log(new_es6_obj.firstname)
console.log(new_es6_obj.getName())
