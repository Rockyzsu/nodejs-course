async function throwError() {
    throw Error('oh my god')
}

(async()=>{
try {
    await throwError()
} catch (e) {
  console.log('hit')
  console.log(e)
}})()
