'use strict';
var a = 1;


function testFunc() {
    var a = 2;
    console.log('inside ' + a);

}
testFunc()
console.log('outside ' + a);

testFunc()
testFunc()
testFunc()
testFunc()
testFunc()
console.log(a)


//es6
var c = 1; {
    let c = 9;
    console.log('c ' + c);
}
console.log('c ' + c)

function foo() {
    console.log(dog);
    var dog = 10;
}

foo()


