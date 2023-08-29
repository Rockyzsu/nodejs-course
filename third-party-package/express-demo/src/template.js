const express = require('express')
const app = express()
const port = 7000

app.use(express.json()); // 允许处理json



app.get('/',(req,res)=>{
    res.send("OK")
})

app.post('/api/register',async (req, res) => {
    console.log(req.body);
    const body = req.body
    console.log(body.username)
    console.log(body.password)
    res.send('register')
    } )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })