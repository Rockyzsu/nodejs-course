const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const requestOrigin = `${req.protocol}://${req.get('host')}`;
  res.send(`The request origin is: ${requestOrigin}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});