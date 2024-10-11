const promise = new Promise((resolve, reject) => {
    console.log('start')
    // resolve('done')
    resolve('hk')
    //reject('failed')
})

//console.log(status.catch((error)=>{console.log(error)}))
promise.then((data) => {
    console.log('pass')
    console.log('data',data)
}, (data) => {
    console.log('failed')
    console.log(data)
  return Promise.reject('my failed')
}).then((data) => {
  console.log('data 2',data)
    console.log('passed 123')
}, (data) => {
  console.log(data)
  console.log('failed 123')
}).catch((error) => {
    console.log(error)
})
//console.log(status)
