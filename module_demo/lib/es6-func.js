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


const memoried = (fn) => {
    let result = {}
    return (arg) => {
        if (result[arg]) {
            return result[arg]
        } else {
            result[arg] = fn(arg)
            return result[arg]
        }
    }
}

const map = (arr, fn) => {
    let result = []
    for (let item of arr) {
        console.log(item)
        result.push(fn(item))
    }
    return result
}



const filter = (arr, fn) => {
    let result = []
    for (let v of arr) {

        const tmp_v = fn(v)
        if (tmp_v) {
            result.push(v)
        }
    }
    return result
}

function Container(value) {
    this.value = value
}

Container.of = function(value) {
    return new Container(value)
}

Container.prototype.map = function(fn) {
    return new Container.of(fn(this.value))

}


export {
    forEach,
    tellFunc,
    times,
    every,
    some,
    memoried,
    map,
    filter,
    Container
}
