function foo(){console.log('foo')}

setTimeout(()=>{
    foo();
})
console.log('bar')