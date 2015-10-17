var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World Go to prod env");
  response.end();
}).listen(process.env.PORT || 8888);
