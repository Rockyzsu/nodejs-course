function delay(ms){

  console.log('delay func')
return new Promise((resolve,reject)=>{
setTimeout(()=>{console.log('in return promise')},5000);
resolve(ms);
})

}


const result = delay(10)
console.log(typeof result)
console.log('end')
result.then(arg=>console.log('empty '+arg+ " empty"))
