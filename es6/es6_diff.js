function sumES5(a, b) {
    a = a || 0;
    b = b || 0;
    return a + b

}


function sum(a = 1, b = 2) {
    return a + b
}

console.log(sum(1, 8))
console.log(sum())
console.log(sumES5())
