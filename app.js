const http = require('http');

const server = http.createServer((req, res) => {
  //req
  console.log(req.url, req.method, req.headers);

  //res
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My Fist Page</title></head>');
  res.write('<body><h1>Hello from Node Js Sever</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(5000);
