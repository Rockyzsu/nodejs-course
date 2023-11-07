const task = new Promise((resolve,reject)=>{
    resolve("Hardcode this string")
})

task.then(resp=>console.log(resp))