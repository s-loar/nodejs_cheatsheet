// a simple HTTP server that responds with 'Hello World' to all requests
var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200); // set the status
	response.write("Hello World!"); // write the request body
	response.end(); // close the connection
}).listen(8080); // chain to listen on port 8080

console.log('Listening on port 8080...');
