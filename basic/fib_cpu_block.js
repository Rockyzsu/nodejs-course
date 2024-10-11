function fib(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
let count = 0;
console.log(new Date())
// let result = fib(45)
setInterval(() => {
    if (count == 3) {
        let result = fib(45)
        console.log(result)
    }
    count += 1
    console.log(count)
}, 1000)
//console.log(result)
console.log(new Date())
