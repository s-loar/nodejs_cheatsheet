// this echos back what is passed to it
// example: curl -d 'hello' http://localhost:8080

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	request.pipe(response);
}).listen(8080);

console.log('Listening on port 8080...');
