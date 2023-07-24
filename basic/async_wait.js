async function demo() {
    console.log('in demo ')
    let a = await Promise.resolve(12354);
    console.log(a);
}

demo()
