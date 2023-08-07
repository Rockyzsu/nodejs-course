const name = "joe";
try {
    name = 'lee' //eror
    console.log(name) //error
} catch (e) {
    console.log(e)
}

console.log('still contine')

const obj = {}
obj.name = 'jack'
console.log(obj)


const obj2 = {}

Object.freeze(obj2)

// no error, but obj2 will not change
try {
    obj2.age = 12
    console.log(obj2)
} catch (e) {
    console.log(e)
}
