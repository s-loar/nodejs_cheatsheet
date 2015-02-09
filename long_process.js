var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Long process started.");
	
	setTimeout(function(){
		response.write("Long process is done.");
		response.end();
		console.log('Long Process Ended.');
	}, 5000);

}).listen(8080);

console.log('Listening on port 8080...');
