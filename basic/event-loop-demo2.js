setTimeout(()=>{console.log('timeout')},1)

setImmediate(()=>{console.log('immediate')})

const start = Date.now()
while(Date.now()-start<10);
