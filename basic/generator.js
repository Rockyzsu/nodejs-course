function* gen1(){
return "First generator"
}

let generator = gen1()
let generator2 = gen1()
console.log(generator)

console.log(generator.next())
console.log(generator.next())
let g2= generator2.next()
console.log(g2.value,g2.done)
console.log(generator2.next().done)


function * gen3(){
yield 1;
yield 2;
yield 3;
yield 4;
yield 5;
yield 6;
console.log("done")
}

let g3 = gen3()
let g3_ = gen3()
for(let i of g3){
console.log(i)
}

//get input
function* gen4(){
first = yield
second= yield
third= yield
console.log(first+second+third)
}

let g4 = gen4()
g4.next()
g4.next("hello ")
g4.next("world ")
g4.next("?")


