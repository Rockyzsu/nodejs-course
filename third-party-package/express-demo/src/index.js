const express = require('express')
const app = express()

app.use(express.json()); // 允许处理json

app.get('/', (req, res) => {
    res.send('Hello World!')
    })


app.post('/api/register',async (req, res) => {
    console.log(req.body);
    const body = req.body
    console.log(body.username)
    console.log(body.password)
    res.send('register')
    // const {username,password} = req.body;
    // res.send(`Hello ${username}! You are ${password} years old.`);
    } )

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    })