// Upload a file
// example: curl --upload-file readme.md http://localhost:8080
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	var newFile = fs.createWriteStream("readme_copy.md");
	request.pipe(newFile);

	request.on('end', function() {
		response.end('uploaded!');
	});

}).listen(8080);

console.log('Listening on port 8080...');
