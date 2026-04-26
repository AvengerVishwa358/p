Aim : Exploaration of the node.js and its installation to print hello world.

const { createServer } = require('node:http');

// Hype

const hostname 127.0.9.1';

const port = 3000;

const server = createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/plain');

res.end 'Hello World');

});

server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);

console.log(`This is the first Output: ${hostname}`);


});
