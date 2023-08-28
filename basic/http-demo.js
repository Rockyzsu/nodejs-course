const http = require('http');


const server = http.createServer((req, res) => {
    // 设置响应头
    console.log('come in'); // 为什么出现两次
    res.setHeader('Content-Type', 'text/plain');
  
    // 设置响应内容
    res.write('Hello, world!');
  
    // 结束响应
    res.end();
  });


const port = 3000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});