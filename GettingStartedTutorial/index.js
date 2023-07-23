import express from "express";

const app = express();
app.get('/', (req, res) => {
  console.log('call me');
  console.log(req.headers);
  res.send('Hello, World!');
});


app.get('/ip', function (req, res) {
  console.log('ip');
  var ip = { ip: '8.8.8.8', 'time used': 10 }
  res.json(ip);
});


app.get('/ip', function (req, res) {
  console.log('ip');
  var ip = { ip: '8.8.8.8', 'time used': 10 }
  res.json(ip);
});



const port = 8000
app.listen(port, function () {
  console.log('start listening ' + port + '....');
})