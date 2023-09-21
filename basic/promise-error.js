Promise.resolve(1)
.then(()=>{console.log('1')})
.then(()=>{console.log('2')})
.then(()=>{console.log('3')})
.then(()=>{return Promise.reject('4')})
.then(()=>{console.log('5')})
.then(null,(err)=>{console.log('hit error'),console.log(err)}) // 这样这里, then的入参数是这样的 the(resolve, reject){}  放入是2个函数,而不是一个


