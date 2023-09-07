const express = require('express')
const app = express()
const port = 7000

// app.use(express.json()); // 允许处理json

app.get('/',(req,res)=>{
    console.log('start');
    res.json({status:"OK"})
    console.log('end');

    // res.json({status:"Not OK"})
    // 报错：Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })