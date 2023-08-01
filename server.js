const http = require('http');



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is a simple Node.js server!\n');
});

server.listen( () => {
  console.log(`Server running `);
});
