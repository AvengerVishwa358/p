Aim :  Implement Node.js file system module to read, write, create, update, delete and rename 
the file.

// Updating a file

  var fs = require('fs')
fs.appendFile('myfile.txt','This is the new content in newly created file, Helli Node JS', function(err){
  if(err) throw err;
  console.log('Saved!');
});

// Creating a file
fs.writeFile('mynewfile.txt', "Hello, this is a file created using Node.js!', (err) => {
             if (err) {
                  console.error('Error creating file : ',err);
            }
            else{
              console.log('File created successfully!0');
            }
});

// Reading a file 


var http require('http');

var fs = require('fs');

http.createServer(function(rea, res){

    fs.readFile('file_2.html', function(err, data) {

    res.writeHead (200, ('Content-Type': 'text/html']);

    res.write(data);

    return res.end();

  });

)).listen(8080);

console.log('server running at http://localhost:8080/');

// Renaming a File

  fs require('fs');

fs.rename('mynewfile.txt', 'RE1.txt', function(err){

  if (err) throw err;

  console.log('Renamed!");

));

// Deleting a File

var fs = require('fs')
fs.unlink('RE1.txt', function(err){
      if (err) throw err;
      console.log('File Deleted!');
});

          
