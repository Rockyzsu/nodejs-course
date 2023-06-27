let p = Promise((resolve,reject)=>{
setTimeout(())
}
)

p.then(
res=>{console.log('callback passed')},
error=>{console.log('callback failed')}
)
