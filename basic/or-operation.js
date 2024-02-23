var a = ''
if (a) {
    console.log('inside if')
}

function writeState(value) {
    console.log(value)
}

var b = 'good'
writeState(a || b)
