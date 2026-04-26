Aim: To Study & Implement the Formidable module of Node.js to upload the file on the server.

var http require('http');
var formidable require('formidable);

http.createServer(function (req, res)(

if (req.url == '/fileupload') {

var form new formidable. IncomingForm();

form.parse(req, function (err, fields, files)

{res.write('File uploaded');

res.end();

});

} else {

res.writeHead(208, ('Content-Type': 'text/html'));

res.write('<form action="fileupload" method="post" enctype="multipart/form-data">");

res.write("Upload our file Here');

res.write('<input type="file" name="filetoupload"><br>');

res.write('<br>');

res.write('Submit the File.');

res.write('<input type="submit">');

res.write('</form>');

return res.end();

}).listen(8080);

console.log('Server running at http://localhost:8080/');
