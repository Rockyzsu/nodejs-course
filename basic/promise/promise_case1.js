const status = new Promise((resolve, reject) => {
    console.log('start')
   // resolve('done')
    reject('reject')
})

//console.log(status.catch((error)=>{console.log(error)}))
status.catch((error)=>{console.log(error)})
console.log(status)
