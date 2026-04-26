Aim: To study the URL module of the node.js and write a program that opens the requested file 
and returns the content of the file to the client.If anything goes wrong throw a 404 error. 

var http require('http');
var url require('url');
var fs require('fs');

http.createServer (function(req, res) {

  var as = url.parse(req.url, true);
  var fN = "." + as.pathname;

  fs.readFile(fN, function(err, data) {

    if (err) {

      res.writeHead(404, ('Content-Type":"text/html"});

      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type": "text/html"));

    res.write(data);

    return res.end();

  });

)).listen(8080);

console.log('Server running at http://localhost:8080/");
