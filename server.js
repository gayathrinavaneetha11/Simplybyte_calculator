const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 7000;
const HOST = '0.0.0.0'; // Tells the server to accept traffic from outside the container

http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'calculator.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
}).listen(PORT, HOST, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
