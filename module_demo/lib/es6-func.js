const forEach = (arr, func) => {
    for (let i in arr) {
        func(i)
    }

}


const tellFunc = (arg) => {

    let argtype = typeof arg
    if (argtype == 'function') {
        arg()
    } else {
        console.log(argtype)
    }
}

const times = (times, func) => {
    for (let i = 0; i < times; i++) {
        func()

    }

}

const every = (argslist, func) => {
    let result = true
    for (var i in argslist) {
        result = result && func(argslist[i])
    }
    return result
}

const some = (argslist, func) => {
    let result = false
    for (var i in argslist) {
        result = result || func(argslist[i])
    }
    return result
}
//tellFunc(newFunc)
export {
    forEach,
    tellFunc,
    times,
    every,
    some
}
