Aim: To study event handling in Node.js and demonstrate it using event module.

var fs = require('fs');

var rs = fs.createReadStream('the_one.txt');

rs.on('open', function() {

    console.log('The file is open');

})
