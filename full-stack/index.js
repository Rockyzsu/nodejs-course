const express =require('express')
const app = express()

app.get('/',(req,res)=>{
  console.log('calling')
  res.send('hello world')

})

app.listen(7000,()=>console.log("start..."))
  