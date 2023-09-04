const express = require('express')
const multipart = require('connect-multiparty')


const app = express()
app.use(express.static('public'));


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
//   });

app.post('/upload', multipart(),(req, res, next) => {
    console.log('call');
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    res.send('OK');

})

app.listen(7000, () => {
    console.log('start app')
})