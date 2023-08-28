const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});