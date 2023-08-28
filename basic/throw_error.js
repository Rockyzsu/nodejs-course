function divide(a, b) {
    if (b == 0) {
        throw new Error('can not divide by zero!')
    }

    return a / b;
}

a = 10
b = 0
try {
    result = divide(a, b)
    console.log(result)
} catch (e) {
    console.log(e)

}