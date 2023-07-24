var global_var = 10

function scopeChange() {
    global_var = 20;
    console.log(global_var);
}

console.log(global_var);
scopeChange()
console.log(global_var);
console.log('==========')

a = 1
var a
console.log(a)

foo();

function foo() {
    console.log(x);
    var x = 1;
}


