Aim : Implement http module and implement Node.js as a web server.


var http = require('http');

http.createServer(function(req, res) {

    res.writeHead (200, {'Content-Type': 'text/html'});

    res.write('<i>Practical Number 3</i><br> Aim: Implement HTTP module and implement Node js as a web server.");

    res.write('<span style="font-weight:bold;color:purple"> <br>Welcome Everyone to this Exiciting Journey of Node Js<

    res.end();

}).listen(8080);

cosnsole.log("Server running at http://localhost:8080/")
