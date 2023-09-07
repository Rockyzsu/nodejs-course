let a = 'global a'
let b = 'global b'

function x() {
    console.log(b)
    console.log(a)

    let a = 'local a'

}

x()