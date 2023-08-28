const express = require('express')
const app = express()
const port = 7000

app.use(express.json()); // 允许处理json
app.set('views','views')
app.set('view engine','hbs')
app.get('/', (req, res) => {
    res.send('Hello World!')
    })

app.get('/',(req,res)=>{
    res.send("OK")
})

app.get('/info',(req,res)=>{
res.render('index');
})


app.get('/contact',(req,res)=>{
    res.render('contact')
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