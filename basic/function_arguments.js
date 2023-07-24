var sum = function() {
    var i, total = 0;
    for (i = 0; i < arguments.length; i += 1) {
        total += arguments[i]
    }
    return total
}
var total = sum(1, 2, 3, 4, 5)
console.log(total)


function displayArgument() {
    //no argument but dipslay it with argument

    console.log(arguments)
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }


}

displayArgument(1,2,3)
