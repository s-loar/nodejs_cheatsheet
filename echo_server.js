// this echos back what is passed to it
// example: curl -d 'hello' http://localhost:8080

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	request.on('data', function(chunk) {
		response.write(chunk);
		console.log(chunk);
	});

	request.on('end', function() {
		response.end();
		console.log('Done.');
	});
	
}).listen(8080);

console.log('Listening on port 8080...');
