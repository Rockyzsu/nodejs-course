//let password="good"
//let prom = new Promise((resolve,reject)=>{
//if(password==="good"){
//  return resolve("Login")
//}else{
//  reject()
//}
//}
//)


//prom.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})


let promise = Promise.resolve('message')
console.log(promise);

promise.then((result)=>{
console.log('start '+result)
})

let promise2 = Promise.reject('failed')
promise2.then((arg)=>{console.log("then "+arg)}).catch((err)=>{console.log('catch '+err)})


